import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Cta() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-20 sm:px-12 lg:px-20">
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
              Ready to streamline your workflow?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Join thousands of teams already using StreamLine to automate their work and boost productivity.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 h-12 px-8">
                Get started free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Schedule a demo
              </Button>
            </div>
          </div>
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        </div>
      </div>
    </section>
  )
}
