import StepWidget from "@/components/common/StepWidget";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { stepsData } from "../../constant";

export default function TimeLine(timeLine) {
  const {titleBold, titlenormal,timeLineItems } = timeLine
  return (
    <StepWidget
      heading={
        <>
          {titlenormal} {" "}
          <span className="font-semibold">{titleBold}</span>
        </>
      }
      button={
        <Button asChild>
          <Link href="/">Build What’s Next</Link>
        </Button>
      }
      steps={timeLineItems}
    />
  );
}
