import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="relative bg-white py-12 overflow-visible">
      <div className="relative max-w-5xl mx-auto px-6 md:px-0 lg:px-0 ">

         {/* RIGHT MOST BLUE OUTLINE */}
   <div
  className="
    absolute top-10
    z-0 pointer-events-none
    -right-6        /* default:  -1.5rem (desktop) */
    md:right-[-50px]     /* tablet: right 0 */
    lg:-right-6 
    h-380    /* reset on laptop+ */
  "
  style={{
    height: 380,
    width: "50%",
    maxWidth: "960px",
    borderRadius: 40,
    borderTop: "1px solid #0B5CFF",
    borderRight: "1px solid #0B5CFF",
    borderBottom: "1px solid #0B5CFF",
    maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
  }}
>


           <div
            className="absolute bottom-0 left-0 w-full"
            style={{
              height: "18%", // sirf thoda sa end fade
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, white 100%)",
            }}
          />
        </div>


        {/* MAIN BLUE CARD */}
       <div className="
  relative z-10 bg-[#0B5CFF] rounded-[40px]
  h-[350px] md:h-[280px] lg:h-[350px]
  md:w-[650px] lg:w-[752px] xl:w-[976px]
  px-16 md:px-1 lg:px-10 xl:px-16
  flex items-center gap-12 md:gap-6 lg:gap-12 overflow-visible
  md:-ml-10          /* Move left 2.5rem (40px) on tablet */
  lg:ml-0            /* Reset margin-left on laptop+ */
">


          <div
  className="absolute left-0 top-0 h-full w-[220px] md:w-[100px] lg:w-[220px] xl:w-[220px] bg-white z-0 rounded-l-[40px]"
  style={{
    border: "none",
    boxShadow: "none",
  }}
/>


          {/* IMAGE */}
          <div
            className="relative z-10 mt-0 w-[380px] md:w-[300px] md:mt-[-75px] lg:mt-[-85px] lg:w-[380px] shrink-0"
            style={{ height: 520, marginBottom: "-51px" }}
          >
            <Image
              src="/SR-1.svg"
              alt="Founder"
              fill
              className="object-contain rounded-[40px]"
            />

 <div
  className="
    absolute z-20
    h-[342px] w-[300px] mt-0          /* DESKTOP DEFAULT */
    md:h-[250px] md:w-[200px] md:mt-[32px]  /* TABLET ONLY */
    lg:h-[342px] lg:w-[300px] lg:mt-0          /* RESET FOR LAPTOP+ */
    md:translate-x-[40px] md:translate-y-[20px]  /* move left (less X), down on tablet */
    lg:translate-x-[68px] lg:translate-y-0       /* reset for laptop+ */
  "
  style={{
    top: 110,
    right: -70,
  }}
>

  <Image
    src="/SR-2.svg"
    alt="Overlay"
    fill
    className="object-contain"
  />
</div>

            
          </div>

          {/* TEXT */}
          <div className="relative z-10 text-white max-w-xl flex flex-col justify-center lg:mt-[10px] xl:mt-0">
           <p
  className="
    font-light leading-relaxed
    text-base 
    md:text-sm md:px-5             /* DEFAULT (desktop-safe) */
    lg:text-sm  lg:px-0          /* LAPTOP ONLY */
    xl:text-lg             /* DESKTOP RESET */
  "
>

              “We believe in achieving global harmony through our operational
              values and strong relationships with clients and partners. Thank
              you for considering Virtuosoft as your technology partner. We look
              forward to helping your business thrive.”
            </p>

            <div className="mt-10">
              <h3 className="text-3xl font-bold md:text-1xl md:px-5 lg:text-2xl lg:px-0 xl:text-3xl">Shoaib Rehman</h3>
              <p className="text-white/80 mt-1  md:px-5 lg:px-0">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
