"use client";

import StepItem from "./StepItem";

export default function StepWidget({ heading, button, steps }) {
  return (
    <section className="relative bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-x-16">

        {/* LEFT COLUMN — STATIC / STICKY */}
        <div className="lg:sticky lg:top-24 self-start">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 leading-tight">
            {heading}
          </h2>

          {button && <div className="mt-8">{button}</div>}
        </div>

        {/* RIGHT COLUMN — NATURAL VERTICAL SCROLL */}
        <div className="relative">
          <div className="flex flex-col gap-2">
            {steps.map((step, index) => (
              <StepItem
                key={index}
                step={index + 1}
                title={step.title}
                description={step.description}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
