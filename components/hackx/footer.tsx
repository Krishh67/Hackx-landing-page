import Link from "next/link"
import { Flag, Instagram, Linkedin } from "lucide-react"

const organizers = [
  { name: "GDG NMIMS", link: "#" },
  { name: "IEEE NMIMS", link: "#" },
  { name: "GDG UMIT", link: "#" },
  { name: "IEEE UMIT", link: "#" },
]

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/gdg.nmims?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border">
      {/* Racing stripe */}
      <div className="h-1 w-full racing-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo & description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3 sm:mb-4 touch-manipulation">
              <Flag className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="font-[var(--font-bebas-neue)] text-lg sm:text-xl font-normal tracking-tight">
                HACK<span className="text-primary">X</span> 4.0
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Race to innovation. The ultimate 24-hour hackathon where brilliant minds compete for glory.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-[var(--font-bebas-neue)] font-normal text-sm sm:text-base text-foreground mb-3 sm:mb-4 tracking-wider">QUICK LINKS</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {["About", "Schedule", "Tracks", "Prizes", "FAQ"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors touch-manipulation inline-block min-h-[44px] flex items-center"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organizers */}
          <div>
            <h4 className="font-[var(--font-bebas-neue)] font-normal text-sm sm:text-base text-foreground mb-3 sm:mb-4 tracking-wider">ORGANIZED BY</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {organizers.map((org) => (
                <li key={org.name}>
                  <Link 
                    href={org.link} 
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors touch-manipulation inline-block min-h-[44px] flex items-center"
                  >
                    {org.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-[var(--font-bebas-neue)] font-normal text-sm sm:text-base text-foreground mb-3 sm:mb-4 tracking-wider">FOLLOW THE RACE</h4>
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all touch-manipulation"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-muted-foreground">© 2026 HackX 4.0. All rights reserved.</p>
          <p className="text-xs sm:text-sm text-muted-foreground">Built with passion by the HackX Team</p>
        </div>
      </div>
    </footer>
  )
}
