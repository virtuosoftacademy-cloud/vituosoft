
import { notFound } from 'next/navigation';
import { ReactLenis } from 'lenis/react';
import Hero from '../_components/Hero';
import ValueSection from '../_components/ValueSection';
import Success from '../_components/Success';
import Empower from '../_components/Empower';
import Engage from '../_components/Engage';
import { aiAgentsEmpower, aiAgentsHero, stepsData, valueData } from '../../constant';
import TimeLine from '../_components/TimeLine';
import Cta from '@/components/common/Cta';
import Faq from '../_components/Faq';
import { Faq_AI_CustomAgent } from '@/app/_constant';
import Blogs from '@/app/(pages)/blogs/page';


// ────────────────────────────────────────────────
//  All services (array — easy to extend)
const services = [
  {
    slug: 'ai-agents',
    title: 'AI Agents',
    heroData: aiAgentsHero,
    value: valueData[0],
    Data: aiAgentsEmpower[0],
    timeLine: stepsData[0],
    sections: [
      { Component: Hero, props: aiAgentsHero },
      { Component: ValueSection, props: valueData[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsData[0] },
      { Component: Empower, props: aiAgentsEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_AI_CustomAgent } },
      { Component: Cta },
    ],
  },
  // Example for future services:
  // {
  //   slug: 'cloud-strategy',
  //   title: 'Cloud Strategy',
  //   sections: [
  //     { Component: CloudHero },
  //     { Component: Benefits },
  //     ...
  //   ],
  // },
];

// Helper to find service by slug
function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}

// ────────────────────────────────────────────────
//  Static params
// ────────────────────────────────────────────────
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// ────────────────────────────────────────────────
//  Page component
// ────────────────────────────────────────────────
export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <ReactLenis root>
      <main className="min-h-screen bg-background antialiased pt-40">
        {service.sections.map(({ Component, props = {} }, index) => (
          <Component key={index} {...props} />
        ))}

        {/* Optional universal CTA at the bottom — same across all services */}
        {/* <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-muted/40 text-center">
          <div className="container mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Ready to get started with {service.title}?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground md:text-xl">
              Let’s talk about how Virtuosoft can help you achieve your goals.
            </p>
            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-lg transition hover:bg-primary/90 hover:shadow-xl"
              >
                Talk to our team →
              </a>
            </div>
          </div>
        </section> */}
      </main>
    </ReactLenis>
  );
}

// ────────────────────────────────────────────────
//  Optional: dynamic metadata
// ────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: 'Service Not Found | Virtuosoft' };
  }

  return {
    title: `${service.title} | Virtuosoft`,
    description:
      service.hero?.bottomDescription ||
      `Professional ${service.title} services by Virtuosoft – custom, scalable, and built for your success.`,
  };
}