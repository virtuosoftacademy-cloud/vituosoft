"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/Images/Logo.png";
import {
  ArrowRight,
  Code2,
  Dot,
  DotSquare,
  Globe,
  LineChart,
  Megaphone,
  Menu,
  Palette,
  Smartphone,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [NavHidden, setNavHidden] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      setNavHidden(window.scrollY > 4000)
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bg_animation =
    "px-6 lg:px-10 w-[85%] bg-foreground py-8 rounded-2xl top-[69px] text-white shadow-[0_12px_35px_rgba(0,0,0,0.25)]";

  const services = [
    {
      icon: Code2,
      title: "Advisory",
      subPages: [
        { label: "Product Strategy & Roadmapping", href: "#" },
        { label: "Digital Transformation", href: "#" },
      ],
    },
    {
      icon: Smartphone,
      title: "Artificial Intelligence",
      subPages: [
        { label: "Custom Agent Development", href: "#" },
        { label: "Generative A.I", href: "#" },
        { label: "Data Science & MLOps", href: "#" },
        { label: "Conservational Intelligence", href: "#" },
        { label: "Computer Vision", href: "#" },
        { label: "Optical Character Recognition", href: "#" },
      ],
    },
    {
      icon: Palette,
      title: "Software Engineering",
      subPages: [
        { label: "Custom Software Development", href: "#" },
        { label: "Application Development (Mobile & Web)", href: "#" },
        { label: "Application Modernization", href: "#" },
        { label: "Database Migration", href: "#" },
        { label: "Third-Party Integrations", href: "#" },
      ],
    },
    {
      icon: Globe,
      title: "Data Service",
      subPages: [
        { label: "Data Consulting ", href: "#" },
        { label: "Data Warehouse Solutions", href: "#" },
        { label: "Data Analytics & BI", href: "#" },
      ],
    },
    {
      icon: LineChart,
      title: "Digital Marketing",
      subPages: [
        { label: "Content Creation", href: "#" },
        { label: "Social Media Management", href: "#" },
        { label: "Video Editing", href: "#" },
        { label: "Ads Managment", href: "#" },
        { label: "Copywriting", href: "#" },
        { label: "Design & Creative Solutions", href: "#" },
      ],
    },
    {
      icon: Megaphone,
      title: "Business Enablement",
      subPages: [
        { label: "Account & Finance", href: "#" },
        { label: "Hr & Recruitment", href: "#" },
      ],
    },
  ];

  function getSpotlightVideo(title) {
    const videoMap = {
      "Advisory": "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=90&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "Artificial Intelligence": "https://images.unsplash.com/photo-1678347123725-2d0d31bc06bd?q=80&w=1102&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "Software Engineering": "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "Data Service": "https://plus.unsplash.com/premium_photo-1740363268539-cd9093c3b5d1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "Digital Marketing": "https://plus.unsplash.com/premium_photo-1684225764999-3597a8da10ab?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "Business Enablement": "https://images.unsplash.com/photo-1720289024474-946b6feabfcb?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };
    return videoMap[title] || "https://images.unsplash.com/photo-1720289024474-946b6feabfcb?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }

  const ActiveIcon = services[activeService].icon;

  function ServiceItem({ service, isActive, onHover }) {
    const { title, icon: Icon, description, subPages } = service;

    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            href={service.href || "#"}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
              "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              isActive && "bg-accent/60"
            )}
            onMouseEnter={onHover}
          >
            <div className="flex items-center gap-3">
              {/* <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted">
                <Icon className="size-5" />
              </div> */}
              <div className="flex-1">
                <div className="text-lg font-medium leading-none">{title}</div>
              </div>
            </div>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }

  return (
    <nav
      className={cn(
        "fixed top-8 left-1/2 z-50 -translate-x-1/2 w-full mx-auto transition-all duration-500 max-w-7xl",
        scrolled ? bg_animation : "bg-transparent py-5 shadow-none",
        // NavHidden && 'opacity-0 pointer-events-none'
      )}
    >
      <div className="flex items-center justify-between px-10 lg:px-0">
        {/* Logo */}
        <Link href="/">
          <Image
            src={Logo}
            alt="Company Logo"
            width={160}
            height={48}
            className={`transition-all duration-500 ${scrolled && "brightness-0 invert"}`}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <Link href="/about-us" className="font-medium hover:text-primary transition-colors">
            About Us
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-primary transition-colors">
                  <Link href="/services">
                    Services
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-6 p-6 lg:w-[840] lg:grid-cols-[0.9fr_1.25fr_1fr]">
                    {/* LEFT - Service List */}
                    <ul className="row-span-3 grid gap-1.5">
                      {services.map((service, index) => (
                        <ServiceItem
                          key={service.title}
                          service={service}
                          isActive={activeService === index}
                          onHover={() => setActiveService(index)}
                        />
                      ))}
                    </ul>

                    {/* MIDDLE - Detailed Preview */}
                    <div className="row-span-3 flex flex-col space-y-6 py-2">
                      <div className="space-y-4">
                        <div className="flex items-start shrink-0 gap-4">
                          <div className="flex-1">
                            {services[activeService].subPages ? (
                              <div className="space-y-2.5">
                                {services[activeService].subPages.map((sub, i) => (
                                  <div key={i} className="flex items-center  gap-3">
                                    {/* <Dot size={20} className="flex items-center text-primary" /> */}
                                    <div className="flex items-center justify-center bg-black h-2 w-2" />
                                    <div>
                                      <Link
                                        href={sub.href}
                                        className="text-sm font-medium text-primary hover:underline"
                                      >
                                        {sub.label}
                                      </Link>
                                    </ div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-base text-muted-foreground leading-relaxed">
                                {services[activeService].description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {services[activeService].href && !services[activeService].subPages && (
                        <Link
                          href={services[activeService].href}
                          className="inline-flex items-center text-base font-medium text-primary hover:underline"
                        >
                          Learn more <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      )}
                    </div>

                    {/* RIGHT - Spotlight Video */}
                    <div className="row-span-2 flex flex-col">
                      <h4 className="text-lg font-semibold mb-3">Spotlight</h4>
                      {/* <div className="flex-1 bg-muted/40 rounded-lg overflow-hidden border border-border"> */}
                      <div className="aspect-square w-full">
                        <Image
                          width="100"
                          height="100"
                          alt="/"
                          src={getSpotlightVideo(services[activeService].title)}
                          title={`${services[activeService].title} Spotlight Video`}
                          className="w-6xl"
                        />
                        {/* <iframe
                            width="100%"
                            height="100%"
                            src={getSpotlightVideo(services[activeService].title)}
                            title={`${services[activeService].title} Spotlight Video`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          /> */}
                      </div>
                    </div>
                    {/* <p className="text-xs text-muted-foreground mt-2.5 text-center">
                        Watch a quick demo / showcase related to this service
                      </p> */}
                  </div>
                  {/* </div> */}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>


          <Link href="/team" className="font-medium hover:text-primary transition-colors">
            Our Team
          </Link>
          <Link href="/careers" className="font-medium hover:text-primary transition-colors">
            Careers
          </Link>
        </div>

        <Button asChild size="lg" className="hidden lg:flex">
          <Link href="/contact">Book Consultation</Link>
        </Button>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-4 px-4">
          <div className="flex flex-col items-center p-8 gap-8 text-xl font-medium bg-accent/95 backdrop-blur rounded-2xl border border-border/50">
            <Link href="/about-us" onClick={() => setMobileOpen(false)}>
              About Us
            </Link>

            <div className="w-full max-w-sm space-y-6">
              <div className="font-semibold text-lg">Services</div>
              {services.map((item) => (
                <Link
                  key={item.title}
                  href={item.href || "#"}
                  className="block hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <Link href="/careers" onClick={() => setMobileOpen(false)}>
              Careers
            </Link>

            <Button size="lg" className="w-full max-w-sm" asChild>
              <Link href="/consultation" onClick={() => setMobileOpen(false)}>
                Book a Consultation
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}