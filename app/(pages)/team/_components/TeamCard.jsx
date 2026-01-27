'use client'
import MaxLines from "@/components/maxLines"
import LinkedinIcon from "@/public/assets/Images/linkedin.png"
import Image from "next/image"
import Link from "next/link"

export default function TeamCard({ teammember }) {
  const { name, role, description, image } = teammember
  return (
   <div className="flex flex-col">
      <Image className="bg-accent hover:bg-primary transition-all duration-700" width={380} height={380} src={image} alt={name} />
      <div className="flex justify-between items-center mt-4">
        <h4 className="text-2xl font-bold uppercase">{name}</h4>
        <Link href="/">
          <Image src={LinkedinIcon} width={18} height={18} alt="/" />
        </Link>
      </div>
      <h5 className="text-[18px] py-5">{role}</h5>
      <MaxLines text={description} NoOfLines={3} />
    </div>
  )
}