"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex max-h-60 flex-col overflow-y-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:max-h-48">
        <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-2 md:grid-cols-3">
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
      <div className="flex max-h-48 flex-col overflow-y-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <ul className="space-y-2 text-sm text-slate-300">
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
      <div className="flex max-h-48 flex-col overflow-y-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <ul className="space-y-2 text-sm text-slate-300">
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
    <section id="about" className="scroll-mt-24 text-white">
      <div className="grid gap-10 py-12 md:grid-cols-[0.9fr_1.1fr] md:items-center lg:py-20">
        <div className="place-self-center w-full max-w-[260px] sm:max-w-[300px]">
          <div className="surface-panel relative aspect-[9/16] w-full overflow-hidden rounded-[2rem]">
            <div className="absolute inset-x-8 top-8 z-10 h-px bg-white/15" />
            <div className="absolute bottom-5 left-5 z-10 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
              Vancouver, BC
            </div>
            <Image
              src="/images/shibuya_sky.JPG"
              alt="shibuya sky"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 260px, 300px"
              priority
            />
          </div>
        </div>
        <div className="flex h-full flex-col text-left">
          <p className="eyebrow mb-3">About</p>
          <h2 className="section-title mb-4">Translating business challenges into practical AI solutions</h2>
          <p className="text-base leading-8 text-slate-300 lg:text-lg">
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
