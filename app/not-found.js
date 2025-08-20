// ../app/not-found.js
'use client'
import React from 'react';
import Particles from "@/components/Particles";

export default function NotFound() {
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

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <div className="mb-12">
                    <h1
                        className="text-6xl md:text-8xl font-bold mb-4 select-none"
                        style={{
                            fontFamily: 'var(--font-orbitron)',
                            background: 'linear-gradient(180deg, #22d3ee, #f472b6, #facc15)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        404
                    </h1>
                    <p className="text-xl md:text-3xl font-extralight text-white">
                        Lost in the cosmos. Page not found.
                    </p>
                </div>
            </div>
        </div>
    );
}