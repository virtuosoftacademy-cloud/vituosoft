import Image from "next/image";

import HorizontalScroll from "@/components/ui/HorizontalScroll";
import FounderSection from "@/components/ui/FounderSection";
import HistoryTimeline from "@/components/ui/HistoryTimeline";
import LocationsHorizontalSection from "@/components/ui/LocationsHorizontalSection";
import MobileHistoryTimeline from "@/components/ui/MobileHistoryTimeline";
import AboutCollage from "./components/AboutCollage";

export default function AboutUsPage() {
  return (
    <main className="font-host">
      {/* HERO SECTION */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        {/* Text */}
        <div className="mx-auto max-w-5xl text-center px-4 md:px-6 relative z-20">
<h1 className="text-center max-w-5xl mx-auto px-4 md:px-6 relative z-20 font-host">
  {/* Main headline (Where innovation meets vision to unlock) */}
  <span
  className="block font-light text-[48px] leading-[40px] tracking-tight"
  style={{ color: "rgba(43, 52, 57, 0.83)" }}
>
  Where innovation meets <br />
  vision to unlock
</span>


  {/* Potential */}
  <span
    className="block font-sofia font-bold italic text-gray-900 text-[96px] mt-2"
    style={{ lineHeight: 1, letterSpacing: 0 }}
  >
    Potential<span className="text-orange-500">.</span>
  </span>
</h1>

{/* Paragraph below */}
<p
  className="mt-5 max-w-3xl mx-auto text-center text-gray-500 font-light text-[16px] leading-snug tracking-tight px-4"
>
  At Virtuosoft, we turn big ideas into scalable tech that helps businesses move
  fast and stay ahead. It’s not just about saving time or cutting costs, we
  create smooth experiences and open doors that uplift communities, driving an
  impact that goes way beyond technology.
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
      <p className="mt-10 md:mt-20 max-w-3xl mx-auto text-center text-sm sm:text-xl md:text-[25px] px-4 text-[#333]">
        At <span className="font-bold">Virtuosoft</span>, we focus on human values over
        traditional KPIs and profitability. Our mission is to deliver innovative
        software solutions that drive success for both clients and employees.
      </p>

      {/* FOUNDER */}
      <div className="px-4 sm:px-6 md:px-20 lg:px-28 xl:px-36 2xl:px-44 mt-10 sm:mt-14 md:mt-20">
        <FounderSection />
      </div>

{/* GROWTH HEADER */}
<div className="mt-16 md:mt-20 px-4 ml-10 md:px-6 md:ml-20 text-left">
  <h2
    className="font-host font-light text-[#2B3439]"
    style={{
      fontSize: "36.13px",
      lineHeight: "38.1px",
      letterSpacing: "-0.01em",
    }}
  >
    Driven by{" "}
    <strong className="font-bold">
      Growth
    </strong>
    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full align-end ml-2"></span>
  </h2>

  <span
    className="block font-host font-light"
    style={{
      fontSize: "36.13px",
      lineHeight: "38.1px",
      letterSpacing: "-0.01em",
      marginTop: "0.25rem", // mt-1
    }}
  >
    Our Ongoing{" "}
    <strong className="font-bold">
      Rise
    </strong>
  </span>

  <h3
  className="mt-1 sm:mt-[-20] text-2xl md:text-5xl lg:text-6xl font-semibold leading-normal"
  style={{ color: "rgba(43, 52, 57, 0.08)" }}
>
  The Journey
</h3>

</div>


      {/* TIMELINE */}
      <HistoryTimeline />
      <MobileHistoryTimeline />

      {/* LOCATIONS */}
      <LocationsHorizontalSection />
    </main>
  );
}
