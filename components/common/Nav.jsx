"use client";
import Logo from "@/public/assets/Images/Logo.png"
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
function Nav() {
  const [MobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!MobileDrawerOpen);
  };
  const HoverCardContentStyle = 'w-sm lg:w-[11rem] p-3'

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto relative text-sm">
        <div className="flex justify-between items-center py-4 lg:py-6 px-6">
          <div>
            <Link className="flex justify-center items-center" href="/">
              <Image src={Logo} className="w-40 " alt="Logo" />
            </Link>
          </div>
          <div className="font-medium cursor-pointer">

            <div className="hidden lg:flex">
              <ul className="flex space-x-12">
              
                <li>
                  <Link href="#">
                    About Us
                  </Link>
                </li>
                <li>
                  <Popover>
                    <PopoverTrigger>Our Team</PopoverTrigger>
                    <PopoverContent className={HoverCardContentStyle}>
                      <DropdownMenuLabel>
                        <Link href="#">Consultation</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="/ghostwriting">GhostWriting</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="#">Editing</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="#">Cover Design</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="/publishing">Publishing</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="/marketing">Marketing</Link>
                      </DropdownMenuLabel>
                    </PopoverContent>
                  </Popover>
                </li>
                <li>
                  <Popover>
                    <PopoverTrigger>Our Careers</PopoverTrigger>
                    <PopoverContent className={HoverCardContentStyle}>
                      <DropdownMenuLabel>
                        <Link href="#">Consultation</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="#">Social Media Management & Marketing</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="#">Website Design</Link>
                      </DropdownMenuLabel>
                    </PopoverContent>
                  </Popover>
                </li>
                <li>
                  <Link href="#">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

          </div>
            <div>
              <Button className="hidden lg:flex">
                <Link href="#">Book a Consultation</Link>
              </Button>
            </div>

          <div className="lg:hidden md:flex justify-end pr-5 pt-2">
            <button onClick={toggleNavbar} aria-label="Toggle navigation">
              {MobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {MobileDrawerOpen && (
          <div className="cursor-pointer fixed z-40 fixed right-0 flex flex-col justify-center items-center lg:hidden w-full h-full p-5 text-center bg-secondary text-4xl">
            <ul className="space-y-12">
           
              <li>
                <Link href="#">
                  About Us
                </Link>
              </li>
              <li className="z-50">
                <HoverCard>
                  <HoverCardTrigger>Services For Author</HoverCardTrigger>
                  <HoverCardContent>
                    <DropdownMenuLabel>
                      <Link href="">Consultation</Link>
                    </DropdownMenuLabel>
                    <DropdownMenuLabel>
                      <Link href="/ghostwriting">GhostWriting</Link>
                    </DropdownMenuLabel>
                    <DropdownMenuLabel>
                      <Link href="#">Editing</Link>
                    </DropdownMenuLabel>
                    <DropdownMenuLabel>
                      <Link href="#">Cover Design</Link>
                    </DropdownMenuLabel>
                    <DropdownMenuLabel>
                      <Link href="/publishing">Publishing</Link>
                    </DropdownMenuLabel>
                    <DropdownMenuLabel>
                      <Link href="/marketing">Marketing</Link>
                    </DropdownMenuLabel>
                  </HoverCardContent>
                </HoverCard>
              </li>
              <li>
                <HoverCard>
                  <HoverCardTrigger>Services For Business</HoverCardTrigger>
                  <HoverCardContent>
                    <DropdownMenuLabel>
                      <Link href="">Consultation</Link>
                    </DropdownMenuLabel>
                    <DropdownMenuLabel>
                      <Link href="">Social Media Management & Marketing</Link>
                    </DropdownMenuLabel>
                    <DropdownMenuLabel>
                      <Link href="">Website Design</Link>
                    </DropdownMenuLabel>
                  </HoverCardContent>
                </HoverCard>
              </li>
              <li>
                <Link href="#">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;