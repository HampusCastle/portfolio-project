"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "TypeRacer",
    description: "Project worked on to evaluate time and accuracy in a speed-writing test.",
    image: "/images/projects/1.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/HampusCastle/TypeRacer",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Dungeon Run",
    description: "A fun project we did during our Java course. Aim of the game is to beat different types of monsters, aquire cool weapons. Everything is stored in a database so that you could easily start from where you last left off.",
    image: "/images/projects/2.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/HampusCastle/DungeonV2",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Hackaton cryptogenic challenge",
    description: "A fun challange given to us during a hackaton. Very fun thing to try out!",
    image: "/images/projects/3.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/HampusCastle/Hackaton_dag_2",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Dice Game",
    description: "My first ever Java project. A staple of it's own and a showcase of the progress that has been made since!",
    image: "/images/projects/4.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/HampusCastle/DiceGame",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "My Website",
    description: "The website you are currently on. My first insight into react, next.js and tailwind.",
    image: "/images/projects/5.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/HampusCastle/portfolio-project",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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

export default ProjectsSection;
