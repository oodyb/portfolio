// components/ParallaxBlock.js
'use client';
import { motion, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import useScreenWidth from '@/hooks/useScreenWidth';

const ParallaxBlock = ({ scrollYProgress }) => {
    const [windowHeight, setWindowHeight] = useState(0);
    const screenWidth = useScreenWidth();
    const isMobile = screenWidth < 768;
    const mobileHeightTransform = useTransform(scrollYProgress, [0, 1], [125, 125 + windowHeight * 1.5]);
    const mobileMarginTopTransform = useTransform(scrollYProgress, [0, 1], [-10, -10 - windowHeight * 0.7]);
    const height = useTransform(scrollYProgress, [0, 1], [200, 200 + windowHeight * 1.5]);
    const marginTop = useTransform(scrollYProgress, [0, 1], [-20, -20 - windowHeight * 0.7]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowHeight(window.innerHeight);
        }
    }, []);

    if (windowHeight === 0) {
        return null;
    }

    const blockStyle = isMobile ? {
        width: '50px',
        height: mobileHeightTransform,
        marginTop: mobileMarginTopTransform,
        top: '49%',
        left: '30%',
        transform: 'translate(-50%, -50%)',
    } : {
        width: '150px',
        height,
        marginTop,
        left: '43.5%',
        top: '46.5%',
        transform: 'translate(-50%, -50%)',
        marginLeft: '-85px',
    };

    return (
        <div className="fixed inset-0 z-10 pointer-events-none">
            <motion.div
                className="absolute bg-[#e10000] dark:bg-[#a70000] transition-colors duration-300"
                style={blockStyle}
            />
        </div>
    );
};

export default ParallaxBlock;