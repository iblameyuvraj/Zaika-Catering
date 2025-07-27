"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import type { ReactNode } from "react"

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode
  videoSrc?: string
}

export const AuroraBackground = ({
  className,
  children,
  videoSrc = "https://ssgvqaetpmjtkxtnpzki.supabase.co/storage/v1/object/public/video-bucket//6037337_Chef_Flame_3840x2160.mp4",
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex h-[100vh] flex-col items-center justify-center text-white overflow-hidden",
          className,
        )}
        {...props}
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content positioned above the overlay */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </main>
  )
}
