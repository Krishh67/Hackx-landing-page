import { Handshake, Star } from "lucide-react"

const sponsorTiers = [
  {
    title: "Title Sponsor",
    sponsors: [{ name: "Title Sponsor" }],
    size: "large",
  },
  {
    title: "Powered By",
    sponsors: [{ name: "Powered By Sponsor" }],
    size: "large",
  },
  {
    title: "Co-Powered By",
    sponsors: [{ name: "Drilldown" }, { name: "Ettara" }, { name: "Learn" }],
    size: "medium",
  },
  {
    title: "Associate Sponsors",
    sponsors: [
      { name: "Sponsor 1" },
      { name: "Sponsor 2" },
      { name: "Sponsor 3" },
      { name: "Sponsor 4" },
      { name: "Sponsor 5" },
      { name: "Sponsor 6" },
      { name: "Sponsor 7" },
      { name: "Sponsor 8" },
    ],
    size: "small",
  },
]

const sizeStyles = {
  large: "h-28 sm:h-36 text-xl sm:text-2xl",
  medium: "h-24 sm:h-28 text-lg sm:text-xl",
  small: "h-20 sm:h-24 text-sm sm:text-base",
}

export function Sponsors() {
  return (
    <section id="sponsors" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute inset-0 racing-glow-top opacity-70" />
      <div className="absolute inset-0 racing-glow-bottom opacity-50" />

      <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-primary/20 via-transparent to-transparent rotate-12 blur-sm" />
      <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-primary/20 via-transparent to-transparent -rotate-12 blur-sm" />

      {/* Racing stripe divider */}
      <div className="absolute top-0 left-0 right-0 h-1 kerb-stripes opacity-60 z-[1]" />

      <div className="absolute left-0 top-0 bottom-0 w-2 kerb-stripes opacity-60 z-[1]" />
      <div className="absolute right-0 top-0 bottom-0 w-2 kerb-stripes opacity-60 z-[1]" />

      {/* Added kerb-stripes-alt at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 kerb-stripes-alt z-[1]" />

      <div className="absolute top-20 right-0 w-48 h-48 z-[2] pointer-events-none">
        <div className="absolute inset-0 border-t-2 border-r-2 border-primary/30" />
        <div className="absolute top-4 right-4 w-full h-full border-t border-r border-primary/20" />
      </div>
      <div className="absolute bottom-20 left-0 w-48 h-48 z-[2] pointer-events-none">
        <div className="absolute inset-0 border-b-2 border-l-2 border-primary/30" />
        <div className="absolute bottom-4 left-4 w-full h-full border-b border-l border-primary/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            <Handshake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-bold text-primary tracking-widest uppercase">Our Pit Crew</span>
            <Handshake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
          </div>
          <h2 className="font-[var(--font-bebas-neue)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-4 sm:mb-6 px-2 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] tracking-tight">
            <span className="text-primary drop-shadow-[0_0_20px_rgba(225,6,0,0.6)]">SPONSORS</span> & PARTNERS
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            The incredible teams fueling our race to innovation.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <div key={tierIndex} className="relative">
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-2">
                <div className="h-px flex-1 max-w-16 sm:max-w-32 bg-gradient-to-r from-transparent to-primary/30" />
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-card/50 border border-border rounded-full">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-primary" fill={tierIndex === 0 ? "currentColor" : "none"} />
                  <h3 className="font-[var(--font-bebas-neue)] text-xs sm:text-sm font-normal text-primary tracking-wider uppercase">
                    {tier.title}
                  </h3>
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-primary" fill={tierIndex === 0 ? "currentColor" : "none"} />
                </div>
                <div className="h-px flex-1 max-w-16 sm:max-w-32 bg-gradient-to-l from-transparent to-primary/30" />
              </div>

              <div
                className={`flex flex-wrap justify-center gap-3 sm:gap-4 ${tier.size === "small" ? "max-w-5xl mx-auto" : ""}`}
              >
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <div
                    key={sponsorIndex}
                    className={`group relative flex items-center justify-center bg-card/80 backdrop-blur border border-border rounded-xl px-4 sm:px-6 md:px-8 transition-all duration-300 hover:border-primary/50 hover:bg-card overflow-hidden touch-manipulation ${
                      sizeStyles[tier.size as keyof typeof sizeStyles]
                    } ${tier.size === "large" ? "w-full max-w-md" : tier.size === "medium" ? "w-[calc(50%-0.5rem)] sm:w-44 md:w-52" : "w-[calc(50%-0.5rem)] sm:w-36 md:w-44"}`}
                  >
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute inset-0 racing-glow-top opacity-50" />
                    </div>

                    <span className="relative font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                      {sponsor.name}
                    </span>

                    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary/0 group-hover:border-primary/50 transition-colors rounded-tl" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary/0 group-hover:border-primary/50 transition-colors rounded-br" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center px-4">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-card/50 border border-border rounded-xl">
            <span className="text-sm sm:text-base text-muted-foreground">Want to sponsor HackX 4.0?</span>
            <a href="#contact" className="font-semibold text-primary hover:underline touch-manipulation">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
