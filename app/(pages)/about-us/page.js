'use client'
const AboutUs = dynamic(() => import('./AboutUs'), {
  ssr: false, 
});
export default function Page() {
  return <AboutUs />;
}
