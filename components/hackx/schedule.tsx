"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Timer, Coffee, Trophy, Flag, Users, Utensils, Play, Award } from "lucide-react"
import Image from "next/image"

const day1Schedule = [
  { time: "8:30 AM", event: "Reporting", type: "checkpoint", icon: Flag },
  { time: "9:00 AM", event: "Registrations Begin", type: "checkpoint", icon: Users },
  { time: "10:30 AM", event: "Opening Ceremony", type: "highlight", icon: Trophy },
  { time: "12:00 PM", event: "Hackathon Starts", type: "race", icon: Play },
  { time: "5:00 PM", event: "High Tea", type: "break", icon: Coffee },
  { time: "7:00 PM", event: "Mentorship Round I", type: "pitstop", icon: Users },
  { time: "9:00 PM", event: "Dinner", type: "break", icon: Utensils },
]

const day2Schedule = [
  { time: "8:30 AM", event: "Breakfast", type: "break", icon: Coffee },
  { time: "9:00 AM", event: "Mentorship Round II", type: "pitstop", icon: Users },
  { time: "12:00 PM", event: "Hackathon Ends", type: "race", icon: Flag },
  { time: "12:15 PM", event: "Lunch", type: "break", icon: Utensils },
  { time: "1:00 PM", event: "Evaluation Begins", type: "checkpoint", icon: Timer },
  { time: "4:00 PM", event: "Results & Closing Ceremony", type: "highlight", icon: Award },
]

const typeStyles = {
  checkpoint: "border-muted-foreground/50 bg-muted/30",
  highlight: "border-primary bg-primary/20 shadow-lg shadow-primary/20",
  race: "border-primary bg-primary/20",
  break: "border-muted-foreground/30 bg-muted/20",
  pitstop: "border-yellow-500/50 bg-yellow-500/10",
}

const typeDotStyles = {
  checkpoint: "bg-muted-foreground",
  highlight: "bg-primary animate-pulse shadow-lg shadow-primary/50",
  race: "bg-primary",
  break: "bg-muted-foreground/50",
  pitstop: "bg-yellow-500",
}

export function Schedule() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1)
  const schedule = activeDay === 1 ? day1Schedule : day2Schedule

  return (
    <section id="schedule" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image1.png"
          alt="Race Schedule Background"
          fill
          className="object-cover object-center opacity-20 sm:opacity-30"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-card/80 via-background/90 to-card/80" />
      </div>
      <div className="absolute inset-0 racing-glow-left z-[1]" />
      <div className="absolute inset-0 racing-glow-right z-[1]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-primary/30 via-transparent to-primary/30" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-2 kerb-stripes-alt" />
      <div className="absolute bottom-0 left-0 right-0 h-2 kerb-stripes-alt" />

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
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            <Timer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-bold text-primary tracking-widest uppercase">Race Timeline</span>
            <Timer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
          </div>
          <h2 className="font-[var(--font-bebas-neue)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-4 sm:mb-6 px-2 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] tracking-tight">
            THE <span className="text-primary drop-shadow-[0_0_20px_rgba(225,6,0,0.6)]">RACE</span> SCHEDULE
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Every pit stop, every checkpoint, every crucial moment mapped out for your racing success.
          </p>
        </div>

        <div className="flex justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
          {[1, 2].map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day as 1 | 2)}
              className={cn(
                "relative px-4 sm:px-6 md:px-8 py-3 sm:py-4 font-[var(--font-display)] text-sm sm:text-base md:text-lg font-bold rounded-lg transition-all overflow-hidden group touch-manipulation min-h-[44px]",
                activeDay === day
                  ? "racing-gradient text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50",
              )}
            >
              {activeDay === day && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-speed-lines" />
              )}
              <span className="relative z-10 whitespace-nowrap">
                DAY {day} - FEB {day === 1 ? "22" : "23"}
              </span>
            </button>
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical track line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 sm:w-1 md:w-2 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/50 to-primary" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent animate-grid-scroll" />
          </div>

          <div className="space-y-4 sm:space-y-6">
            {schedule.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className={cn(
                    "relative flex items-center gap-3 sm:gap-4 md:gap-8",
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse",
                  )}
                >
                  {/* Time badge - mobile left, desktop alternating */}
                  <div
                    className={cn(
                      "hidden sm:flex sm:w-[calc(50%-2rem)] items-center gap-2",
                      index % 2 === 0 ? "justify-end" : "justify-start flex-row-reverse",
                    )}
                  >
                    <span className="font-[var(--font-bebas-neue)] text-xl sm:text-2xl font-normal text-primary tracking-tight">{item.time}</span>
                    <div
                      className="w-6 sm:w-8 h-px bg-gradient-to-r from-primary/50 to-transparent"
                      style={{ transform: index % 2 !== 0 ? "scaleX(-1)" : "none" }}
                    />
                  </div>

                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={cn(
                        "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 sm:border-4 border-background flex items-center justify-center",
                        typeDotStyles[item.type as keyof typeof typeDotStyles],
                      )}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-background" />
                    </div>
                  </div>

                  {/* Event card */}
                  <div
                    className={cn(
                      "ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] p-3 sm:p-4 md:p-5 rounded-xl border transition-all hover:scale-[1.02] hover:shadow-lg group",
                      typeStyles[item.type as keyof typeof typeStyles],
                    )}
                  >
                    <span className="sm:hidden font-[var(--font-display)] text-xs sm:text-sm font-bold text-primary block mb-1.5">
                      {item.time}
                    </span>
                    <p className="font-semibold text-foreground text-base sm:text-lg">{item.event}</p>
                    <div className="mt-2 h-0.5 w-0 group-hover:w-full bg-primary/50 transition-all duration-300 rounded-full" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Note about gates */}
        <div className="mt-8 sm:mt-12 max-w-2xl mx-auto px-4">
          <div className="relative bg-primary/10 border border-primary/30 rounded-xl p-4 sm:p-5 text-center overflow-hidden">
            <div className="absolute inset-0 racing-glow-top opacity-50" />
            <div className="relative flex items-center justify-center gap-2 sm:gap-3">
              <Flag className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
              <p className="text-xs sm:text-sm text-muted-foreground">
                <span className="font-bold text-primary">Note:</span> Venue gates will be closed from 10:00 PM on Feb
                22nd to 8:00 AM on Feb 23rd. No entry or exit permitted during this period.
              </p>
              <Flag className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
