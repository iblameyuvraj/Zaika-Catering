"use client"

import { motion } from "motion/react"
import { AuroraBackground } from "@/components/ui/aurora-background"

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
          <button className="relative w-fit rounded-xl px-7 py-3 text-base font-semibold bg-white text-black border-2 border-black shadow transition-all duration-200 hover:bg-black hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black/20 dark:bg-neutral-900 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black dark:focus:ring-white/30">
            Book Your Event
          </button>
          <button className="relative w-fit rounded-xl px-7 py-3 text-base font-semibold bg-black text-white border-2 border-black shadow transition-all duration-200 hover:bg-white hover:text-black hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black/20 dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white dark:focus:ring-white/30">
            View Menu
          </button>
        </div>
      </motion.div>
    </AuroraBackground>
  )
}
