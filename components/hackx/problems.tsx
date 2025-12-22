"use client"

import { useState } from "react"
import { ChevronDown, Bot, Globe, Shirt, Mic2, Activity, Coffee, Calendar, Gauge, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const problems = [
  {
    id: 1,
    title: "Virtual Medical Examiner Assistant",
    shortTitle: "VMEA",
    icon: Bot,
    description:
      "Create an AI-powered avatar-based medical examiner assistant that conducts preliminary insurance health assessments through natural conversation and provides structured output for underwriters.",
  },
  {
    id: 2,
    title: "Multi-Lingual Medical Screening Bot",
    shortTitle: "MedLingual",
    icon: Globe,
    description:
      "Develop a medical screening assistant that can conduct preliminary health assessments in multiple Indian languages, using avatars representing local medical professionals.",
  },
  {
    id: 3,
    title: "Find Your Fit AI",
    shortTitle: "FitAI",
    icon: Shirt,
    description:
      "Develop an AI-powered solution that predicts body measurements based on height and suggests appropriate clothing sizes. Can be implemented as an API or Web Application.",
  },
  {
    id: 4,
    title: "Comedy Event Marketplace Platform",
    shortTitle: "ComedyHub",
    icon: Mic2,
    description:
      "Develop a tri-party marketplace platform that connects venues, comedians, and audiences, streamlining the process of organizing and attending live comedy shows.",
  },
  {
    id: 5,
    title: "Real-time Medical Risk Analyzer",
    shortTitle: "RiskMed",
    icon: Activity,
    description:
      "Create an AI system that processes medical responses in real-time, provides immediate risk assessments, and suggests additional questions based on previous responses.",
  },
  {
    id: 6,
    title: "Smart Cafe: Gamified Ordering",
    shortTitle: "SmartCafe",
    icon: Coffee,
    description:
      "Develop a Zepto-style web application for a café integrating gamification to enhance customer engagement, with QR-based ordering, waiter confirmation, and Kitchen Display System.",
  },
  {
    id: 7,
    title: "API-Driven Event Invitation System",
    shortTitle: "EventAPI",
    icon: Calendar,
    description:
      "Build an API-driven event invitation and management system replicating Apple Invites core functionalities including event creation, invitation sharing, RSVP tracking, and shared albums.",
  },
]

export function Problems() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="problems" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
      <div className="absolute inset-0 racing-glow-left opacity-50" />
      <div className="absolute inset-0 racing-glow-right opacity-50" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 bottom-0 left-[10%] w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-0 bottom-0 left-[30%] w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-0 bottom-0 right-[30%] w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-0 bottom-0 right-[10%] w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      </div>

      {/* Racing stripe divider */}
      <div className="absolute top-0 left-0 right-0 h-1 racing-gradient" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            <Gauge className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-bold text-primary tracking-widest uppercase">Problem Statements</span>
            <Gauge className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
          </div>
          <h2 className="font-[var(--font-bebas-neue)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-4 sm:mb-6 px-2 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] tracking-tight">
            CHOOSE YOUR <span className="text-primary drop-shadow-[0_0_20px_rgba(225,6,0,0.6)]">TRACK</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Seven challenging tracks await. Pick your lane and race towards innovation.
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4">
          {problems.map((problem) => (
            <div key={problem.id} className="group">
              <button 
                onClick={() => setExpandedId(expandedId === problem.id ? null : problem.id)} 
                className="w-full touch-manipulation"
                aria-expanded={expandedId === problem.id}
              >
                <div
                  className={cn(
                    "relative flex items-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6 bg-card/80 backdrop-blur border border-border rounded-xl transition-all duration-300 overflow-hidden",
                    "hover:border-primary/50 hover:bg-card active:bg-card/90",
                    expandedId === problem.id && "border-primary bg-primary/5",
                  )}
                >
                  <div className="relative flex-shrink-0">
                    <div
                      className={cn(
                        "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 racing-gradient rounded-lg flex items-center justify-center transition-all",
                        expandedId === problem.id && "shadow-lg shadow-primary/30",
                      )}
                    >
                      <span className="font-[var(--font-display)] text-xl sm:text-2xl md:text-3xl font-black text-primary-foreground">
                        {String(problem.id).padStart(2, "0")}
                      </span>
                    </div>
                    {/* Speed lines behind number */}
                    <div className="absolute inset-y-0 -left-3 sm:-left-4 w-3 sm:w-4 flex flex-col justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex">
                      <div className="h-px w-full bg-primary/50" />
                      <div className="h-px w-2 sm:w-3 bg-primary/30" />
                      <div className="h-px w-1.5 sm:w-2 bg-primary/20" />
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors">
                    <problem.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                  </div>

                  {/* Title */}
                  <div className="flex-1 text-left min-w-0">
                    <h3 className="font-[var(--font-bebas-neue)] text-base sm:text-lg md:text-xl font-normal text-foreground line-clamp-2 tracking-tight">
                      {problem.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground hidden sm:flex items-center gap-2 mt-1">
                      <span className="inline-block w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary/50" />
                      Track: {problem.shortTitle}
                    </p>
                  </div>

                  {/* Expand icon with arrow */}
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                    <ArrowRight
                      className={cn(
                        "w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary opacity-0 group-hover:opacity-100 transition-all hidden sm:block",
                        expandedId === problem.id && "opacity-0",
                      )}
                    />
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 sm:w-6 sm:h-6 text-primary transition-transform duration-300",
                        expandedId === problem.id && "rotate-180",
                      )}
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary via-primary/50 to-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </div>
              </button>

              {/* Expanded content */}
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  expandedId === problem.id ? "max-h-64 sm:max-h-48 opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <div className="p-3 sm:p-4 md:p-6 pt-0">
                  <div className="bg-card/50 backdrop-blur rounded-lg p-3 sm:p-4 md:p-6 ml-0 sm:ml-28 md:ml-32 border-l-2 sm:border-l-4 border-primary relative overflow-hidden">
                    <div className="absolute inset-0 racing-glow-left opacity-30" />
                    <p className="relative text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
