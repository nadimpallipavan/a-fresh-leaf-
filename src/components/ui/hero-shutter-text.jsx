import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { cn } from "../../lib/utils";

export default function HeroText({
  text = "IMMERSE",
  className = "",
}) {
  const [count, setCount] = useState(0);
  const characters = text.split("");

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center h-full w-full bg-zinc-950 transition-colors duration-700",
        className
      )}
    >
      {/* Immersive Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)`,
          backgroundSize: "clamp(20px, 5vw, 60px) clamp(20px, 5vw, 60px)",
        }}
      />

      {/* Main Text Container */}
      <div className="relative z-10 w-full px-4 flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={count}
            className="flex flex-wrap justify-center items-center gap-x-[3vw] gap-y-[1vh] w-full"
          >
            {text.split(" ").map((word, wordIdx, wordsArr) => {
              // Calculate cumulative delay offset
              let charOffset = 0;
              for (let w = 0; w < wordIdx; w++) {
                charOffset += wordsArr[w].length;
              }

              return (
                <div key={wordIdx} className="flex flex-row whitespace-nowrap">
                  {word.split("").map((char, charIdx) => {
                    const i = charOffset + charIdx;
                    return (
                      <div
                        key={charIdx}
                        className="relative px-[0.1vw] overflow-hidden group"
                      >
                        {/* Main Character - Responsive sizing using vw */}
                        <motion.span
                          initial={{ opacity: 0, filter: "blur(10px)" }}
                          animate={{ opacity: 1, filter: "blur(0px)" }}
                          transition={{ delay: i * 0.04 + 0.3, duration: 0.8 }}
                          className="text-[6vw] leading-none font-black text-white tracking-tighter"
                        >
                          {char}
                        </motion.span>

                        {/* Top Slice Layer */}
                        <motion.span
                          initial={{ x: "-100%", opacity: 0 }}
                          animate={{ x: "100%", opacity: [0, 1, 0] }}
                          transition={{
                            duration: 0.7,
                            delay: i * 0.04,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 text-[6vw] leading-none font-black text-emerald-400 z-10 pointer-events-none"
                          style={{ clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)" }}
                        >
                          {char}
                        </motion.span>

                        {/* Middle Slice Layer */}
                        <motion.span
                          initial={{ x: "100%", opacity: 0 }}
                          animate={{ x: "-100%", opacity: [0, 1, 0] }}
                          transition={{
                            duration: 0.7,
                            delay: i * 0.04 + 0.1,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 text-[6vw] leading-none font-black text-zinc-200 z-10 pointer-events-none"
                          style={{
                            clipPath: "polygon(0 35%, 100% 35%, 100% 65%, 0 65%)",
                          }}
                        >
                          {char}
                        </motion.span>

                        {/* Bottom Slice Layer */}
                        <motion.span
                          initial={{ x: "-100%", opacity: 0 }}
                          animate={{ x: "100%", opacity: [0, 1, 0] }}
                          transition={{
                            duration: 0.7,
                            delay: i * 0.04 + 0.2,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 text-[6vw] leading-none font-black text-emerald-400 z-10 pointer-events-none"
                          style={{
                            clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
                          }}
                        >
                          {char}
                        </motion.span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating UI Controls */}
      <div className="absolute bottom-12 flex flex-col items-center gap-6 z-20">
        <motion.button
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCount((c) => c + 1)}
          className="p-4 bg-zinc-900 border border-zinc-800 text-white rounded-full shadow-2xl transition-colors duration-300"
        >
          <RefreshCw size={24} />
        </motion.button>

        <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-500">
          Click to re-shutter
        </p>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-8 left-8 border-l border-t border-zinc-800 w-12 h-12" />
      <div className="absolute bottom-8 right-8 border-r border-b border-zinc-800 w-12 h-12" />
    </div>
  );
}
