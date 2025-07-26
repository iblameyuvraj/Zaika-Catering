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
  videoSrc = "https://videocdn.cdnpk.net/videos/03716c3f-b4a4-4df0-bcec-00425fb763d9/horizontal/previews/clear/large.mp4?token=exp=1753571699~hmac=5cfb5b61f98f4f6651d52e96799af2d6432218daa48ce0379f9de7e0cd958367",
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
