'use client'

import { Mail, MapPin, Phone } from "lucide-react"
import LogoCloud from "../../home/_components/LogoCloud"

function ContactForm() {
    const Project_Type = [
        {
            id: 1,
            label: "$5k - $25K",
            ProjectValue: "5k_25K"
        },
        {
            id: 2,
            label: "$25k - $50K",
            ProjectValue: "25k_50K"
        },
        {
            id: 3,
            label: "$50k - $100K",
            ProjectValue: "50k_100K"
        },
        {
            id: 4,
            label: "$100k +",
            ProjectValue: "100K_+"
        },
    ]
    const Services = [
        {
            id: 1,
            label: "Design",
            ServiceValue: "design"
        },
        {
            id: 2,
            label: "Development",
            ServiceValue: "development"
        },
        {
            id: 3,
            label: "Marketing",
            ServiceValue: "marketing"
        },
        {
            id: 4,
            label: "SEO",
            ServiceValue: "seo"
        },
        {
            id: 5,
            label: "All",
            ServiceValue: "all"
        },
    ]
    return (
        <>
            <div className="flex justify-center gap-8 py-10">
                {/* Contact Form */}
                <div className="group relative rounded-xl text-left bg-white p-12
            shadow-[0_10px_25px_rgba(0,0,0,0.05)] overflow-hidden translate-0">
                    <div
                        className="
            pointer-events-none absolute inset-0 rounded-[15px]
            bg-linear-to-r from-primary/60 to-white p-0.5 -z-10
          "
                    >
                        <div className="h-full w-full rounded-[13px] bg-white" />
                    </div>
                    {/* <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3> */}
                    <form className="space-y-6 text-sm">
                        <div className="grid md:grid-cols-1 gap-6">
                            <div>
                                <input
                                    type="text"
                                    className="w-full py-3 bg-white outline-0 focus:border-b-ring-2 focus:border-b-primary border-b text-foreground placeholder-foreground/70"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="w-full py-3 bg-white outline-0 focus:border-b-ring-2 focus:border-b-primary border-b text-foreground placeholder-foreground/70"
                                    placeholder="Company Name"
                                />
                            </div>
                        </div>

                        <div>
                            <input
                                type="text"
                                className="w-full py-3 bg-white outline-0 focus:border-b-ring-2 focus:border-b-primary border-b text-foreground placeholder-foreground/70"
                                placeholder="Mobile Number"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                className="w-full transition-all duration-500 py-3 bg-white outline-0 focus:border-b-ring-2 focus:border-b-primary border-b text-foreground placeholder-foreground/70"
                                placeholder="Email"
                            />
                        </div>
                        <div className="text-foreground/70">
                            <label>
                                Project Type
                            </label>
                            <div className="mt-6 font-medium text-[15px] tracking-wider space-x-2">
                                {Services.map(type =>
                                    <span value={type.ProjectValue} key={type.id} className="text-foreground rounded-full border px-4 py-2 hover:border-primary transition-all duration-500 hover:text-primary">
                                        {type.label}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="text-foreground/70">
                            <label>
                                Budget
                            </label>
                            <div className="mt-6 font-medium text-[15px] tracking-wider space-x-2">
                                {Project_Type.map(type =>
                                    <span value={type.ProjectValue} key={type.id} className="text-foreground rounded-full border px-4 py-2 hover:border-primary transition-all duration-500 hover:text-primary">
                                        {type.label}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div>
                            <textarea
                                rows={3}
                                className="w-full px-4 py-3 transition-all duration-500 bg-background  outline-0 focus:border-b-ring-2 focus:border-b-primary border-b text-foreground placeholder-slate-400"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 text-accent font-semibold py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                        >
                            <Mail className="h-5 w-5" />
                            <span>Send Message</span>
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                
                    {/* <div className="p-8 group relative rounded-xl text-left bg-white
            shadow-[0_10px_25px_rgba(0,0,0,0.05)] overflow-hidden translate-0">
                        <div
                            className="
            pointer-events-none absolute inset-0 rounded-[15px]
            bg-linear-to-b from-primary/60 to-white p-0.5 -z-10
          "
                        >
                            <div className="h-full w-full rounded-[13px] bg-white" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h3>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <Mail className="h-6 w-6 mt-1 text-primary" />
                                <div>
                                    <div className="font-semibold">Email</div>
                                    <div className="text-foreground-300">info@virtuosoft.pk</div>
                                    <div className="text-sm text-foreground-400">Response within 24 hours</div>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Phone className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <div className="font-semibold">Phone</div>
                                    <div className="text-foreground-300">+1 (555) 123-4567</div>
                                    <div className="text-sm text-foreground-400">Available 9 AM - 6 PM EST</div>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <MapPin className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <div className="font-semibold">Studio Location</div>
                                    <div className="text-foreground-300">Los Angeles, CA</div>
                                    <div className="text-sm text-foreground-400">Professional home studio</div>
                                </div>
                                </div>
                        </div>
                    </div> */}

                    {/* <div className="bg-slate-100 rounded-2xl p-6">
                <h4 className="text-lg font-semibold mb-4 text-primary">Quick Facts</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground-400">Typical Turnaround:</span>
                    <span className="text-foreground">24-48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-400">Rush Jobs:</span>
                    <span className="text-foreground">Same day available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-400">File Formats:</span>
                    <span className="text-foreground">WAV, MP3, AIFF</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-400">Revisions:</span>
                    <span className="text-foreground">2 included</span>
                  </div>
                </div>
              </div> */}
                </div>
            </div>
                <div className="text-center pb-10">
                    <h3 className="text-4xl py-8 font-extrabold tracking-wider">Trusted By</h3>
                        <LogoCloud />             
                </div>
        </>
    )
}

export default ContactForm
