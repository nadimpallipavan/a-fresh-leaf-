"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import { cn } from "../../lib/utils";
import type React from "react";

export function Switch({
  className,
  ...props
}: SwitchPrimitive.Root.Props): React.ReactElement {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "inline-flex h-[calc(var(--thumb-size)+2px)] w-[calc(var(--thumb-size)*2-2px)] shrink-0 items-center rounded-full p-px outline-none transition-[background-color,box-shadow] duration-200 [--thumb-size:--spacing(5)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background data-[state=checked]:bg-primary data-[state=unchecked]:bg-input data-[disabled]:opacity-50 sm:[--thumb-size:--spacing(4)]",
        className,
      )}
      data-slot="switch"
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block aspect-square h-full origin-left rounded-full bg-background shadow-sm will-change-transform [transition:translate_.15s,border-radius_.15s,scale_.1s_.1s,transform-origin_.15s] data-[state=checked]:origin-[var(--thumb-size)_50%] data-[state=checked]:translate-x-[calc(var(--thumb-size)-4px)]",
        )}
        data-slot="switch-thumb"
      />
    </SwitchPrimitive.Root>
  );
}

export { SwitchPrimitive };
