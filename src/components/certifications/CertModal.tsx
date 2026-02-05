"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Download } from "lucide-react";
import { type Certification } from "@/types/certifications";

interface CertModalProps {
    isOpen: boolean;
    onClose: () => void;
    certification: Certification | null;
}

const CertModal: React.FC<CertModalProps> = ({ isOpen, onClose, certification }) => {
    if (!certification) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-4xl bg-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row z-50 h-[80vh] md:h-auto"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-white/10 text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        {/* Left: Certificate Visual */}
                        <div className={`w-full md:w-1/2 p-8 flex items-center justify-center relative bg-gradient-to-br ${certification.color}`}>
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>

                            {certification.imageUrl ? (
                                <div className="w-full relative group shadow-2xl rounded overflow-hidden">
                                    <img
                                        src={certification.imageUrl}
                                        alt={certification.title}
                                        className="w-full aspect-[4/3] object-contain bg-white p-2"
                                    />
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/20 to-transparent pointer-events-none"></div>
                                </div>
                            ) : (
                                <div className="w-full aspect-[4/3] bg-white text-black p-8 rounded shadow-lg flex flex-col justify-between relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/10 rounded-bl-full"></div>

                                    <div>
                                        <div className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">{certification.issuer}</div>
                                        <h2 className="text-2xl font-serif font-bold text-gray-900 leading-tight">{certification.title}</h2>
                                    </div>

                                    <div className="border-t border-gray-200 pt-4 mt-auto flex justify-between items-end">
                                        <div>
                                            <div className="text-[10px] text-gray-400 uppercase tracking-wider">Date</div>
                                            <div className="font-medium">{certification.date}</div>
                                        </div>
                                        <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center opacity-50">
                                            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right: Details */}
                        <div className="w-full md:w-1/2 p-8 flex flex-col bg-[#1a1a1a]">
                            <h3 className="text-2xl font-bold text-white mb-2">{certification.title}</h3>
                            <div className="flex items-center gap-2 text-gray-400 mb-6">
                                <span className="bg-white/5 px-2 py-1 rounded text-xs">{certification.issuer}</span>
                                <span className="text-xs">&bull;</span>
                                <span className="text-xs">{certification.date}</span>
                            </div>

                            <div className="space-y-6 flex-1 overflow-y-auto pr-2">
                                <div>
                                    <h4 className="text-sm font-semibold text-white/70 mb-2 uppercase tracking-wide">Description</h4>
                                    <p className="text-gray-300 leading-relaxed text-sm">
                                        {certification.description}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-white/70 mb-2 uppercase tracking-wide">Credential ID</h4>
                                    <div className="flex items-center gap-2 font-mono text-sm bg-black/30 p-3 rounded border border-white/5 text-gray-300">
                                        {certification.credentialId}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5">
                                {certification.imageUrl && (
                                    <a
                                        href={certification.imageUrl}
                                        download
                                        className="w-full py-3 px-4 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Download size={18} />
                                        Download Certificate
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CertModal;
