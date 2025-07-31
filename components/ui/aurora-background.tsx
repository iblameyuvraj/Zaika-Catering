"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import type { ReactNode } from "react"

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode
  photoSrc?: string
  x?: string
  y?: string
}

export const AuroraBackground = ({
  className,
  children,
  photoSrc = "https://media.istockphoto.com/id/1334489824/photo/chicken-cutlet-with-tomato-sauce.jpg?s=612x612&w=0&k=20&c=QTqv_JAbGbAVQ68q30167qkzXkeEJe7fJqDy3hdBNNI=",
  x = "40%",
  y = "10%",
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
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback Image Background */}
        <div 
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            backgroundImage: `url(${photoSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: `${x} ${y}`,
            backgroundRepeat: 'no-repeat'
          }}
        />
        
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
