"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  const handleConnect = () => {
    // const resumeURL = "/CathyLiu_BCS_SWE.pdf";
    // window.open(resumeURL, "_blank");
    const linkedInURL = "https://www.linkedin.com/in/weiqi-liu/";
    window.open(linkedInURL, "_blank");
  };

  return (
    <section className="pb-12 lg:pb-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="text-center sm:text-left">
          <p className="eyebrow mb-5">AI Solutions Architect</p>
          <h1 className="mb-5 max-w-4xl font-display text-5xl font-black tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Transforming business workflows with{" "}
            <span className="relative whitespace-nowrap text-accent-deep">
              AI.
              <span aria-hidden className="absolute bottom-2 left-0 right-3 -z-10 h-3 rounded-full bg-clay-pale sm:bottom-3 sm:h-4" />
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-8 text-ink-soft sm:text-lg">
            I help organizations identify process bottlenecks, align
            stakeholders, and implement AI solutions that deliver measurable
            business outcomes.
          </p>
          <p className="mt-4 font-hand text-base text-ink-faint">
            Focused on{" "}
            <TypeAnimation
              sequence={[
                "Workflow Transformation",
                1200,
                "Enterprise AI & Agentic Systems",
                1200,
                "Executive Alignment & Adoption",
                1200,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="font-semibold text-clay-deep"
            />
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <button
              className="btn-primary w-full sm:w-fit"
              onClick={handleConnect}
            >
              Connect on LinkedIn
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </button>
            <a
              href="#projects"
              className="btn-secondary w-full sm:w-fit"
            >
              View case studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
