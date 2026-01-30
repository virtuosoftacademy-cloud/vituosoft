'use client'
import LinkedinIcon from "@/public/assets/Images/linkedin.png"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function TeamCard({ teammember }) {
  const { name, role, description, image,linkedin } = teammember;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col shadow-2xl pb-6">
      <Image
        className="bg-accent hover:bg-primary transition-all duration-700 cursor-pointer"
        width={380}
        height={380}
        src={image}
        alt={name}
      />

      <div className="flex justify-between items-center mt-4 p-4">
        <h4
          className={`
            text-2xl font-bold uppercase
            cursor-pointer
            transition-colors duration-200
            hover:text-primary
          `}
          onClick={() => setExpanded(!expanded)}
        >
          {name}
        </h4>

        <Link href={linkedin} aria-label="LinkedIn profile">
          <Image
            src={LinkedinIcon}
            width={18}
            height={18}
            alt="LinkedIn"
          />
        </Link>
      </div>

      <h5 className="text-[18px] font-medium text-muted-foreground py-0 px-4">
        {role}
      </h5>

      <div
        className={`
    overflow-hidden transition-[max-height,opacity] duration-800 ease-in-out px-4
    ${expanded ? 'opacity-100' : 'opacity-90'}
  `}
        style={{ maxHeight: expanded ? '700px' : '4.5rem' }} // generous when open
      >
        <p className="text-base leading-relaxed text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
}