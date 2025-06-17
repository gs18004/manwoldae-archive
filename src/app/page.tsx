import dynamic from "next/dynamic";
import { Suspense } from "react";

interface ArtifactData {
  name: string;
  description: string;
}

function Loader() {
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: "8px",
      }}
    >
      <p>유물 데이터를 불러오는 중입니다...</p>
    </div>
  );
}

const ArtifactViewer = dynamic(() => import("@/components/ArtifactViewer"), {
  loading: () => <Loader />,
});

export default function ArtifactPage() {
  const artifactData: ArtifactData = {
    name: "청자 상감 국화문 접시",
    description:
      "뷰어에서 마우스를 사용하여 자유롭게 돌려보거나 확대/축소하여 감상할 수 있습니다.",
  };

  const modelPath: string = "/models/artifact.glb";

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <header style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.1rem", marginBottom: "0.5rem" }}>
          {artifactData.name}
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#555", wordBreak: "keep-all" }}>
          {artifactData.description}
        </p>
      </header>

      <section
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Suspense fallback={<Loader />}>
          <ArtifactViewer modelPath={modelPath} />
        </Suspense>
      </section>
    </main>
  );
}
