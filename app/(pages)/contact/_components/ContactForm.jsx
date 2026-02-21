'use client'

import { useState } from 'react'
import { Mail } from "lucide-react"
import LogoCloud from "../../home/_components/LogoCloud"

function ContactForm() {
    const Project_Type = [
        { id: 1, label: "$5k - $25K", ProjectValue: "5k_25K" },
        { id: 2, label: "$25k - $50K", ProjectValue: "25k_50K" },
        { id: 3, label: "$50k - $100K", ProjectValue: "50k_100K" },
        { id: 4, label: "$100k +", ProjectValue: "100K_+" },
    ]

    const [formData, setFormData] = useState({
        firstName: '',
        companyName: '',
        mobile: '',
        email: '',
        message: '',
        budget: '',
    })

    const [errors, setErrors] = useState({})
    const [showSuccessPopup, setShowSuccessPopup] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const validateForm = () => {
        const newErrors = {}

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required"
        }

        if (!formData.companyName.trim()) {
            newErrors.companyName = "Company name is required"
        }

        if (!formData.mobile.trim()) {
            newErrors.mobile = "Mobile number is required"
        }
        

        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format"
        }

        if (!formData.message.trim()) {
            newErrors.message = "Please tell us about your project"
        }

        if (!formData.budget) {
            newErrors.budget = "Please select a budget"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const handleBudgetSelect = (value) => {
        setFormData(prev => ({ ...prev, budget: value }))
        if (errors.budget) {
            setErrors(prev => ({ ...prev, budget: '' }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSubmitting) return

        if (!validateForm()) return

        setIsSubmitting(true)

        // Simulate sending
        setTimeout(() => {
            setIsSubmitting(false)
            setShowSuccessPopup(true)
            setFormData({
                firstName: '',
                companyName: '',
                mobile: '',
                email: '',
                message: '',
                budget: ''
            })
        }, 1200)
    }

    return (
        <>
            <div className="flex justify-center gap-8 py-10">
                {/* Contact Form */}
                <div className="group relative rounded-xl text-left bg-white p-12 shadow-[0_10px_25px_rgba(0,0,0,0.05)] overflow-hidden translate-0">
                    <div className="pointer-events-none absolute inset-0 rounded-[15px] bg-linear-to-r from-primary/60 to-white p-0.5 -z-10">
                        <div className="h-full w-full rounded-[13px] bg-white" />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 text-sm">
                        <div className="grid md:grid-cols-1 gap-6">
                            <div>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={`w-full py-3 bg-white outline-0 focus:border-b-ring-2 focus:border-b-primary border-b text-foreground placeholder-foreground/70 ${errors.firstName ? 'border-red-500' : ''}`}
                                    placeholder="First Name"
                                />
                                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className={`w-full py-3 bg-white outline-0 focus:border-b-ring-2 focus:border-b-primary border-b text-foreground placeholder-foreground/70 ${errors.companyName ? 'border-red-500' : ''}`}
                                    placeholder="Company Name"
                                />
                                {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
                            </div>
                        </div>

                        <div>
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                className={`w-full py-3 bg-white outline-0 focus:border-b-ring-2 focus:border-b-primary border-b text-foreground placeholder-foreground/70 ${errors.mobile ? 'border-red-500' : ''}`}
                                placeholder="Mobile Number"
                            />
                            {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full transition-all duration-500 py-3 bg-white outline-0 focus:border-b-ring-2 focus:border-b-primary border-b text-foreground placeholder-foreground/70 ${errors.email ? 'border-red-500' : ''}`}
                                placeholder="Email"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={3}
                                className={`w-full py-3 transition-all duration-500 bg-background outline-0 focus:border-b-ring-2 focus:border-b-primary border-b text-foreground placeholder-foreground/70 ${errors.message ? 'border-red-500' : ''}`}
                                placeholder="Tell me about your project..."
                            />
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>

                        <div className="text-foreground/70">
                            <label>Budget</label>
                            <div className="mt-6 font-medium text-[15px] tracking-wider space-x-2 flex flex-wrap gap-2">
                                {Project_Type.map(type => (
                                    <span
                                        key={type.id}
                                        onClick={() => handleBudgetSelect(type.ProjectValue)}
                                        className={`rounded-full border px-4 py-2 cursor-pointer transition-all duration-500
                      ${formData.budget === type.ProjectValue
                                                ? 'border-primary text-primary bg-primary/10'
                                                : 'hover:border-primary hover:text-primary'}`}
                                    >
                                        {type.label}
                                    </span>
                                ))}
                            </div>
                            {errors.budget && <p className="text-red-500 text-xs mt-2">{errors.budget}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full bg-primary hover:bg-primary/90 text-accent font-semibold py-4 rounded-lg transition-colors flex items-center justify-center space-x-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            <Mail className="h-5 w-5" />
                            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        </button>
                    </form>
                </div>

                <div className="space-y-8">
                    {/* commented contact info remains unchanged */}
                </div>
            </div>

            {/* <div className="text-center pb-10">
                <h3 className="text-4xl py-8 font-extrabold tracking-wider">Trusted By</h3>
                <LogoCloud />
            </div> */}

            {/* Success Popup */}
            {showSuccessPopup && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={() => setShowSuccessPopup(false)}
                >
                    <div
                        className="bg-white rounded-xl p-10 max-w-md w-[90%] text-center shadow-2xl relative"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
                            onClick={() => setShowSuccessPopup(false)}
                        >
                            ×
                        </button>

                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Thank You!</h2>
                        <p className="text-gray-600 mb-8">
                            Your message has been successfully sent.<br />
                            We'll get back to you soon.
                        </p>

                        <button
                            onClick={() => setShowSuccessPopup(false)}
                            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default ContactForm