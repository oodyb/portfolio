// ../components/LoadingCircle.js
'use client';
import React from 'react';

export default function LoadingCircle() {
    return (
        <div>
            <div className="flex justify-center mb-8">
                {/* Single element for the gradient spinner */}
                <div className="relative w-32 h-32 animate-spin">
                    <div className="absolute inset-0 rounded-full" style={{
                        background: 'linear-gradient(180deg, #22d3ee, #f472b6, #facc15)',
                        WebkitMask: 'radial-gradient(farthest-side, #0000 calc(100% - 4px), #000 0)',
                        mask: 'radial-gradient(farthest-side, #0000 calc(100% - 4px), #000 0)'
                    }} />
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
        @keyframes gradient-pulse {
          0%, 100% { 
            background-position: 0% 50%; 
            filter: brightness(1);
          }
          50% { 
            background-position: 100% 50%; 
            filter: brightness(1.2);
          }
        }
        
        @keyframes text-glow {
          0% { 
            text-shadow: 0 0 20px rgba(255, 0, 255, 0.5); 
          }
          100% { 
            text-shadow: 
              0 0 30px rgba(0, 255, 255, 0.8), 
              0 0 40px rgba(255, 0, 255, 0.6),
              0 0 60px rgba(0, 255, 255, 0.4); 
          }
        }
      `}</style>
        </div>
    );
}
