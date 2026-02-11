"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/Images/Logo.svg";
import {
  ArrowRight,
  Menu,
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
import { getSpotlightVideo, services_Nav } from "@/app/_constant";

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
  // const ActiveIcon = services_Nav[activeService].icon;

  function ServiceItem({ service, isActive, onHover }) {
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
                <div className="text-lg font-medium leading-none">{service.title}</div>
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
                      {services_Nav.map((service, index) => (
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
                            {services_Nav[activeService].subPages ? (
                              <div className="space-y-2.5">
                                {services_Nav[activeService].subPages.map((sub, i) => (
                                  <div key={i} className="flex items-center  gap-3">
                                    {/* <Dot size={20} className="flex items-center text-primary" /> */}
                                    <div className="flex items-center justify-center bg-black h-2 w-2" />
                                    <div>
                                      <Link
                                        href={sub.href}
                                        className="text-sm font-medium text-primary hover:underline capitalize"
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

                      {services_Nav[activeService].href && !services[activeService].subPages && (
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
                      {/* <h4 className="text-lg font-semibold mb-3">Spotlight</h4> */}
                      {/* <div className="flex-1 bg-muted/40 rounded-lg overflow-hidden border border-border"> */}
                      <div className="aspect-square w-full mt-2">
                        <Image
                          width="100"
                          height="100"
                          alt="/"
                          src={getSpotlightVideo(services_Nav[activeService].title)}
                          title={`${services_Nav[activeService].title} Spotlight Video`}
                          className="w-xs h-auto"
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
          <div className="flex flex-col p-8 gap-8 text-xl font-medium bg-accent/95 backdrop-blur rounded-2xl border border-border/50">
            <Link href="/about-us" onClick={() => setMobileOpen(false)}>
              About Us
            </Link>

            <div className="w-full max-w-sm space-y-6">
              <div className="font-semibold text-lg">Services</div>
              {services_Nav.map((item) => (
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