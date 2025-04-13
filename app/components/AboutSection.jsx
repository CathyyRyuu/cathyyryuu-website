"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="p-4 rounded-xl shadow-md flex flex-col h-48 overflow-y-auto">
        <ul className="grid grid-cols-3 list-disc pl-2">
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
      <div className="p-4 rounded-xl shadow-md flex flex-col h-48 overflow-y-auto">
        <ul className="list-disc pl-2">
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
      <div className="p-4 rounded-xl shadow-md flex flex-col h-48 overflow-y-auto">
        <ul className="list-disc pl-2">
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
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="About Image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            {`I am Full-Stack Software Engineer, armed with a dual degree in Finance and Computer Science, 
            my technical expertise spans Next.js, FastAPI, Ruby on Rails, Python, Django, TypeScript, JavaScript, and more. 
            I am also proficient in database management, cloud platforms (AWS), and containerization (Docker).
            I'm a self-initiator with a passion for fintech. 
            As someone who believes in lifelong learning, I am always looking to expand my knowledge and skillset.
            I approach each project as a team player, combining my skills to drive success. 
            Let's collaborate at the intersection of finance and technology for innovative solutions and continuous growth.`}
          </p>
          <div className="flex flex-row mt-8">
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
