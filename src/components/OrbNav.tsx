"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Grid } from "lucide-react";
import { motion } from "framer-motion";
import NavOverlay from "./NavOverlay";

export default function OrbNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="fixed z-40 left-1/2 -translate-x-1/2 bottom-8 md:bottom-auto md:left-8 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 flex md:flex-col gap-6">
                {/* Home Orb */}
                <Link href="/" className="group relative" aria-label="Home">
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow duration-300"
                    >
                        <Home className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
                    </motion.div>
                </Link>

                {/* Menu Orb */}
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="group relative"
                    aria-label="Open Menu"
                >
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow duration-300"
                    >
                        <Grid className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
                    </motion.div>
                </button>
            </div>

            <NavOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}
