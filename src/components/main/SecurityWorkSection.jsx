"use client";

import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaFileAlt,
  FaClipboardCheck,
} from "react-icons/fa";
import { securityWorks } from "../Data/mysecurityworkData";

const SecurityWorkSection = () => {
  // Extract unique topics from the dataset
  const uniqueTopics = [...new Set(securityWorks.map((work) => work.topic))];

  const [selectedTopic, setSelectedTopic] = useState(uniqueTopics[0]);
  const [selectedWorkIndex, setSelectedWorkIndex] = useState(0);

  // Filter works based on the selected topic
  const filteredWorks = securityWorks.filter(
    (work) => work.topic === selectedTopic
  );
  const currentWork = filteredWorks[selectedWorkIndex] || {};

  return (
    <section className="my-20 px-4 lg:px-10">
      <p className="text-3xl font-bold mb-12">My Security Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        {/* Left Box: Topic selection */}
        <div className="bg-zinc-900 rounded-lg p-8 shadow-lg">
          <select
            className="bg-zinc-100 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:border-green-500"
            value={selectedTopic}
            onChange={(e) => {
              setSelectedTopic(e.target.value);
              setSelectedWorkIndex(0); // Reset to the first work
            }}
          >
            {uniqueTopics.map((topic, index) => (
              <option key={index} value={topic}>
                {topic}
              </option>
            ))}
          </select>

          {/* Topic Image */}
          {currentWork.topicImage && (
            <div className="flex flex-col items-center justify-between mt-10">
              <img
                src={currentWork.topicImage}
                alt={`${currentWork.topic} logo`}
                className="w-24 h-24 object-contain rounded-full shadow-lg border-4"
              />
              <p className="text-white text-xl font-semibold mt-4">
                {currentWork.topic}
              </p>
            </div>
          )}
        </div>

        {/* Right Box: Work Details */}
        <div className="bg-zinc-900 rounded-lg p-8 shadow-lg">
          {currentWork ? (
            <>
              <div className="flex items-center">
                <img
                  src={currentWork.reportLogo}
                  alt={`${currentWork.title} logo`}
                  className="w-24 h-24 object-contain rounded-full shadow-lg border-2 border-zinc-600 mr-4"
                />
                <p className="text-white text-2xl font-semibold ml-3">
                  {currentWork.title}
                </p>
              </div>
              <p className="text-white text-lg mt-2">{currentWork.description}</p>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-4 mt-4">
                {currentWork.platformLink && (
                  <a
                    href={currentWork.platformLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-200 flex items-center gap-2 px-4 py-2 hover:text-gray-300 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    View Platform
                  </a>
                )}
                {currentWork.reportGitLink && (
                  <a
                    href={currentWork.reportGitLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-200 flex items-center gap-2 px-4 py-2 hover:text-gray-300 transition-all duration-300"
                  >
                    <FaFileAlt className="w-4 h-4" />
                    View Report on GitHub
                  </a>
                )}
                {currentWork.downloadablePDF && (
                  <a
                    href={currentWork.downloadablePDF}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-200 flex items-center gap-2 px-4 py-2 hover:text-gray-300 transition-all duration-300"
                  >
                    <FaClipboardCheck className="w-4 h-4" />
                    Download Report
                  </a>
                )}
                {currentWork.mediumLink && (
                  <a
                    href={currentWork.mediumLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-200 flex items-center gap-2 px-4 py-2 hover:text-gray-300 transition-all duration-300"
                  >
                    <FaClipboardCheck className="w-4 h-4" />
                    Medium Write-up
                  </a>
                )}
              </div>

              {/* Navigation */}
              {filteredWorks.length > 1 && (
                <div className="flex justify-between items-center mt-8">
                  <button
                    className="p-3 bg-gradient-to-r from-gray-500 to-black rounded-full hover:bg-zinc-600 transition-all duration-300"
                    onClick={() =>
                      setSelectedWorkIndex(
                        (prevIndex) =>
                          prevIndex === 0
                            ? filteredWorks.length - 1
                            : prevIndex - 1
                      )
                    }
                  >
                    <FaArrowLeft className="text-white w-6 h-6" />
                  </button>
                  <button
                    className="p-3 bg-gradient-to-r from-gray-500 to-black rounded-full hover:bg-zinc-600 transition-all duration-300"
                    onClick={() =>
                      setSelectedWorkIndex(
                        (prevIndex) =>
                          prevIndex === filteredWorks.length - 1
                            ? 0
                            : prevIndex + 1
                      )
                    }
                  >
                    <FaArrowRight className="text-white w-6 h-6" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className="text-white text-lg">No work available for this topic.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SecurityWorkSection;
