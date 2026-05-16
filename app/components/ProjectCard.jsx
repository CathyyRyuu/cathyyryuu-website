import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import FirecrackerAnimatedIcon from "./AnimatedIcons/FirecrackerAnimatedIconWrapper";
import MaintenanceAnimatedIcon from "./AnimatedIcons/MaintenanceAnimatedIconWrapper";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  techStack,
  status,
}) => {
  return (
    <article className="group h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111318] transition duration-300 hover:-translate-y-1 hover:border-sky-300/50">
      <div
        className="relative h-52 overflow-hidden md:h-64"
        style={{ background: `url(${imgUrl}) center/cover` }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-[#08090b]/0 opacity-0 transition duration-300 group-hover:bg-[#08090b]/80 group-hover:opacity-100">
          <Link
            href={gitUrl}
            className="relative mr-2 h-12 w-12 rounded-full border border-white/20 bg-white/5 transition hover:border-sky-300 hover:bg-sky-300/10 group/link"
            aria-label={`${title} source code`}
          >
            <CodeBracketIcon className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-slate-300 group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="relative h-12 w-12 rounded-full border border-white/20 bg-white/5 transition hover:border-sky-300 hover:bg-sky-300/10 group/link"
            aria-label={`${title} preview`}
          >
            <EyeIcon className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-slate-300 group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="flex min-h-[15rem] flex-col px-5 py-5 text-white">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h5 className="text-lg font-semibold leading-6 tracking-tight">
            {title}
          </h5>
          <span className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-slate-300">
            {status === "Deployed" && <FirecrackerAnimatedIcon />}
            {status === "Coding ..." && <MaintenanceAnimatedIcon />}
            {status === "Coding ..." ? "Building" : status}
          </span>
        </div>
        <p className="mb-4 text-sm leading-6 text-slate-400">{description}</p>
        {techStack?.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 text-xs font-medium text-slate-300">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
