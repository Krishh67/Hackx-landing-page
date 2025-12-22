"use client"

import { useState } from "react"
import { ChevronDown, Radio, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const faqs = [
  {
    question: "When and where will HackX be held?",
    answer:
      "HackX 4.0 will be held on February 28 - March 1, 2026 at NMIMS University, Navi Mumbai. The event starts at 8:30 AM on Day 1 with reporting and concludes at 4:00 PM on Day 2 with the closing ceremony.",
  },
  {
    question: "Who can participate in HackX?",
    answer:
      "HackX is open to all college students passionate about technology and innovation. Whether you're a beginner or an experienced developer, everyone is welcome to participate and showcase their skills.",
  },
  {
    question: "How many members can be in a team?",
    answer:
      "Teams must consist of 2-4 members. Solo participation is not allowed, and teams with more than 4 members will not be accepted.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Yes, there is a refundable registration fee of ₹600 per team. The fee will be refunded after the event upon successful participation.",
  },
  {
    question: "What is the refund timeline?",
    answer:
      "Registration fees are refunded within 2-3 weeks after the event concludes. Teams must have participated in the entire event to be eligible for a refund.",
  },
  {
    question: "How do I register for HackX?",
    answer:
      "You can register by clicking the 'Register Now' button on this page. Fill out the registration form with your team details and complete the payment to confirm your spot.",
  },
  {
    question: "What is the submission format?",
    answer:
      "All submissions must include: project source code (GitHub repository), a working demo or video demonstration, and comprehensive documentation explaining your solution.",
  },
  {
    question: "Can we use pre-built code or templates?",
    answer:
      "You can use pre-existing libraries, APIs, and frameworks. However, pre-built projects or significant portions of pre-written code are not permitted. Your project must be built during the hackathon.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image3.png"
          alt="FAQ Background"
          fill
          className="object-cover object-center opacity-15 sm:opacity-25"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background/95 to-card/50" />
      </div>
      <div className="absolute inset-0 racing-glow-left opacity-30 z-[1]" />
      <div className="absolute inset-0 racing-glow-right opacity-30 z-[1]" />

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 border border-primary/10 rounded-full opacity-50" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 border border-primary/10 rounded-full opacity-50" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 border border-primary/10 rounded-full opacity-50" />

      {/* Racing stripe divider */}
      <div className="absolute top-0 left-0 right-0 h-1 racing-gradient" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            <Radio className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-primary tracking-widest uppercase">Pit Radio</span>
            <Radio className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary animate-pulse" />
          </div>
          <h2 className="font-[var(--font-bebas-neue)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-4 sm:mb-6 px-2 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] tracking-tight">
            FREQUENTLY ASKED <span className="text-primary drop-shadow-[0_0_20px_rgba(225,6,0,0.6)]">QUESTIONS</span>
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "group bg-card/80 backdrop-blur border border-border rounded-xl overflow-hidden transition-all duration-300",
                openIndex === index ? "border-primary/50 shadow-lg shadow-primary/10" : "hover:border-primary/30",
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 text-left touch-manipulation min-h-[44px]"
                aria-expanded={openIndex === index}
              >
                <div
                  className={cn(
                    "flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all",
                    openIndex === index ? "racing-gradient" : "bg-muted",
                  )}
                >
                  <span
                    className={cn(
                      "font-[var(--font-bebas-neue)] text-xs sm:text-sm font-normal tracking-tight",
                      openIndex === index ? "text-primary-foreground" : "text-muted-foreground",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <span className="flex-1 font-medium text-sm sm:text-base text-foreground pr-2 sm:pr-4">{faq.question}</span>

                <div
                  className={cn(
                    "flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all",
                    openIndex === index ? "bg-primary/20" : "bg-muted",
                  )}
                >
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 sm:w-5 sm:h-5 text-primary transition-transform duration-300",
                      openIndex === index && "rotate-180",
                    )}
                  />
                </div>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-[400px] sm:max-h-96" : "max-h-0",
                )}
              >
                <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-9 sm:w-10" /> {/* Spacer to align with question */}
                    <div className="flex-1 border-t border-primary/20 pt-3 sm:pt-4">
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center px-4">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-card/50 border border-border rounded-full">
            <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
            <span className="text-xs sm:text-sm md:text-base text-muted-foreground">Still have questions?</span>
            <a href="#contact" className="font-semibold text-primary hover:underline touch-manipulation">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
