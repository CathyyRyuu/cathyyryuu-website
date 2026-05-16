"use client";
import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

// need domain to set up.

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid scroll-mt-24 gap-8 py-12 md:grid-cols-[0.9fr_1.1fr] lg:py-16"
    >
      <div>
        <p className="eyebrow mb-3">Contact</p>
        <h2 className="section-title mb-4">Let&apos;s connect</h2>
        <p className="mb-6 max-w-md leading-7 text-slate-300">
          I&apos;m always open to thoughtful software, fintech, and AI product
          conversations. LinkedIn is the best place to reach me right now.
        </p>
        <Image
          src="/images/business_card.png"
          alt="Business Card"
          width={512}
          height={289}
          className="my-2 rounded-2xl border border-white/10"
        />
        <div className="socials mt-5 flex flex-row gap-3">
          <Link
            href="https://github.com/CathyyRyuu"
            className="rounded-full border border-white/10 bg-white/[0.04] p-3 transition hover:border-sky-300"
          >
            <Image src={GithubIcon} alt="Github Icon" className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/weiqi-liu/"
            className="rounded-full border border-white/10 bg-white/[0.04] p-3 transition hover:border-sky-300"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" className="h-5 w-5" />
          </Link>
        </div>
      </div>
      <div className="surface-panel rounded-[2rem] p-5 sm:p-6">
        <form className="flex flex-col" onSubmit={(event) => event.preventDefault()}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              disabled
              className="block w-full rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-sm text-white placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-60"
              placeholder="user@example.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              disabled
              className="block w-full rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-sm text-white placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-60"
              placeholder="Hi there!"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              disabled
              className="block min-h-32 w-full rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-sm text-white placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-60"
              placeholder="Let's grab a coffee!"
            />
          </div>
          <p className="mb-6 mt-2 rounded-2xl border border-sky-300/20 bg-sky-300/10 px-4 py-3 text-sm text-sky-100">
            The contact form is paused for now. Please use LinkedIn for the
            fastest response.
          </p>
          <button
            type="submit"
            disabled
            className="w-full cursor-not-allowed rounded-full bg-white/15 px-5 py-3 text-sm font-semibold text-white opacity-60"
          >
            Message form paused
          </button>
        </form>
   
      </div>
    </section>
  );
};

export default EmailSection;
