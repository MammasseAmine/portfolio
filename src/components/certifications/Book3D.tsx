"use client";

import React from "react";
import { type Certification } from "@/types/certifications";

interface Book3DProps {
    certification: Certification;
    onClick: (cert: Certification) => void;
}

const Book3D: React.FC<Book3DProps> = ({ certification, onClick }) => {
    return (
        <div
            onClick={() => onClick(certification)}
            className="group relative w-full max-w-[210px] aspect-[4/3] cursor-pointer mx-auto transition-all duration-500 hover:-translate-y-3"
        >
            {/* The Certificate Container */}
            <div className="relative w-full h-full rounded shadow-2xl overflow-hidden bg-[#1a1a1a] ring-1 ring-white/10 group-hover:ring-white/30 transition-all duration-500">
                {certification.imageUrl ? (
                    <div className="relative w-full h-full">
                        <img
                            src={certification.imageUrl}
                            alt={certification.title}
                            className="w-full h-full object-cover brightness-95 group-hover:brightness-105 transition-all duration-500"
                        />

                        {/* Glass / Gloss Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none z-10"></div>

                        {/* Shimmer Effect on Hover */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"></div>
                    </div>
                ) : (
                    <div className={`w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br ${certification.color} relative overflow-hidden`}>
                        {/* Background Texture */}
                        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] mix-blend-overlay"></div>

                        <div className="relative z-10">
                            <div className="text-white/80 font-bold text-[10px] uppercase tracking-[0.2em] border-b border-white/20 pb-3 mb-2">
                                {certification.issuer}
                            </div>
                            <div className="text-white font-serif font-bold text-lg leading-tight">
                                {certification.title}
                            </div>
                        </div>
                        <div className="text-white/60 text-[10px] font-mono relative z-10">{certification.date}</div>

                        {/* Accent Glow */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                    </div>
                )}
            </div>

            {/* Soft Shadow on the shelf */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[90%] h-4 bg-black/60 blur-xl -z-10 group-hover:opacity-100 transition-opacity"></div>

            <style jsx>{`
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
                .group:hover .group-hover\:animate-shimmer {
                    animation: shimmer 1.5s infinite linear;
                }
            `}</style>
        </div>
    );
};

export default Book3D;
