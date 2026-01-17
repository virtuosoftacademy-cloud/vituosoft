'use client'

import LogoLoop from '@/components/LogoLoop';

const techLogos = [
  { node: "/", alt: "Company 1" ,title: "React", href: "https://react.dev" },
  { node: "/", alt: "Company 1" ,title: "Next.js", href: "https://nextjs.org" },
  { node: "/", alt: "Company 1" ,title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: "/", alt: "Company 1" ,title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

export default function LogoCloud() {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}} className='mt-10 -mb-40'>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={20}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
      
      {/* Vertical loop with deceleration on hover */}
      {/* <LogoLoop
        logos={techLogos}
        speed={80}
        direction="up"
        logoHeight={48}
        gap={40}
        hoverSpeed={20}
        fadeOut
      /> */}
    </div>
  );
}