"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/Images/Logo.svg";
import LogoV from "@/public/logoV.svg";
import {
  ArrowRight,
  ChevronUp,
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
  const [NavHidden, setNavHidden] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // For mobile — which service's subpages are open
  const [openSubMobile, setOpenSubMobile] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bg_animation =
    "px-0 lg:px-10 w-[85%] bg-foreground py-8 rounded-2xl top-8 text-white shadow-[0_12px_35px_rgba(0,0,0,0.25)]";

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
        "sticky top-0 z-50 w-full mx-auto transition-all duration-500 max-w-7xl bg-transparent py-8 shadow-none",
        scrolled && `${bg_animation}`,
      )}
    >
      <div className="flex items-center justify-between px-6 lg:px-0 -my-2">
        {/* Logo */}
        <Link href="/">
          {scrolled ?
            <Image
              src={LogoV}
              alt="Company Logo"
              width={40}
              height={48}
              className={`transition-all duration-500 h-7 lg:h-8`}
              priority
            /> :
            <Image
              src={Logo}
              alt="Company Logo"
              width={160}
              height={48}
              className={`transition-all duration-500`}
              priority
            />
          }
        </Link>

        {/* Desktop Menu – unchanged */}
        <div className="hidden lg:flex items-center gap-10">
          <Link href="/about-us" className="font-medium hover:text-primary transition-colors">
            About Us
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-primary transition-colors">
                  <Link href="/services">Services</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-6 p-6 lg:w-[840px] lg:grid-cols-[0.9fr_1.25fr_1fr]">
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

                    <div className="row-span-3 flex flex-col space-y-6 py-2">
                      <div className="space-y-4">
                        <div className="flex items-start shrink-0 gap-4">
                          <div className="flex-1">
                            {services_Nav[activeService].subPages ? (
                              <div className="space-y-2.5">
                                {services_Nav[activeService].subPages.map((sub, i) => (
                                  <div key={i} className="flex items-center gap-3">
                                    <div className="flex items-center justify-center bg-black h-2 w-2" />
                                    <div>
                                      <Link
                                        href={sub.href}
                                        className="text-sm font-medium text-primary hover:underline capitalize"
                                      >
                                        {sub.label}
                                      </Link>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      {services_Nav[activeService].href && !services_Nav[activeService].subPages && (
                        <Link
                          href={services_Nav[activeService].href}
                          className="inline-flex items-center text-base font-medium text-primary hover:underline"
                        >
                          Learn more <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      )}
                    </div>

                    <div className="row-span-2 flex flex-col">
                      <div className="aspect-square w-full mt-2">
                        <Image
                          width={100}
                          height={100}
                          alt="/"
                          src={getSpotlightVideo(services_Nav[activeService].title)}
                          title={`${services_Nav[activeService].title} Spotlight Video`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
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

      {/* ──────────────────────────────────────────────── */}
      {/* MOBILE MENU – with dropdown + sub-dropdown */}
      {/* ──────────────────────────────────────────────── */}
      {/* ──────────────────────────────────────────────── */}
      {/* MOBILE MENU – with smooth animated dropdowns */}
      {/* ──────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden mt-4 px-4 bg-foreground text-accent overflow-hidden">
          <div className="flex flex-col py-8 px-8 gap-6 text-xl font-medium">
            <Link
              href="/about-us"
              className="transition-colors hover:text-primary"
            >
              About Us
            </Link>

            {/* Services section with animated dropdown */}
            <div>
              <div
                className="font-semibold flex items-center justify-between cursor-pointer transition-colors hover:text-primary"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <Link
                  href="/services"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileOpen(false);
                  }}
                >
                  Services
                </Link>
                <span
                  className={cn(
                    "text-2xl leading-none transition-transform duration-300",
                    mobileServicesOpen && "rotate-180"
                  )}
                >
                  <ChevronUp />
                </span>
              </div>

              {/* Animated Services list container */}
              <div
                className={cn(
                  "grid transition-all duration-400 ease-out",
                  mobileServicesOpen ? "grid-rows-[1fr] opacity-100 pt-3" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-5 pl-4 border-l border-white/30 pt-3 pb-2">
                    {services_Nav.map((service, index) => (
                      <div key={service.title} className="space-y-3">
                        {/* Service row – clickable to toggle subpages */}
                        <div
                          className="flex items-center justify-between cursor-pointer text-lg transition-colors hover:text-primary"
                          onClick={() =>
                            setOpenSubMobile(openSubMobile === index ? null : index)
                          }
                        >
                          <Link
                            href={service.href || "/services"}
                            className="transition-colors"
                          >
                            {service.title}
                          </Link>

                          {service.subPages?.length > 0 && (
                            <span
                              className={cn(
                                "text-xl transition-transform duration-300",
                                openSubMobile === index && "rotate-180"
                              )}
                            >
                              <ChevronUp />
                            </span>
                          )}
                        </div>

                        {/* Animated subpages container */}
                        {service.subPages && (
                          <div
                            className={cn(
                              "grid transition-all duration-300 ease-out",
                              openSubMobile === index
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            )}
                          >
                            <div className="overflow-hidden">
                              <div className="flex flex-col gap-3 pl-6 border-l border-white/20 pt-2 pb-1">
                                {service.subPages.map((sub, i) => (
                                  <Link
                                    key={i}
                                    href={sub.href}
                                    className="text-base text-accent hover:decoration-primary hover:underline underline-offset-4 capitalize transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/team"
              className="transition-colors hover:text-primary"
            >
              Our Team
            </Link>

            <Link
              href="/careers"
              className="transition-colors hover:text-primary"
            >
              Careers
            </Link>

            <Button size="lg" className="w-full max-w-sm" asChild>
              <Link href="/contact">
                Book a Consultation
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}