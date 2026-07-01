import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const colorVariants = {
  orange: {
    '--feature-color': 'hsl(35, 91%, 55%)',
    '--feature-color-light': 'hsl(41, 100%, 85%)',
    '--feature-color-dark': 'hsl(24, 98%, 98%)',
  },
  purple: {
    '--feature-color': 'hsl(262, 85%, 60%)',
    '--feature-color-light': 'hsl(261, 100%, 87%)',
    '--feature-color-dark': 'hsl(264, 100%, 98%)',
  },
  blue: {
    '--feature-color': 'hsl(211, 100%, 60%)',
    '--feature-color-light': 'hsl(210, 100%, 83%)',
    '--feature-color-dark': 'hsl(216, 100%, 98%)',
  },
  green: {
    '--feature-color': 'hsl(142, 70%, 45%)',
    '--feature-color-light': 'hsl(142, 70%, 85%)',
    '--feature-color-dark': 'hsl(142, 70%, 98%)',
  }
};

const AnimatedFeatureCard = React.forwardRef(({ className, index, tag, title, imageSrc, color = "green", ...props }, ref) => {
  const cardStyle = colorVariants[color] || colorVariants.green;

  return (
    <motion.div
      ref={ref}
      style={cardStyle}
      className={cn(
        "relative flex h-[380px] w-full max-w-sm flex-col justify-end overflow-hidden rounded-2xl border border-leaf-800 bg-leaf-950 p-6 shadow-sm",
        className
      )}
      whileHover="hover"
      initial="initial"
      variants={{
        initial: { y: 0 },
        hover: { y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)" },
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      {...props}
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 50% 30%, var(--feature-color-light) 0%, transparent 70%)`
        }}
      />
      
      {/* Index Number */}
      <div className="absolute top-6 left-6 font-mono text-lg font-bold text-leaf-400 z-20 drop-shadow-md">
        {index}
      </div>

      {/* Main Image */}
      {imageSrc && (
        <motion.div 
          className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
          variants={{
              initial: { scale: 1 },
              hover: { scale: 1.08 },
          }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        >
          <img
            src={imageSrc}
            alt={tag}
            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
          />
        </motion.div>
      )}
      
      {/* Content */}
      <div className="relative z-20 rounded-xl border border-leaf-900 bg-leaf-950/80 p-4 backdrop-blur-sm">
        <span
          className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
          style={{ 
            backgroundColor: 'rgba(85, 176, 56, 0.1)', 
            color: 'var(--feature-color)' 
          }}
        >
          {tag}
        </span>
        <p className="text-sm font-medium text-leaf-100">{title}</p>
      </div>
    </motion.div>
  );
});
AnimatedFeatureCard.displayName = "AnimatedFeatureCard";

export { AnimatedFeatureCard };
