"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "TypeRacer",
    description: "A project focused on assessing both the time efficiency and accuracy within a speed-writing test.",
    image: "/images/projects/1.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/HampusCastle/TypeRacer",
    //previewUrl: "/",
  },
  {
    id: 2,
    title: "Dungeon Run",
    description: "During our Java course, we engaged in an enjoyable project centered around a game where the objective is to defeat various types of monsters, acquire impressive weapons, and seamlessly resume progress from the last session, thanks to data storage in a database.",
    image: "/images/projects/2.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/HampusCastle/DungeonV2",
    //previewUrl: "/",
  },
  {
    id: 3,
    title: "Hackaton cryptogenic challenge",
    description: "We were presented with an engaging challenge during a hackathon—a delightful experience to explore and experiment with.",
    image: "/images/projects/3.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/HampusCastle/Hackaton_dag_2",
    //previewUrl: "/",
  },
  {
    id: 4,
    title: "Dice Game",
    description: "My initial Java project stands as a distinctive achievement, serving as both a standalone creation and a testament to the advancements made in my programming journey.",
    image: "/images/projects/4.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/HampusCastle/DiceGame",
    //previewUrl: "/",
  },
  {
    id: 5,
    title: "My Website",
    description: "The website you are currently exploring represents my initial exploration into React, Next.js, and Tailwind, offering valuable insights into these technologies.",
    image: "/images/projects/5.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/HampusCastle/portfolio-project",
    //previewUrl: "/",
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
              //previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
