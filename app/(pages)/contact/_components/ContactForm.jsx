'use client'

import { useState, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Mail, Upload } from "lucide-react"

// Constants defined outside
const Project_Type = [
    { id: 1, label: "$5k - $25K", ProjectValue: "5k_25K" },
    { id: 2, label: "$25k - $50K", ProjectValue: "25k_50K" },
    { id: 3, label: "$50k - $100K", ProjectValue: "50k_100K" },
    { id: 4, label: "$100k +", ProjectValue: "100K_+" },
]

function FormFields() {
    const searchParams = useSearchParams();
    const preFilledRole = searchParams.get('role') || ""; 
    
    const fileInputRef = useRef(null);
    const [formData, setFormData] = useState({
        firstName: '',
        companyName: '',
        mobile: '',
        email: '',
        message: '',
        budget: '',
        resume: null
    })

    const [errors, setErrors] = useState({})
    const [showSuccessPopup, setShowSuccessPopup] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({ ...prev, resume: file }));
            setErrors(prev => ({ ...prev, resume: '' }));
        }
    }

    const handleBudgetSelect = (value) => {
        setFormData(prev => ({ ...prev, budget: value }))
        if (errors.budget) {
            setErrors(prev => ({ ...prev, budget: '' }))
        }
    }

    const validateForm = () => {
        const newErrors = {}
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
        if (preFilledRole === "" && !formData.companyName.trim()) newErrors.companyName = "Company name is required"
        if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required"
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format"
        }
        if (!formData.message.trim()) newErrors.message = "This field is required"
        if (preFilledRole === "" && !formData.budget) newErrors.budget = "Please select a budget"
        if (preFilledRole !== "" && !formData.resume) newErrors.resume = "Please upload your resume"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSubmitting || !validateForm()) return
        
        setIsSubmitting(true)
        setTimeout(() => {
            setIsSubmitting(false)
            setShowSuccessPopup(true)
            setFormData({ firstName: '', companyName: '', mobile: '', email: '', message: '', budget: '', resume: null })
        }, 1200)
    }

    // Exact input style from your original UI
    const inputStyle = "w-full py-3 bg-white outline-0 focus:border-b-ring-2 focus:border-b-primary border-b text-foreground placeholder-foreground/70";

    return (
        <div className="flex justify-center gap-8 py-10">
            {/* The Main Container with Blue Gradient Border matching your original code */}
            <div className="group relative rounded-xl text-left bg-white p-12 shadow-[0_10px_25px_rgba(0,0,0,0.05)] overflow-hidden translate-0 max-w-3xl w-full">
                
                {/* BLUE GRADIENT BORDER LOGIC (Exactly as your code) */}
                <div className="pointer-events-none absolute inset-0 rounded-[15px] bg-linear-to-r from-primary/60 to-white p-0.5 -z-10">
                    <div className="h-full w-full rounded-[13px] bg-white" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 text-sm">
                    
                    {/* Pre-filled field (Only for Job Applications) */}
                    {preFilledRole !== "" && (
                        <div className="border-b-2 border-primary/20 pb-4 mb-6">
                            <label className="text-[10px] uppercase text-gray-400 font-bold tracking-widest block mb-1">
                                Applying For Position
                            </label>
                            <div className="text-xl md:text-sm font-normal">
                                {preFilledRole}
                            </div>
                        </div>
                    )}

                    <div className="grid md:grid-cols-1 gap-6">
                        <div>
                            <input type="text" name="firstName" value={formData.firstName} placeholder="First Name" onChange={handleChange} className={`${inputStyle} ${errors.firstName ? 'border-red-500' : ''}`} />
                            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                        </div>

                        {preFilledRole === "" && (
                            <div>
                                <input type="text" name="companyName" value={formData.companyName} placeholder="Company Name" onChange={handleChange} className={`${inputStyle} ${errors.companyName ? 'border-red-500' : ''}`} />
                                {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
                            </div>
                        )}
                    </div>

                    <div>
                        <input type="tel" name="mobile" value={formData.mobile} placeholder="Mobile Number" onChange={handleChange} className={`${inputStyle} ${errors.mobile ? 'border-red-500' : ''}`} />
                        {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                    </div>

                    <div>
                        <input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} className={`${inputStyle} ${errors.email ? 'border-red-500' : ''}`} />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Resume Upload logic (Only for Job Applications) */}
                    {preFilledRole !== "" && (
                        <div className="py-2">
                            <label className="text-gray-400 block mb-2 font-bold uppercase text-[10px] tracking-widest">Attach CV / Resume</label>
                            <div onClick={() => fileInputRef.current.click()} className="border-b py-3 flex items-center justify-between cursor-pointer hover:text-primary transition-all">
                                <span className={formData.resume ? "text-primary font-bold" : "text-gray-400"}>
                                    {formData.resume ? formData.resume.name : "Select PDF/Doc file"}
                                </span>
                                <Upload className="size-4" />
                                <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept=".pdf,.doc,.docx" />
                            </div>
                            {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
                        </div>
                    )}

                    <div>
                        <textarea name="message" value={formData.message} rows={3} onChange={handleChange} className={`${inputStyle} ${errors.message ? 'border-red-500' : ''}`} placeholder={preFilledRole !== "" ? "About your experience..." : "Tell me about your project..."} />
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    {preFilledRole === "" && (
                        <div className="text-foreground/70">
                            <label>Budget</label>
                            <div className="mt-6 font-medium text-[15px] tracking-wider space-x-2 flex flex-wrap gap-2">
                                {Project_Type.map(type => (
                                    <span 
                                        key={type.id} 
                                        onClick={() => handleBudgetSelect(type.ProjectValue)}
                                        className={`rounded-full border px-4 py-2 cursor-pointer transition-all duration-500 
                                            ${formData.budget === type.ProjectValue ? 'border-primary text-primary bg-primary/10' : 'hover:border-primary hover:text-primary'}`}
                                    >
                                        {type.label}
                                    </span>
                                ))}
                            </div>
                            {errors.budget && <p className="text-red-500 text-xs mt-2">{errors.budget}</p>}
                        </div>
                    )}

                    <button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-accent font-semibold py-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                        <Mail className="h-5 w-5" />
                        <span>{isSubmitting ? 'Sending...' : (preFilledRole !== "" ? 'Submit Application' : 'Send Message')}</span>
                    </button>
                </form>
            </div>

            {/* Success Popup (Identical to your original code) */}
            {showSuccessPopup && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-10 max-w-md w-[90%] text-center shadow-2xl relative" onClick={e => e.stopPropagation()}>
                        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl" onClick={() => setShowSuccessPopup(false)}>×</button>
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Thank You!</h2>
                        <p className="text-gray-600 mb-8">Successfully Sent!</p>
                        <button onClick={() => setShowSuccessPopup(false)} className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium">Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default function ContactForm() {
    return (
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
            <FormFields />
        </Suspense>
    )
}