' use client'
import { secondarySections, servicesData, socialLinks, solutions } from '@/app/_constant';
import Link from 'next/link';
import React, { use } from 'react';


const Footer = () => {
  return (
    <footer className="bg-foreground text-accent py-16 px-6 md:px-10 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* ROW 1: All main services – mapped from data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-10 lg:gap-12 mb-16">
          {servicesData.map((section) => (
            <div key={section.title}>
              <h4 className="text-white uppercase text-xs tracking-wide font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3 text-[#6D7786] text-sm">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ROW 2: Secondary sections + Solutions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16 border-t border-foreground pt-12">
          {secondarySections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white uppercase text-xs tracking-wide font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3 text-[#6D7786] text-sm">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white uppercase text-xs tracking-wide font-semibold mb-6">Solutions</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {solutions.map((solution) => (
                <span
                  key={solution}
                  className="bg-[#293547] text-[#BABDC4] px-3 py-1.5 rounded-full text-xs"
                >
                  {solution}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 3: Address | Subscribe | Follow Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 border-t border-[#222b36] pt-10 mb-10">
          <div>
            <h4 className="text-white uppercase text-xs tracking-wide font-semibold mb-4">Address</h4>
            <p className="text-[#6D7786] text-sm leading-relaxed">
              C, 35, Block 10 A, Gulshan-e-Iqbal,<br />Karachi, Pakistan
            </p>
          </div>

          <div>
            <h4 className="text-white uppercase text-xs tracking-wide font-semibold mb-4">
              Subscribe to Newsletter
            </h4>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Get news by email"
                className="flex-1 bg-transparent border border-[#8A94A4] rounded-lg px-4 py-3 text-white placeholder-[#8A94A4] focus:outline-none focus:border-[#0755E9] text-sm"
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/70 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex flex-col items-start">
            <h4 className="text-white uppercase text-xs tracking-wide font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <img
                    src={link.img}
                    alt={link.name}
                    className="w-8 h-8 hover:opacity-70 transition-opacity"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 4: Brand + Copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8 border-t border-foreground">
          <img
            src="https://virtuosoft.pk/virtuosoft/wp-content/uploads/2025/11/Frame-1000001218.png"
            alt="VirtuoSoft Logo"
            className="h-10"
          />
          <img
            src="https://virtuosoft.pk/virtuosoft/wp-content/uploads/2025/11/Group-1000001432.png"
            alt="VirtuoSoft Brand"
            className="h-8"
          />
          <span className="text-[#6D7786] text-sm">
            © {new Date().getFullYear()} Virtuosoft | All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;