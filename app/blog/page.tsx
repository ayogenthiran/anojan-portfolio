import { Brain } from "lucide-react"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container px-4 md:px-6 mx-auto py-20">
        <div className="space-y-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">My Blog</h1>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 p-6 rounded-lg hover:bg-muted/50 transition-colors">
              <Brain className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold leading-tight">
                      Model Context Protocol (MCP): The Universal Adapter for AI Integration
                    </h2>
                    <p className="text-muted-foreground">
                      Discover how Anthropic's Model Context Protocol (MCP) is reshaping AI integration by standardizing
                      connections between models and external tools, APIs, and data.{" "}
                      <span className="text-sm">(8 min read)</span>
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground whitespace-nowrap">May 11, 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
