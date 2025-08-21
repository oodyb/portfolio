// ../app/wrapper.js
'use client'
import Noise from '@/components/Noise'

export default function Wrapper({ children }) {
    return (
        <div style={{ position: 'relative', }}>
            <Noise
                patternSize={500}
                patternScaleX={0.1}
                patternScaleY={0.1}
                patternRefreshInterval={5}
                patternAlpha={25}
            />
        </div>
    );
}
