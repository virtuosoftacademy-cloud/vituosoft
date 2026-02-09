import StepWidget from "@/components/common/StepWidget";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { stepsData } from "../../constant";

export default function TimeLine() {
  return (
    <StepWidget
      heading={
        <>
          Process for Building Intelligent{" "}
          <span className="font-semibold">AI Agents</span>
        </>
      }
      button={
        <Button asChild>
          <Link href="/">Build What’s Next</Link>
        </Button>
      }
      steps={stepsData}
    />
  );
}
