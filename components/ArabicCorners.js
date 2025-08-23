// components/ArabicCorners.js
'use client';
import { motion, useTransform } from 'framer-motion';

const ArabicCorners = ({ scrollYProgress }) => {
    const translateY = useTransform(scrollYProgress, [0, 0], [0, 0]);

    return (
        <motion.div
            className="fixed inset-0 z-10 pointer-events-none"
            style={{ translateY }}
        >
            <span className="absolute top-4 xs:top-8 right-6 xs:right-12 text-sm xs:text-base sm:text-2xl">
                ملف
            </span>
            <span className="absolute bottom-4 xs:bottom-8 left-6 xs:left-12 text-sm xs:text-base sm:text-2xl">
                ملف
            </span>
        </motion.div>
    );
};

export default ArabicCorners;