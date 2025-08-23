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
    <div className="relative z-1">
      <ParallaxBlock scrollYProgress={scrollYProgress} />

      <main ref={mainRef} className="flex min-h-screen items-center justify-center text-gray-600 dark:text-gray-400 relative overflow-hidden">
        <ArabicCorners scrollYProgress={scrollYProgress} />
        <StickerGrid />

        <section className="relative flex flex-col justify-center items-center text-center w-72 xs:w-80 sm:w-7xl py-40 xs:py-54 sm:py-30 px-4">
          <DateTimeDisplay />
          <NavigationButtons onInfoClick={() => scrollToSection(1)} />
          <HeroSection />
        </section>
        <EnglishCorners scrollYProgress={scrollYProgress} />

        <button
          onClick={() => scrollToSection(1)}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-gray-800 transition-all duration-300"
          aria-label="Scroll down"
        >
          <label className='justify-center'>[Scroll Down]</label>
          <svg width="24" height="24" viewBox="0 0 0 0" fill="currentColor">
            <path d="M12 16l-6-6h12l-6 6z" />
          </svg>
        </button>
      </main>

      <section ref={infoRef} className="min-h-screen text-black dark:text-white flex items-center justify-center">
        <div className="text-center">
          <h2
            className="text-4xl md:text-6xl font-bold mb-8"
            style={{ fontFamily: "var(--font-special_elite)" }}
          >
            Info Section
          </h2>
        </div>
      </section>
      <section ref={moreContentRef} className="min-h-screen text-black dark:text-white flex items-center justify-center">
        <div className="text-center">
          <h2
            className="text-4xl md:text-6xl font-bold mb-8"
            style={{ fontFamily: "var(--font-special_elite)" }}
          >
            More Content
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Page;