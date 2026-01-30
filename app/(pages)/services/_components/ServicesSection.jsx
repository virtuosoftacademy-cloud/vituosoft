

import ServiceCard from "./ServiceCard"
import { advisoryCategory, aiCategory, cloudCategory, engagementCategory, engineeringCategory, optimizationCategory } from "@/app/_constant"


export default function ServicesSection() {
  return (
    <div className="space-y-12 md:space-y-16 lg:space-y-20 py-12 md:py-16">
      <ServiceCard category={aiCategory} />
      <ServiceCard category={advisoryCategory} />
      <ServiceCard category={engineeringCategory} />
      <ServiceCard category={cloudCategory} />
      <ServiceCard category={optimizationCategory}/>
      <ServiceCard category={engagementCategory}/>
    </div>
  )
} 
