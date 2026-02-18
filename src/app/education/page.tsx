"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "./education.module.css";

import { FaGraduationCap, FaUniversity } from "react-icons/fa";

export default function EducationPage() {
    const timelineRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const [activeNodes, setActiveNodes] = useState<boolean[]>([false, false, false]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Track mouse movement for space effects
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);

        // Scroll-based timeline progress
        const updateTimelineProgress = () => {
            if (!timelineRef.current || !progressRef.current) return;

            const rect = timelineRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const timelineTop = rect.top;
            const timelineHeight = rect.height;

            let progress = 0;

            if (timelineTop < windowHeight) {
                progress = Math.min(
                    100,
                    Math.max(0, ((windowHeight - timelineTop) / (timelineHeight + windowHeight * 0.5)) * 100)
                );
            }

            progressRef.current.style.height = progress + "%";

            // Activate nodes based on progress
            const newActiveNodes = [
                progress > 25,
                progress > 50,
                progress > 75,
            ];
            setActiveNodes(newActiveNodes);
        };

        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateTimelineProgress();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        updateTimelineProgress();

        // Reveal animations
        const observerOptions = {
            threshold: 0.2,
            rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                    const eduItem = entry.target.closest(`.${styles.eduItem}`);
                    if (eduItem) {
                        eduItem.classList.add("visible"); // Using both standard and scoped just in case
                        eduItem.classList.add(styles.visible);
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll(`.${styles.reveal}`).forEach((el) => observer.observe(el));
        document.querySelectorAll(`.${styles.eduCard}`).forEach((el) => observer.observe(el));

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
            observer.disconnect();
        };
    }, []);

    const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, card: HTMLDivElement) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px) scale(1.02)`;
    };

    const handleCardMouseLeave = (card: HTMLDivElement) => {
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)";
    };

    return (
        <div className="min-h-screen relative bg-[#050505] text-white overflow-x-hidden">
            {/* Cosmic Space Background */}
            <div className={styles.spaceContainer}>
                {/* Parallax Star Layers */}
                <div
                    className={`${styles.stars} ${styles.stars1}`}
                    style={{
                        transform: `translate(${-mousePos.x * 0.02}px, ${-mousePos.y * 0.02}px)`,
                    }}
                />
                <div
                    className={`${styles.stars} ${styles.stars2}`}
                    style={{
                        transform: `translate(${-mousePos.x * 0.04}px, ${-mousePos.y * 0.04}px)`,
                    }}
                />

                {/* Nebula Clouds */}
                <div
                    className={`${styles.nebula} ${styles.nebula1}`}
                    style={{
                        transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)`,
                    }}
                />
                <div
                    className={`${styles.nebula} ${styles.nebula2}`}
                    style={{
                        transform: `translate(${-mousePos.x * 0.01}px, ${-mousePos.y * 0.01}px)`,
                    }}
                />
            </div>

            {/* Mouse Tracking Glow */}
            <div
                className={styles.mouseGlow}
                style={{
                    left: mousePos.x,
                    top: mousePos.y,
                }}
            />


            {/* Main Content */}
            <section className="relative z-10 py-20 px-4 md:px-8 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className={`mb-20 ${styles.reveal} max-w-4xl mx-auto`}>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center gap-4 mb-4">
                            <FaGraduationCap className="text-5xl md:text-7xl text-cyan-400" />
                            <h2
                                className={`font-syncopate text-4xl md:text-6xl font-bold ${styles.glowText} bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent`}
                            >
                                ACADEMIC JOURNEY
                            </h2>
                        </div>
                        <div className="w-full h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent mb-6" />
                        <p className="text-blue-300/80 text-center text-lg md:text-xl font-medium leading-relaxed">
                            A timeline of my educational background, qualifications, and achievements.
                            Each milestone represents a step forward in my professional development.
                        </p>
                    </div>
                </div>

                {/* Timeline Container */}
                <div ref={timelineRef} className="relative max-w-5xl mx-auto">
                    <div className={styles.timelineLine} />
                    <div ref={progressRef} className={styles.timelineProgress} />

                    {/* Education Item 1 - PhD */}
                    <div className={`${styles.eduItem} relative mb-16 md:mb-24 ${styles.reveal}`}>
                        <div className={`${styles.timelineNode} ${activeNodes[0] ? "active" : ""}`} />
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div
                                className={`md:text-right ${styles.eduCard} ${styles.glowBorder} p-6 rounded-xl md:mr-[60px]`}
                                onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
                                onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
                            >
                                <div className={styles.connector} />
                                <div className="text-cyan-400 text-sm font-bold tracking-wider mb-2">
                                    2023 - Present
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">PhD in Artificial Intelligence & Data Science</h3>
                                <div className="text-purple-400 font-semibold mb-3 flex items-center md:justify-end gap-2">
                                    <FaUniversity className="text-lg" />
                                    <span>ESTIN</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    Advanced NLP, Large Language Models (LLMs), and Deep Learning Architectures.
                                </p>
                                <div className="flex flex-wrap gap-2 md:justify-end">
                                    <span className="px-3 py-1 text-xs border border-cyan-500/30 rounded-full text-cyan-300 bg-cyan-500/10">
                                        Research
                                    </span>
                                    <span className="px-3 py-1 text-xs border border-purple-500/30 rounded-full text-purple-300 bg-purple-500/10">
                                        NLP
                                    </span>
                                    <span className="px-3 py-1 text-xs border border-pink-500/30 rounded-full text-pink-300 bg-pink-500/10">
                                        Deep Learning
                                    </span>
                                </div>
                            </div>
                            <div className="hidden md:block" />
                        </div>
                    </div>

                    {/* Education Item 2 - State Engineer */}
                    <div className={`${styles.eduItem} relative mb-16 md:mb-24 ${styles.reveal}`}>
                        <div className={`${styles.timelineNode} ${activeNodes[1] ? "active" : ""}`} />
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="hidden md:block" />
                            <div
                                className={`${styles.eduCard} ${styles.glowBorder} p-6 rounded-xl md:ml-[60px]`}
                                onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
                                onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
                            >
                                <div className={styles.connector} />
                                <div className="text-cyan-400 text-sm font-bold tracking-wider mb-2">
                                    2020 - 2022
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">
                                    Master's degree in Software Engineering
                                </h3>
                                <div className="text-purple-400 font-semibold mb-3 flex items-center gap-2">
                                    <FaUniversity className="text-lg" />
                                    <span>Abderrahmane Mira University of Béjaïa</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    Advanced software development methodologies, architectural patterns, and engineering principles.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 text-xs border border-cyan-500/30 rounded-full text-cyan-300 bg-cyan-500/10">
                                        Software Eng
                                    </span>
                                    <span className="px-3 py-1 text-xs border border-purple-500/30 rounded-full text-purple-300 bg-purple-500/10">
                                        Software Engineering
                                    </span>
                                    <span className="px-3 py-1 text-xs border border-pink-500/30 rounded-full text-pink-300 bg-pink-500/10">
                                        System Arch
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education Item 3 - Baccalaureate */}
                    <div className={`${styles.eduItem} relative mb-16 md:mb-24 ${styles.reveal}`}>
                        <div className={`${styles.timelineNode} ${activeNodes[2] ? "active" : ""}`} />
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div
                                className={`md:text-right ${styles.eduCard} ${styles.glowBorder} p-6 rounded-xl md:mr-[60px]`}
                                onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
                                onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
                            >
                                <div className={styles.connector} />
                                <div className="text-cyan-400 text-sm font-bold tracking-wider mb-2">2017 - 2020</div>
                                <h3 className="text-2xl font-bold mb-2 text-white">Bachelor's degree in Computer Science</h3>
                                <div className="text-purple-400 font-semibold mb-3 flex items-center md:justify-end gap-2">
                                    <FaUniversity className="text-lg" />
                                    <span>Abderrahmane Mira University of Béjaïa</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    Foundational concepts in computer science, algorithms, data structures, and mathematics.
                                </p>
                                <div className="flex flex-wrap gap-2 md:justify-end">
                                    <span className="px-3 py-1 text-xs border border-cyan-500/30 rounded-full text-cyan-300 bg-cyan-500/10">
                                        Computer Science
                                    </span>
                                    <span className="px-3 py-1 text-xs border border-purple-500/30 rounded-full text-purple-300 bg-purple-500/10">
                                        Algorithms
                                    </span>
                                    <span className="px-3 py-1 text-xs border border-pink-500/30 rounded-full text-pink-300 bg-pink-500/10">
                                        Mathematics
                                    </span>
                                </div>
                            </div>
                            <div className="hidden md:block" />
                        </div>
                    </div>
                </div>

                {/* Decorative Footer */}
                <div className={`mt-32 text-center ${styles.reveal}`}>
                    <div className="inline-flex items-center gap-4 text-gray-600 text-sm">
                        <span className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-500/50" />
                        <span className="font-mono tracking-widest">SYSTEM.EDUCATION.LOAD_COMPLETE</span>
                        <span className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-500/50" />
                    </div>
                </div>
            </section>
        </div>
    );
}
