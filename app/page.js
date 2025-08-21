// ../app/page.js
'use client';
import { useState, useEffect } from 'react';

export default function Page() {
  const [date, setDate] = useState('');
  const [arabicDay, setArabicDay] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        numberingSystem: 'arab',
      });
      setDate(formattedDate);

      const arabicDayFormatter = new Intl.DateTimeFormat('ar-SA', {
        weekday: 'long',
      });
      setArabicDay(arabicDayFormatter.format(now));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Array of floating vertical texts
  const floatingTexts = [
    { text: 'Design.', top: '50px', left: '90px' },
    { text: 'Experimental.', top: '50px', left: '60px' },
    { text: 'More Direct. More Raw.', top: '50px', left: '30px' },
    { text: 'Design.', bottom: '50px', right: '90px' },
    { text: 'Experimental.', bottom: '50px', right: '60px' },
    { text: 'More Direct. More Raw.', bottom: '50px', right: '30px' },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center text-gray-600 dark:text-gray-400 relative">
      {/* Portfolio */}
      <span className="absolute top-8 right-12 text-sm sm:text-2xl">
        ملف
      </span>
            <span className="absolute bottom-8 left-12 text-sm sm:text-2xl">
        ملف
      </span>
      <section className="relative flex flex-col justify-center items-center text-center sm:w-7xl w-80 sm:py-30 py-56">
        {/* Date */}
        <span className="absolute top-0 left-0 ml-4 mt-4 font-mono text-sm md:text-lg bg-[#e3cdb1] p-2 text-black">
          {date}
        </span>

        {/* Arabic day */}
        <span className="absolute top-0 right-0 mr-4 mt-4 font-mono text-sm sm:text-lg bg-[#e3cdb1] p-2 pl-4 text-black">
          {arabicDay}
        </span>

        {/* Left buttons */}
        <button
          className="absolute bottom-26 left-6 hover:underline text-sm md:text-lg font-bold"
          style={{ fontFamily: "var(--font-special_elite)" }}
        >
          Thoughts
        </button>
        <button
          className="absolute bottom-20 left-6 hover:underline text-sm md:text-lg font-bold"
          style={{ fontFamily: "var(--font-special_elite)" }}
        >
          Projects
        </button>

        {/* Right buttons */}
        <button
          className="absolute bottom-26 right-6 hover:underline text-sm md:text-lg font-bold"
          style={{ fontFamily: "var(--font-special_elite)" }}
        >
          Info
        </button>
        <button
          className="absolute bottom-20 right-6 hover:underline text-sm md:text-lg font-bold"
          style={{ fontFamily: "var(--font-special_elite)" }}
        >
          Contact
        </button>

        {/* Name */}
        <h1
          className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2"
          style={{ fontFamily: "var(--font-special_elite)" }}
        >
          &lt;ALWALEED S. DAHER/&gt;
        </h1>

        {/* Subtitle */}
        <p
          className="text-md md:text-lg leading-relaxed bg-[#e3cdb1] p-2 text-black mb-8"
          style={{ fontFamily: "var(--font-special_elite)" }}
        >
          Software Developer
        </p>
      </section>

      {/* Floating Vertical Texts */}
      {floatingTexts.map((item, index) => {
        const style = {
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          top: item.top,
          bottom: item.bottom,
          left: item.left,
          right: item.right,
        };

        // Flip right-side text
        if (item.right) {
          style.transform = 'rotate(180deg)';
        }

        return (
          <p
            key={index}
            className="absolute font-mono text-xs sm:text-lg md:text-xl leading-5"
            style={style}
          >
            {item.text}
          </p>
        );
      })}
    </main>
  );
}