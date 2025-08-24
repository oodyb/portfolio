// app/wrapper.js
'use client'
import Noise from '@/react-bits/Noise'

export default function Wrapper({ children }) {
    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 w-full h-full z-10 pointer-events-none" style={{ height: '100vh' }}>
                <Noise
                    patternSize={500}
                    patternScaleX={0.1}
                    patternScaleY={0.1}
                    patternRefreshInterval={5}
                    patternAlpha={25}
                />
            </div>
            <div className="relative">
                {children}
            </div>
        </div>
    );
}