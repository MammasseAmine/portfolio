"use client";

import { Orbitron } from 'next/font/google';
import {
    Brain, Database, Code, GraduationCap, Sparkles, BarChart,
} from 'lucide-react';
import {
    SiPython, SiTensorflow, SiPytorch, SiHuggingface, SiOpencv, SiKubernetes,
    SiPostgresql, SiPandas, SiTableau, SiApachespark, SiApacheairflow,
    SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiAmazonwebservices, SiDocker,
    SiJira, SiGooglecloud, SiTailwindcss, SiExpress, SiFastapi,
    SiMongodb, SiRedis, SiVercel, SiNetlify, SiSanity, SiStrapi, SiWordpress,
    SiGithub, SiFigma, SiPostman, SiRedux, SiGraphql,
    SiJenkins, SiTerraform, SiFirebase, SiCloudflare, SiPrisma,
    SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiPhp, SiLaravel,
    SiDjango, SiFlask, SiMysql, SiOracle, SiLinux, SiGitlab,
    SiKeras, SiScikitlearn, SiKaggle, SiGooglecolab, SiJupyter,
    SiMdx, SiMarkdown, SiNetlify as SiNetlify2, SiGithubpages,
    SiLatex, SiGnubash
} from 'react-icons/si';
import { VscAzure, VscVscode, VscCircuitBoard, VscJson, VscSymbolStructure, VscTerminal, VscPlug } from 'react-icons/vsc';
import {
    FaChalkboardTeacher, FaUsers, FaMicrophoneAlt, FaProjectDiagram,
    FaCode, FaTerminal, FaBullhorn, FaBookOpen, FaPenNib, FaObjectGroup,
    FaRobot, FaNetworkWired, FaBrain, FaMicrosoft, FaLanguage,
    FaVideo, FaPalette, FaFileAlt, FaEdit, FaPlug
} from 'react-icons/fa';
import { TbApi, TbBrain, TbPrompt } from 'react-icons/tb';
import { useEffect, useState } from 'react';

import { client } from "@/sanity/client";

const ALL_ICONS: Record<string, any> = {
    // Lucide
    Brain, Database, Code, GraduationCap, Sparkles, BarChart,
    // Simple Icons
    SiPython, SiTensorflow, SiPytorch, SiHuggingface, SiOpencv, SiKubernetes,
    SiPostgresql, SiPandas, SiTableau, SiApachespark, SiApacheairflow,
    SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiAmazonwebservices, SiDocker,
    SiJira, SiGooglecloud, SiTailwindcss, SiExpress, SiFastapi,
    SiMongodb, SiRedis, SiVercel, SiNetlify, SiSanity, SiStrapi, SiWordpress,
    SiGithub, SiFigma, SiPostman, SiRedux, SiGraphql,
    SiJenkins, SiTerraform, SiFirebase, SiCloudflare, SiPrisma,
    SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiPhp, SiLaravel,
    SiDjango, SiFlask, SiMysql, SiOracle, SiLinux, SiGitlab,
    SiKeras, SiScikitlearn, SiKaggle, SiGooglecolab, SiJupyter,
    SiMdx, SiMarkdown, SiNetlify2, SiGithubpages,
    SiLatex, SiGnubash,
    // VSC
    VscAzure, VscVscode, VscCircuitBoard, VscJson, VscSymbolStructure, VscTerminal, VscPlug,
    // Font Awesome
    FaChalkboardTeacher, FaUsers, FaMicrophoneAlt, FaProjectDiagram,
    FaCode, FaTerminal, FaBullhorn, FaBookOpen, FaPenNib, FaObjectGroup,
    FaRobot, FaNetworkWired, FaBrain, FaMicrosoft, FaLanguage,
    FaVideo, FaPalette, FaFileAlt, FaEdit, FaPlug,
    // Tabler Icons
    TbApi, TbBrain, TbPrompt
};

const orbitron = Orbitron({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
});

const categoryThemes: Record<string, { accent: string; bg: string; glow: string; bar: string; border: string; filterAct: string; glowBg: string }> = {
    "Front end": { accent: "text-cyan-400", bg: "from-cyan-500/20 to-cyan-500/5", glow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]", bar: "bg-cyan-500", border: "hover:border-cyan-500", filterAct: "border-cyan-400 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)]", glowBg: "bg-cyan-500" },
    "Back end": { accent: "text-indigo-400", bg: "from-indigo-500/20 to-indigo-500/5", glow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]", bar: "bg-indigo-500", border: "hover:border-indigo-500", filterAct: "border-indigo-400 text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.4)]", glowBg: "bg-indigo-500" },
    "Databases": { accent: "text-emerald-400", bg: "from-emerald-500/20 to-emerald-500/5", glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]", bar: "bg-emerald-500", border: "hover:border-emerald-500", filterAct: "border-emerald-400 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)]", glowBg: "bg-emerald-500" },
    "DevOps": { accent: "text-orange-400", bg: "from-orange-500/20 to-orange-500/5", glow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]", bar: "bg-orange-500", border: "hover:border-orange-500", filterAct: "border-orange-400 text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.4)]", glowBg: "bg-orange-500" },
    "Deployment": { accent: "text-blue-400", bg: "from-blue-500/20 to-blue-500/5", glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]", bar: "bg-blue-500", border: "hover:border-blue-500", filterAct: "border-blue-400 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.4)]", glowBg: "bg-blue-500" },
    "Content & CMS": { accent: "text-yellow-400", bg: "from-yellow-500/20 to-yellow-500/5", glow: "hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]", bar: "bg-yellow-500", border: "hover:border-yellow-500", filterAct: "border-yellow-400 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.4)]", glowBg: "bg-yellow-500" },
    "AI and ML": { accent: "text-purple-400", bg: "from-purple-500/20 to-purple-500/5", glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]", bar: "bg-purple-500", border: "hover:border-purple-500", filterAct: "border-purple-400 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]", glowBg: "bg-purple-500" },
    "Data Science": { accent: "text-pink-400", bg: "from-pink-500/20 to-pink-500/5", glow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]", bar: "bg-pink-500", border: "hover:border-pink-500", filterAct: "border-pink-400 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.4)]", glowBg: "bg-pink-500" },
    "Platforms": { accent: "text-slate-400", bg: "from-slate-500/20 to-slate-500/5", glow: "hover:shadow-[0_0_30px_rgba(148,163,184,0.3)]", bar: "bg-slate-500", border: "hover:border-slate-500", filterAct: "border-slate-400 text-slate-400 shadow-[0_0_20px_rgba(148,163,184,0.4)]", glowBg: "bg-slate-500" },
    "Software": { accent: "text-teal-400", bg: "from-teal-500/20 to-teal-500/5", glow: "hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]", bar: "bg-teal-500", border: "hover:border-teal-500", filterAct: "border-teal-400 text-teal-400 shadow-[0_0_20px_rgba(20,184,166,0.4)]", glowBg: "bg-teal-500" },
    "Training and Leadership": { accent: "text-amber-400", bg: "from-amber-500/20 to-amber-500/5", glow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]", bar: "bg-amber-500", border: "hover:border-amber-500", filterAct: "border-amber-400 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)]", glowBg: "bg-amber-500" },
    "ALL": { accent: "text-white", bg: "from-white/10 to-white/5", glow: "hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]", bar: "bg-white", border: "hover:border-white", filterAct: "border-white text-white shadow-[0_0_20px_rgba(255,255,255,0.4)]", glowBg: "bg-white" }
};

const categories = [
    "ALL",
    "Front end",
    "Back end",
    "Databases",
    "DevOps",
    "Deployment",
    "Content & CMS",
    "AI and ML",
    "Data Science",
    "Platforms",
    "Software",
    "Training and Leadership"
];

export default function SkillsPage() {
    const [mounted, setMounted] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [skillsData, setSkillsData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setMounted(true);
        const fetchSkills = async () => {
            try {
                const data = await client.fetch(`*[_type == "skills"] | order(order asc)`);
                setSkillsData(data);
            } catch (error) {
                console.error("Error fetching skills:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchSkills();
    }, []);

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-[#050510] text-gray-100 flex flex-col items-center py-24 px-6 relative overflow-hidden">
            {/* Radial Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)] pointer-events-none" />

            {/* Background Particles */}
            <BackgroundParticles />

            <div className="max-w-7xl w-full space-y-16 relative z-10">

                {/* Title and Subtitle */}
                <div className="text-center space-y-6">
                    <h1
                        className={`${orbitron.className} text-5xl md:text-7xl font-black tracking-widest uppercase animate-fade-in`}
                        style={{
                            textShadow: '0 0 20px rgba(157, 78, 221, 0.5), 0 0 40px rgba(0, 243, 255, 0.3)'
                        }}
                    >
                        SKILLS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">MATRIX</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide italic animate-fade-in-delay">
                        Advanced Capabilities & Technical Expertise
                    </p>
                </div>

                {/* Filter Categories */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-5xl mx-auto backdrop-blur-md p-4 rounded-2xl bg-white/5 border border-white/10">
                    {categories.map((cat) => {
                        const theme = categoryThemes[cat];
                        const isActive = selectedCategory === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-widest transition-all duration-500 border ${isActive
                                    ? `bg-white/10 ${theme.filterAct}`
                                    : 'bg-white/5 border-transparent text-gray-500 hover:text-white hover:bg-white/10 hover:border-white/20'
                                    }`}
                            >
                                {cat.toUpperCase()}
                            </button>
                        );
                    })}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
                    {loading ? (
                        <div className="col-span-full text-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400 mx-auto"></div>
                            <p className="mt-4 text-gray-400 tracking-widest uppercase text-sm">Initializing Neural Matrix...</p>
                        </div>
                    ) : skillsData.length === 0 ? (
                        <div className="col-span-full text-center py-20">
                            <p className="text-gray-400 tracking-widest uppercase text-sm">No Skills Found in Sanity.</p>
                        </div>
                    ) : (
                        skillsData.map((skill) => {
                            const isVisible = selectedCategory === "ALL" || skill.category === selectedCategory;

                            return (isVisible && (
                                <SkillBox
                                    key={`${skill.name}-${skill.category}`}
                                    skill={skill}
                                    isVisible={isVisible}
                                />
                            ));
                        })
                    )}
                </div>
            </div>

            {/* CSS Animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fadeIn 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        @keyframes mixitup-in {
          from { 
            opacity: 0; 
            transform: scale(0.01);
          }
          to { 
            opacity: 1; 
            transform: scale(1);
          }
        }
        
        .skill-card {
          transition: all 0.6s ease;
        }
        
        .skill-card.visible {
          animation: mixitup-in 0.6s ease forwards;
        }
        
        .skill-card:hover {
          transform: scale(1.05) translateY(-5px);
        }
      `}} />
        </div>
    );
}

function SkillBox({ skill, isVisible }: { skill: any; isVisible: boolean }) {
    const theme = categoryThemes[skill.category] || categoryThemes["ALL"];

    const accentColor = theme.accent;
    const bgColor = theme.bg;
    const glowShadow = theme.glow;
    const barColor = theme.bar;
    const borderHover = theme.border;

    const [barWidth, setBarWidth] = useState(0);

    const IconComponent = ALL_ICONS[skill.icon] || Code;

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => setBarWidth(skill.level), 100);
            return () => clearTimeout(timer);
        }
    }, [isVisible, skill.level]);

    return (
        <div
            className={`skill-card visible group relative p-8 rounded-3xl bg-gradient-to-br ${bgColor} border border-white/10 ${borderHover} ${glowShadow} aspect-square flex flex-col justify-center items-center overflow-hidden cursor-pointer`}
        >
            <div className="flex flex-col items-center text-center space-y-4 relative z-10 w-full">
                <div className={`p-4 rounded-2xl bg-white/5 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10 ${accentColor}`}>
                    <IconComponent size={40} />
                </div>
                <div className="space-y-1">
                    <h4 className="font-bold text-[10px] md:text-xs tracking-widest text-gray-200 group-hover:text-white transition-colors uppercase">
                        {skill.name}
                    </h4>
                    <span className={`text-[8px] md:text-[10px] font-black ${accentColor}`}>
                        {skill.level}%
                    </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-2">
                    <div
                        style={{ width: `${barWidth}%` }}
                        className={`h-full ${barColor} shadow-[0_0_15px_currentColor] transition-all duration-1000 ease-out`}
                    />
                </div>
            </div>

            {/* Category Mini Tag */}
            <span className="absolute bottom-4 right-4 text-[6px] font-black uppercase tracking-[0.2em] text-white/20 group-hover:text-cyan-400 transition-colors">
                {skill.category}
            </span>

            {/* Background Decorative Glow */}
            <div className={`absolute -inset-20 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none rounded-full blur-[100px] ${theme.glowBg}`} />
        </div>
    );
}

function BackgroundParticles() {
    const [particles, setParticles] = useState<any[]>([]);

    useEffect(() => {
        const newParticles = [...Array(30)].map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 20 + 10}px`,
            delay: `${Math.random() * 10}s`,
            duration: `${Math.random() * 10 + 10}s`,
            color: Math.random() > 0.5 ? '#9d4edd' : '#00f3ff',
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            {particles.map((p) => (
                <div
                    key={p.id}
                    style={{
                        position: 'absolute',
                        left: p.left,
                        width: p.width,
                        height: p.height,
                        backgroundColor: p.color,
                        filter: 'blur(1px)',
                        top: '-50px',
                        opacity: 0,
                    } as React.CSSProperties}
                    className="skill-particle"
                />
            ))}
            <style dangerouslySetInnerHTML={{
                __html: `
        .skill-particle {
          animation: skill-fall linear infinite;
        }
        @keyframes skill-fall {
            0% { transform: translateY(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(110vh); opacity: 0; }
        }
      `}} />
            {particles.map((p) => (
                <style key={`style-${p.id}`} dangerouslySetInnerHTML={{
                    __html: `
          .skill-particle:nth-child(${p.id + 1}) {
            animation-duration: ${p.duration};
            animation-delay: ${p.delay};
          }
        `}} />
            ))}
        </div>
    );
}
