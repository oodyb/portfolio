// components/HeroSection.js
import TextType from '@/react-bits/TextType';
import DecryptedText from '@/react-bits/DecryptedText';
import { useEffect, useState } from 'react';

const HeroSection = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const checkDarkMode = () => {
            setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
        };

        checkDarkMode();
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', checkDarkMode);

        return () => mediaQuery.removeEventListener('change', checkDarkMode);
    }, []);

    return (
        <>
            <h1 className="text-2xl xs:text-2xl sm:text-4xl md:text-6xl font-bold mb-2 px-2" style={{ fontFamily: "var(--font-special_elite)" }}>
                <TextType
                    text={["<ALWALEED S. DAHER />"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    textColors={[isDark ? "#f5f1e6" : "#1a1a1a"]}
                />
            </h1>
            <p className="text-sm xs:text-md md:text-lg leading-relaxed bg-[#e3cdb1] p-1.5 xs:p-2 text-black mb-8 rounded-sm"
                style={{ fontFamily: "var(--font-special_elite)" }}>
                <DecryptedText 
                    text={"Software Developer"} 
                    autoAnimate={true}
                    autoAnimateInterval={1000}
                    maxIterations={8}
                />
            </p>
        </>
    );
};

export default HeroSection;