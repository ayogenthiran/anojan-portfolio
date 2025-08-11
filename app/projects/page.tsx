import type { Metadata } from "next"
import ProjectsClientPage from "./ProjectsClientPage"

export const metadata: Metadata = {
  title: "My Projects | Anojan Yogenthiran",
  description: "A showcase of AI/ML projects and engineering solutions by Anojan Yogenthiran.",
}

export default function ProjectsPage() {
  return <ProjectsClientPage />
}
