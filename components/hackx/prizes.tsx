import { Trophy, Medal, Award, Sparkles, Crown } from "lucide-react"

const prizes = [
  {
    place: "1st Runner Up",
    amount: "₹25,000",
    icon: Medal,
    position: "left",
    height: "h-56 sm:h-64 md:h-72 lg:h-92",
    podiumHeight: "h-28 sm:h-32 md:h-40 lg:h-48",
    number: "2",
  },
  {
    place: "Winner",
    amount: "₹35,000",
    icon: Trophy,
    position: "center",
    height: "h-64 sm:h-72 md:h-80 lg:h-98",
    podiumHeight: "h-40 sm:h-44 md:h-52 lg:h-60",
    featured: true,
    number: "1",
  },
  {
    place: "2nd Runner Up",
    amount: "₹15,000",
    icon: Award,
    position: "right",
    height: "h-48 sm:h-56 md:h-64 lg:h-78",
    podiumHeight: "h-24 sm:h-28 md:h-36 lg:h-44",
    number: "3",
  }
]

export function Prizes() {
  return (
    <section id="prizes" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-2 kerb-stripes-alt z-[1]" />

      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute inset-0 racing-glow-top" />

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 checkered-flag" style={{ backgroundSize: "40px 40px" }} />
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-2 kerb-stripes opacity-60 z-[1]" />
      <div className="absolute right-0 top-0 bottom-0 w-2 kerb-stripes opacity-60 z-[1]" />

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
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-primary tracking-widest uppercase">Prize Pool</span>
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary animate-pulse" />
          </div>
          <h2 className="font-[var(--font-bebas-neue)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-4 sm:mb-6 px-2 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] tracking-tight">
            THE <span className="text-primary drop-shadow-[0_0_20px_rgba(225,6,0,0.6)]">PODIUM</span> AWAITS
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Prizes worth ₹75,000+ for the fastest innovators to cross the finish line.
          </p>
        </div>

        <div className="flex items-end justify-center gap-2 sm:gap-3 md:gap-6 max-w-4xl mx-auto mb-6 sm:mb-8 px-2">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`flex-1 max-w-xs ${prize.featured ? "order-2" : index === 0 ? "order-1" : "order-3"}`}
            >
              <div className={`relative ${prize.height} flex flex-col items-center`}>
                {prize.featured && (
                  <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 animate-float">
                    <Crown className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500 drop-shadow-lg" fill="currentColor" />
                  </div>
                )}

                {/* Icon with glow */}
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div
                    className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center ${
                      prize.featured
                        ? "racing-gradient shadow-2xl shadow-primary/50 animate-glow-pulse"
                        : "bg-card border-2 border-border"
                    }`}
                  >
                    {prize.featured && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
                    )}
                    <prize.icon
                      className={`relative w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 ${
                        prize.featured ? "text-primary-foreground" : "text-muted-foreground"
                      }`}
                    />
                  </div>
                </div>

                {/* Amount */}
                <div className="text-center mb-3 sm:mb-4">
                  <span
                    className={`font-[var(--font-bebas-neue)] text-xl sm:text-2xl md:text-4xl font-normal ${
                      prize.featured ? "text-foreground" : "text-foreground/80"
                    } tracking-tight`}
                  >
                    {prize.amount}
                  </span>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-0.5 sm:mt-1">Worth of Prizes</p>
                </div>

                <div
                  className={`w-full ${prize.podiumHeight} rounded-t-xl flex flex-col items-center justify-start pt-3 sm:pt-4 relative overflow-hidden ${
                    prize.featured
                      ? "bg-gradient-to-b from-primary/30 to-primary/10 border-2 border-primary shadow-2xl shadow-primary/30"
                      : "bg-gradient-to-b from-card to-card/50 border border-border"
                  }`}
                >
                  {/* Racing stripes on podium */}
                  <div className="absolute inset-0 opacity-20 carbon-fiber" />

                  {/* Position number */}
                  <span
                    className={`font-[var(--font-bebas-neue)] text-3xl sm:text-4xl md:text-6xl font-normal ${
                      prize.featured ? "text-primary" : "text-muted-foreground/50"
                    } tracking-tight`}
                  >
                    {prize.number}
                  </span>

                  <span
                    className={`font-[var(--font-bebas-neue)] text-[10px] sm:text-xs md:text-sm font-normal mt-0.5 sm:mt-1 ${
                      prize.featured ? "text-primary" : "text-muted-foreground"
                    } tracking-tight`}
                  >
                    {prize.place}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <div className="h-2 sm:h-4 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full" />
          <div className="mt-1.5 sm:mt-2 flex justify-center gap-1 sm:gap-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-1 h-1 sm:w-2 sm:h-2 bg-primary/30 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
