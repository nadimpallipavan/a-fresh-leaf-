import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

export function InteractiveHoverLinks({ links, className, onLinkClick }) {
  return (
    <div className={cn("w-full max-w-4xl mx-auto flex flex-col justify-center", className)}>
      {links.map((link) => (
        <Link key={link.heading} {...link} onClick={onLinkClick} />
      ))}
    </div>
  );
}

function Link({ heading, imgSrc, subheading, href, onClick }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "40%"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      onClick={(e) => onClick && onClick(e, href)}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-leaf-900/60 py-4 transition-colors duration-500 hover:border-leaf-500 md:py-6"
    >
      <div className="z-10 text-left">
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -8 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.03,
            delayChildren: 0.05,
          }}
          className="relative z-10 block text-3xl md:text-5xl font-black text-leaf-300 transition-colors duration-500 group-hover:text-white uppercase font-display"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 8 },
              }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-1 block text-xs md:text-sm text-leaf-500 transition-colors duration-500 group-hover:text-leaf-300 font-sans">
          {subheading}
        </span>
      </div>

      {imgSrc && (
        <motion.img
          style={{
            top,
            left,
            translateX: "-10%",
            translateY: "-50%",
          }}
          variants={{
            initial: { scale: 0, rotate: "-7.5deg", opacity: 0 },
            whileHover: { scale: 1, rotate: "7.5deg", opacity: 0.8 },
          }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          src={imgSrc}
          className="absolute z-0 h-16 w-24 md:h-32 md:w-48 rounded-2xl object-cover shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-leaf-800/40 pointer-events-none"
          alt={`Visual representation of ${heading}`}
        />
      )}

      <div className="overflow-hidden">
        <motion.div
          variants={{
            initial: {
              x: "100%",
              opacity: 0,
            },
            whileHover: {
              x: "0%",
              opacity: 1,
            },
          }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          className="relative z-10 p-2"
        >
          <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-leaf-500" />
        </motion.div>
      </div>
    </motion.a>
  );
}
