"use client";

import React, { useState, useEffect } from "react";
import Bookshelf from "@/components/certifications/Bookshelf";
import CertModal from "@/components/certifications/CertModal";
import { type Certification } from "@/types/certifications";
import { client } from "@/sanity/client";

export default function CertificationsPage() {
    const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
    const [certifications, setCertifications] = useState<Certification[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCertifications = async () => {
            try {
                const data = await client.fetch(`*[_type == "certification"] | order(date desc, _createdAt desc)`);
                const mappedData = data.map((item: any) => ({
                    id: item._id,
                    title: item.title,
                    issuer: item.issuer,
                    date: item.date,
                    color: item.color,
                    credentialId: item.credentialId,
                    description: item.description,
                    imageUrl: item.imageName ? `/images/certificates/${item.imageName}` : undefined
                }));
                setCertifications(mappedData);
            } catch (error) {
                console.error("Error fetching certifications:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCertifications();
    }, []);

    // Group certifications into chunks of 4 for shelves
    const shelfChunks = [];
    for (let i = 0; i < certifications.length; i += 4) {
        shelfChunks.push(certifications.slice(i, i + 4));
    }

    return (
        <div className="min-h-screen bg-[#121212] pt-24 pb-20 overflow-x-hidden font-sans">
            <div className="container mx-auto px-4">
                <header className="mb-24 text-center relative z-10">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium text-gray-300 backdrop-blur-sm shadow-inner uppercase tracking-widest">
                        🏆 Recognition & Milestones
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">Certifications</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
                        Validating expertise through industry-recognized credentials, research contributions, and hackathon leadership.
                    </p>

                    {/* Decorative background glow for header */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-lg h-40 bg-orange-500/20 blur-[120px] -z-10 rounded-full opacity-60 mix-blend-screen"></div>
                </header>

                {loading ? (
                    <div className="text-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mx-auto"></div>
                        <p className="mt-4 text-gray-400 tracking-widest uppercase text-sm">Loading Certifications...</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {shelfChunks.map((chunk, index) => (
                            <Bookshelf
                                key={index}
                                books={chunk}
                                onBookClick={setSelectedCert}
                            />
                        ))}
                    </div>
                )}
            </div>

            <CertModal
                isOpen={!!selectedCert}
                certification={selectedCert}
                onClose={() => setSelectedCert(null)}
            />

            {/* Ambient Floor Glow */}
            <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-0"></div>
        </div>
    );
}
