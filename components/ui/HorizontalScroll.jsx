"use client";

import HorizontalScrollWrapper from "./HorizontalScrollWrapper";

export default function HorizontalScroll({ text }) {
  return (
    <HorizontalScrollWrapper
      startOffset={
        typeof window !== "undefined" && window.innerWidth < 640
          ? window.innerWidth * 0.3 // mobile tighter start
          : window.innerWidth * 0.6 // desktop unchanged
      }
    >
      <h2
        className="
          whitespace-nowrap font-host font-extrabold italic text-gray-900

          /* MOBILE */
          text-[25vw]

          /* SMALL TABLET */
          sm:text-[30vw]

          /* TABLET */
          md:text-[25vw]

          px-12 sm:px-16 md:px-24
        "
      >
        {text}
      </h2>
    </HorizontalScrollWrapper>
  );
}
