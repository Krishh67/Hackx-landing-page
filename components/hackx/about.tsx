import { Users, Clock, Trophy, Lightbulb, Zap, Flag } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: Users, value: "200+", label: "Participants" },
  { icon: Clock, value: "24", label: "Hours" },
  { icon: Trophy, value: "₹75K+", label: "Prize Pool" },
  { icon: Lightbulb, value: "7", label: "Problem Tracks" },
]

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image.png"
          alt="F1 Racing Background"
          fill
          className="object-cover object-center sm:opacity-70 opacity-50"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="absolute inset-0 racing-glow-top z-[1]" />
      <div className="absolute inset-0 racing-glow-bottom z-[1]" />
      <div className="absolute inset-0 perspective-grid opacity-30 z-[1]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div
          className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-speed-lines"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-speed-lines"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-speed-lines"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-2 kerb-stripes opacity-60 z-[1]" />
      <div className="absolute right-0 top-0 bottom-0 w-2 kerb-stripes opacity-60 z-[1]" />

      {/* Racing stripe divider */}
      <div className="absolute top-0 left-0 right-0 h-1 racing-gradient z-[1]" />

      <div className="absolute top-20 right-0 w-48 h-48 z-[2] pointer-events-none hidden sm:block">
        <div className="absolute inset-0 border-t-2 border-r-2 border-primary/30" />
        <div className="absolute top-4 right-4 w-full h-full border-t border-r border-primary/20" />
      </div>
      <div className="absolute bottom-20 left-0 w-48 h-48 z-[2] pointer-events-none hidden sm:block">
        <div className="absolute inset-0 border-b-2 border-l-2 border-primary/30" />
        <div className="absolute bottom-4 left-4 w-full h-full border-b border-l border-primary/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            <Flag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-bold text-primary tracking-widest uppercase">About The Race</span>
            <Flag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
          </div>
          <h2 className="font-[var(--font-rajdhani)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 px-2 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            ENTER THE <span className="text-primary animate-pulse-glow drop-shadow-[0_0_20px_rgba(225,6,0,0.6)]">PIT LANE</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
            HackX 3.0 is not just a hackathon—it&apos;s a high-octane innovation race where teams push the limits of
            creativity and technology. Just like F1 teams fine-tune every component for peak performance, you&apos;ll
            optimize your code, design, and strategy to cross the finish line first.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 racing-gradient rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />

              <div className="relative bg-card border border-border group-hover:border-primary/50 rounded-xl p-4 sm:p-6 md:p-8 text-center transition-all duration-300 carbon-fiber overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 racing-gradient rounded-xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                    <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-foreground" />
                  </div>
                  <div className="font-[var(--font-display)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>

                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-1 racing-gradient rotate-45 translate-x-4 -translate-y-2" />
                </div>
                <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-20 h-1 racing-gradient -rotate-45 -translate-x-4 translate-y-2" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 flex justify-center px-4">
          <div className="flex items-center gap-2 sm:gap-4 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-card/50 border border-border rounded-full">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse flex-shrink-0" />
            <span className="text-xs sm:text-sm md:text-base text-muted-foreground">Race to Innovation</span>
            <div className="flex gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-0.5 sm:w-1 h-3 sm:h-4 rounded-full bg-primary"
                  style={{
                    opacity: 0.3 + i * 0.15,
                    animation: `pulse-glow 1s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
