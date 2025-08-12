import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getBlogPostById } from "@/lib/blog-utils"
import BlogPostPage from "./BlogPostPage"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostById(await params.id)
  
  if (!post) {
    return {
      title: "Blog Post Not Found | Anojan Yogenthiran",
    }
  }

  return {
    title: `${post.title} | Anojan Yogenthiran`,
    description: post.excerpt,
  }
}

export default async function BlogPostPageWrapper({ params }: BlogPostPageProps) {
  const post = getBlogPostById(await params.id)
  
  if (!post) {
    notFound()
  }

  return <BlogPostPage post={post} />
}
