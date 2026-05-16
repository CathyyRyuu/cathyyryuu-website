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
        <ul className="grid grid-cols-2 gap-2 text-sm text-slate-300 sm:grid-cols-2 md:grid-cols-3">
          <li>Next.js</li>
          <li>Ruby on Rails</li>
          <li>FastAPI</li>
          <li>Django</li>
          <li>Python</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>LLMs</li>
          <li>RAG</li>
          <li>AI Evaluation</li>
          <li>Prompt Design</li>
          <li>Document AI</li>
          <li>PostgreSQL</li>
          <li>Digital Ocean</li>
          <li>AWS</li>
          <li>Docker</li>
          <li>CI/CD</li>
        </ul>
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
        <div className="surface-panel w-full overflow-hidden rounded-[2rem] p-4">
          <Image
            src="/images/about-image.png"
            alt="About Image"
            width={500}
            height={500}
            className="rounded-3xl"
          />
          <p className="mt-3 text-center text-xs uppercase tracking-[0.18em] text-slate-500">{`Image generated with ChatGPT`}</p>
        </div>
        <div className="flex h-full flex-col text-left">
          <p className="eyebrow mb-3">About</p>
          <h2 className="section-title mb-4">AI architect for high-stakes workflows</h2>
          <p className="text-base leading-8 text-slate-300 lg:text-lg">
            {`I am an AI Solutions Architect focused on designing and scaling practical, production-ready AI systems for legal, finance, and accounting teams. With a dual background in Computer Science from UBC and Commerce from UofT, I bridge advanced AI capabilities with the constraints of regulated domains where accuracy, transparency, and operational reliability matter. My work spans LLM architecture, retrieval-augmented generation, document intelligence, cloud infrastructure, product design, and clear human-in-the-loop controls.`}
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
