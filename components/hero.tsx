import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
            <span className="flex h-2 w-2 rounded-full bg-accent" />
            Now with AI-powered automation
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            The complete platform to <span className="text-accent">streamline</span> your work
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Your team&apos;s toolkit to stop configuring and start innovating. Automate workflows, collaborate
            seamlessly, and ship products faster than ever.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base">
              Start for free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent">
              <Play className="mr-2 h-4 w-4" />
              Watch demo
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required · Free 14-day trial · Cancel anytime
          </p>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-xl border border-border bg-card p-2 shadow-2xl">
              <div className="rounded-lg bg-secondary/50 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Play className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Product Preview</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-accent/20 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
