"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
// import { useControls } from "leva"; // Commented for future use

const LinuxIcon = () => {
  const { scene } = useGLTF("/3dicons/linux_icon.glb");
  const meshRef = useRef(null);

  // Leva controls (commented for future use)
  /*
  const { positionX, positionY, positionZ, scale } = useControls({
    positionX: { value: -45.0, step: 0.1 },
    positionY: { value: 10.0, step: 0.1 },
    positionZ: { value: -40.0, step: 0.1 },
    scale: { value: 15.0, min: 0.01, max: 50, step: 0.1 },
  });
  */

  // Fixed values
  const positionX = -45.0;
  const positionY = -10.0;
  const positionZ = -40.0;
  const scale = 15.0;

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (meshRef.current) {
      // Apply position and oscillate along Y-axis
      meshRef.current.position.y = positionY + Math.sin(elapsedTime) * 0.2;
      meshRef.current.position.x = positionX;
      meshRef.current.position.z = positionZ;

      // Continuous rotation
      meshRef.current.rotation.y += 0.01;

      // Apply fixed scale
      meshRef.current.scale.set(scale, scale, scale);
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

export default LinuxIcon;
