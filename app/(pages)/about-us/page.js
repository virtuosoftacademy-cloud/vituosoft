'use client'

import dynamic from 'next/dynamic';
import { ReactLenis } from 'lenis/react'
const AboutUs = dynamic(() => import('./AboutUs'), {
  ssr: false,
});
export default function Page() {
  return (
    <>
    <ReactLenis root={true}>
      <AboutUs />;
    </ReactLenis>
    </>
  )
}
