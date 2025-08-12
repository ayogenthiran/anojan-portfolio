import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost } from './data'

export function getBlogPosts(): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), 'posts')
  
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '')

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Combine the data with the id
      const originalDate = matterResult.data.date
      const formattedDate = originalDate ? new Date(originalDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) : 'No date'
      
      return {
        id,
        title: matterResult.data.title,
        date: formattedDate,
        originalDate: originalDate, // Keep original for sorting
        excerpt: matterResult.data.excerpt,
        content: matterResult.content,
        readingTime: matterResult.data.readingTime,
        icon: matterResult.data.icon || 'Brain',
      }
    })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    const dateA = new Date(a.originalDate || 0)
    const dateB = new Date(b.originalDate || 0)
    
    if (dateA < dateB) {
      return 1
    } else {
      return -1
    }
  })
}

export function getBlogPostById(id: string): BlogPost | null {
  const posts = getBlogPosts()
  return posts.find(post => post.id === id) || null
}
