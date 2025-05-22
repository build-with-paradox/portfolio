"use client"

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const ReactIcon = () => {
  const { scene } = useGLTF('/3dicons/react_logo.glb');
  const meshRef = useRef(null);  
  
  
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(elapsedTime) * 0.2; 
      meshRef.current.position.x = 5
      meshRef.current.position.y = 2
      
      meshRef.current.rotation.y += 0.01;
      
      meshRef.current.scale.set(0.4, 0.4, 0.4); 
    }
  });

  return (
    <mesh ref={meshRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default ReactIcon;
