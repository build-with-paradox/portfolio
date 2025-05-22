"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaDownload } from "react-icons/fa";
import { SiBlender } from "react-icons/si";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { myProductVisualizationProjects } from "../Data/myproductvisualiztionprojects";

const ProductVisualizationSection = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const projectCount = myProductVisualizationProjects.length;

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === "previous") {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    const currentProject = myProductVisualizationProjects[selectedProjectIndex];

    useGSAP(() => {
        gsap.fromTo(
            `.animatedText`,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "power2.inOut" }
        );
    }, [selectedProjectIndex]);

    return (
        <section className="my-20 lg:px-10 px-4">
            <p className="head-text text-3xl font-bold mb-12 text-center md:text-left">
                My Product Visualization Work
            </p>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 w-full items-stretch">
                {/* Info Card */}
                <div className="bg-zinc-900 rounded-lg p-8 shadow-lg flex flex-col justify-between h-full min-h-[500px]">
                    {/* Logo */}
                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg">
                        <img
                            src="/assets/blender.webp"
                            alt={`${currentProject.title} logo`}
                            className="w-16 h-16 object-contain rounded-full shadow-lg border-4 border-zinc-600"
                        />
                    </div>

                    {/* Info */}
                    <div className="text-white mt-4 flex-1">
                        <p className="text-2xl font-semibold animatedText">{currentProject.title}</p>
                        <p className="text-lg animatedText mt-2">{currentProject.desc}</p>
                        <p className="text-zinc-400 animatedText mt-2">{currentProject.subdesc}</p>
                    </div>

                    {/* Tags and Download */}
                    <div className="mt-4">
                        <div className="flex flex-wrap items-center gap-4">
                            {currentProject.tags?.length > 0
                                ? currentProject.tags.map((tag, index) => (
                                    <div key={index} className="bg-zinc-700 rounded-full p-3 shadow-md">
                                        <SiBlender className="text-white w-6 h-6" />
                                    </div>
                                ))
                                : (
                                    <div className="bg-zinc-700 rounded-full p-3 shadow-md">
                                        <SiBlender className="text-[#EB7700] w-6 h-6" />
                                    </div>
                                )}

                            {currentProject.paid && currentProject.fileLink ? (
                                <a
                                    href={currentProject.fileLink}
                                    download
                                    target="_blank"
                                    className="ml-auto text-gray-200 flex items-center gap-2 px-4 py-2 hover:text-[#a3e635] transition-all duration-300"
                                >
                                    Download <FaDownload className="w-4 h-4" />
                                </a>
                            ) : (
                                <div className="ml-auto text-sm text-red-400 italic">
                                    Demo only (not downloadable)
                                </div>
                            )}
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

                {/* Preview */}
                <div className="bg-zinc-900 rounded-lg p-4 shadow-2xl h-full min-h-[500px] flex items-center justify-center">
                    <div className="bg-black rounded-md border-[12px] border-zinc-800 w-full h-full overflow-hidden flex items-center justify-center shadow-inner">
                        {currentProject.previewType === "video" ? (
                            <video
                                src={currentProject.previewSrc}
                                className="w-full h-full object-cover"
                                controls
                                autoPlay
                                loop
                                muted
                            />
                        ) : currentProject.previewType === "image" ? (
                            <img
                                src={currentProject.previewSrc}
                                alt="Preview"
                                className="w-full h-full object-contain"
                            />
                        ) : (
                            <div className="text-gray-500 text-center">No preview available</div>
                        )}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ProductVisualizationSection;
