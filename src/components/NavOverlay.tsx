"use client";

import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

const routes = [
    { name: "About", path: "/about", gradient: "from-purple-500 to-pink-500" },
    { name: "Projects", path: "/projects", gradient: "from-blue-500 to-cyan-500" },
    { name: "Skills", path: "/skills", gradient: "from-green-500 to-emerald-500" },
    { name: "Education", path: "/education", gradient: "from-yellow-500 to-orange-500" },
    { name: "Experience", path: "/experience", gradient: "from-red-500 to-rose-500" },
    { name: "Contact", path: "/contact", gradient: "from-indigo-500 to-purple-500" },
    { name: "Publications", path: "/publications", gradient: "from-teal-500 to-cyan-500" },
    { name: "Blog", path: "/blog", gradient: "from-fuchsia-500 to-pink-500" },
    { name: "Certifications", path: "/certifications", gradient: "from-violet-500 to-purple-500" },
    { name: "Services", path: "/services", gradient: "from-sky-500 to-blue-500" },
    { name: "Rates Me", path: "/rates-me", gradient: "from-amber-500 to-yellow-500" },
    { name: "AI Tools", path: "/ai-tools", gradient: "from-lime-500 to-green-500" },
    { name: "FAQ", path: "/faq", gradient: "from-rose-500 to-red-500" },
];

interface NavOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.02,
            staggerDirection: -1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 24,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
            duration: 0.2,
        },
    },
};

export default function NavOverlay({ isOpen, onClose }: NavOverlayProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-gradient-to-br from-black via-gray-900 to-black backdrop-blur-xl flex items-center justify-center overflow-hidden"
                >
                    {/* Animated background grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

                    {/* Floating orbs */}
                    <motion.div
                        className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.5, 0.3, 0.5],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    <motion.button
                        onClick={onClose}
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-10 group"
                        aria-label="Close Menu"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="relative"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </motion.button>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 max-w-7xl w-full relative z-10"
                    >
                        {/* Home Link */}
                        <motion.div variants={itemVariants}>
                            <Link href="/" onClick={onClose} className="group block">
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 overflow-hidden"
                                >
                                    {/* Gradient border on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl" />

                                    {/* Content */}
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" />
                                        <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300 text-center relative">
                                            Home
                                        </h3>
                                    </div>

                                    {/* Shine effect */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                                    />
                                </motion.div>
                            </Link>
                        </motion.div>

                        {/* Route Links */}
                        {routes.map((route) => (
                            <motion.div key={route.path} variants={itemVariants}>
                                <Link href={route.path} onClick={onClose} className="group block">
                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 overflow-hidden"
                                    >
                                        {/* Gradient border on hover */}
                                        <div className={`absolute inset-0 bg-gradient-to-r ${route.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl`} />

                                        {/* Content */}
                                        <div className="relative">
                                            <div className={`absolute inset-0 bg-gradient-to-r ${route.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-md`} />
                                            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 group-hover:from-white group-hover:to-white transition-all duration-300 text-center relative">
                                                {route.name}
                                            </h3>
                                        </div>

                                        {/* Shine effect */}
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                                        />
                                    </motion.div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
