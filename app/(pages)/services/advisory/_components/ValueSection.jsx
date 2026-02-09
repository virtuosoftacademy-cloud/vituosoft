import Image from 'next/image';
import React from 'react';

const valueImg = 'assets/Images/service/ai';

const valueItems = [
  {
    title: "Automate Complex Workflows",
    description:
      "Manual workflows slow teams down. AI Agents automate processes across finance, logistics and support, reducing errors, increasing throughput and freeing teams to focus on strategy and innovation.",
    image: `/${valueImg}/automate.svg`,
  },
  {
    title: "Scale Without Added Costs",
    description:
      "Grow without growing overhead. AI Agents handle high-volume operations seamlessly, allowing your business to scale with efficiency, not expense.",
    image: `/${valueImg}/scale.svg`,
  },
  {
    title: "Enhance Customer Experiences",
    description:
      "Deliver personal service at enterprise scale. AI Agents analyze behavior in real-time to predict needs, resolve issues instantly and create consistent, high-value interactions that build loyalty.",
    image: `/${valueImg}/enhance.svg`,
  },
  {
    title: "Solve Problems Through Intelligent Reasoning",
    description:
      "When complex challenges arise, AI Agents think beyond automation. They apply advanced reasoning to optimize workflows, resolve issues autonomously and drive measurable improvements.",
    image: `/${valueImg}/solve.svg`,
  },
  {
    title: "Mitigate Risks Before They Escalate",
    description:
      "From compliance to cybersecurity, AI Agents use predictive analytics to detect threats early, helping your business stay proactive, secure and regulation-ready.",
    image: `/${valueImg}/mitigate.svg`,
  },
  {
    title: "Enable Smarter, Faster Decisions",
    description:
      "Real-time insight means faster, more confident decisions. AI Agents turn live data into clear actions, empowering leadership to adapt instantly to shifts in market, demand or operations.",
    image: `/${valueImg}/enable.svg`,
  },
];

function ValueSection() {
  return (
    <section className="py-12 md:py-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className='text-center text-2xl md:text-4xl lg:text-[2.5rem] pb-12'>
          <h4>
            Why Every Modern Business Needs Intelligent {" "}
            <span className='font-bold'>
              AI Agents
            </span>
            ?
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {valueItems.map((item, index) => (
            <div
              key={index}
              className={`
                group relative
                bg-linear-to-br from-blue-50/80 to-indigo-50/60
                rounded-2xl p-6 md:p-7
                overflow-hidden
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-200/40
                border border-blue-100/60
              `}
            >
              {/* Background pattern overlay */}
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage: `url('https://virtuosoft.pk/virtuosoft/wp-content/uploads/2025/11/Frame-1000001252.png')`,
                  backgroundSize: '102% 102%',
                  backgroundPosition: 'center top',
                  backgroundRepeat: 'no-repeat',
                }}
              />

              <div className="relative z-10">
                <Image
                  width={20}
                  height={20}
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 object-contain mb-5"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValueSection;