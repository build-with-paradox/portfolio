"use client"

import { useGLTF } from '@react-three/drei'; 
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const RustIcon = () => {
  const {scene} = useGLTF('/3dicons/rust_logo.glb'); 
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(elapsedTime) * 0.2; 
      meshRef.current.position.x = 5;
      meshRef.current.position.y = -2;
      meshRef.current.rotation.y += 0.01; 
      meshRef.current.scale.set(0.2, 0.2, 0.2); 
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} /> 
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <mesh ref={meshRef}>
        <primitive object={scene} />
      </mesh>
    </>
  );
};

export default RustIcon;
