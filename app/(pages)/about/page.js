import { Button } from "@/components/ui/button"
import Link from "next/link"

function About() {
  return (
  <div className="flex justify-center items-center flex-col h-screen">
            <div>
                {/* <h4 className="text-4xl font-bold">404</h4> */}
                <h5 className="text-5xl">
                    Under Construction!
                </h5>
            </div>
            <div className="mt-4">
                <Button>
                    <Link href="/" >
                        Go back home
                    </Link>
                </Button>
            </div>
        </div>
  )
}

export default About
