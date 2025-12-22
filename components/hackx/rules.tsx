import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react"

const rules = [
  { text: "Teams must consist of 2-4 members", type: "info" },
  { text: "Projects must be built entirely during the hackathon", type: "info" },
  { text: "All materials must comply with Intellectual Property Laws and be original", type: "warning" },
  { text: "Pre-existing libraries, APIs, and frameworks allowed; pre-built projects are NOT", type: "warning" },
  { text: "Refundable registration fee of ₹600 per team required", type: "info" },
  { text: "Bring your own laptops, chargers, and essential devices", type: "info" },
  { text: "Judging based on creativity, technical implementation, practicality, and presentation", type: "info" },
  { text: "All submissions must include project code, demo, and documentation", type: "info" },
  { text: "Maintain a respectful and collaborative environment", type: "info" },
  { text: "Harassment or inappropriate behavior will result in disqualification", type: "danger" },
  { text: "Equal contribution from all team members is mandatory", type: "info" },
  {
    text: "Team presence required for kickoff, check-ins, mentorship rounds, and final presentations",
    type: "warning",
  },
  { text: "Organizers reserve the right to disqualify any team for rule violations", type: "danger" },
  { text: "Final decision by judges will be binding", type: "info" },
]

const typeIcons = {
  info: CheckCircle2,
  warning: AlertTriangle,
  danger: XCircle,
}

const typeStyles = {
  info: "text-foreground",
  warning: "text-yellow-500",
  danger: "text-primary",
}

export function Rules() {
  return (
    <section id="rules" className="relative py-16 sm:py-24 md:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-xs sm:text-sm font-bold text-primary tracking-widest uppercase mb-3 sm:mb-4">
            // Race Regulations
          </span>
          <h2 className="font-[var(--font-bebas-neue)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-4 sm:mb-6 px-2 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] tracking-tight">
            RULES & <span className="text-primary drop-shadow-[0_0_20px_rgba(225,6,0,0.6)]">REGULATIONS</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto italic px-4">
            &quot;Break the rules of creativity, not the rules of the hackathon!&quot;
          </p>
        </div>

        {/* Rules grid */}
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {rules.map((rule, index) => {
            const Icon = typeIcons[rule.type as keyof typeof typeIcons]
            return (
              <div
                key={index}
                className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
              >
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 ${typeStyles[rule.type as keyof typeof typeStyles]}`} />
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{rule.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
