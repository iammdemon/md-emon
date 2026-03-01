import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Collaborating with Emon was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. He transformed our vision into a seamless digital experience that exceeded our expectations.",
            name: "Michael Johnson",
            title: "Director of AlphaStream Technologies",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
        },
        {
            quote: "Emon's attention to detail and ability to craft premium user interfaces is unmatched. The platform he built for us is not only visually stunning but also incredibly intuitive and highly performant.",
            name: "Sarah Williams",
            title: "CEO of TechNova Solutions",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400"
        },
        {
            quote: "I highly recommend Emon for any complex web development needs. His code architecture is clean, and he brings a strategic mindset to solving design and engineering challenges perfectly.",
            name: "David Chen",
            title: "Founder of minimal.studio",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, [testimonials.length]);

    // Auto-slide functionality
    useEffect(() => {
        if (!isHovered) {
            const timer = setInterval(() => {
                nextSlide();
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [isHovered, nextSlide]);

    return (
        <section id="testimonials" className="w-full min-h-screen flex flex-col justify-center items-center bg-[#000319] overflow-hidden px-4 md:px-8">
            <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center">

                {/* Section Header */}
                <div className="flex flex-col items-center justify-center text-center mb-16 gap-3">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="uppercase tracking-[0.5em] text-[10px] md:text-sm text-[#DDD6FE] opacity-60 font-medium whitespace-nowrap"
                    >
                        CLIENT FEEDBACK
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15]"
                    >
                        Happy & Satisfied <span className="text-gradient">Clients</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#8B95A5] text-base md:text-lg max-w-[600px] leading-relaxed mt-2"
                    >
                        Here’s what some of my clients say about my work.
                    </motion.p>
                </div>

                {/* Testimonial Container */}
                <div
                    className="relative w-full max-w-5xl flex items-center justify-center my-8"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 md:-left-12 lg:-left-20 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/10 text-white hover:bg-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-110 focus:outline-none"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 md:-right-12 lg:-right-20 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/10 text-white hover:bg-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-110 focus:outline-none"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Card Container */}
                    <div className="w-full relative h-[650px] md:h-[400px] overflow-hidden rounded-3xl bg-[#0A0118] border border-white/10 shadow-[0_10px_40px_-10px_rgba(168,85,247,0.15)] flex justify-center items-center group" style={{ margin: '30px 0px' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="w-full h-full flex flex-col md:flex-row absolute inset-0"
                            >
                                {/* Left Side: Image */}
                                <div className="w-full md:w-2/5 h-[250px] md:h-full relative overflow-hidden bg-[#13162D] shrink-0 p-6 flex items-center justify-center group-hover:bg-[#1A1C35] transition-colors duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent pointer-events-none opacity-50" />
                                    <img
                                        src={testimonials[currentIndex].img}
                                        alt={testimonials[currentIndex].name}
                                        className="w-full h-full object-cover rounded-2xl shadow-2xl relative z-10 transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                </div>

                                {/* Right Side: Content */}
                                <div className="w-full md:w-3/5 h-[400px] md:h-full py-8 px-6 md:p-12 flex flex-col justify-center relative bg-gradient-to-l from-[#0A0118] to-[#0A0118]/80 transition-colors duration-500">
                                    {/* Quote Icon */}
                                    <Quote className="text-purple-500/20 w-16 h-16 md:w-20 md:h-20 absolute top-4 right-4 md:top-8 md:right-8 z-0 transition-transform duration-500 group-hover:scale-110 group-hover:text-purple-500/30" />

                                    <div className="relative z-10 flex flex-col gap-4 md:gap-6" style={{ marginLeft: "10px", marginRight: "10px" }}>
                                        {/* Stars */}
                                        <div className="flex gap-1 text-purple-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                                            ))}
                                        </div>

                                        {/* Review Text */}
                                        <blockquote className="text-[#E2E8F0] text-base md:text-xl lg:text-2xl leading-relaxed md:leading-[1.7] font-light italic line-clamp-4 md:line-clamp-5">
                                            "{testimonials[currentIndex].quote}"
                                        </blockquote>

                                        {/* Author Details */}
                                        <div className="mt-2 md:mt-4 flex flex-col border-t border-white/10 pt-4 md:pt-6 group-hover:border-purple-500/30 transition-colors duration-500" style={{ paddingTop: "20px" }}>
                                            <span className="text-white font-bold text-lg md:text-xl tracking-wide">
                                                {testimonials[currentIndex].name}
                                            </span>
                                            <span className="text-[#8B95A5] text-xs md:text-sm mt-1 uppercase tracking-widest font-medium">
                                                {testimonials[currentIndex].title}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
