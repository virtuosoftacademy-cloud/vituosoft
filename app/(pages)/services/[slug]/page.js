"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/* ================= Job Data ================= */
const jobsData= {
  "ux-designer": {
    title: "UX Designer",
    type: "Contract",
    location: "Doha, QA",
    shortDescription: "Shape the tools that drive climate intelligence. You'll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.",
    companyDescription: "At Zero One, we build the technological ecosystems that empower Qatar's leading enterprises to lead with digital accountability. Our platform and services help industrial and operations teams make sense of complex business data-transforming logistics, infrastructure, and ERP metrics into measurable, competitive advantages. Backed by a 50-year legacy through Al-Wataniya International Holdings, we are a mission-driven team of engineers, designers, and consultants working to accelerate the region's shift toward an autonomous, data-driven future.",
    aboutRole: "As a UX Designer at Zero One, you'll shape the user experience behind our integrated solutions. You'll collaborate with product and engineering teams to design intuitive interfaces that simplify complex data for our clients across 12 key industries. Your work will directly influence how organizations across Qatar and the MENA region interact with their digital transformation tools.",
    requirements: [
      "3+ years of experience in UX/UI design, proficient in Figma, Sketch, and modern design tools",
      "Experience working with enterprise software, dashboards, or data visualization is a significant advantage",
      "Strong foundation in user research, wireframing, and prototyping",
      "Ability to communicate design decisions clearly to both executive stakeholders and engineering teams",
      "Curiosity and precision in how you approach complex, large-scale enterprise interfaces",
      "Passion for creating accessible, user-centered designs that solve real business problems"
    ],
    benefits: [
      "Competitive salary and equity options",
      "Flexible, hybrid work environment",
      "Generous PTO and paid volunteer days",
      "Annual sustainability stipend",
      "Team offsites and climate-focused retreats",
      "A mission-first culture that values clarity, impact, and integrity"
    ],
    ctaText: "Ready to shape the future of enterprise design?"
  },
  "data-engineer": {
    title: "Data Engineer",
    type: "Full-Time",
    location: "Doha, QA",
    shortDescription: "Help build the intelligence layer for climate action. You'll turn complex sustainability data into clear, actionable insights for enterprise teams.",
    companyDescription: "At Zero One, we build the technological ecosystems that empower Qatar's leading enterprises to lead with digital accountability. Our platform and services help industrial and operations teams make sense of complex business data-transforming logistics, infrastructure, and ERP metrics into measurable, competitive advantages. Backed by a 50-year legacy through Al-Wataniya International Holdings, we are a mission-driven team of engineers, designers, and consultants working to accelerate the region's shift toward an autonomous, data-driven future.",
    aboutRole: "As a Data Engineer at Zero One, you'll build and maintain the data pipelines that power our integrated solutions. You'll collaborate with product and engineering teams to design robust data architectures that handle complex enterprise data for our clients across 12 key industries. Your work will directly influence how organizations across Qatar and the MENA region process and utilize their business intelligence.",
    requirements: [
      "3+ years of experience in data engineering, proficient in Python, SQL, and modern data stacks",
      "Experience working with ERP, Logistics, or Industrial IoT datasets is a significant advantage",
      "Strong foundation in ETL processes, data warehousing, and cloud platforms (AWS, GCP, Azure)",
      "Ability to communicate complex technical concepts clearly to both executive stakeholders and engineering teams",
      "Curiosity and precision in how you approach messy, large-scale enterprise data",
      "Passion for building reliable, scalable data infrastructure that drives business value"
    ],
    benefits: [
      "Competitive salary and equity options",
      "Flexible, hybrid work environment",
      "Generous PTO and paid volunteer days",
      "Annual sustainability stipend",
      "Team offsites and climate-focused retreats",
      "A mission-first culture that values clarity, impact, and integrity"
    ],
    ctaText: "Ready to help build the future of data infrastructure?"
  },
  "product-manager": {
    title: "Product Manager",
    type: "Part-Time",
    location: "Assi Rayyan, QA",
    shortDescription: "Shape the tools that drive climate intelligence. You'll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.",
    companyDescription: "At Zero One, we build the technological ecosystems that empower Qatar's leading enterprises to lead with digital accountability. Our platform and services help industrial and operations teams make sense of complex business data-transforming logistics, infrastructure, and ERP metrics into measurable, competitive advantages. Backed by a 50-year legacy through Al-Wataniya International Holdings, we are a mission-driven team of engineers, designers, and consultants working to accelerate the region's shift toward an autonomous, data-driven future.",
    aboutRole: "As a Product Manager at Zero One, you'll drive the product vision and roadmap for our integrated solutions. You'll collaborate with engineering, design, and business teams to deliver features that solve real problems for our clients across 12 key industries. Your work will directly influence how organizations across Qatar and the MENA region plan, optimize, and act on their digital transformation strategies.",
    requirements: [
      "3+ years of experience in product management, proficient in Agile methodologies and product analytics",
      "Experience working with enterprise software, B2B products, or industrial technology is a significant advantage",
      "Strong foundation in user research, market analysis, and competitive positioning",
      "Ability to communicate product vision clearly to both executive stakeholders and engineering teams",
      "Curiosity and precision in how you prioritize features and manage complex product backlogs",
      "Passion for building products that solve real-world industrial problems with measurable impact"
    ],
    benefits: [
      "Competitive salary and equity options",
      "Flexible, hybrid work environment",
      "Generous PTO and paid volunteer days",
      "Annual sustainability stipend",
      "Team offsites and climate-focused retreats",
      "A mission-first culture that values clarity, impact, and integrity"
    ],
    ctaText: "Ready to shape the future of enterprise products?"
  },
  "data-scientist": {
    title: "Data Scientist",
    type: "Full-time",
    location: "Doha, QA",
    shortDescription: "Help build the intelligence layer for climate action. You'll turn complex sustainability data into clear, actionable insights for enterprise teams.",
    companyDescription: "At Zero One, we build the technological ecosystems that empower Qatar's leading enterprises to lead with digital accountability. Our platform and services help industrial and operations teams make sense of complex business data-transforming logistics, infrastructure, and ERP metrics into measurable, competitive advantages. Backed by a 50-year legacy through Al-Wataniya International Holdings, we are a mission-driven team of engineers, designers, and consultants working to accelerate the region's shift toward an autonomous, data-driven future.",
    aboutRole: "As a Data Scientist at Zero One, you'll help shape the analytical engine behind our integrated solutions. You'll collaborate with product and engineering teams to design models that interpret industrial impact, forecast supply chain trends, and uncover actionable insights for our clients across 12 key industries. Your work will directly influence how organizations across Qatar and the MENA region plan, optimize, and act on their digital transformation strategies.",
    requirements: [
      "3+ years of experience in data science or applied analytics, proficient in Python, SCI., and modern data stacks",
      "Experience working with ERP, Logistics, or Industrial IoT datasets is a significant advantage",
      "Strong foundation in statistics, data modeling, and predictive analytics",
      "Ability to communicate complex technical insights clearly to both executive stakeholders and engineering teams",
      "Curiosity and precision in how you approach messy, large-scale enterprise data",
      "Passion for solving real-world industrial problems with the purpose of maximizing regional ROI"
    ],
    benefits: [
      "Competitive salary and equity options",
      "Flexible, hybrid work environment",
      "Generous PTO and paid volunteer days",
      "Annual sustainability stipend",
      "Team offsites and climate-focused retreats",
      "A mission-first culture that values clarity, impact, and integrity"
    ],
    ctaText: "Ready to help build the future of climate intelligence?"
  }
};

export default function ServiceSubPage() {
  const params = useParams();
  const slug = params.slug ;
  const service = jobsData[slug];

  if (!service) {
    return (
      <main className="min-h-screen">
        <div className="py-32 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Job not found</h1>
          <Link href="/services" className="text-primary hover:underline">
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Back Link */}
      <div className="flex justify-center items-center pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Careers
          </Link>
        </div>
      </div>

      {/* Job Header */}
      <section className="pb-8 border-b-2 mx-26">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {job.title}
          </h1>
          <p className="text-muted-foreground mb-4">
            {job.type} . {job.location}
          </p>
          <p className="text-foreground leading-relaxed">
            {job.shortDescription}
          </p>
          
        </div>
      </section>

      {/* Job Details */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          {/* Company Description */}
          <div>
            <h2 className="font-bold text-foreground mb-4">Company description</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {job.companyDescription}
            </p>
          </div>

          {/* About the Role */}
          <div>
            <h2 className="font-bold text-foreground mb-4">About the role</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {job.aboutRole}
            </p>
          </div>

          {/* Requirements */}
          <div>
            <h2 className="font-bold text-foreground mb-4">Requirements</h2>
            <ul className="space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                  <span className="text-foreground mt-1.5">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Benefits */}
          <div>
            <h2 className="font-bold text-foreground mb-4">Company benefits</h2>
            <ul className="space-y-2">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                  <span className="text-foreground mt-1.5">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t-2 mx-22">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            {job.ctaText}
          </h2>
          <Button className="bg-primary hover:bg-primary-dark text-background px-8 py-3 font-medium">
            Apply Now
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
