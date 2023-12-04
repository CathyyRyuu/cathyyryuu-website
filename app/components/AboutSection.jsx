"use client";
import React, { useTransition, useState } from 'react';
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>Django</li>
        <li>React</li>
        <li>PostgreSQL</li>
        <li>Next.js</li>
        <li>Ruby on Rails</li>
        <li>TypeScript</li>
        <li>Cypress</li>
        <li>RSpec</li>
        <li>AWS</li>
        <li>Docker</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>Bachelor of Computer Science | University of British Columbia</li>
        <li>Bachelor of Commerce | University of Toronto Mississauga</li>
      </ul>
    )
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className='list-disc pl-2'>
        <li>AWS Cloud Practitioner</li>
        <li>CFA Level II Candidate</li>
        <li>SAS Base Certificate</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src='/images/about-image.png' width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            I am Full-Stack Software Engineer, armed with a dual degree in Finance and Computer Science, 
            my technical expertise spans React, Django, Python, Next.js, Ruby on Rails, TypeScript, and more. 
            I am also proficient in database management, cloud platforms (AWS), and containerization (Docker).
            I'm a self-initiator with a passion for fintech. 
            As someone who believes in lifelong learning, I am always looking to expand my knowledge and skillset.
            I approach each project as a team player, combining my skills to drive success. 
            Let's collaborate at the intersection of finance and technology for innovative solutions and continuous growth.
          </p>
          <div className='flex flex-row mt-8'>
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
          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )};

export default AboutSection;