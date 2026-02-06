"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AboutCollage() {
  const wrapRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!wrapRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05}
    );

    observer.observe(wrapRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`
        relative z-10 mx-auto mt-16 md:mt-24
        max-w-full lg:max-w-3xl xl:max-w-4xl
        px-4 md:px-6
        h-[360px] sm:h-[450px] md:h-[480px] lg:h-[550px] xl:h-[550px]
        transition-all duration-1000 ease-out
        ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
      `}
    >
      {/* Blue Background */}
      <div
        className={`
          absolute z-0 bg-blue-600

          top-12
          left-[11%] right-[11%]
          h-[45%]

          sm:top-10
          sm:left-[9%] sm:right-[9%]
          sm:h-[55%]

          md:top-8
          md:left-[8%] md:right-[8%]
          md:h-[75%]

          lg:top-0
          lg:left-0 lg:right-0
          lg:h-[85%]

          xl:h-full

          rounded-md
          transition-opacity duration-1000 delay-300
          ${active ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Main Image */}
      <div
        className={`
          absolute left-1/2 z-30 -translate-x-1/2

          left-1
          top-[-10px]
          w-[50%]

          max-[375px]:top-[6%]
          max-[375px]:w-[50%]

          md:top-[-60px]
          md:w-[50%]

          lg:w-[60%]
          xl:w-[54%]

          transition-all duration-1000 ease-out
          ${
            active
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-20"
          }
        `}
      >
        <Image
          src="/pexels-kampus-8353839.svg"
          alt="Team"
          width={900}
          height={500}
          className="grayscale w-full h-auto shadow-xl"
          priority
        />
      </div>

      {/* Left Image */}
      <div
        className={`
          absolute z-40 origin-left

          left-[10px]
          top-[-20px]
          scale-[0.34]

          max-[375px]:left-[5px]
          max-[375px]:top-[5%]
          max-[375px]:scale-[0.35]

          md:left-[20px]
          md:top-[7%]
          md:scale-[0.61]

          lg:left-[-60px]
          lg:top-[15%]
          lg:scale-[0.75]

          xl:left-[-50px]
          xl:top-[20%]
          xl:scale-[0.9]

          transition-all duration-1000 ease-out
          ${
            active
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
          }
        `}
      >
        <Image
          src="/pexels-yankrukov-7640782.svg"
          alt="Office work"
          width={420}
          height={300}
          className="grayscale shadow-xl"
        />
      </div>

      {/* Bottom Image */}
      <div
        className={`
          absolute z-10 -translate-x-1/2

          left-1/2
          top-[30%]
          w-[50%]

          max-[375px]:top-[34%]
          max-[375px]:w-[52%]

          md:left-1/2
          md:bottom-[40px]
          md:top-[37%]
          md:w-[50%]

          lg:top-[40%]
          lg:w-[60%]

          xl:top-[45%]

          transition-all duration-1000 ease-out
          ${
            active
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }
        `}
      >
        <Image
          src="/pexels-rdne-7491147.svg"
          alt="Workspace"
          width={520}
          height={360}
          className="grayscale shadow-xl w-full h-auto"
        />
      </div>

      {/* Right Image */}
      <div
        className={`
          absolute z-20 origin-left

          right-[-250px]
          top-[2%]
          scale-[0.35]

          max-[375px]:right-[-260px]
          max-[375px]:top-[-2px]
          max-[375px]:scale-[0.32]

          md:right-[-130px]
          md:top-[15%]
          md:scale-[0.60]

          lg:right-[-150px]
          lg:top-[24%]
          lg:scale-[0.85]

          xl:right-[-100px]
          xl:top-[30%]
          xl:scale-100

          transition-all duration-1000 ease-out
          ${
            active
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          }
        `}
      >
        <Image
          src="/pexels-yankrukov-7793999-1.svg"
          alt="Meeting"
          width={400}
          height={300}
          className="grayscale shadow-xl"
        />
      </div>
    </div>
  );
}
