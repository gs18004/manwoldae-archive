// components/ArtifactViewer.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import ArtifactModel from "./ArtifactModel";
import React from "react";

interface ArtifactViewerProps {
  modelPath: string;
}

export default function ArtifactViewer({ modelPath }: ArtifactViewerProps) {
  return (
    <div style={{ width: "100%", height: "500px", cursor: "grab" }}>
      <Canvas camera={{ fov: 45, position: [0, 0, 5] }}>
        <Stage environment="city" intensity={0.6}>
          <ArtifactModel modelPath={modelPath} />
        </Stage>
        <OrbitControls
          makeDefault
          autoRotate
          autoRotateSpeed={0.8}
          enableZoom={true}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(Math.PI * 3) / 4}
        />
      </Canvas>
    </div>
  );
}
