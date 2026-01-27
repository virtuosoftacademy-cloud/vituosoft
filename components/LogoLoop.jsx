'use client'
import { logos } from "@/app/_constant";
import { motion } from "framer-motion";
import React from "react";


const doubledLogos = [...logos, ...logos];

export default function LogoLoop() {
  return (
    <div className="w-full overflow-hidden py-12 md:py-30 bg-white/5">
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <motion.div
          className="flex items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused"}} // pause on hover
        >
          {doubledLogos.map((logo, i) => (
            <div
              key={i}
              className="shrink-0 px-6 md:px-10 lg:px-12"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-12 lg:h-14 w-auto max-w-[160] object-contain grayscale opacity-75 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}