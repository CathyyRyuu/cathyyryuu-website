"use client"
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A personal website showcasing my work and achievements, built using modern web development tools",
    image: "/images/projects/react-portfolio-website.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CathyyRyuu/cathyyryuu-website",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "My Workout App",
    description: "Transform your fitness journey with My Workout App's personalized workouts and expert guidance.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CathyyRyuu",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "An online platform offering a seamless shopping experience, created with Next.js, Chakra-UI, and MongoDB database",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CathyyRyuu",
    previewUrl: "/"
  },
  {
    id: 4,
    title: "Food Ordering App",
    description: "Conveniently order your favorite meals with ease and simplicity, bringing delicious cuisine straight to your doorstep",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/CathyyRyuu",
    previewUrl: "/"
  },
  {
    id: 5,
    title: "Expense Smart Analyzer",
    description: "Effortlessly track and manage your expenses with an intuitive and interactive tool, providing insights to optimize your financial habits",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CathyyRyuu",
    previewUrl: "/"
  },
  {
    id: 6,
    title: "NerdScript Bot🤖: Guide to Quick and Insightful Book Summaries",
    description: "NerdScript Bot is your ultimate companion in the world of literature. With its cutting-edge AI powered by ChatGPT 3.5 Turbo, NerdScript Bot transforms lengthy book summaries into concise and insightful nuggets of knowledge.",
    image: "/images/projects/book-summary-app.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/CathyyRyuu",
    previewUrl: "book-summary-app.vercel.app"
  },
];

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
    <section id="projects">
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag 
          onClick={handleTagChange} 
          name="All" 
          isSelected={tag === "All"}
        />
        <ProjectTag 
          onClick={handleTagChange} 
          name="Web" 
          isSelected={tag === "Web"}
        />
        <ProjectTag 
          onClick={handleTagChange} 
          name="Mobile" 
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li 
            key={index}
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
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;