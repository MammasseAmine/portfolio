import Link from 'next/link';
import Image from 'next/image';
import { client } from "@/sanity/client";

export default async function Hero() {
    const data = await client.fetch('*[_type == "only_texts"][0]');

    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 relative">
            {/* Background Decor */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />

            {/* Text Content */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 max-w-2xl">
                <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-2">Hello, I'm</h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                    Amine <span className="gradient-text">Mammasse</span>
                </h1>
                <p className="text-2xl md:text-xl font-light text-gray-300 mb-8 italic">
                    {data?.hero_text || "AI & Data Science Engineer | Full Stack Developer & Trainer"}
                </p>

                <div className="flex gap-4">
                    <Link
                        href="#contact"
                        className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all shadow-lg hover:shadow-indigo-500/25"
                    >
                        Get In Touch
                    </Link>
                    <a
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-full border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white transition-all bg-white/5 hover:bg-white/10"
                    >
                        Download my CV
                    </a>
                </div>
            </div>

            {/* Image / Avatar Helper Container */}
            <div className="relative group z-10 mt-8 md:mt-0">

                {/* Main Avatar Circle */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full glow animate-float">
                    <div className="relative w-full h-full rounded-full border-4 border-gray-800 flex items-center justify-center overflow-hidden bg-gray-900">
                        <Image
                            src="/images/mammasse_amine.png"
                            alt="Amine Mammasse"
                            fill
                            className="object-cover rounded-full"
                            priority
                        />
                    </div>

                    {/* Badge - Disappears on hover, positioned outside */}
                    <div className="absolute -top-6 -right-6 bg-gray-800 border border-gray-700 px-4 py-2 rounded-full flex items-center gap-2 shadow-xl z-20 transition-opacity duration-300 group-hover:opacity-0">
                        {/* Green Neon Dot (Online Status) */}
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                        </span>
                        <span className="text-sm font-medium text-gray-200 whitespace-nowrap">Available for work</span>
                    </div>

                    {/* Orbiting Social Icons - Outside the circle */}
                    {/* GitHub - Top Right */}
                    <a href="#" className="absolute -right-12 top-0 p-3 bg-gray-800 rounded-full border border-gray-700 text-white hover:text-indigo-400 hover:border-indigo-500 transition-all duration-300 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 shadow-lg">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                    </a>

                    {/* LinkedIn - Middle Right */}
                    <a href="#" className="absolute -right-16 top-1/2 -translate-y-1/2 p-3 bg-gray-800 rounded-full border border-gray-700 text-white hover:text-blue-500 hover:border-blue-500 transition-all duration-300 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 shadow-lg delay-75">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                    </a>

                    {/* Twitter - Bottom Right */}
                    <a href="#" className="absolute -right-12 bottom-0 p-3 bg-gray-800 rounded-full border border-gray-700 text-white hover:text-sky-500 hover:border-sky-500 transition-all duration-300 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 shadow-lg delay-150">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                    </a>

                </div>
            </div>
        </section>
    );
}
