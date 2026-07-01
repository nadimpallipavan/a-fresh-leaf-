import React from "react";
import { cn } from "../lib/utils";

export default function Logo({ className = "", iconOnly = false }) {
  const imageUrl = "https://afreshleaf.com/wp-content/themes/afl/assets/img/logo@2x.webp";

  if (iconOnly) {
    return (
      <img
        src={imageUrl}
        className={cn("object-contain flex-shrink-0 select-none", className)}
        alt="A Fresh Leaf Icon"
        onError={(e) => {
          // Fallback to standard PNG logo if WebP is unsupported or fails
          e.target.src = "https://afreshleaf.com/wp-content/themes/afl/assets/img/logo.png";
        }}
      />
    );
  }

  return (
    <div className={cn("inline-flex items-center gap-3.5 select-none", className)}>
      <img
        src={imageUrl}
        className="w-10 h-10 object-contain flex-shrink-0"
        alt="A Fresh Leaf Icon"
        onError={(e) => {
          e.target.src = "https://afreshleaf.com/wp-content/themes/afl/assets/img/logo.png";
        }}
      />

      <span className="font-serif text-[26px] font-normal tracking-tight text-white leading-none pt-0.5">
        A fresh leaf<span className="text-leaf-500 font-bold">.</span>
      </span>
    </div>
  );
}
