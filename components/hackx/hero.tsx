"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Zap, Calendar, MapPin } from "lucide-react"

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    weeks: 0,
    days: 0,
    hours: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set target date to February 28, 2026 at midnight local time (start of event)
      const targetDate = new Date(2026, 1, 28, 0, 0, 0).getTime() // Month is 0-indexed, so 1 = February
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24))
        const weeks = Math.floor(totalDays / 7)
        const days = totalDays % 7
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

        setTimeLeft({
          weeks: Math.max(0, weeks),
          days: Math.max(0, days),
          hours: Math.max(0, hours),
        })
      } else {
        setTimeLeft({
          weeks: 0,
          days: 0,
          hours: 0,
        })
      }
    }

    // Calculate immediately on mount
    calculateTimeLeft()

    // Update every second for smooth updates
    const interval = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex gap-2 sm:gap-3 md:gap-4">
      {[
        { value: timeLeft.weeks, label: "WEEKS" },
        { value: timeLeft.days, label: "DAYS" },
        { value: timeLeft.hours, label: "HRS" },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="relative">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-card/95 sm:bg-card/90 backdrop-blur-md border-2 border-primary/60 rounded-lg flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.6),0_0_20px_rgba(225,6,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]">
              <span className="font-[var(--font-bebas-neue)] text-xl sm:text-2xl md:text-4xl font-normal text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.8),0_0_8px_rgba(0,0,0,0.5)] tracking-tight">
                {String(item.value).padStart(2, "0")}
              </span>
            </div>
            <div className="absolute -inset-0.5 sm:-inset-1 bg-primary/30 rounded-lg blur-md -z-10" />
          </div>
          <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-primary mt-1.5 sm:mt-2 tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8),0_0_8px_rgba(225,6,0,0.6)]">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 md:pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background video (single element). Keep behind content; adjust object-position and slight scale on mobile so framing differs but elements remain the same. */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center md:object-left-center md:scale-100 scale-[0.85] sm:scale-[0.94] lg:scale-100"
        >
          <source src="/images/f1-20compressed-20480p-20-281-29.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for readability - stronger on mobile */}
        <div className="absolute inset-0 bg-background/60 sm:bg-background/50" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20 z-[1]" />

      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {/* Animated diagonal speed lines */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-speed-line"
              style={{
                top: `${10 + i * 12}%`,
                left: "-100%",
                width: "200%",
                transform: "rotate(-5deg)",
                animationDelay: `${i * 0.3}s`,
                animationDuration: "2s",
              }}
            />
          ))}
        </div>

        {/* Red glow effects - scaled for mobile */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-primary/20 rounded-full blur-[80px] sm:blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] bg-primary/15 rounded-full blur-[60px] sm:blur-[120px] translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[200px] sm:w-[800px] sm:h-[400px] bg-primary/10 rounded-full blur-[50px] sm:blur-[100px] -translate-x-1/2 -translate-y-1/2" />

        {/* Horizontal pulsing lines */}
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/70 to-transparent animate-pulse-glow" />
        <div
          className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse-glow"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/70 to-transparent animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />

        {/* Corner accents */}
        <div className="hidden sm:block absolute top-20 right-0 w-48 h-48">
          <div className="absolute inset-0 border-t-2 border-r-2 border-primary/30" />
          <div className="absolute top-4 right-4 w-full h-full border-t border-r border-primary/20" />
        </div>
        <div className="hidden sm:block absolute bottom-20 left-0 w-48 h-48">
          <div className="absolute inset-0 border-b-2 border-l-2 border-primary/30" />
          <div className="absolute bottom-4 left-4 w-full h-full border-b border-l border-primary/20" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Event badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full mb-6 sm:mb-8 animate-float shadow-[0_0_20px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)]">
          <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary drop-shadow-[0_0_8px_rgba(225,6,0,0.8)]" />
          <span className="text-xs sm:text-sm font-semibold text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8),0_0_8px_rgba(225,6,0,0.6)]">24-Hour Innovation Sprint</span>
        </div>

        {/* Main heading */}
        <h1 className="font-[var(--font-bebas-neue)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal tracking-tighter mb-3 sm:mb-4 leading-tight">
          <span className="text-foreground drop-shadow-[0_0_40px_rgba(0,0,0,0.9),0_0_20px_rgba(0,0,0,0.7),0_4px_8px_rgba(0,0,0,0.5),0_0_30px_rgba(225,6,0,0.4)]">HACK</span>
          <span className="text-primary drop-shadow-[0_0_60px_rgba(225,6,0,1),0_0_30px_rgba(225,6,0,0.8),0_4px_12px_rgba(0,0,0,0.6),0_0_40px_rgba(225,6,0,0.6)]">X</span>
          <span className="text-foreground drop-shadow-[0_0_40px_rgba(0,0,0,0.9),0_0_20px_rgba(0,0,0,0.7),0_4px_8px_rgba(0,0,0,0.5),0_0_30px_rgba(225,6,0,0.4)]"> 4.0</span>
        </h1>

        {/* Tagline */}
        <p className="font-[var(--font-bebas-neue)] text-base sm:text-lg md:text-xl lg:text-2xl text-primary tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-4 sm:mb-6 font-normal drop-shadow-[0_0_30px_rgba(225,6,0,0.8),0_0_15px_rgba(225,6,0,0.6),0_2px_6px_rgba(0,0,0,0.7),0_0_20px_rgba(0,0,0,0.5)] px-2">
          RACE TO INNOVATION
        </p>

        {/* Empty space where description was removed */}
        <div className="mb-8 sm:mb-10 md:mb-12" />

        {/* Event info */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-8 mb-8 sm:mb-10 px-2">
          <div className="flex items-center justify-center gap-2 text-foreground bg-background/70 sm:bg-background/60 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] border border-white/10">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 drop-shadow-[0_0_8px_rgba(225,6,0,0.8)]" />
            <span className="font-semibold whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">February 28 - March 1, 2026</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-foreground bg-background/70 sm:bg-background/60 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] border border-white/10">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 drop-shadow-[0_0_8px_rgba(225,6,0,0.8)]" />
            <span className="font-semibold text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">NMIMS University, Navi Mumbai</span>
          </div>
        </div>

        {/* Countdown */}
        <div className="mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm text-foreground uppercase tracking-widest mb-3 sm:mb-4 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8),0_0_8px_rgba(0,0,0,0.5)]">Race Begins In</p>
          <div className="flex justify-center px-2">
            <CountdownTimer />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
          <Button
            size="lg"
            className="racing-gradient text-primary-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 hover:scale-105 transition-transform group shadow-[0_0_30px_rgba(225,6,0,0.5)] touch-manipulation w-full sm:w-auto"
          >
            Register Your Team
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 text-foreground hover:bg-primary/10 font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-background/60 sm:bg-background/50 backdrop-blur-sm touch-manipulation w-full sm:w-auto"
          >
            View Problem Statements
          </Button>
        </div>

      </div>
    </section>
  )
}
