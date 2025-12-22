"use client"

import { MapPin, Mail, Phone, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const contacts = [
  { name: "Darsh Iyer", phone: "+91 91361 82605" },
  { name: "Malhar Rane", phone: "+91 95107 09206" },
  { name: "Sanjana Shetty", phone: "+91 77180 20953" },
]

export function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-24 md:py-32 bg-card/50 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image4.png"
          alt="Contact Background"
          fill
          className="object-cover object-center opacity-20 sm:opacity-30"
          quality={90}
        />
        <div className="absolute inset-0 bg-card/60 sm:bg-card/50" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-2 kerb-stripes-alt z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-2 kerb-stripes-alt z-[1]" />

      <div className="absolute inset-0 racing-glow-top opacity-50 z-[1]" />
      <div className="absolute inset-0 racing-glow-bottom opacity-50 z-[1]" />

      <div className="absolute top-20 right-0 w-48 h-48 z-[2] pointer-events-none">
        <div className="absolute inset-0 border-t-2 border-r-2 border-primary/30" />
        <div className="absolute top-4 right-4 w-full h-full border-t border-r border-primary/20" />
      </div>
      <div className="absolute bottom-20 left-0 w-48 h-48 z-[2] pointer-events-none">
        <div className="absolute inset-0 border-b-2 border-l-2 border-primary/30" />
        <div className="absolute bottom-4 left-4 w-full h-full border-b border-l border-primary/20" />
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-2 kerb-stripes opacity-60 z-[1]" />
      <div className="absolute right-0 top-0 bottom-0 w-2 kerb-stripes opacity-60 z-[1]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-xs sm:text-sm font-bold text-primary tracking-widest uppercase mb-3 sm:mb-4">
            // Contact HQ
          </span>
          <h2 className="font-[var(--font-bebas-neue)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-4 sm:mb-6 px-2 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] tracking-tight">
            GET IN <span className="text-primary drop-shadow-[0_0_20px_rgba(225,6,0,0.6)]">TOUCH</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Questions? Reach out to our pit crew and we&apos;ll get you race-ready.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Venue info */}
          <div className="bg-card border border-border rounded-xl p-5 sm:p-6 md:p-8">
            <h3 className="font-[var(--font-bebas-neue)] text-lg sm:text-xl font-normal text-foreground mb-4 sm:mb-6 flex items-center gap-2 tracking-tight">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 drop-shadow-[0_0_8px_rgba(225,6,0,0.8)]" />
              RACE VENUE
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              NMIMS University
              <br />
              Navi Mumbai, Maharashtra
            </p>
            <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <a href="mailto:gdgocnmims@gmail.com" className="hover:text-primary transition-colors break-all">
                gdgocnmims@gmail.com
              </a>
            </div>
            <Button 
              className="racing-gradient text-primary-foreground font-bold w-full sm:w-auto touch-manipulation"
              onClick={() => window.open("https://maps.app.goo.gl/ZjR3CoEB5hDX24BCA", "_blank")}
            >
              Get Directions
            </Button>
          </div>

          {/* POCs */}
          <div className="bg-card border border-border rounded-xl p-5 sm:p-6 md:p-8">
            <h3 className="font-[var(--font-bebas-neue)] text-lg sm:text-xl font-normal text-foreground mb-4 sm:mb-6 flex items-center gap-2 tracking-tight">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 drop-shadow-[0_0_8px_rgba(225,6,0,0.8)]" />
              POINT OF CONTACTS
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {contacts.map((contact, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 p-3 bg-muted/30 rounded-lg">
                  <span className="font-medium text-sm sm:text-base text-foreground">{contact.name}</span>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors touch-manipulation"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>{contact.phone}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <div className="inline-block bg-primary/10 border border-primary/30 rounded-2xl p-6 sm:p-8 md:p-12 w-full max-w-2xl">
            <h3 className="font-[var(--font-bebas-neue)] text-xl sm:text-2xl md:text-3xl font-normal text-foreground mb-3 sm:mb-4 tracking-tight">
              READY TO RACE?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 max-w-md mx-auto">
              Don&apos;t miss your chance to be part of the most exciting hackathon of the year.
            </p>
            <Button
              size="lg"
              className="racing-gradient text-primary-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 hover:scale-105 transition-transform touch-manipulation w-full sm:w-auto"
            >
              Register Your Team Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
