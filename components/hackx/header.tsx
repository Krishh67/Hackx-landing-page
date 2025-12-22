"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#schedule", label: "Schedule" },
  { href: "#problems", label: "Tracks" },
  { href: "#prizes", label: "Prizes" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-primary/20 supports-[backdrop-filter]:bg-background/80">
      {/* Racing stripe accent */}
      <div className="h-1 w-full racing-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group touch-manipulation">
            <div className="relative">
              <Flag className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              <div className="absolute inset-0 bg-primary/30 blur-lg group-hover:bg-primary/50 transition-all" />
            </div>
            <span className="font-[var(--font-bebas-neue)] text-lg sm:text-2xl font-normal tracking-tight">
              HACK<span className="text-primary">X</span>
              <span className="text-[10px] sm:text-xs ml-0.5 sm:ml-1 text-muted-foreground">4.0</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-md transition-all touch-manipulation"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="racing-gradient text-primary-foreground font-bold px-6 hover:scale-105 transition-transform touch-manipulation">
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 text-foreground hover:bg-primary/10 rounded-md transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border animate-in slide-in-from-top-2 supports-[backdrop-filter]:bg-background/95">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3.5 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-md transition-all touch-manipulation min-h-[44px] flex items-center"
              >
                {link.label}
              </Link>
            ))}
            <Button className="racing-gradient text-primary-foreground font-bold mt-2 w-full py-3.5 touch-manipulation">
              Register Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
