"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
// import { useControls } from "leva"; // Commented for future use

const BlenderIcon = () => {
  const { scene } = useGLTF("/3dicons/blender_logo.glb");
  const meshRef = useRef(null);

  // Leva controls (commented for future use)
  // const { positionX, positionY, positionZ, scale } = useControls({
  //   positionX: { value: 0, step: 0.1 },
  //   positionY: { value: 0, step: 0.1 },
  //   positionZ: { value: 0,  step: 0.1 },
  //   scale: { value: 1, min: 0.001, max: 2, step: 0.01 },
  // });

  // Fixed values
  const positionX = -45.0;
  const positionY = 20.0;
  const positionZ = -40.0;
  const scale = 0.01;

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.position.y = positionY + Math.sin(elapsedTime) * 0.2; // Oscillate along Y-axis
      meshRef.current.position.x = positionX;
      meshRef.current.position.z = positionZ;
      meshRef.current.rotation.y += 0.01; // Continuous rotation
      meshRef.current.scale.set(scale, scale, scale); // Apply fixed scale
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <mesh ref={meshRef}>
        <primitive object={scene} />
      </mesh>
    </>
  );
};

export default BlenderIcon;
