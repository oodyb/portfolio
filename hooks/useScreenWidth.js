// hooks/ScreenWidth.js
import { useState, useEffect } from 'react';

export default function useScreenWidth() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    return width;
}