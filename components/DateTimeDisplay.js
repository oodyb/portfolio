// components/DateTimeDisplay.js
'use client';
import { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
    const [dateTime, setDateTime] = useState({ date: '', arabicDay: '' });

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            setDateTime({
                date: now.toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    numberingSystem: 'arab',
                }),
                arabicDay: new Intl.DateTimeFormat('ar-SA', { weekday: 'long' }).format(now)
            });
        };

        updateDateTime();
        const interval = setInterval(updateDateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    const badgeClass = "absolute top-0 font-mono text-xs xs:text-sm md:text-lg bg-[#e3cdb1] p-1.5 xs:p-2 text-black rounded-sm";

    return (
        <>
            <span className={`${badgeClass} left-0 ml-6 xs:ml-4 mt-4 xs:mt-4`}> {dateTime.date} </span>
            <span className={`${badgeClass} right-0 mr-6 xs:mr-4 mt-4 xs:mt-4 pl-4 xs:pl-4`}> {dateTime.arabicDay} </span>
        </>
    );
};

export default DateTimeDisplay;