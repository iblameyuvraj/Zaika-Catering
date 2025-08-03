"use client"

import { motion } from "motion/react"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { Button } from "./ui/button"

export default function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">Exquisite Flavors from Odisha</div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center">
          Premium catering services for your special moments
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
        <Button className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-gray-900 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400">
        <a href="/contact">Book Your Event</a>
      </Button>
      <Button className="bg-gradient-to-br from-pink-500 to-orange-400 text-white hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800">
        <a href="/menu">View Menu</a>
      </Button>
        </div>
      </motion.div>
    </AuroraBackground>
  )
}
