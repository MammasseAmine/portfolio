"use client";

import { useState, useRef, FormEvent, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaMedium,
    FaCalendar,
    FaLocationDot,
    FaEnvelope,
    FaPhone,
    FaXTwitter,
    FaWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";
import { RiLoader4Fill } from "react-icons/ri";
import { useSearchParams } from "next/navigation";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Form refs
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const subjectRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const subject = params.get("subject");
        const message = params.get("message");

        if (subject && subjectRef.current) {
            subjectRef.current.value = subject;
        }
        if (message && messageRef.current) {
            messageRef.current.value = message;
        }
    }, []);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const nameBody = nameRef.current?.value;
        const emailBody = emailRef.current?.value;
        const subjectBody = subjectRef.current?.value;
        const messageBody = messageRef.current?.value;

        if (!nameBody || !emailBody || !messageBody) {
            alert("Please fill in all required fields");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/xykdgjvr", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: nameBody,
                    email: emailBody,
                    subject: subjectBody || "No Subject",
                    message: messageBody,
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                const data = await response.json();
                alert(data.error || "Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Formspree Error:", error);
            alert("Failed to send message. Please check your internet connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setIsSuccess(false);
        if (nameRef.current) nameRef.current.value = "";
        if (emailRef.current) emailRef.current.value = "";
        if (subjectRef.current) subjectRef.current.value = "";
        if (messageRef.current) messageRef.current.value = "";
    };

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 24 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: custom * 0.15, ease: "easeOut" },
        }),
    };

    const popIn: Variants = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: (custom: number) => ({
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                type: "spring",
                bounce: 0.5,
                delay: custom * 0.1 + 0.5, // Start after main content
            },
        }),
    };

    return (
        <div className="min-h-screen relative bg-zinc-950 text-zinc-200 overflow-hidden font-sans selection:bg-violet-500/30 selection:text-violet-200">
            {/* Subtle background accent */}
            <div className="fixed inset-0 bg-[radial-gradient(at_top_right,#4f46e510_0%,transparent_50%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
                {/* Navbar */}


                {/* Header */}
                <div className="max-w-4xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm rounded-full px-4 py-1 mb-6 border border-zinc-800/50"
                    >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                            Available for projects & training
                        </span>
                    </motion.div>
                    <motion.div
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="font-space text-[clamp(2.5rem,5vw,4.5rem)] leading-tight font-bold tracking-tighter text-white mb-6"
                    >
                        Let’s{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                            Work Together
                        </span>
                    </motion.div>
                    <motion.p
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed"
                    >
                        Have a project in mind, a question, want to discuss AI/ML solutions,
                        or just want to say hello? Fill the form below and I’ll get back to you.
                    </motion.p>

                </div>

                <div className="grid lg:grid-cols-5 gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-3 order-last lg:order-none"
                    >
                        <div className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800/80 rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/20">
                            <AnimatePresence mode="wait">
                                {!isSuccess ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="mb-8">
                                            <div className="text-sm uppercase font-mono tracking-widest text-violet-400 mb-2">
                                                GET IN TOUCH
                                            </div>
                                            <div className="font-space text-4xl font-semibold tracking-tight text-white">
                                                Send a message
                                            </div>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-8">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <input
                                                        ref={nameRef}
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        className="w-full bg-zinc-950/50 border border-zinc-800 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/10 rounded-xl px-5 py-4 text-zinc-200 placeholder-zinc-700 outline-none transition-all duration-300"
                                                        placeholder="Full Name"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        ref={emailRef}
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        className="w-full bg-zinc-950/50 border border-zinc-800 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/10 rounded-xl px-5 py-4 text-zinc-200 placeholder-zinc-700 outline-none transition-all duration-300"
                                                        placeholder="Email Address"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <input
                                                ref={subjectRef}
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                className="w-full bg-zinc-950/50 border border-zinc-800 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/10 rounded-xl px-5 py-4 text-zinc-200 placeholder-zinc-700 outline-none transition-all duration-300"
                                                placeholder="Subject"
                                            />

                                            <textarea
                                                ref={messageRef}
                                                id="message"
                                                name="message"
                                                rows={5}
                                                className="w-full bg-zinc-950/50 border border-zinc-800 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/10 rounded-xl px-5 py-4 text-zinc-200 placeholder-zinc-700 outline-none resize-none transition-all duration-300"
                                                placeholder="Your Message..."
                                                required
                                            ></textarea>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium py-4 rounded-2xl flex items-center justify-center gap-3 group hover:brightness-110 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-violet-600/20"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <RiLoader4Fill className="animate-spin text-xl" />
                                                        <span>Sending...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>Send Message</span>
                                                        <span className="group-hover:translate-x-1 transition-transform">
                                                            →
                                                        </span>
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, type: "spring" }}
                                        className="flex flex-col items-center py-12 text-center"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 10,
                                                delay: 0.1,
                                            }}
                                            className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 ring-1 ring-emerald-500/20"
                                        >
                                            <span className="text-emerald-500 text-5xl">✅</span>
                                        </motion.div>
                                        <div className="font-space text-3xl font-semibold text-white mb-3">
                                            Message sent!
                                        </div>
                                        <p className="text-zinc-400 max-w-[280px] mb-8 leading-relaxed">
                                            Thank you. I'll get back to you within 24-48 hours.
                                        </p>
                                        <button
                                            onClick={resetForm}
                                            className="text-violet-400 hover:text-violet-300 flex items-center gap-2 text-sm font-medium transition-colors hover:underline underline-offset-4"
                                        >
                                            Send another message
                                            <span className="text-lg">↺</span>
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* Location */}
                        <motion.div
                            custom={2}
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="flex gap-5 group"
                        >
                            <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center flex-shrink-0 border border-zinc-800 group-hover:border-amber-500/30 transition-colors">
                                <FaLocationDot className="text-2xl text-amber-500" />
                            </div>
                            <div>
                                <div className="text-xs uppercase font-mono text-zinc-500 tracking-widest mb-1.5">
                                    BASED IN
                                </div>
                                <div className="text-white font-medium text-lg mb-2">
                                    El-Kseur, Bejaia, Algeria
                                </div>
                                <a
                                    href="https://www.google.com/maps/place/El-Kseur,+Bejaia"
                                    target="_blank"
                                    className="text-violet-400 hover:text-violet-300 text-xs inline-flex items-center gap-1 transition-colors"
                                >
                                    View on map <span>→</span>
                                </a>
                            </div>
                        </motion.div>

                        {/* Email */}
                        <motion.div
                            custom={3}
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="flex gap-5 group"
                        >
                            <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center flex-shrink-0 border border-zinc-800 group-hover:border-sky-500/30 transition-colors">
                                <FaEnvelope className="text-2xl text-sky-500" />
                            </div>
                            <div>
                                <div className="text-xs uppercase font-mono text-zinc-500 tracking-widest mb-1.5">
                                    EMAIL
                                </div>
                                <a
                                    href="mailto:aminemammasse98@gmail.com"
                                    className="text-white font-medium text-lg hover:text-violet-400 transition-colors"
                                >
                                    aminemammasse98@gmail.com
                                </a>
                                <div className="text-emerald-500 text-xs mt-1 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full inline-block">
                                    Response in ~24h
                                </div>
                            </div>
                        </motion.div>

                        {/* Phone */}
                        <motion.div
                            custom={4}
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="flex gap-5 group"
                        >
                            <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center flex-shrink-0 border border-zinc-800 group-hover:border-rose-500/30 transition-colors">
                                <FaPhone className="text-2xl text-rose-500" />
                            </div>
                            <div>
                                <div className="text-xs uppercase font-mono text-zinc-500 tracking-widest mb-1.5">
                                    PHONE
                                </div>
                                <div className="text-white font-medium text-lg hover:text-violet-400 transition-colors">
                                    <a href="tel:+213554551710" className="hover:underline">
                                        +213 5 54 55 17 10
                                    </a>
                                    <span className="mx-2 text-zinc-600">|</span>
                                    <a href="tel:+213666471519" className="hover:underline">
                                        +213 6 66 47 15 19
                                    </a>
                                </div>
                                <div className="text-zinc-500 text-sm mt-1">
                                    Direct call
                                </div>
                            </div>
                        </motion.div>

                        {/* Social Icons */}
                        <div className="pt-8 border-t border-zinc-800/50">
                            <div className="text-xs uppercase font-mono text-zinc-500 tracking-widest mb-6">
                                CONNECT ME & FOLLOW ME ON
                            </div>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    {
                                        icon: FaLinkedin,
                                        color: "text-[#0A66C2]",
                                        bgHover: "group-hover:bg-[#0A66C2]/10",
                                        label: "LinkedIn",
                                        href: "https://www.linkedin.com/in/aminemammasse/",
                                    },
                                    {
                                        icon: FaGithub,
                                        color: "text-white",
                                        bgHover: "group-hover:bg-white/10",
                                        label: "GitHub",
                                        href: "https://github.com/MammasseAmine",
                                    },

                                    {
                                        icon: FaYoutube,
                                        color: "text-[#FF0000]",
                                        bgHover: "group-hover:bg-[#FF0000]/10",
                                        label: "YouTube",
                                        href: "https://www.youtube.com/@mammasseamine",
                                    },
                                    {
                                        icon: FaWhatsapp,
                                        color: "text-emerald-500",
                                        bgHover: "group-hover:bg-emerald-500/10",
                                        label: "WhatsApp",
                                        href: "https://wa.me/213554551710",
                                    },
                                ].map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        custom={index}
                                        initial="hidden"
                                        animate="visible"
                                        variants={popIn}
                                        href={social.href}
                                        target="_blank"
                                        className="group flex flex-col items-center gap-2 p-2 rounded-xl transition-all hover:bg-zinc-900/50"
                                    >
                                        <div
                                            className={`w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800 transition-all duration-300 ${social.bgHover}`}
                                        >
                                            <social.icon
                                                className={`text-2xl ${social.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                                            />
                                        </div>
                                        <span className="text-[10px] text-zinc-500 font-medium tracking-wide uppercase group-hover:text-zinc-300 transition-colors">
                                            {social.label}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    );
}
