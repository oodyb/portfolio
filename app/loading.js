// ../app/loading.js
'use client'
import Particles from "@/components/Particles";
import LoadingCircle from "@/components/LoadingCircle";

export default function Loading() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden flex items-center justify-center">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleCount={300}
          particleSpread={15}
          speed={0.05}
          particleColors={['#22d3ee', '#f472b6', '#facc15', '#a78bfa', '#fb7185']}
          moveParticlesOnHover={true}
          particleHoverFactor={2}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={1.5}
          cameraDistance={25}
          disableRotation={false}
        />
      </div>
      <LoadingCircle />
    </div>
  );
}
