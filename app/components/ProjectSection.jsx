"use client"
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";
import projectsData from "../data/ProjectData";

const ProjectSection = () => {
  const [tag,setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y:50, opacity:0 },
    animate: { y:0, opacity:1 },
  };

  return (
    <section id="projects" className="scroll-mt-24 py-8 lg:py-14">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow mb-3">Selected work</p>
          <h2 className='section-title'>
            Workflow impact, translated into systems
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-400">
          Sanitized examples of AI workflow transformation alongside personal
          builds that show the technical foundation behind the advisory work.
        </p>
      </div>
      <div className='mb-8 flex flex-row items-center gap-2 overflow-x-auto text-white'>
        <ProjectTag 
          onClick={handleTagChange} 
          name="All" 
          isSelected={tag === "All"}
        />
        <ProjectTag 
          onClick={handleTagChange} 
          name="Case Studies" 
          isSelected={tag === "Case Studies"}
        />
        <ProjectTag 
          onClick={handleTagChange} 
          name="Personal Projects" 
          isSelected={tag === "Personal Projects"}
        />
      </div>
      <ul ref={ref} className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
        {filteredProjects.map((project, index) => (
          <motion.li 
            key={index}
            className="h-full"
            variants={cardVariants} 
            initial="initial" 
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard 
              key={project.id} 
              title={project.title} 
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              techStack={project.techStack}
              status={project.status}
              category={project.category}
              caseType={project.caseType}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
