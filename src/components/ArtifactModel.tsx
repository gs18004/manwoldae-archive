// components/ArtifactModel.tsx
"use client";

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface ArtifactModelProps {
  modelPath: string;
}

export default function ArtifactModel({ modelPath }: ArtifactModelProps) {
  const { scene }: { scene: THREE.Group } = useGLTF(modelPath);

  const model = scene.clone();

  return <primitive object={model} scale={1.0} />;
}
