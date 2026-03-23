"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/bmw.glb");
  return <primitive object={scene} />;
}

export default function CarModel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-lime-400 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-20 overflow-hidden cursor-grab active:cursor-grabbing">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 2, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.8} contactShadow={true} contactShadowOpacity={0.7} adjustCamera={1.2}>
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={0.8} 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.1} 
          minPolarAngle={Math.PI / 3} 
        />
      </Canvas>
    </div>
  );
}

// Preload the model so it loads faster
useGLTF.preload("/bmw.glb");
