"use client";

import Image from 'next/image';
import { GraduationCap, Brain, Code2, Users, Atom, TrendingUp } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Helper to highlight keywords wrapped in []
const HighlightKeywords = (text: string) => {
    const parts = text.split(/(\[.*?\])/);
    return parts.map((part, i) => {
        if (part.startsWith('[') && part.endsWith(']')) {
            return (
                <span key={i} className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                    {part.slice(1, -1)}
                </span>
            );
        }
        return part;
    });
};

export default function AboutPage() {
    const aboutImages = [
        '/images/aboutme1.jpg',
        '/images/aboutme2.jpg',
        '/images/aboutme3.jpg',
        '/images/aboutme4.jpg',
    ];

    const realms = [
        {
            title: "Assistant Professor",
            icon: <GraduationCap size={48} className="text-indigo-400" />,
            description: "At [ESTIN - École Supérieure en Sciences et Technologies de l'Informatique et du Numérique], I am dedicated to shaping the next generation of engineers. I lecture on [Data Science], [Machine Learning], and [Algorithm Design]. My approach prioritizes [Practical Engineering] over pure theory, ensuring students are ready for complex industry challenges."
        },
        {
            title: "PhD Researcher",
            icon: <Atom size={48} className="text-purple-400" />,
            description: "My doctoral research explores the architecture of [Natural Language Processing (NLP)] and [Large Language Models (LLMs)]. I focus on [Explainable AI (XAI)] and [Deep Learning] techniques to create more transparent and efficient intelligent systems that can bridge the gap between data and human consciousness."
        },
        {
            title: "Full Stack Developer",
            icon: <Code2 size={48} className="text-pink-400" />,
            description: "Architecting scalable solutions using the [Next.js], [React], and [Python] ecosystem. My development philosophy centers on [Clean Architecture] and [Scalability]. I specialize in integrating [AI Models] into production-ready web platforms, managing everything from [Vector Databases] to high-performance frontends."
        },
        {
            title: "Strategic Mentor",
            icon: <TrendingUp size={48} className="text-indigo-300" />,
            description: "Empowering over [50+ students and professionals] through intensive bootcamps and workshops. I lead programs in [Full Stack Web Development], [AI Integration], and [Generative AI Strategy]. My goal is to transform complex technical concepts into actionable, [Future-Ready Skills]."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 font-sans pt-24 pb-12 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto space-y-24">

                {/* Part A: Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Column */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            About <span className="gradient-text">Me</span>
                        </h1>
                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                            <p>
                                {HighlightKeywords("As a passionate educator and researcher at [ESTIN], I bridge the gap between theoretical data science and practical software engineering. I am a multifaceted technology professional with a passion for innovation, currently pursuing my [PhD in AI & Data Science] while architecting scalable full-stack solutions.")}
                            </p>
                            <p>
                                {HighlightKeywords("My journey spans across developing sophisticated applications, conducting [groundbreaking research] in machine learning, and training [hundreds of professionals] worldwide. I believe in the power of technology to transform lives and am committed to making complex concepts accessible to all.")}
                            </p>
                            <p>
                                {HighlightKeywords("Whether it's architecting [scalable systems], mentoring students, or leading workshops, I approach every challenge with [curiosity], [dedication], and a drive for [excellence].")}
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                            <StatCard number="50+" label="Students Trained" />
                            <StatCard number="5+" label="Research Contributions" />
                            <StatCard number="20+" label="Major Projects" />
                            <StatCard number="4+" label="Years Dev Experience" />
                            <StatCard number="+3" label="Years Teaching Experience" />
                            <StatCard number="∞" label="Curiosity & Innovation" />
                        </div>
                    </div>

                    {/* Slider Column (Rectangle) */}
                    <div className="flex justify-center items-center relative order-1 lg:order-2">
                        <div className="w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border-2 border-white/10">
                            <Swiper
                                spaceBetween={0}
                                centeredSlides={true}
                                effect={'fade'}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, Pagination, EffectFade]}
                                className="w-full h-full"
                            >
                                {aboutImages.map((src, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={src}
                                                alt={`Amine Mammasse ${index + 1}`}
                                                fill
                                                className="object-cover"
                                                priority={index === 0}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>

                {/* Part B: My Realms Section */}
                <div className="space-y-12">
                    <h2 className="text-3xl font-bold text-center">
                        <span className="gradient-text">MY REALMS</span>
                    </h2>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {realms.map((realm, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <RealmCard
                                    icon={realm.icon}
                                    title={realm.title}
                                    description={realm.description}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </div>
    );
}

function StatCard({ number, label }: { number: string; label: string }) {
    return (
        <div className="bg-gray-900/50 border border-white/10 p-4 rounded-xl text-center backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="text-2xl font-bold text-white">{number}</div>
            <div className="text-sm text-gray-400">{label}</div>
        </div>
    );
}

function RealmCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] backdrop-blur-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500 flex justify-center md:justify-start">
                    {icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center md:text-left">{title}</h3>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed text-center md:text-left">
                    {HighlightKeywords(description)}
                </p>
            </div>
        </div>
    );
}
