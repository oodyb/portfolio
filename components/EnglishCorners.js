// components/EnglishCorners.js
'use client';
import { useMemo } from 'react';
import { motion, useTransform } from 'framer-motion';

const EnglishCorners = ({ scrollYProgress }) => {
    const texts = useMemo(() => [
        'Limitless.',
        'Be Experimental.',
        'More Direct. More Raw.',
    ], []);

    const positions = useMemo(() => [
        { top: '30px', left: '70px' },
        { top: '30px', left: '45px' },
        { top: '30px', left: '20px' },
        { bottom: '30px', right: '70px' },
        { bottom: '30px', right: '45px' },
        { bottom: '30px', right: '20px' },
    ], []);

    const translateY = useTransform(scrollYProgress, [0, 0], [0, 0]);

    return (
        <motion.div className="fixed inset-0 z-10 pointer-events-none" style={{ translateY }}>
            {texts.concat(texts).map((text, i) => {
                const pos = positions[i];
                const isRight = pos.right;
                return (
                    <p
                        key={i}
                        className="absolute font-mono text-[10px] xs:text-xs sm:text-lg md:text-xl leading-5"
                        style={{
                            writingMode: 'vertical-rl',
                            textOrientation: 'mixed',
                            transform: isRight ? 'rotate(180deg)' : 'none',
                            ...pos
                        }}
                    >
                        {text}
                    </p>
                );
            })}
        </motion.div>
    );
};

export default EnglishCorners;