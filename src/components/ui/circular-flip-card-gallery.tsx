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
  className?: string
  style?: React.CSSProperties
}

function FlipCard({ image, title, description, url, bgColor, className, style }: FlipCardProps) {
  return (
    <div
      className={cn(
        "group w-24 h-32 md:w-28 md:h-36 rounded-xl [perspective:1000px] transition-transform duration-300 ease-in-out hover:scale-110",
        className,
      )}
      style={style}
    >
      <div className="relative w-full h-full rounded-xl shadow-lg transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front side - Logo Image */}
        <div 
          className="absolute inset-0 rounded-xl border border-neutral-800 flex items-center justify-center p-3.5 [backface-visibility:hidden]"
          style={{ backgroundColor: bgColor || "#ffffff" }}
        >
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="max-w-full max-h-full object-contain pointer-events-none select-none"
          />
        </div>
        {/* Back side - Title and Link */}
        <div className="absolute inset-0 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col items-center justify-center p-2 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h3 className="font-bold text-[10px] md:text-xs text-neutral-100 mb-2.5 text-balance leading-tight">{title}</h3>
          {url && (
            <a 
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[8px] md:text-[9px] font-bold text-leaf-500 hover:text-leaf-300 uppercase tracking-wider pointer-events-auto border border-leaf-500/20 px-2 py-0.5 rounded-full bg-neutral-900/80 hover:bg-neutral-900 transition-colors"
            >
              Visit Site →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

interface CircularGalleryProps {
  cards: {
    image: string
    title: string
    description: string
    url: string
    bgColor?: string
  }[]
}

export default function CircularGallery({ cards }: CircularGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState(0)
  const [rotation, setRotation] = useState(0)

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

  // Effect for animation loop
  useEffect(() => {
    let animationFrameId: number
    const animate = () => {
      setRotation((prevRotation) => prevRotation + 0.003)
      animationFrameId = requestAnimationFrame(animate)
    }
    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  const radius = size * 0.44 // 44% of the container size (pushes cards outward to prevent central text overlap)
  const centerX = size / 2
  const centerY = size / 2

  return (
    <div
      ref={galleryRef}
      className="relative w-full max-w-[340px] sm:max-w-[480px] md:max-w-[600px] aspect-square flex items-center justify-center mx-auto"
    >
      {/* Central text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none p-4">
        <h3 className="text-xl md:text-2xl font-black text-white text-center tracking-wider leading-none mb-0.5 font-display">
          Our Work
        </h3>
        <p className="text-[8px] md:text-[9px] text-leaf-500 uppercase tracking-widest font-semibold mt-0.5">
          Hover to Flip
        </p>
      </div>

      {/* Circular arrangement of cards */}
      {size > 0 &&
        cards.map((card, index) => {
          // Position cards evenly in the circle
          const angle = (index / cards.length) * 2 * Math.PI - Math.PI / 2 + rotation
          const x = centerX + radius * Math.cos(angle)
          const y = centerY + radius * Math.sin(angle)

          return (
            <FlipCard
              key={index}
              {...card}
              className="absolute hover:z-20"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: `translate(-50%, -50%) rotate(${(angle + Math.PI / 2) * (180 / Math.PI)}deg)`,
              }}
            />
          )
        })}
    </div>
  )
}
