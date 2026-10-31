"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="surface-inset flex max-h-60 flex-col overflow-y-auto rounded-2xl p-4 md:max-h-48">
        <div className="grid gap-4 text-sm text-ink-soft sm:grid-cols-2 md:grid-cols-3">
          <ul className="space-y-2">
            <li>LLMs</li>
            <li>RAG</li>
            <li>Prompt Design</li>
            <li>LLM Evaluation</li>
            <li>AI System Design</li>
            <li>Document AI</li>
          </ul>
          <ul className="space-y-2">
            <li>Python</li>
            <li>FastAPI</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>Django</li>
            <li>Ruby on Rails</li>
          </ul>
          <ul className="space-y-2">
            <li>AWS</li>
            <li>AWS Bedrock</li>
            <li>Claude Code</li>
            <li>Docker</li>
            <li>CI/CD</li>
            <li>PostgreSQL</li>
            <li>Digital Ocean</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="surface-inset flex max-h-48 flex-col overflow-y-auto rounded-2xl p-4">
        <ul className="space-y-2 text-sm text-ink-soft">
          <li>Bachelor of Computer Science | University of British Columbia</li>
          <li>Bachelor of Commerce | University of Toronto Mississauga</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <div className="surface-inset flex max-h-48 flex-col overflow-y-auto rounded-2xl p-4">
        <ul className="space-y-2 text-sm text-ink-soft">
          <li>CFA Level II Candidate</li>
          <li>SAS Base Certificate</li>
        </ul>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="scroll-mt-24 text-ink">
      <div className="grid gap-10 py-12 md:grid-cols-[0.9fr_1.1fr] md:items-center lg:py-20">
        <div className="place-self-center w-full max-w-[260px] sm:max-w-[300px]">
          <div className="relative -rotate-2 rounded-lg border-2 border-line bg-paper-soft p-3 pb-12 shadow-card transition hover:rotate-0">
            <span aria-hidden className="absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 rotate-3 rounded-sm bg-pond/50" />
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded">
            <Image
              src="/images/shibuya_sky.JPG"
              alt="shibuya sky"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 260px, 300px"
              priority
            />
            </div>
            <p className="absolute bottom-3 left-0 right-0 text-center font-hand text-lg text-ink-soft">
              Vancouver, BC
            </p>
          </div>
        </div>
        <div className="flex h-full flex-col text-left">
          <p className="eyebrow mb-3">About</p>
          <h2 className="section-title mb-4">Translating business challenges into practical AI solutions</h2>
          <p className="text-base leading-8 text-ink-soft lg:text-lg">
            {`I help organizations turn ambiguous operational problems into AI solutions that can be designed, governed, and adopted in the real world. My work combines process discovery, solution architecture, technical system design, and executive stakeholder management, with a focus on legal, finance, and accounting workflows where accuracy, transparency, and reliability matter. With a dual background in Computer Science from UBC and Commerce from UofT, I bridge business context with implementation details so teams can move from AI experimentation to measurable workflow impact.`}
          </p>
          <div className="mt-8 flex flex-row gap-2 overflow-x-auto">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              {" "}
              Certification{" "}
            </TabButton>
          </div>
          <div className="mt-2">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
