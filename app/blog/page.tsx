import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "My Blog | Anojan Yogenthiran",
  description: "A collection of articles and insights on AI/ML, technology, and more.",
}

export default function BlogPage() {
  return <BlogClientPage />
}
