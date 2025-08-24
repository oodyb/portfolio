// app/page.js
'use client';
import { useState, useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';
import DateTimeDisplay from '@/components/DateTimeDisplay';
import NavigationButtons from '@/components/NavigationButtons';
import HeroSection from '@/components/HeroSection';
import EnglishCorners from '@/components/EnglishCorners';
import StickerGrid from '@/components/StickerGrid';
import ArabicCorners from '@/components/ArabicCorners';
import ParallaxBlock from '@/components/ParallaxBlock';

const Page = () => {
  const { scrollYProgress } = useScroll();
  const mainRef = useRef(null);
  const infoRef = useRef(null);
  const moreContentRef = useRef(null);
  const sections = [mainRef, infoRef, moreContentRef];
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        const nextSectionIndex = (currentSectionIndex + 1) % sections.length;
        scrollToSection(nextSectionIndex);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevSectionIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
        scrollToSection(prevSectionIndex);
      }
    };

    const handleScrollUpdate = () => {
      const currentScrollPosition = window.scrollY;
      sections.forEach((section, index) => {
        if (section.current) {
          const sectionTop = section.current.offsetTop;
          const sectionHeight = section.current.clientHeight;
          if (currentScrollPosition >= sectionTop && currentScrollPosition < sectionTop + sectionHeight) {
            setCurrentSectionIndex(index);
          }
        }
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScrollUpdate);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScrollUpdate);
    };
  }, [currentSectionIndex]);

  const scrollToSection = (index) => {
    if (sections[index] && sections[index].current) {
      window.scrollTo({
        top: sections[index].current.offsetTop,
        behavior: 'smooth'
      });
      setCurrentSectionIndex(index);
    }
  };

  return (
    <div className="relative">
      <ParallaxBlock scrollYProgress={scrollYProgress} />

      <main ref={mainRef} className="flex min-h-screen items-center justify-center text-gray-600 dark:text-gray-400 relative z-10 overflow-hidden">
        <ArabicCorners scrollYProgress={scrollYProgress} />
        <StickerGrid />
        <section className="relative flex flex-col justify-center items-center text-center w-82 xs:w-80 sm:w-7xl py-40 xs:py-54 sm:py-30 px-4">
          <DateTimeDisplay />
          <NavigationButtons onInfoClick={() => scrollToSection(1)} />
          <HeroSection />
        </section>
        <EnglishCorners scrollYProgress={scrollYProgress} />
      </main>

      <section ref={infoRef} className="min-h-screen relative z-20 text-black dark:text-white flex items-center justify-center py-20">
        {/* Projects section */}
      </section>

      <section ref={moreContentRef} className="min-h-screen relative z-20 text-black dark:text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8" style={{ fontFamily: "var(--font-special_elite)" }}> More Content </h2>
        </div>
      </section>

    </div>
  );
};

export default Page;