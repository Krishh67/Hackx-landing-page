import { Layers, Workflow, Shield, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Workflow,
    title: "Automated Workflows",
    description:
      "Build complex automation without code. Connect your tools and let StreamLine handle the repetitive work.",
  },
  {
    icon: Layers,
    title: "Seamless Integrations",
    description:
      "Connect with 200+ apps out of the box. From Slack to Salesforce, your tools work together effortlessly.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant with end-to-end encryption. Your data is protected with bank-level security standards.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Get real-time insights into your workflows. Track performance, identify bottlenecks, and optimize continuously.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Features</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Everything you need to move faster
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful features that help teams automate work and focus on what matters most.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
