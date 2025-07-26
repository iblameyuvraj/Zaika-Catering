"use client"

import { ThemeProvider } from "@/components/theme-provider"
import NavbarDemo from "@/components/navbar-demo"
import AuroraBackgroundDemo from "@/components/aurora-background-demo"
import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo"
import InfiniteMovingCardsDemo from "@/components/infinite-moving-cards-demo"
import TypewriterEffectSmoothDemo from "@/components/typewriter-effect-demo"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <NavbarDemo />
      <AuroraBackgroundDemo />
      <AppleCardsCarouselDemo />
      <InfiniteMovingCardsDemo />
      <TypewriterEffectSmoothDemo />
      <Footer />
    </div>
  )
}
