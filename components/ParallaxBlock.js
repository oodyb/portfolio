// components/ParallaxBlock.js
'use client';
import { motion, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const ParallaxBlock = ({ scrollYProgress }) => {
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowHeight(window.innerHeight);
        }
    }, []);

    const height = useTransform(scrollYProgress, [0, 1], [200, 200 + windowHeight * 1.5]);
    const marginTop = useTransform(scrollYProgress, [0, 1], [-20, -20 - windowHeight * 0.7]);

    if (windowHeight === 0) {
        return null;
    }

    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            <motion.div
                className="absolute bg-white dark:bg-black transition-colors duration-300"
                style={{
                    left: '43%',
                    top: '47%',
                    transform: 'translate(-50%, -50%)',
                    width: '150px',
                    height,
                    marginLeft: '-85px',
                    marginTop,
                }}
            />
        </div>
    );
};

export default ParallaxBlock;