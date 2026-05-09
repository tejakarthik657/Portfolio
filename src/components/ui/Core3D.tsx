import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

function RotatingCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      
      // Gentle floating
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.5;

      // Mouse reactivity
      const targetX = (state.mouse.x * Math.PI) / 4;
      const targetY = (state.mouse.y * Math.PI) / 4;
      
      meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <TorusKnot ref={meshRef} args={[10, 2.5, 256, 32]} scale={0.4}>
      <meshBasicMaterial 
        color="#ffffff" 
        wireframe={true} 
        transparent={true} 
        opacity={0.06} 
        side={THREE.DoubleSide} 
      />
    </TorusKnot>
  );
}

export default function Core3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen">
      <Canvas
        camera={{ position: [0, 0, 25], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <RotatingCore />
      </Canvas>
    </div>
  );
}
