"use client";

import React, { Suspense, useState } from "react";
import ContactForm from "../popups/ContactForm";
import Desktop from "../3dModels/Desktop";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../Canvas/CanvasLoader";
import BlenderIcon from "../3dModels/Blender";
import ReactIcon from "../3dModels/React";
import RustIcon from "../3dModels/Rust";
import LinuxIcon from "../3dModels/Linux";

const HeroSection = () => {
  const [isFormOpen, setFormOpen] = useState(false);

  return (
    <div className="relative w-full h-screen  flex flex-col items-center">
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white mt-10">
        {/* Heading */}
        <div className="text-xl sm:text-3xl font-bold leading-tight tracking-wide mb-4">
          <span className="text-green-500">Hi! </span>
          <img
            src="/icons/waving-hand.svg"
            alt="Wave Icon"
            className="w-8 h-8 inline-block wave -mt-2"
          />
          <span className="text-gray-100">, I am Prashant</span>
        </div>

        <div className="text-xl sm:text-2xl font-bold leading-tight tracking-wide mb-6">
          Building and Securing Products & Brands
        </div>
      </div>

      <div className='w-full h-full inset-0 absolute z-0'>
                <Canvas>
                    <BlenderIcon />
                    <ReactIcon />
                    <RustIcon />
                    <LinuxIcon />
                </Canvas>
            </div>

      {/* 3D Model */}
      <div className="flex-grow flex items-center justify-center w-full">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <Desktop />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Contact Button */}
      <div className="relative z-10 mb-24 mt-10">
        <button
          className="px-6 py-3 text-md font-semibold rounded-lg bg-zinc-900 text-white transition-all duration-300 flex items-center justify-center space-x-4 relative"
          onClick={() => setFormOpen((prev) => !prev)}
        >
          <span className="relative flex">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="font-thin">Let's Connect</span>
        </button>
      </div>

      {/* Contact Form Popup */}
      {isFormOpen && (
        <ContactForm isOpen={isFormOpen} onClose={() => setFormOpen(false)} />
      )}
    </div>
  );
};

export default HeroSection;
