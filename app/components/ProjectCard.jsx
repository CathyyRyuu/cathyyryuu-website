import React from "react";
import {
  ArrowPathIcon,
  CodeBracketIcon,
  DocumentMagnifyingGlassIcon,
  EyeIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import FirecrackerAnimatedIcon from "./AnimatedIcons/FirecrackerAnimatedIconWrapper";
import MaintenanceAnimatedIcon from "./AnimatedIcons/MaintenanceAnimatedIconWrapper";

const caseStudyIcons = {
  finance: ArrowPathIcon,
  legal: DocumentMagnifyingGlassIcon,
  knowledge: ServerStackIcon,
  technology: ServerStackIcon,
};

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  techStack,
  status,
  category,
  caseType,
}) => {
  const CaseStudyIcon = caseStudyIcons[caseType] || DocumentMagnifyingGlassIcon;
  const hasActions = gitUrl || previewUrl;

  return (
    <article className="group h-full overflow-hidden rounded-[1.5rem] border-2 border-line bg-paper-soft shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent-light hover:shadow-card-hover">
      {imgUrl ? (
        <div
          className="relative m-3 mb-0 h-48 overflow-hidden rounded-2xl border-2 border-line md:h-60"
          style={{ background: `url(${imgUrl}) center/cover` }}
        >
          {hasActions && (
            <div className="absolute inset-0 flex items-center justify-center bg-paper/0 opacity-0 transition duration-300 group-hover:bg-paper/85 group-hover:opacity-100">
              {gitUrl && (
                <Link
                  href={gitUrl}
                  className="relative mr-2 h-12 w-12 rounded-full border-2 border-line bg-paper-soft transition hover:border-accent hover:bg-accent-pale group/link"
                  aria-label={`${title} source code`}
                >
                  <CodeBracketIcon className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-ink-soft group-hover/link:text-accent-deep" />
                </Link>
              )}
              {previewUrl && (
                <Link
                  href={previewUrl}
                  className="relative h-12 w-12 rounded-full border-2 border-line bg-paper-soft transition hover:border-accent hover:bg-accent-pale group/link"
                  aria-label={`${title} preview`}
                >
                  <EyeIcon className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-ink-soft group-hover/link:text-accent-deep" />
                </Link>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="relative m-3 mb-0 flex h-48 items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-line bg-[linear-gradient(160deg,#dcecef_0%,#e4eed4_70%,#f7e2cb_100%)] md:h-60">
          <div className="absolute right-4 top-4 flex h-14 w-12 rotate-6 items-center justify-center border-2 border-dotted border-clay bg-paper-soft font-hand text-[0.6rem] leading-tight text-clay-deep">
            AI<br />POST
          </div>
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent bg-paper-soft shadow-card">
            <CaseStudyIcon className="h-10 w-10 text-accent-deep" />
          </div>
        </div>
      )}
      <div className="flex min-h-[15rem] flex-col px-5 py-5 text-ink">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h5 className="font-display text-lg font-bold leading-6 tracking-tight">
            {title}
          </h5>
          <span className="flex shrink-0 items-center gap-1 rounded-full border-2 border-clay/40 bg-clay-pale px-2.5 py-0.5 font-hand text-xs text-clay-deep">
            {status === "Deployed" && <FirecrackerAnimatedIcon />}
            {status === "Coding ..." && <MaintenanceAnimatedIcon />}
            {category || (status === "Coding ..." ? "Building" : status)}
          </span>
        </div>
        <p className="mb-4 text-sm leading-6 text-ink-soft">{description}</p>
        {techStack?.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 text-xs font-semibold">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="chip px-2.5 py-1"
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
