import StepWidget from "@/components/common/StepWidget";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TimeLine() {
  const stepsData = [
    {
      title: "Understanding Business Goals",
      description:
        "We start by understanding your organization’s unique objectives, identifying where AI Agents can deliver maximum automation and impact.",
    },
    {
      title: "Data and Workflow Mapping",
      description:
        "Our experts analyze workflows and data sources to design a roadmap for seamless AI integration.",
    },
    {
      title: "AI Agent Design and Development",
      description:
        "We architect and build intelligent agents tailored to your operational needs using the latest ML, NLP, and automation technologies.",
    },
    {
      title: "Integration and Testing",
      description:
        "Each AI Agent undergoes rigorous testing to ensure flawless integration with your systems and real-world reliability.",
    },
    {
      title: "Deployment and Optimization",
      description:
        "We deploy the agents into your environment, continuously monitoring and optimizing them for peak performance.",
    },
    {
      title: "Ongoing Learning and Support",
      description:
        "Our AI Agents evolve with your business, Virtuosoft provides continuous learning updates and technical support for sustained success.",
    },
  ];

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
