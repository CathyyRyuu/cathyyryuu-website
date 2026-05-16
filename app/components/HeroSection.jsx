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
          <p className="eyebrow mb-5">AI Solution Architect</p>
          <h1 className="mb-5 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Designing production-grade AI systems for{" "}
            <span className="text-sky-300">the enterprise.</span>
          </h1>

          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I&apos;m Cathy Liu, an AI Solutions Architect focused on practical,
            production-ready AI systems for legal, finance, and accounting
            teams where accuracy, transparency, and operational reliability
            matter as much as innovation.
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.18em] text-slate-500">
            Focused on{" "}
            <TypeAnimation
              sequence={[
                "RAG architecture",
                1200,
                "document intelligence",
                1200,
                "human-in-the-loop AI",
                1200,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="text-sky-300"
            />
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <button
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200 sm:w-fit"
              onClick={handleConnect}
            >
              Connect on LinkedIn
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </button>
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-300 hover:text-white sm:w-fit"
            >
              View projects
            </a>
          </div>
        </div>
        <div className="place-self-center">
          <div className="surface-panel relative h-[280px] w-[280px] overflow-hidden rounded-[2rem] sm:h-[360px] sm:w-[360px]">
            <div className="absolute inset-x-8 top-8 h-px bg-white/15" />
            <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
              Vancouver, BC
            </div>
            <Image
              src="/images/Memoji.png"
              alt="my memoji"
              className="absolute left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2"
              width={300}
              height={300}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
