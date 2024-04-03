'use client'
import React, { useEffect, useState } from 'react'

export default function ActiveSection({ sectionIDs }: { sectionIDs: string[] }) {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY;

            sectionIDs.forEach((sectionID: string) => {
                const section = document.getElementById(sectionID);
                if (section) {
                    const { top, height } = section.getBoundingClientRect();
                    if (top <= 0 && top + height > 0) {
                        setActiveSection(sectionID);
                    }
                }
            })
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [sectionIDs]);
    
    return activeSection;
}
