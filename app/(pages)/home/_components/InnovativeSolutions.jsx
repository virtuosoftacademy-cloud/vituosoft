'use client'

import { Button } from "@/components/ui/button"
import { CommonHead, HeroRegular, Italic } from "../../../../components/Styles/StyleClasses"
import Link from "next/link"
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

function InnovativeSolutions() {

    const services = [
        {
            id: "ai",
            title: "Artificial Intelligence",
            description: "AI Solutions That Automate And Innovate",
            bgColor: "bg-[#0E3782]",
            textColor: "text-white",
            bgImage: "https://virtuosoft.pk/virtuosoft/wp-content/uploads/2025/11/Untitled-design-8-1-1.png",
            gridClasses: "col-span-full md:col-span-1 lg:row-span-2 lg:min-h-[600px]",
            hoverTranslate: "translate-y-48 group-hover:-translate-y-28 lg:group-hover:-translate-y-32",
            buttons: [
                { label: "Custom Agent Development", href: "https://virtuosoft.pk/virtuosoft/?page_id=10576" },
                { label: "Generative AI", href: "https://virtuosoft.pk/virtuosoft/?page_id=10496" },
                { label: "Data Science & MLOps", href: "https://virtuosoft.pk/virtuosoft/?page_id=12388" },
                { label: "Conversational Intelligence", href: "https://virtuosoft.pk/virtuosoft/?page_id=14338" },
                { label: "Computer Vision", href: "https://virtuosoft.pk/virtuosoft/?page_id=14427" },
                { label: "Optical character recognition", href: "https://virtuosoft.pk/virtuosoft/?page_id=14454" },
            ],
        },
        {
            id: "advisory",
            title: "Advisory & Strategy",
            description: "Expert guidance to drive digital growth.",
            bgColor: "bg-[#003366]",
            textColor: "text-white",
            bgImage: "https://virtuosoft.pk/virtuosoft/wp-content/uploads/2025/11/Untitled-design-9-1-3.png",
            gridClasses: "col-span-full md:col-span-1 lg:row-span-1 lg:min-h-[300]",
            hoverTranslate: "translate-y-20 group-hover:-translate-y-20 lg:group-hover:-translate-y-10",
            buttons: [
                { label: "Product Strategy & Roadmapping", href: "https://virtuosoft.pk/virtuosoft/?page_id=10620" },
                { label: "Digital Transformation", href: "https://virtuosoft.pk/virtuosoft/?page_id=10679" },
            ],
        },
        {
            id: "business",
            title: "IT GOVERNANCE",
            description: "Structured Governance That Strengthens Control And Accountability",
            bgColor: "bg-[#e6e6e6]",
            textColor: "text-[#111]",
            bgImage: "https://virtuosoft.pk/virtuosoft/wp-content/uploads/2025/11/3-1.png",
            gridClasses: "col-span-full md:col-span-1 lg:row-span-1 lg:min-h-[300]",
            hoverTranslate: "translate-y-30 group-hover:-translate-y-20 lg:group-hover:-translate-y-2",
            isBusiness: true,
            buttons: [
                { label: "Regulatory Compliance", href: "https://virtuosoft.pk/virtuosoft/?page_id=12097" },
                { label: "Governance Framework Development", href: "https://virtuosoft.pk/virtuosoft/?page_id=12324" },
                { label: "Resource Augmentation", href: "https://virtuosoft.pk/virtuosoft/?page_id=12405" },
            ],
        },
        {
            id: "engineering",
            title: "Software Engineering",
            description: "Designing, building, and modernizing digital systems that scale with your business.",
            bgColor: "bg-[#2a2d30]",
            textColor: "text-white",
            bgImage: "https://virtuosoft.pk/virtuosoft/wp-content/uploads/2025/11/Untitled-design-7-1-1.png",
            gridClasses: "col-span-full md:col-span-2 lg:col-span-2 lg:row-span-1 min-h-[300px]",
            hoverTranslate: "translate-y-50 md:translate-y-20 md:group-hover:-translate-y-16 lg:group-hover:-translate-y-10",
            isBusiness: true,
            MoreBtn:"/",
            buttons: [
                { label: "Custom Software Development", href: "https://virtuosoft.pk/virtuosoft/?page_id=10690" },
                { label: "App Development", href: "https://virtuosoft.pk/virtuosoft/?page_id=10698" },
                { label: "App Modernization", href: "https://virtuosoft.pk/virtuosoft/?page_id=11314" },
                { label: "Database Migration", href: "#" },
                { label: "Third-Party Integrations", href: "https://virtuosoft.pk/virtuosoft/?page_id=10690" },
            ],
        },
    ];
    
    return (
        <div className="max-w-7xl mx-auto px-10 my-8 lg:my-10">
            <div className="-space-y-2 lg:-space-y-4">
                <h4 className={`font-normal ${CommonHead}`}>
                    Innovation{" "}
                    <span className="">
                        <strong>
                            <em>
                                Solutions
                            </em>
                        </strong>
                    </span>
                </h4>
                <div className="text-5xl lg:text-[62px] font-light">
                    <div className="flex flex-row gap-1 lg:gap-2 text-3xl lg:text-[62px] items-baseline">
                        <h4 className={`font-normal ${CommonHead}`}>
                            Real{" "}
                            <strong className="italic">
                                <em>
                                    Results
                                </em>
                            </strong>
                        </h4>
                        <div className="bg-chart-1 rounded-full size-1.5 lg:size-2.5 mt-5" />
                    </div>
                </div>
                <div className="text-5xl lg:text-[80px] font-medium mt-2 lg:mt-4">
                    <p className="text-gray-200">Smart service.</p>
                </div>
            </div>
            <div
                className="
          grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[320px_minmax(0,1fr)_minmax(0,1fr)]
          auto-rows-fr md:auto-rows-[300px]
          gap-5 md:gap-6 lg:gap-5
          my-10 lg:my-16 min-h-[620]
        "
            >
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={cn(
                            "group relative overflow-hidden cursor-pointer",
                            "flex flex-col justify-end",
                            "transition-all duration-300 ease-out",
                            "hover:-translate-y-1 hover:shadow-2xl",
                            service.bgColor.startsWith("#") ? `bg-[${service.bgColor}]` : service.bgColor,
                            service.textColor,
                            service.gridClasses
                        )}
                    >
                        {/* Background Image */}
                        <div
                            className="
                absolute inset-0 bg-contain bg-no-repeat bg-center opacity-70
                transition-all duration-500 ease-out
                group-hover:opacity-55 group-hover:-translate-y-2
              "
                            style={{ backgroundImage: `url('${service.bgImage}')` }}
                        />

                        {/* Content */}
                        <div
                            className={cn(
                                "relative z-10 px-6 md:px-7",
                                "md:transition-transform duration-700 ease-out",
                                service.hoverTranslate
                            )}
                        >
                            <h3 className="italic font-bold text-3xl md:text-4xl lg:text-[31px] mb-3 leading-tight">
                                {service.title}
                            </h3>

                            <p className="text-base lg:text-[15px] mb-6 opacity-95 leading-relaxed">
                                {service.description}
                            </p>

                            <div
                                className="flex flex-wrap gap-2.5
                opacity-0 translate-y-4 transition-all duration-500 ease-out
                  group-hover:opacity-100 group-hover:translate-y-0
                "
                            >
                                {service.buttons.map((btn, idx) => (
                                    <Button
                                        key={idx}
                                        variant="outline"
                                        size="sm"
                                        className={cn(
                                            "service-btn",
                                            service.isBusiness && "text-black border-black hover:bg-black hover:text-white hover:border-black"
                                        )}
                                        asChild
                                    >
                                        <a href={btn.href}>{btn.label}</a>
                                    </Button>
                                ))}
                        {/* <Button className={''}><Link href={'/'}>More</Link></Button> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-8 lg:mt-10">
                <Button variant="outline">
                    <Link href="/services">
                        Load More
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default InnovativeSolutions
