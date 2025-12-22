import { Header } from "@/components/hackx/header"
import { Hero } from "@/components/hackx/hero"
import { About } from "@/components/hackx/about"
import { Schedule } from "@/components/hackx/schedule"
import { Problems } from "@/components/hackx/problems"
import { Prizes } from "@/components/hackx/prizes"
import { Sponsors } from "@/components/hackx/sponsors"
import { Rules } from "@/components/hackx/rules"
import { Faq } from "@/components/hackx/faq"
import { Contact } from "@/components/hackx/contact"
import { Footer } from "@/components/hackx/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Schedule />
      <Problems />
      <Prizes />
      <Sponsors />
      <Rules />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
