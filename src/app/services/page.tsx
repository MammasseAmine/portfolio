"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Code, Presentation } from "lucide-react";
import styles from "./services.module.css";

interface SubCategory {
    label: string;
    items: string[];
}

interface Service {
    title: string;
    subCategories?: SubCategory[];
}

const DEVELOPMENT_SERVICES: Service[] = [
    {
        title: "Full Stack Web Development",
        subCategories: [
            {
                label: "Front end only",
                items: [
                    "Full Responsive Website (Mobile + Tablet + Desktop)",
                    "Landing Page (Modern + High Conversion)",
                    "Portfolio Website (Personal / Professional)",
                    "E-commerce Website (Frontend)",
                    "Website Redesign & UI Improvement",
                    "Dashboard / Admin Panel UI",
                    "API Integration (REST APIs)",
                    "Tailwind CSS / Bootstrap Styling",
                    "Dark Mode Implementation",
                    "Cross-Browser Compatibility Fix",
                    "Multi-language Support (i18n)",
                    "Charts & Data Visualization (Chart.js, D3.js)",
                    "Form Integration (EmailJS, Formspree, etc.)",
                    "Custom Web Solutions",
                ],
            },
            {
                label: "Back end only",
                items: [
                    "Node.js / Express API Development",
                    "Python/Django REST Frameworks",
                    "PHP/Laravel Backend",
                    "Database Design (SQL, NoSQL)",
                    "Authentication & Authorization Systems (OAuth 2.0, JWT, 2FA)",
                    "API Documentation & Testing (Swagger, Postman)",
                    "Email & Notification Systems (SMTP, SendGrid, Twilio)",
                    "Custom API Development (REST)",
                ],
            },
            {
                label: "Full Stack",
                items: [
                    "MERN / PERN Stack Development (React, Node.js, Express, MongoDB/Postgres)",
                    "Next.js Full-Stack Application (App Router, Server Components)",
                    "AI-Integrated Full-Stack Apps (LLM Integration + Scalable Backend)",
                    "Custom CMS & Content Management (Sanity)",
                    "Technical Consulting (Code reviews, Development best practices)",
                ],
            },
        ],
    },
    {
        title: "AI/ML Model Architecture",
        subCategories: [
            {
                label: "ML/DL",
                items: [
                    "Custom Neural Network Design (CNN, RNN, Transformers)",
                    "Predictive Data Modeling & Forecasting",
                    "Deep Learning Model Training (Neural Networks)",
                    "Supervised & Unsupervised Learning Solutions",
                    "Model Performance Tuning & Optimization",
                    "Time Series Analysis & Forecasting",
                    "End-to-End ML Pipeline Development",
                ],
            },
            {
                label: "Computer Vision",
                items: [
                    "Image Segmentation",
                    "Object Detection & Recognition (YOLO, Faster R-CNN)",
                    "Real-time Image & Video Analysis",
                    "Automated Image Classification & Processing",
                    "Optical Character Recognition (OCR)",
                ],
            },
            {
                label: "NLP",
                items: [
                    "Text Classification & Topic Modeling",
                    "Custom Chatbot & Conversational AI Development",
                    "Sentiment Analysis & Opinion Mining",
                    "Text Summarization & Synthesis",
                    "Named Entity Recognition (NER) & Classification",
                    "Fine-Tuning Large Language Models (LLMs)",
                    "Information Extraction & Knowledge Graph Construction",
                    "Semantic Search & Intelligent Document Retrieval (RAG Systems)",
                    "Multilingual NLP Solutions",
                    "Prompt Engineering & LLM Optimization",
                    "Self-RAG / Agentic AI Systems (LangGraph-based)",
                ],
            },
        ],
    },
];

const TRAINING_SERVICES: Service[] = [
    { title: "Programming" },
    { title: "Artificial Intelligence" },
    { title: "Learning by Doing" },
];

const ServiceItem = ({
    number,
    service,
    isOpen,
    onToggle
}: {
    number: string;
    service: Service;
    isOpen: boolean;
    onToggle: () => void;
}) => {
    const [activeSubTab, setActiveSubTab] = useState(0);
    const hasSubCategories = service.subCategories && service.subCategories.length > 0;

    return (
        <div className="border-b border-white/10 overflow-hidden">
            <motion.div
                layout
                onClick={() => hasSubCategories && onToggle()}
                className={`flex items-center py-8 group cursor-pointer transition-colors duration-300 ${isOpen ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                    }`}
            >
                <span className="font-cormorant italic text-2xl text-cyan-400/40 ml-4 mr-8 min-w-[3rem]">
                    {number}
                </span>
                <h3
                    className={`font-outfit text-2xl md:text-3xl transition-colors duration-300 uppercase tracking-wider flex-grow ${isOpen || !hasSubCategories ? "text-cyan-400 " + styles.glowText : "text-white group-hover:text-cyan-400"
                        }`}
                >
                    {service.title}
                </h3>

                {hasSubCategories ? (
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className="mr-4 text-white/40 group-hover:text-cyan-400 transition-colors"
                    >
                        <ChevronDown size={24} />
                    </motion.div>
                ) : (
                    <Link
                        href={`/contact?subject=${encodeURIComponent(service.title)}`}
                        className="mr-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-outfit font-semibold text-sm uppercase tracking-widest hover:from-white hover:to-white transition-all duration-300 rounded shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                    >
                        Contact Me
                    </Link>
                )
                }</motion.div>

            <AnimatePresence>
                {isOpen && hasSubCategories && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="px-4 md:px-12 pb-8"
                    >
                        {/* Sub Tabs Buttons */}
                        <div className="flex gap-4 mb-8 pt-4 border-t border-white/5">
                            {service.subCategories?.map((sub, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveSubTab(idx);
                                    }}
                                    className={`px-4 py-2 font-outfit text-xs uppercase tracking-widest transition-all duration-300 border ${activeSubTab === idx
                                        ? "bg-cyan-500 text-black border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                                        : "text-white/40 border-white/10 hover:border-cyan-500/30 hover:text-white"
                                        }`}
                                >
                                    {sub.label}
                                </button>
                            ))}
                        </div>

                        {/* Sub Services List */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSubTab}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col space-y-6"
                            >
                                {service.subCategories?.[activeSubTab].items.map((item, idx) => (
                                    <div key={idx} className="flex items-center group/sub">
                                        <span className="font-outfit text-lg text-white/70 group-hover/sub:text-white transition-colors">
                                            {item}
                                        </span>
                                        <div className="flex-grow mx-4 border-b border-dotted border-white/20 h-0 mt-3" />
                                        <Link
                                            href={`/contact?subject=${encodeURIComponent(item)}`}
                                            className="text-cyan-400 font-outfit text-sm uppercase tracking-[0.2em] hover:text-white transition-colors whitespace-nowrap"
                                        >
                                            Contact Me
                                        </Link>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function ServicesPage() {
    const [activeTab, setActiveTab] = useState<"development" | "training">("development");
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Reset open accordion when switching between Dev and Training tabs
    const handleTabChange = (tab: "development" | "training") => {
        setActiveTab(tab);
        setOpenServiceIndex(null);
    };

    const services = activeTab === "development" ? DEVELOPMENT_SERVICES : TRAINING_SERVICES;

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500 selection:text-black relative overflow-hidden">
            {/* Cosmic Space Background */}
            <div className={styles.spaceContainer}>
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

            <div className="max-w-6xl mx-auto px-6 py-12 md:py-24 relative z-10 transition-all duration-300">
                {/* Header */}
                <div className="text-center mb-16 px-4">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-syncopate text-cyan-400/60 text-xs md:text-sm uppercase tracking-[0.4em] mb-4"
                    >
                        Exclusive Offerings
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className={`font-syncopate text-4xl md:text-7xl font-bold uppercase tracking-tighter ${styles.glowText} bg-gradient-to-r from-cyan-400/80 to-blue-500/80 bg-clip-text text-transparent`}
                    >
                        The Menu
                    </motion.h1>
                    <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto mt-6 opacity-50" />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="font-outfit text-blue-100/30 max-w-xl mx-auto mt-8 text-base md:text-lg leading-relaxed"
                    >
                        Explore my specialized offerings below. Click "Contact Me" on any service to start a conversation
                        pre-filled with specifically tailored details for that request.
                    </motion.p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-16 space-x-4 md:space-x-8">
                    <button
                        onClick={() => handleTabChange("development")}
                        className={`font-outfit text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 px-6 py-3 rounded-full relative ${activeTab === "development"
                            ? "text-white"
                            : "text-white/40 hover:text-white"
                            }`}
                    >
                        {activeTab === "development" && (
                            <motion.div
                                layoutId="activeTabPill"
                                className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/30 rounded-full -z-10 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <Code size={16} />
                        programming menu
                    </button>
                    <button
                        onClick={() => handleTabChange("training")}
                        className={`font-outfit text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 px-6 py-3 rounded-full relative ${activeTab === "training"
                            ? "text-white"
                            : "text-white/40 hover:text-white"
                            }`}
                    >
                        {activeTab === "training" && (
                            <motion.div
                                layoutId="activeTabPill"
                                className="absolute inset-0 bg-blue-500/10 border border-blue-500/30 rounded-full -z-10 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <Presentation size={16} />
                        training menu
                    </button>
                </div>

                {/* Services List */}
                <div className="max-w-4xl mx-auto min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {services.map((service, index) => (
                                <ServiceItem
                                    key={service.title}
                                    number={(index + 1).toString().padStart(2, "0")}
                                    service={service}
                                    isOpen={openServiceIndex === index}
                                    onToggle={() => setOpenServiceIndex(openServiceIndex === index ? null : index)}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Footer Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-20"
                >
                    <p className="font-cormorant italic text-cyan-400 text-lg md:text-xl">
                        All services include free consultation to discuss your specific requirements.
                    </p>
                </motion.div>
            </div>
        </main>
    );
}
