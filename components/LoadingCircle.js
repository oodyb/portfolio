// components/LoadingCircle.js
'use client';
import React from 'react';

export default function LoadingCircle() {
    return (
        <div className="flex justify-center items-center relative">
            <div className="relative w-32 h-32">
                <div
                    className="absolute inset-0 rounded-full border-4 border-black animate-spin"
                    style={{
                        background: 'conic-gradient(from 0deg, #e3cdb1 0%, #000000 50%, #e3cdb1 100%)',
                        animationDuration: '2s',
                        animationTimingFunction: 'linear',
                        mask: 'radial-gradient(farthest-side, #0000 calc(100% - 16px), #000 0)'
                    }}
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full" />
            </div>
        </div>
    );
}