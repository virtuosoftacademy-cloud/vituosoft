import Image from "next/image";

import HorizontalScroll from "@/components/ui/HorizontalScroll";
import FounderSection from "@/components/ui/FounderSection";
import HistoryTimeline from "@/components/ui/HistoryTimeline";
import LocationsHorizontalSection from "@/components/ui/LocationsHorizontalSection";
import MobileHistoryTimeline from "@/components/ui/MobileHistoryTimeline";
import AboutCollage from "./components/AboutCollage";


export default function AboutUsPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden font-host">
        {/* Text */}
        <div className="mx-auto max-w-5xl text-center px-4 md:px-6 relative z-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-[#2B3439]">
            Where innovation meets <br />
            vision to unlock <br />
            <span className="block mt-2 text-5xl sm:text-6xl md:text-8xl font-sofia font-bold italic text-gray-900">
              Potential
            </span>
          </h1>

          <p className="mt-6 text-gray-500 max-w-3xl mx-auto text-sm sm:text-base">
            At Virtuosoft, we turn big ideas into scalable tech that helps businesses
            move fast and stay ahead. It’s not just about saving time or cutting costs,
            we create smooth experiences and open doors that uplift communities,
            driving an impact that goes way beyond technology.
          </p>
        </div>

        {/* IMAGE COLLAGE (Animated) */}
        <AboutCollage />
      </section>

      {/* HORIZONTAL TEXT SCROLL */}
      <HorizontalScroll text="VIRTUOSOFT" />

      {/* LOGO */}
      <div className="flex justify-center my-4 px-4 sm:px-0 md:mb-[-12px]">
        <Image
          src="/Virtuosoft-logo.svg"
          alt="Virtuosoft Logo"
          width={160}
          height={120}
          className="w-[100px] sm:w-[140px] md:w-[160px] md:mt-[-20px] h-auto"
          priority
        />
      </div>

      {/* MISSION TEXT */}
      <p className="mt-10 md:mt-20 max-w-3xl mx-auto text-center font-host text-sm sm:text-xl md:text-[25px] px-4 text-[#333]">
        At <span className="font-bold">Virtuosoft</span>, we focus on human values over
        traditional KPIs and profitability. Our mission is to deliver innovative
        software solutions that drive success for both clients and employees.
      </p>

      {/* FOUNDER */}
      <div className="px-4 sm:px-6 md:px-20 lg:px-28 xl:px-36 2xl:px-44 mt-10 sm:mt-14 md:mt-20">
        <FounderSection />
      </div>

      {/* GROWTH HEADER */}
      <div className="mt-16 md:mt-20 font-host px-4 ml-10 md:px-6 md:ml-20 text-left">
        <h2 className="text-2xl sm:text-sm md:text-5xl lg:text-6xl font-light text-[#2B3439]">
          Driven by <strong>Growth</strong>
          <span className="inline-block w-3 h-3 bg-orange-500 rounded-full align-middle ml-2"></span>
        </h2>

        <span className="block mt-1 sm:mt-4 text-2xl md:text-5xl lg:text-6xl font-light leading-normal">
          Our Ongoing <strong>Rise</strong>
        </span>

        <h3 className="mt-1 sm:mt-3 text-2xl md:text-5xl lg:text-6xl font-semibold text-gray-300 leading-normal">
          The Journey
        </h3>
      </div>

      {/* TIMELINE */}
      <HistoryTimeline />
      <MobileHistoryTimeline />

      {/* LOCATIONS */}
      <LocationsHorizontalSection />
    </>
  );
}
