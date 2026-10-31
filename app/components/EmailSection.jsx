"use client";
import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid scroll-mt-24 gap-8 py-12 md:grid-cols-[0.9fr_1.1fr] lg:py-16"
    >
      <div>
        <p className="eyebrow mb-3">Contact</p>
        <h2 className="section-title mb-4">Let&apos;s connect</h2>
        <p className="mb-6 max-w-md leading-7 text-ink-soft">
          I&apos;m always open to thoughtful software, fintech, and AI product
          conversations. LinkedIn is the best place to reach me right now.
        </p>
        <div className="socials mt-5 flex flex-row gap-3">
          <Link
            href="https://github.com/CathyyRyuu"
            className="rounded-full border-2 border-line bg-paper-soft p-3 shadow-[0_3px_0_#ddd0b5] transition hover:-translate-y-0.5 hover:border-accent"
          >
            <Image src={GithubIcon} alt="Github Icon" className="h-5 w-5 brightness-0 opacity-70" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/weiqi-liu/"
            className="rounded-full border-2 border-line bg-paper-soft p-3 shadow-[0_3px_0_#ddd0b5] transition hover:-translate-y-0.5 hover:border-accent"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" className="h-5 w-5 brightness-0 opacity-70" />
          </Link>
        </div>
      </div>
      <div className="surface-panel rounded-[2rem] p-5 sm:p-6">
        <form className="flex flex-col" onSubmit={(event) => event.preventDefault()}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block font-display text-sm font-bold text-ink-soft"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              disabled
              className="block w-full rounded-2xl border-2 border-line bg-paper p-3 text-sm text-ink placeholder:text-ink-faint disabled:cursor-not-allowed disabled:opacity-70"
              placeholder="user@example.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="mb-2 block font-display text-sm font-bold text-ink-soft"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              disabled
              className="block w-full rounded-2xl border-2 border-line bg-paper p-3 text-sm text-ink placeholder:text-ink-faint disabled:cursor-not-allowed disabled:opacity-70"
              placeholder="Hi there!"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-2 block font-display text-sm font-bold text-ink-soft"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              disabled
              className="block min-h-32 w-full rounded-2xl border-2 border-line bg-paper p-3 text-sm text-ink placeholder:text-ink-faint disabled:cursor-not-allowed disabled:opacity-70"
              placeholder="Let's grab a coffee!"
            />
          </div>
          <p className="mb-6 mt-2 rounded-2xl border-2 border-dashed border-pond bg-pond-pale px-4 py-3 font-hand text-sm text-pond-deep">
            The contact form is paused for now. Please use LinkedIn for the
            fastest response.
          </p>
          <button
            type="submit"
            disabled
            className="w-full cursor-not-allowed rounded-full border-2 border-line bg-paper-deep px-5 py-3 font-display text-sm font-bold text-ink-faint"
          >
            Message form paused
          </button>
        </form>
   
      </div>
    </section>
  );
};

export default EmailSection;
