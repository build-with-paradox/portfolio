"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt, FaHtml5 } from "react-icons/fa";
import {
  SiReact, SiTailwindcss, SiNodeDotJs, SiFlask, SiVercel,
  SiMongodb, SiSocketdotio, SiPython
} from "react-icons/si";
import { FaCcStripe } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandDjango, TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { myProjects } from "../Data/myprojects";


const iconMap = {
  "React": SiReact,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodeDotJs,
  "Django": TbBrandDjango,
  "Flask": SiFlask,
  "Next Js": TbBrandNextjs,
  "PostgreSQL": BiLogoPostgresql,
  "Vercel": SiVercel,
  "MongoDB": SiMongodb,
  "Stripe": FaCcStripe,
  "Socket.IO": SiSocketdotio,
  "Python": SiPython,
  "HTML": FaHtml5,
  "Bootstrap": BsBootstrap
};

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const projectCount = myProjects.length;

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) =>
      direction === "previous" ? (prevIndex === 0 ? projectCount - 1 : prevIndex - 1)
        : (prevIndex === projectCount - 1 ? 0 : prevIndex + 1)
    );
  };

  const currentProject = myProjects[selectedProjectIndex];

  useGSAP(() => {
    gsap.fromTo(
      ".animatedText",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "power2.inOut" }
    );
  }, [selectedProjectIndex]);

  return (
    <section className="c-space my-20 px-4 lg:px-16">
      <p className="head-text text-3xl font-bold mb-12" id="work">
        My Development Work
      </p>

      <div className="gap-8 w-full">
        <div className="bg-zinc-900 rounded-lg p-8 shadow-lg flex flex-col gap-6 relative">
          {/* Logo */}
          <div className="p-3 backdrop-blur-3xl w-[20rem] rounded-lg">
            <img
              src={currentProject.logo}
              alt={`${currentProject.title} logo`}
              className="w-24 h-24 object-contain rounded-full shadow-lg border-4 border-zinc-600"
            />
          </div>

          {/* Project Details */}
          <div className="text-white">
            <p className="text-2xl font-semibold animatedText">{currentProject.title}</p>
            <p className="text-lg animatedText mt-2">{currentProject.desc}</p>
            <p className="text-zinc-400 animatedText mt-2">{currentProject.subdesc}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            {currentProject.tags.map((tag, index) => {
              const TagIcon = iconMap[tag.name];
              return (
                TagIcon && (
                  <div key={index} className="bg-zinc-700 rounded-full p-3 shadow-md">
                    <TagIcon className="text-white w-6 h-6" />
                  </div>
                )
              );
            })}

            {/* External Link */}
            <div className="ml-auto mt-4 flex flex-wrap gap-4">
              {currentProject.github && (
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-200 flex items-center gap-2 px-4 py-2 hover:text-gray-300 transition-all duration-300"
                >
                  View GitHub <FaGithub className="w-5 h-5 hover:text-purple-500" />
                </a>
              )}
              {currentProject.href && (
                <a
                  href={currentProject.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-200 flex items-center gap-2 px-4 py-2 hover:text-gray-300 transition-all duration-300"
                >
                  Live Site <FaExternalLinkAlt className="w-4 h-4 hover:text-lime-500" />
                </a>
              )}
            </div>

          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              className="p-3 bg-gradient-to-r from-gray-500 to-black rounded-full hover:bg-zinc-600 transition-all duration-300"
              onClick={() => handleNavigation("previous")}
            >
              <FaArrowLeft className="text-white w-6 h-6" />
            </button>
            <button
              className="p-3 bg-gradient-to-r from-gray-500 to-black rounded-full hover:bg-zinc-600 transition-all duration-300"
              onClick={() => handleNavigation("next")}
            >
              <FaArrowRight className="text-white w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
