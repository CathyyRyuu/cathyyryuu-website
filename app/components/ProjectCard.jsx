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
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className='className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] px-4 py-6">
        <h5 className="font-xl font-semibold flex gap-2 mb-2">
          {title}
          {status === "Deployed" && <FirecrackerAnimatedIcon />}
          {status === "Coding ..." && <MaintenanceAnimatedIcon />}
        </h5>
        <p className="mb-2 text-[#ADB7BE]">{description}</p>
        {techStack?.length > 0 && (
          <div className="text-[#ADB7BE] font-semibold text-sm flex flex-wrap gap-x-2 gap-y-1">
            {techStack.map((tech, idx) => (
              <span key={idx}>
                {tech}
                {idx !== techStack.length - 1 && (
                  <span className="pl-2">•</span>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;