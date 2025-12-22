import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "StreamLine has transformed how our team works. We've cut our deployment time in half and eliminated countless manual tasks.",
    author: "Sarah Chen",
    role: "Engineering Lead",
    company: "TechFlow",
    avatar: "/professional-woman-portrait.png",
  },
  {
    quote: "The automation capabilities are incredible. What used to take hours now happens automatically in minutes.",
    author: "Marcus Johnson",
    role: "Operations Director",
    company: "DataSync",
    avatar: "/professional-man-portrait.png",
  },
  {
    quote:
      "Finally, a tool that actually delivers on its promises. The ROI was visible within the first month of implementation.",
    author: "Emily Rodriguez",
    role: "VP of Product",
    company: "CloudBase",
    avatar: "/professional-woman-executive.png",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Testimonials</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Trusted by thousands of teams
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col rounded-2xl border border-border bg-card p-8">
              <blockquote className="flex-1">
                <p className="text-lg text-foreground leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                  <AvatarFallback className="bg-accent/10 text-accent">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
