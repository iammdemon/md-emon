import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Luxury Jewelry Brand Website",
            category: "E-commerce Development",
            des: "A premium black & white Shopify store designed for high conversion and luxury positioning.",
            img: "https://images.unsplash.com/photo-1599643477874-ce4bd98eedcd?auto=format&fit=crop&q=80&w=1000",
        },
        {
            id: 2,
            title: "Performance Marketing Dashboard",
            category: "Data & Analytics",
            des: "Custom-built analytics dashboard with ROAS tracking, delivery success ratio, and real-time KPIs.",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
        },
        {
            id: 3,
            title: "Ramadan Campaign Creative",
            category: "Creative Ads",
            des: "High-converting ad creatives with strong emotional hooks and minimal luxury aesthetics.",
            img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1000",
        },
        {
            id: 4,
            title: "Minimalist Brand Identity",
            category: "Branding",
            des: "Complete visual identity system including logo, typography, and premium packaging design.",
            img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=1000",
        },
        {
            id: 5,
            title: "Fintech Mobile Application",
            category: "Web Development",
            des: "A sleek, secure, and user-friendly banking interface focused on seamless transactions.",
            img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, [projects.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    }, [projects.length]);

    // Auto-slide functionality
    useEffect(() => {
        if (!isHovered) {
            const timer = setInterval(() => {
                nextSlide();
            }, 4000);
            return () => clearInterval(timer);
        }
    }, [isHovered, nextSlide]);

    // Calculate dynamic styles for the 3 visible cards
    const getCardStyles = (index) => {
        const total = projects.length;
        // Position relative to the center (-1, 0, 1) safely wrapping around
        let position = (index - currentIndex + total) % total;
        // Map elements at the very end to appear before (left side)
        if (position > Math.floor(total / 2)) {
            position -= total;
        }

        // Logic for 3 visible cards
        if (position === 0) {
            // Center active card
            return {
                transform: 'translateX(0) scale(1)',
                zIndex: 30,
                opacity: 1,
                filter: 'blur(0px)',
            };
        } else if (position === 1) {
            // Right adjacent card
            return {
                transform: 'translateX(60%) scale(0.85)',
                zIndex: 20,
                opacity: 0.6,
                filter: 'blur(2px)',
            };
        } else if (position === -1) {
            // Left adjacent card
            return {
                transform: 'translateX(-60%) scale(0.85)',
                zIndex: 20,
                opacity: 0.6,
                filter: 'blur(2px)',
            };
        } else {
            // Hidden cards (push far out)
            return {
                transform: `translateX(${position > 0 ? '120%' : '-120%'}) scale(0.7)`,
                zIndex: 10,
                opacity: 0,
                filter: 'blur(4px)',
                pointerEvents: 'none',
            };
        }
    };

    return (
        <section id="projects" className="py-24 w-full bg-[#000319] overflow-hidden px-4 md:px-8" style={{ marginTop: '50px' }}>
            <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center gap-[20px]">

                {/* Header Section */}
                <div className="flex flex-col items-center justify-center text-center gap-3">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="uppercase tracking-[0.5em] text-[10px] md:text-sm text-[#DDD6FE] opacity-60 font-medium whitespace-nowrap"
                    >
                        MY WORK
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15]"
                    >
                        Selected <span className="text-gradient">Projects</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#8B95A5] text-base md:text-lg max-w-[600px] leading-relaxed mt-2"
                    >
                        I craft powerful digital experiences that blend strategy, design, and performance.
                    </motion.p>
                </div>

                {/* Carousel Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full h-[500px] sm:h-[550px] md:h-[650px] flex items-center justify-center perspective-1000"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {projects.map((project, index) => {
                        const styles = getCardStyles(index);
                        return (
                            <motion.div
                                key={project.id}
                                className="absolute w-[90%] sm:w-[450px] md:w-[550px] lg:w-[650px] h-auto max-h-full bg-[#0A0118] border border-white/10 rounded-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col group cursor-pointer"
                                style={{
                                    ...styles,
                                    boxShadow: styles.opacity === 1 ? '0 0 40px rgba(168,85,247,0.15)' : '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
                                }}
                            >
                                {/* Image Wrapper */}
                                <div className="relative w-full aspect-video overflow-hidden bg-[#13162D] shrink-0">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    />
                                    {/* Subtle Overlay */}
                                    <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/10" />
                                </div>

                                {/* Content Area */}
                                <div className="flex flex-col bg-[#0A0118] relative" style={{ padding: '32px 32px' }}>
                                    <div className="flex-1 flex flex-col justify-center">
                                        <p className="text-purple-400 text-xs font-semibold uppercase tracking-widest" style={{ marginBottom: '8px' }}>
                                            {project.category}
                                        </p>
                                        <h3 className="text-white text-2xl md:text-3xl font-bold line-clamp-1 group-hover:text-purple-300 transition-colors" style={{ marginBottom: '12px' }}>
                                            {project.title}
                                        </h3>
                                        <p className="text-[#8B95A5] text-base md:text-lg leading-relaxed" style={{ marginBottom: '16px' }}>
                                            {project.des}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4 border-t border-white/5" style={{ marginTop: 'auto', paddingTop: '16px' }}>
                                        <button className="flex-1 flex items-center justify-center text-sm md:text-base font-semibold text-white bg-white/5 border border-white/10 rounded-full px-4 py-4 md:py-5 hover:bg-white/10 hover:border-white/20 transition-all group/btn">
                                            View Project
                                            <ArrowRight className="ml-2 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                        <button className="flex-1 flex items-center justify-center text-sm md:text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full px-4 py-4 md:py-5 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all group/demo border border-purple-500/50 hover:border-purple-400">
                                            Live Demo
                                            <ExternalLink className="ml-2 w-5 h-5 transform group-hover/demo:scale-110 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-[2%] sm:left-[5%] lg:left-[10%] z-40 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/10 text-white hover:bg-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-110 focus:outline-none"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-[2%] sm:right-[5%] lg:right-[10%] z-40 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/10 text-white hover:bg-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-110 focus:outline-none"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </motion.div>

                {/* Dots Indicator */}
                <div className="flex gap-2 z-20">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`transition-all duration-300 rounded-full ${currentIndex === index
                                ? 'w-8 h-2 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]'
                                : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Projects;
