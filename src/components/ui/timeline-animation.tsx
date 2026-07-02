"use client";
import React from "react";
import { motion } from "framer-motion";

export interface TimelineContentProps {
  as?: any;
  animationNum: number;
  timelineRef: React.RefObject<HTMLDivElement | null>;
  customVariants: any;
  className?: string;
  children: React.ReactNode;
}

export function TimelineContent({
  as = "div",
  animationNum,
  timelineRef,
  customVariants,
  className,
  children,
}: TimelineContentProps) {
  const Component = motion[as as keyof typeof motion] || motion.div;

  return (
    <Component
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={animationNum}
      className={className}
    >
      {children}
    </Component>
  );
}
