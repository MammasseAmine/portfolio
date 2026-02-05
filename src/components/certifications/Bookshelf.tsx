"use client";

import React from "react";
import Book3D from "./Book3D";
import { type Certification } from "@/types/certifications";

interface BookshelfProps {
    books: Certification[];
    onBookClick: (cert: Certification) => void;
}

const Bookshelf: React.FC<BookshelfProps> = ({ books, onBookClick }) => {
    return (
        <div className="relative w-full max-w-6xl mx-auto mb-24 last:mb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-8 relative z-10 items-end h-56 pb-14">
                {books.map((book) => (
                    <div key={book.id} className="flex justify-center items-end">
                        <Book3D certification={book} onClick={onBookClick} />
                    </div>
                ))}
            </div>

            {/* Premium Enhanced Wood Shelf */}
            <div className="absolute bottom-4 left-0 w-full h-10 z-0">
                {/* Subtle top highlight for the ledge */}
                <div className="absolute -top-[2px] left-0 w-full h-[2px] bg-white/10 blur-[0.5px] rounded-full"></div>

                {/* Main Plank Body */}
                <div className="relative w-full h-full bg-gradient-to-b from-[#5c4033] via-[#3d2b1f] to-[#1a110d] rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.8)] border-t border-white/10 overflow-hidden">
                    {/* Horizontal wood grain effect */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(0,0,0,0.3) 101px, transparent 102px)' }}>
                    </div>
                    {/* Top inner glow */}
                    <div className="absolute top-1 left-4 right-4 h-1 bg-white/5 rounded-full blur-[1px]"></div>
                    {/* Bottom shading */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black/10"></div>
                </div>

                {/* Drop Shadow on the 'wall' behind */}
                <div className="absolute -bottom-4 left-[2%] w-[96%] h-6 bg-black/50 blur-xl rounded-full -z-10"></div>
            </div>
        </div>
    );
};

export default Bookshelf;
