"use client";

import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
// import { useControls } from "leva"; // Commented Leva import for future use

const Desktop = () => {
  const { scene } = useGLTF("/3dmodels/monitor2.glb"); // Replace with your model's path
  const desktopRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 }); // To track mouse position

  // Hardcoded values for the model's initial transformation
  const rotationX = 0.12;
  const rotationY = 11.0;
  const rotationZ = -0.1;
  const scale = 2.4;
  const positionX = -1.0;
  const positionY = -6.0;
  const positionZ = 10.0;

  // Leva controls code (commented out for future use)
  /*
  const { rotationX, rotationY, rotationZ, scale, positionX, positionY, positionZ } = useControls({
    rotationX: { value: 0, label: "Rotation X" },
    rotationY: { value: 0, label: "Rotation Y" },
    rotationZ: { value: 0, label: "Rotation Z" },
    scale: { value: 3, label: "Scale" },
    positionX: { value: 0, label: "Position X" },
    positionY: { value: 0, label: "Position Y" },
    positionZ: { value: 0, label: "Position Z" },
  });
  */

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse coordinates (-1 to 1)
      const { clientX, clientY, innerWidth, innerHeight } = window;
      mouseRef.current.x = (event.clientX / innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (desktopRef.current) {
      // Base transformations
      desktopRef.current.rotation.x = rotationX + mouseRef.current.y * 0.1; // Slight tilt based on mouse Y
      desktopRef.current.rotation.y = rotationY + mouseRef.current.x * 0.1; // Slight pan based on mouse X
      desktopRef.current.rotation.z = rotationZ;
      desktopRef.current.scale.set(scale, scale, scale);
      desktopRef.current.position.set(positionX, positionY, positionZ);
    }
  });

  useEffect(() => {
    console.log(`Rotation (X: ${rotationX}, Y: ${rotationY}, Z: ${rotationZ}), Scale: ${scale}, Position: (${positionX}, ${positionY}, ${positionZ})`);
  }, []);

  return (
    <group ref={desktopRef}>
      <primitive object={scene} />
    </group>
  );
};

export default Desktop;
