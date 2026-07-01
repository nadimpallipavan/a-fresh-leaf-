import React, { useState } from 'react';
import { cn } from "../../lib/utils";

export default function NavMenu({ className }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ['Home', 'Services', 'Our Work', 'About', 'Pricing', 'Contact'];
  const menuUrls = ['#', '#services', '#work', '#story', '#pricing', '#estimate'];

  return (
    <div className={cn("flex items-center justify-center w-full", className)}>
      <ul className="flex flex-row space-x-2 lg:space-x-4 justify-center items-center">
        {menuItems.map((item, index) => (
          <li key={item} className="list-none">
            <a 
              href={menuUrls[index]} 
              className="relative inline-block group"
            >
              {/* Link text */}
              <span className="
                relative z-10 block uppercase text-leaf-300 
                font-sans font-semibold transition-colors duration-300 
                group-hover:text-leaf-950
                text-xs py-1.5 px-3
              ">
                {item}
              </span>
              {/* Top & bottom border animation */}
              <span className="
                absolute inset-0 border-t border-b border-leaf-500
                transform scale-y-[1.8] opacity-0 
                transition-all duration-300 origin-center
                group-hover:scale-y-100 group-hover:opacity-100
              " />
              {/* Background fill animation */}
              <span className="
                absolute inset-0 bg-leaf-500
                transform scale-0 opacity-0
                transition-all duration-300 origin-top
                group-hover:scale-100 group-hover:opacity-100
              " />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
