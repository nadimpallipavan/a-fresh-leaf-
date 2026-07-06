"use client"

import React, { useState, useEffect, useRef } from "react"

// A simple utility for conditional class names
const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(" ")
}

interface FlipCardProps {
  image: string
  title: string
  description: string
  url?: string
  bgColor?: string
  padding?: string
  className?: string
  style?: React.CSSProperties
  onSelectCard?: (url: string, title: string) => void
}
 
function FlipCard({ image, title, description, url, bgColor, padding, className, style, onSelectCard }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = React.useState(false)

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      className={cn(
        "group w-[76px] h-[100px] xs:w-24 xs:h-32 md:w-28 md:h-36 rounded-xl [perspective:1000px] transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer",
        className,
      )}
      style={style}
    >
      <div 
        className={cn(
          "relative w-full h-full rounded-xl shadow-lg transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]",
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        )}
      >
        {/* Front side - Logo Image */}
        <div 
          className={cn(
            "absolute inset-0 rounded-xl border border-neutral-800 flex items-center justify-center [backface-visibility:hidden]",
            padding || "p-3.5"
          )}
          style={{ backgroundColor: bgColor || "#ffffff" }}
        >
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="max-w-full max-h-full object-contain pointer-events-none select-none"
          />
        </div>
        {/* Back side - Title and Link */}
        <div className="absolute inset-0 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col items-center justify-center p-1.5 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h3 className="font-bold text-[8px] md:text-[9.5px] tracking-tighter text-neutral-100 mb-2.5 text-center whitespace-nowrap overflow-visible max-w-full px-0.5">{title}</h3>
          {url && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                if (onSelectCard) {
                  onSelectCard(url, title);
                }
              }}
              className="text-[8px] md:text-[9px] font-bold text-leaf-500 hover:text-leaf-300 uppercase tracking-wider pointer-events-auto border border-leaf-500/20 px-2 py-0.5 rounded-full bg-neutral-900/80 hover:bg-neutral-900 transition-colors cursor-pointer"
            >
              Visit Site →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

import Logo from "../Logo"

interface CircularGalleryProps {
  cards: {
    image: string
    title: string
    description: string
    url: string
    bgColor?: string
    padding?: string
  }[]
  onSelectCard?: (url: string, title: string) => void
}
 
export default function CircularGallery({ cards, onSelectCard }: CircularGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState(0)
 
  // Effect for responsive sizing
  useEffect(() => {
    const updateSize = () => {
      if (galleryRef.current) {
        const gallerySize = galleryRef.current.offsetWidth
        setSize(gallerySize)
      }
    }
 
    updateSize() // Initial size
 
    const resizeObserver = new ResizeObserver(updateSize)
    if (galleryRef.current) {
      resizeObserver.observe(galleryRef.current)
    }
 
    return () => resizeObserver.disconnect()
  }, [])
 
  const radiusMultiplier = size < 400 ? 0.48 : 0.44
  const radius = size * radiusMultiplier // Dynamically pushes cards further out on small screens
  const centerX = size / 2
  const centerY = size / 2
 
  return (
    <div
      ref={galleryRef}
      className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[460px] aspect-square flex items-center justify-center mx-auto"
    >
      {/* Central Logo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none p-4">
        <Logo iconOnly className="w-12 h-12 xs:w-16 xs:h-16 md:w-20 md:h-20 animate-pulse drop-shadow-[0_0_20px_rgba(90,200,120,0.2)]" />
        <p className="text-[9px] md:text-xs text-leaf-500 uppercase tracking-widest font-semibold mt-2">
          Hover to Flip
        </p>
      </div>
 
      {/* Circular arrangement of cards */}
      <div className="absolute inset-0 animate-spin-slow pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
        {size > 0 &&
          cards.map((card, index) => {
            // Position cards evenly in the circle
            const angle = (index / cards.length) * 2 * Math.PI - Math.PI / 2
            const x = centerX + radius * Math.cos(angle)
            const y = centerY + radius * Math.sin(angle)
 
            return (
              <FlipCard
                key={index}
                {...card}
                onSelectCard={onSelectCard}
                className="absolute hover:z-20 pointer-events-auto"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: `translate(-50%, -50%) rotate(${(angle + Math.PI / 2) * (180 / Math.PI)}deg)`,
                }}
              />
            )
          })}
      </div>
    </div>
  )
}
