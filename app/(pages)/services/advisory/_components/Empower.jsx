'use client'
import React, { useRef } from 'react';

const aiAgents = [
  {
    title: "Business Workflow Automation",
    description:
      "Automate and connect workflows across finance, HR and logistics. These AI Agents streamline routine processes like invoicing, scheduling and tracking, to minimize errors, improve accuracy and increase overall operational efficiency across business functions."
  },
  {
    title: "Bespoke AI Development",
    description:
      "Deploy AI agents customized with your business needs. From lead generation to data processing, each agent integrates seamlessly into existing systems, enhancing productivity, scalability and measurable business performance outcomes efficiently."
  },
  {
    title: "AI-Powered Support Automation",
    description:
      "Deliver round-the-clock support with AI agents. They instantly respond, resolve issues and personalize communication, improving satisfaction, reducing response times and optimizing customer engagement across all digital interaction channels effectively."
  },
  {
    title: "Task Automation Bots",
    description:
      "Automate repetitive tasks like data entry, scheduling and email processing. AI bots helps in eliminating manual errors, improve accuracy and free human teams for strategic, high-value projects driving measurable business growth consistently."
  },
  {
    title: "Virtual Assistants",
    description:
      "Empower your workforce with AI-driven virtual assistants managing meetings, reminders and internal communication. These AI assistants improve daily productivity, streamline coordination and simplify complex administrative workflows for busy professionals efficiently."
  },
  {
    title: "AI Operations Optimization",
    description:
      "Optimize monitoring inventory, forecasting demand, and managing logistics intelligently with AI agents. They prevent stockouts, identify bottlenecks and ensure continuous, seamless operations with data-driven automation and predictive decision-making precision."
  },
  {
    title: "AI Data Processing Agents",
    description:
      "Extract, structure and process business data with accuracy. These AI agents automate information handling from invoices and reports, enabling faster insights, improved compliance and data-backed decision-making without manual intervention."
  },
  {
    title: "Integrated AI Agent Networks",
    description:
      "Enable seamless teamwork with multiple AI agents managing interconnected workflows. These bot systems coordinate with operations like fulfillment and logistics, improving efficiency, execution speed and communication across business departments collaboratively."
  },
  {
    title: "Generative AI Agents for Content Creation",
    description:
      "Empower Generative AI to create marketing materials, product descriptions and design concepts. These AI Agents accelerates creative output, maintains brand tone and supports content teams in delivering consistent quality faster across platforms."
  },
  {
    title: "AI Chat Interaction Systems",
    description:
      "Develop advanced conversational AI that engages users naturally. These agents manage inquiries, automate communication and enhance interaction quality, reducing operational costs while improving response efficiency and overall customer satisfaction."
  },
  {
    title: "Natural Language Processing (NLP) Agents",
    description:
      "Develop NLP agents that understand and interpret human language. Ideal for chatbots, analytics and feedback automation, these agents enhance comprehension, streamline responses and improve overall communication efficiency organization-wide."
  },
  {
    title: "Custom ML Agent Design",
    description:
      "Design intelligent AI agents trained through machine learning. These agents develops systems for predictive analysis, pattern recognition and decision support, helping businesses operate smarter, faster and with measurable competitive advantage."
  },
  {
    title: "Computer Vision Agents",
    description:
      "Specialize in Computer vision agents that help analyzing and interpreting visual data. They perform automated inspections, recognition and quality assessments, enhancing accuracy, safety and efficiency across industries relying on visual intelligence."
  },
  {
    title: "AI-Powered Chatbots and Virtual Assistants",
    description:
      "Enhance customer experience with AI chatbots offering instant support. These smart agents deliver accurate responses, automate engagement and provide reliable communication, ensuring consistent service quality across all customer touchpoints."
  },
  {
    title: "Predictive Analytics Agents",
    description:
      "Optimize Predictive Analytics Agents to evaluate trends and patterns using business data. These agents forecast outcomes, optimize resource allocation and empower leaders to make proactive, informed and strategic business decisions."
  },
  {
    title: "AI Voice Command Agents",
    description:
      "Enable voice-driven operations with smart AI speech agents. They help to convert spoken commands into precise actions, supporting accessibility, automation and productivity through accurate, real-time voice understanding technology."
  },
  {
    title: "Robotic Process Automation (RPA) Agents",
    description:
      "Enhance routine workflows like payroll and compliance with efficient RPA agents. They increase speed, reduce manual intervention and ensure accuracy, turning repetitive operations into fully optimized, self-running processes."
  },
  {
    title: "AI Security Agents",
    description:
      "Secure your digital infrastructure with AI-powered monitoring. These agents detect threats, assess vulnerabilities and respond instantly, providing real-time defense, proactive protection and continuous system security."
  },
  {
    title: "Recommendation System Agents",
    description:
      "Boost engagement with AI-driven recommendation engines. These AI agents analyze user behavior, predict preferences and deliver tailored content, enhancing user experience and improving conversion rates effectively."
  },
  {
    title: "Sentiment Analysis Agents",
    description:
      "Interpret emotions within reviews, chats, and feedback with Sentiment Analysis Agents. They help your business understand audience perception, refine communication strategies and strengthen brand reputation intelligently."
  }
];

export default function Empower() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector('.ai-card');
    if (!card) return;

    const gap = 20; // matches gap-5 (20px)
    const scrollAmount = card.offsetWidth + gap;

    sliderRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="bg-foreground py-10 px-5 md:px-10 overflow-hidden mt-20">
      <div className="relative max-w-7xl mx-auto">
        {/* Title + Controls */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 md:mb-10">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight pl-5 md:pl-[70px] max-w-[500px]">
            Empower Your Operations with AI Agents
          </h2>

          <div className="flex gap-3 mt-6 md:mt-0 md:absolute md:top-3 md:right-10">
            <button
              onClick={() => scroll('prev')}
              className="w-12 h-12 md:w-[55px] md:h-[55px] rounded-full border border-[#7B7B7B] text-[#7B7B7B] text-3xl flex items-center justify-center transition-colors hover:border-white hover:text-white focus:outline-none"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              onClick={() => scroll('next')}
              className="w-12 h-12 md:w-[55px] md:h-[55px] rounded-full border border-[#7B7B7B] text-[#7B7B7B] text-3xl flex items-center justify-center transition-colors hover:border-white hover:text-white focus:outline-none"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory scrollbar-hide md:pl-5 lg:pl-[70px]"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {aiAgents.map((item, index) => (
            <div
              key={index}
              className={`
                shrink-0 w-[calc(100%-20px)] snap-center
                md:w-[calc((100%-60px)/4)] min-w-[calc((100%-60px)/4)]
                bg-[#272E39] text-white p-5 md:p-6 lg:p-8 rounded-xl
                border-l-4 border-transparent hover:border-white/30
                transition-all duration-300 hover:shadow-xl min-h-96
                flex flex-col
              `}
            >
              <h3 className="text-lg md:text-xl font-medium leading-tight mb-5 min-h-[60px]">
                {item.title}
              </h3>
              <p className="text-[#D8D8D8] text-sm md:text-[15px] leading-relaxed opacity-85 group-hover:opacity-100 transition-all duration-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar but keep functionality */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
