import React, { useEffect, useRef } from "react";

const TubesCursor = ({
  title = "Tubes",
  subtitle = "Cursor",
  caption = "WebGPU / WebGL",
  initialColors = ["#f967fb", "#53bc28", "#6958d5"],
  lightColors = ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
  lightIntensity = 200,
  titleSize = "text-[80px]",
  subtitleSize = "text-[60px]",
  captionSize = "text-base",
  enableRandomizeOnClick = true,
  className = "",
  children,
}) => {
  const canvasRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    let removeClick = null;
    let destroyed = false;

    (async () => {
      try {
        const mod = await import(
          /* webpackIgnore: true */
          "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
        );
        const TubesCursorCtor = mod.default ?? mod;

        if (!canvasRef.current || destroyed) return;

        const app = TubesCursorCtor(canvasRef.current, {
          tubes: {
            colors: initialColors,
            lights: {
              intensity: lightIntensity,
              colors: lightColors,
            },
          },
        });

        appRef.current = app;

        if (enableRandomizeOnClick) {
          const handler = () => {
            const colors = randomColors(initialColors.length);
            const lights = randomColors(lightColors.length);
            app.tubes.setColors(colors);
            app.tubes.setLightsColors(lights);
          };
          document.body.addEventListener("click", handler);
          removeClick = () =>
            document.body.removeEventListener("click", handler);
        }
      } catch (err) {
        console.error("Failed to load threejs-components tubes cursor:", err);
      }
    })();

    return () => {
      destroyed = true;
      if (removeClick) removeClick();
      try {
        if (appRef.current) {
          if (typeof appRef.current.destroy === "function") {
            appRef.current.destroy();
          } else if (typeof appRef.current.dispose === "function") {
            appRef.current.dispose();
          }
        }
        appRef.current = null;
      } catch (err) {
        console.error("Error disposing TubesCursor:", err);
      }
    };
  }, [initialColors.join(','), lightColors.join(','), lightIntensity, enableRandomizeOnClick]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full pointer-events-none opacity-80" />

      {/* Render children or default text content */}
      <div className="relative z-10 w-full h-full">
        {children ? (
          children
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 select-none">
            <h1 className={`m-0 p-0 text-white font-bold uppercase leading-none drop-shadow-[0_0_20px_rgba(0,0,0,1)] ${titleSize}`}>
              {title}
            </h1>
            <h2 className={`m-0 p-0 text-white font-medium uppercase leading-none drop-shadow-[0_0_20px_rgba(0,0,0,1)] ${subtitleSize}`}>
              {subtitle}
            </h2>
            <p className={`m-0 p-0 text-white leading-none drop-shadow-[0_0_20px_rgba(0,0,0,1)] ${captionSize}`}>
              {caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const GREEN_PALETTE = [
  "#10b981", // Emerald Green
  "#059669", // Medium Green
  "#34d399", // Light Mint
  "#a7f3d0", // Pale Mint
  "#4eba6f", // Leaf Green
  "#69be28", // Lime Green
  "#00ff66", // Bright Neon Green
  "#55b038", // Brand Green
  "#047857", // Dark Emerald
  "#064e3b"  // Deep Forest Green
];

function randomColors(count) {
  return new Array(count).fill(0).map(
    () => GREEN_PALETTE[Math.floor(Math.random() * GREEN_PALETTE.length)]
  );
}

export { TubesCursor };
