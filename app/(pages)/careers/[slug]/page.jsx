'use client'
import { use } from 'react';
import { jobListings, openApp } from "@/app/_constant";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Upload, ArrowLeft } from "lucide-react";

export default function JobDetailPage({ params }) {
    const router = useRouter();
    
    // Use the 'use' hook to unwrap params in Next.js 15 Client Components
    const resolvedParams = use(params);
    const slug = resolvedParams.slug;

    // Data retrieval logic
    const job = jobListings.find((item) => item.id === slug) || 
                (slug === 'open-application' ? openApp : null);

    // Safety check for invalid URLs
    if (!job) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen font-mono">
                <p className="text-xl mb-4">Job Position Not Found</p>
                <Link href="/careers" className="text-primary underline">Return to Careers</Link>
            </div>
        );
    }

    // Navigation logic to the full-page contact form with pre-filled role
  const handleApplyNavigation = () => {
  // Check if job exists, then push to the full URL
  if (job?.title) {
    const encodedRole = encodeURIComponent(job.title);
    router.push(`/contact?role=${encodedRole}`);
  }
};

    return (
        <div className="bg-white min-h-screen py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
                {/* Back Navigation */}
                <Link 
                    href="/careers" 
                    className="group flex items-center gap-2 text-gray-400 hover:text-black mb-12 inline-block font-mono transition-all"
                >
                    <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Careers
                </Link>

                {/* Header Section: Matches image_3417fb.png structure */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-black italic font-serif text-black mb-4 tracking-tight">
                            {job.title}
                        </h1>
                        <div className="flex gap-4 font-mono text-sm text-gray-400 uppercase tracking-widest border-l-2 border-primary pl-4">
                            <span>{job.type}</span> 
                            <span className="text-primary">•</span> 
                            <span>{job.location}</span>
                        </div>
                    </div>
                    
                    <button 
                        onClick={handleApplyNavigation}
                        className="bg-black text-white px-12 py-5 text-nowrap rounded-2xl font-bold text-lg hover:bg-primary transition-all shadow-xl shadow-black/5 active:scale-95"
                    >
                        Apply for this position
                    </button>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 border-t border-gray-100 pt-16">
                    
                    {/* Left Column: Role Details */}
                    <div className="lg:col-span-2 space-y-16">
                        <section>
                            <h2 className="text-3xl font-bold mb-6 italic font-serif text-black">
                                Role Overview
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed font-light">
                                {job.fullDescription}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-6 italic font-serif text-black">
                                Key Requirements
                            </h2>
                            <ul className="space-y-6">
                                {job.requirements.map((req, i) => (
                                    <li key={i} className="flex items-start gap-6 text-xl text-gray-700 font-light group">
                                        <div className="size-2 bg-chart-1 rounded-full mt-3 shrink-0 group-hover:scale-150 transition-transform" />
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Right Column: Benefits & CTA Sidebar */}
                    <div className="space-y-10">
                        <div className="bg-gray-50 p-10 rounded-[40px] border border-gray-100 hover:shadow-lg transition-shadow">
                            <h3 className="text-2xl font-bold mb-8 font-serif italic text-black">
                                Perks & Benefits
                            </h3>
                            <ul className="space-y-4">
                                {job.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                                        <div className="size-1.5 bg-primary rounded-full" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Footer CTA: Matches image_3417fb.png */}
                {/* <div className="mt-32 pt-20 border-t border-gray-100 text-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight text-black italic font-serif">
                        Ready to help build the <br /> 
                        future of digital products?
                    </h2>
                    <button 
                        onClick={handleApplyNavigation}
                        className="bg-black text-white px-16 py-6 rounded-full font-bold text-xl hover:bg-primary transition-all shadow-2xl"
                    >
                        • Apply now
                    </button>
                </div> */}
            </div>
        </div>
    );
}