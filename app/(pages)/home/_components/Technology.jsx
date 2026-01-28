'use client'

import { Card } from "@/components/ui/card"
import { CommonHead } from "../../../../components/Styles/StyleClasses"

function Technology() {
    const values = [
        {
            title: 'Teamwork',
            description:
                'We believe great ideas come from great collaboration. Our strength lies in the way we work together, across teams, disciplines and perspectives. At Virtuosoft, everyone contributes, challenges and supports one another to bring out their best. This culture of shared ownership drives innovation, fuels creativity and ensures every success is a collective one.',
            imageSrc: 'https://virtuosoft.pk/virtuosoft/wp-content/uploads/2025/11/chrome51.png',
            alt: 'Teamwork Icon',
        },
        {
            title: 'Integrity',
            description:
                'Integrity is the backbone of everything we do. It guides our choices, shapes our culture and defines our relationships. We stand by our word, follow through on our commitments and always choose fairness and honesty, even when no one’s watching. For us, integrity isn’t a statement of ethics; it’s a daily practice of doing what’s right.',
            imageSrc: 'https://virtuosoft.pk/virtuosoft/wp-content/uploads/2025/11/chrome8.png',
            alt: 'Integrity Icon',
        },
        {
            title: 'Reliability',
            description:
                'What our clients value most is knowing we’re there, steady, responsive and committed to their success. From the smallest task to the most complex project, Virtuosoft stands for consistency, precision and accountability. We don’t just aim to meet expectations, we make sure our partners can rely on us to exceed them, every time.',
            imageSrc: 'https://virtuosoft.pk/virtuosoft/wp-content/uploads/2025/11/s30-1.png',
            alt: 'Reliability Icon',
        },
    ];
    return (
        <>
            <div className="max-w-7xl mx-auto px-10 my-12 lg:my-14">
                <div className="flex flex-col gap-8 lg:flex-row justify-between items-center">

                    <div className="lg:-space-y-4">
                        <div className="flex flex-row items-baseline gap-1 lg:gap-2 text-5xl lg:text-[62px]">
                            <h4 className={`${CommonHead}`}>
                                <strong>
                                    Technology with{" "}
                                </strong>
                                <br />
                                <strong className="flex gap-1 lg:gap-2 flex-row italic font-semibold -mt-2 lg:-mt-5">
                                    <em>
                                        Purpose
                                    </em>
                                    <div className="mt-6 lg:mt-11 bg-chart-1 rounded-full size-1.5 lg:size-2.5" />
                                </strong>
                            </h4>
                        </div>

                        <div className="text-5xl lg:text-[80px] font-medium mt-2 lg:mt-4">
                            <p className="text-gray-200">Why Choose Us?</p>
                        </div>
                    </div>
                    <div
                        className="
        flex justify-start md:justify-center lg:justify-start
        py-6 md:py-8 lg:py-10
      "
                    >
                        <Card
                            className="group relative w-full max-w-[380] lg:max-w-[380] rounded-2xl bg-white p-7 sm:p-8 lg:p-9
            shadow-[0_5px_15px_rgba(0,0,0,0.05)]
            transition-all duration-400 ease-out
            hover:-translate-y-1.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]
            overflow-hidden"                        >
                            {/* Gradient border – modern, reliable method */}
                            <div
                                className="
            pointer-events-none absolute inset-0 rounded-[15px]
            bg-linear-to-b from-primary to-white p-0.5 -z-10
          "
                            >
                                <div className="h-full w-full rounded-[13px] bg-white" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 space-y-5 sm:space-y-6">
                                {/* Icon / Image */}
                                <div className="relative mx-auto w-28 sm:w-32 md:w-36 lg:w-40 max-w-[140] transition-transform duration-400 group-hover:-translate-y-2.5">
                                    <img
                                        src="https://virtuosoft.pk/virtuosoft/wp-content/uploads/2025/11/s56-1.png"
                                        alt="Transparency Icon"
                                        width={160}
                                        height={160}
                                        className="h-auto w-full object-contain"
                                    />
                                </div>

                                {/* Heading */}
                                <h3
                                    className="
              italic font-bold
              text-4xl sm:text-5xl md:text-[46px] lg:text-[47.71px]
              leading-[1.05] -tracking-[0.01em]
              text-[#222]
            "
                                >
                                    Transparency
                                </h3>

                                {/* Paragraph */}
                                <p
                                    className="
              text-[15.5px] sm:text-[16px] md:text-base
              leading-[1.6] text-[#555]
              max-w-prose
            "
                                >
                                    We believe in openness at every level, with our clients, partners and teams. Every action, decision and process at Virtuosoft is guided by honesty and clarity. By maintaining open communication and visible workflows, we ensure our stakeholders have complete confidence in how we operate and deliver results that truly reflect our shared goals.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
                <section
                    className="
        grid grid-cols-1 lg:grid-cols-3 justify-center gap-8 sm:gap-9 lg:gap-6 
        py-12 sm:py-14 lg:py-16
        bg-white
      "
                >
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="
            group relative
            w-full max-w-[380] lg:max-w-[380]
            rounded-2xl bg-white
            p-7 sm:p-8 lg:p-9
            shadow-[0_5px_15px_rgba(0,0,0,0.05)]
            transition-all duration-400 ease-out
            hover:-translate-y-1.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]
            overflow-hidden
          "
                        >
                            {/* Gradient border – reliable method */}
                            <div
                                className="
              pointer-events-none absolute inset-0 rounded-2xl
              bg-linear-to-b from-blue-600 to-white p-0.5 -z-10
            "
                            >
                                <div className="h-full w-full rounded-[14px] bg-white" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 space-y-5 sm:space-y-6">
                                {/* Icon */}
                                <div className="transition-transform duration-400 group-hover:-translate-y-7">
                                    <img
                                        src={value.imageSrc}
                                        alt={value.alt}
                                        className="h-auto w-[100] sm:w-[110] lg:w-[120] mx-auto"
                                    />
                                </div>

                                {/* Title */}
                                <h3
                                    className="
                font-['Sofia_Sans_Condensed'] italic font-bold
                text-4xl sm:text-5xl lg:text-[47px]
                leading-tight text-gray-900
              "
                                >
                                    {value.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="
                font-['Host_Grotesk']
                text-base sm:text-[15.5px] lg:text-[16px]
                leading-relaxed text-gray-600
              "
                                >
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>

            </div>
        </>
    )
}

export default Technology
