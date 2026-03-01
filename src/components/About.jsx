/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Send, Download, Facebook, Instagram, Linkedin, Github } from 'lucide-react';

// CollaborationGraphic component removed in favor of the new minimal black & white design for Card 1.

const OrbitalNode = ({ icon, color, label, pos, duration, reverse }) => {
    return (
        <div style={{ left: pos.x, top: pos.y }} className="absolute -translate-x-1/2 -translate-y-1/2 flex group">
            <motion.div
                animate={{ rotate: reverse ? 360 : -360 }}
                transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center relative hover:scale-125 transition-transform shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] z-10 hover:z-50"
                style={{
                    boxShadow: `0 0 20px 0px ${color}15 inset, 0 4px 24px -8px rgba(0,0,0,0.5)`
                }}
            >
                <span className="text-xl md:text-2xl drop-shadow-md" style={{ color }}>{icon}</span>
                {/* Tooltip */}
                <span className="absolute -top-10 bg-black/90 px-3 py-1.5 rounded-lg text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none shadow-xl">
                    {label}
                </span>
            </motion.div>
        </div>
    );
};

const TechStackOrbit = ({ title }) => {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
            {/* Orbit System */}
            <div className="absolute inset-0 z-10 flex items-center justify-center opacity-90 scale-[0.6] sm:scale-75 md:scale-100 pointer-events-auto">

                {/* Center Core */}
                <div className="absolute w-32 h-32 bg-[#A855F7]/20 rounded-full blur-[30px] animate-pulse" />
                <div className="absolute w-16 h-16 rounded-full flex items-center justify-center z-50 shadow-[0_0_30px_rgba(168,85,247,0.4)] border border-white/20 overflow-hidden bg-gradient-to-br from-[#A855F7] to-indigo-600">
                    <img src="/profile.png" alt="ME" className="w-full h-full object-cover" />
                </div>

                {/* Inner Ring (3 Nodes, 20s) */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[200px] h-[200px] border border-white/10 rounded-full border-dashed"
                >
                    <OrbitalNode icon="⚛️" color="#61DAFB" label="React" pos={{ x: '50%', y: '0%' }} duration={25} reverse={false} />
                    <OrbitalNode icon="TS" color="#3178C6" label="TypeScript" pos={{ x: '93.3%', y: '75%' }} duration={25} reverse={false} />
                    <OrbitalNode icon="▲" color="#ffffff" label="Next.js" pos={{ x: '6.7%', y: '75%' }} duration={25} reverse={false} />
                </motion.div>

                {/* Middle Ring (4 Nodes, 35s reverse) */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[320px] h-[320px] border border-white/5 rounded-full border-dashed"
                >
                    <OrbitalNode icon="🔥" color="#FFCA28" label="Firebase" pos={{ x: '50%', y: '0%' }} duration={35} reverse={true} />
                    <OrbitalNode icon="JS" color="#339933" label="Node.js" pos={{ x: '100%', y: '50%' }} duration={35} reverse={true} />
                    <OrbitalNode icon="🍃" color="#47A248" label="MongoDB" pos={{ x: '50%', y: '100%' }} duration={35} reverse={true} />
                    <OrbitalNode icon="🌊" color="#38B2AC" label="Tailwind" pos={{ x: '0%', y: '50%' }} duration={35} reverse={true} />
                </motion.div>

                {/* Outer Ring (5 Nodes, 45s) */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[460px] h-[460px] border border-white/[0.03] rounded-full border-dashed"
                >
                    <OrbitalNode icon="✨" color="#E255A1" label="Framer" pos={{ x: '50%', y: '0%' }} duration={45} reverse={false} />
                    <OrbitalNode icon="🐙" color="#f14e32" label="Git" pos={{ x: '97.5%', y: '34.5%' }} duration={45} reverse={false} />
                    <OrbitalNode icon="🎨" color="#F24E1E" label="Figma" pos={{ x: '79.3%', y: '90.4%' }} duration={45} reverse={false} />
                    <OrbitalNode icon="☁️" color="#FF9900" label="AWS" pos={{ x: '20.6%', y: '90.4%' }} duration={45} reverse={false} />
                    <OrbitalNode icon="🐳" color="#2496ED" label="Docker" pos={{ x: '2.5%', y: '34.5%' }} duration={45} reverse={false} />
                </motion.div>

            </div>
        </div>
    );
};

const ExperienceStack = () => {
    const [experiences, setExperiences] = React.useState([
        {
            id: 1,
            role: "Frontend Web Developer",
            company: "Tech Agency Ltd",
            duration: "2022 — Present",
        },
        {
            id: 2,
            role: "React Native Developer",
            company: "Appify Studios",
            duration: "2020 — 2022",
        },
        {
            id: 3,
            role: "UI/UX Engineer",
            company: "Designify",
            duration: "2018 — 2020",
        },
        {
            id: 4,
            role: "Backend Developer",
            company: "Cloud Systems",
            duration: "2016 — 2018",
        },
        {
            id: 5,
            role: "UI Designer",
            company: "Creative Studio",
            duration: "2015",
        },
    ]);

    const rotateStack = () => {
        setExperiences(prev => {
            const [first, ...rest] = prev;
            return [...rest, first];
        });
    };

    return (
        <div
            className="stack w-full max-w-5xl px-4 sm:px-12 cursor-pointer hover:scale-[1.01] transition-transform duration-500 mx-auto min-h-[250px] flex items-center justify-center relative"
            onClick={rotateStack}
            style={{
                "--stack-padding": "16px",
                perspective: "1200px"
            }}
        >
            {experiences.map((exp, index) => (
                <motion.div
                    key={exp.id}
                    layout
                    initial={false}
                    animate={{
                        y: index * 20,
                        scale: Math.pow(0.96, index),
                        opacity: 1 - index * 0.15,
                        filter: `blur(${index * 1}px)`,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 25,
                        mass: 0.8
                    }}
                    className="card shadow-2xl select-none h-[210px] flex items-center justify-center text-center border border-purple-500/20 rounded-[24px] absolute w-full inset-0 m-auto"
                    style={{
                        background: 'linear-gradient(145deg, #09031a 0%, #020010 100%)',
                        zIndex: 10 - index,
                        padding: '20px 0px'
                    }}
                >
                    <div className="card-body py-[10px] px-6 sm:px-8 flex flex-col items-center justify-center">
                        <h2 className="card-title text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight block w-full text-gradient drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                            {exp.role}
                        </h2>
                        <p className="text-white font-bold text-sm sm:text-base lg:text-lg tracking-widest uppercase mt-2 opacity-90">
                            {exp.company}
                        </p>
                        <p className="text-[#A855F7] text-[10px] sm:text-[11px] font-bold mt-1 tracking-[0.2em]">
                            {exp.duration}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

const BentoCard = ({ title, description, id, className, img, spareImg }) => {
    // Card 1 structural modifications will now fall back to the global component return to fix padding discrepancies.

    const getCardStyles = () => {
        // Special Background Handling for Card 1
        return {
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '24px',
            background: id === 1
                ? 'linear-gradient(to bottom, #0B0F19, #04060A)'
                : id === 6
                    ? '#0B0F19'
                    : 'linear-gradient(90deg, rgba(4, 7, 29, 1) 0%, rgba(12, 14, 35, 1) 100%)',
            border: id === 1 ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            minHeight: id === 3 ? '300px' : (id === 2 ? '320px' : (id === 6 ? '240px' : 'inherit')),
            transition: 'transform 0.3s ease, border-color 0.3s ease'
        };
    };

    return (
        <div
            className={`${className} group`}
            style={getCardStyles()}
        >
            {/* Card 1 Specific Background Effects: Radial Glow & Noise */}
            {id === 1 && (
                <>
                    <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none opacity-40" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#A855F705_1px,transparent_1px),linear-gradient(to_bottom,#A855F705_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
                </>
            )}

            {/* Main Image Background */}
            {img && (
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <img
                        src={img}
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: id === 1 ? 0.5 : 0.4 }}
                    />
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: id === 1
                            ? 'linear-gradient(to top, rgba(0,3,25,0.98) 0%, rgba(0,3,25,0.7) 50%, rgba(0,3,25,0.4) 100%)'
                            : 'linear-gradient(to top, rgba(0,3,25,0.95) 0%, rgba(0,3,25,0.4) 50%, transparent 100%)'
                    }} />
                </div>
            )}

            {/* Spare/Overlay Image */}
            {spareImg && (
                <div style={{
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                    width: id === 5 ? '80%' : '50%',
                    opacity: 0.3
                }}>
                    <img
                        src={spareImg}
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            )}

            <div
                style={{
                    position: 'relative',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: id === 3 ? 'row' : 'column',
                    height: '100%',
                    justifyContent: (id === 6 || id === 4) ? 'center' : 'flex-start',
                    alignItems: (id === 3 || id === 6 || id === 4) ? 'center' : 'stretch',
                    padding: id === 5 || id === 6 ? '32px' : '32px'
                }}
            >
                <div style={{
                    flex: 1,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: (id === 6 || id === 4) ? 'center' : 'flex-start',
                    textAlign: (id === 6 || id === 4) ? 'center' : 'left'
                }}>
                    {description && (
                        <div style={{
                            fontFamily: 'sans-serif',
                            fontSize: '12px',
                            color: '#C1C2D3',
                            marginBottom: '6px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            opacity: 0.7
                        }}>
                            {description}
                        </div>
                    )}
                    {title && id !== 2 && id !== 3 && id !== 5 && id !== 6 && id !== 1 && (
                        <div
                            className="text-gradient"
                            style={{
                                fontFamily: 'sans-serif',
                                fontWeight: 'bold',
                                fontSize: '24px',
                                lineHeight: '1.2',
                                letterSpacing: '-0.02em',
                                maxWidth: '100%',
                            }}
                        >
                            {title}
                        </div>
                    )}

                    {/* Card 1: Custom About Me Typography & Paragraph */}
                    {id === 1 && (
                        <div className="flex flex-col h-full w-full relative z-10">
                            {/* Small Label - Branded Design (Stays at top) */}
                            <p className="uppercase tracking-[0.5em] text-[10px] sm:text-[12px] text-[#DDD6FE] opacity-60 font-medium whitespace-nowrap self-center mt-2">
                                ABOUT ME
                            </p>

                            {/* Centered Content Wrapper */}
                            <div className="flex-1 flex flex-col justify-center items-start text-left gap-4 sm:gap-6">
                                {/* Bold Heading - Branded Design */}
                                <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-[44px] tracking-tight leading-[1.15] max-w-[800px]">
                                    Hi, I'm <span className="text-gradient">MD Emon</span>
                                </h2>

                                {/* Paragraph */}
                                <p className="text-[#94A3B8] font-sans text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-full md:max-w-[85%]">
                                    I specialize in building modern web applications using clean architecture, optimized performance strategies, and scalable frontend-backend systems. My focus is writing maintainable code that delivers seamless user experiences.
                                </p>

                                <div className="flex flex-col items-start gap-6 pointer-events-auto">
                                    <div
                                        className="magic-button h-[45px] cursor-pointer shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-shadow duration-300"
                                        onClick={() => {
                                            // window.open('/resume.pdf', '_blank');
                                            alert('Resume download coming soon!');
                                        }}
                                    >
                                        <span className="magic-button-bg" />
                                        <span className="magic-button-content text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center">
                                            <Download size={16} className="mr-2 text-purple-400 group-hover:text-white transition-colors" />
                                            Download My Resume
                                        </span>
                                    </div>

                                    {/* Social Media Icons Row - Below Button */}
                                    <div className="flex items-center gap-3">
                                        {[
                                            { icon: <Facebook size={18} />, link: '#', label: 'Facebook' },
                                            { icon: <Instagram size={18} />, link: '#', label: 'Instagram' },
                                            { icon: <Linkedin size={18} />, link: '#', label: 'LinkedIn' },
                                            { icon: <Github size={18} />, link: '#', label: 'GitHub' }
                                        ].map((social, i) => (
                                            <a
                                                key={i}
                                                href={social.link}
                                                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-[#A855F7]/20 hover:border-[#A855F7]/30 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.25)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:scale-110"
                                                aria-label={social.label}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Specifically Modernized Typography for 5 & 6 */}
                    {(id === 5 || id === 6) && (
                        <div
                            className="text-white font-bold"
                            style={{
                                fontSize: id === 5 ? '28px' : '32px',
                                lineHeight: '1.2',
                                letterSpacing: '-0.02em',
                                maxWidth: '100%',
                                zIndex: 20
                            }}
                        >
                            {title}
                        </div>
                    )}

                    {/* Specific Card Internals */}
                    {id === 3 && (
                        <div className="absolute inset-0">
                            <TechStackOrbit title={title} />
                        </div>
                    )}

                    {/* Card 2: Work Process Custom Content */}
                    {id === 2 && (
                        <div className="flex flex-col items-center gap-4 sm:gap-6 mt-2 relative z-10 w-full text-center">
                            {/* Small Label - Branded Design */}
                            <p className="uppercase tracking-[0.5em] text-[10px] sm:text-[12px] text-[#DDD6FE] opacity-60 font-medium whitespace-nowrap">
                                WORK PROCESS
                            </p>

                            {/* Bold Heading - Branded Design */}
                            <h3 className="text-white font-bold text-3xl sm:text-4xl lg:text-[44px] tracking-tight leading-[1.15]">
                                How I <span className="text-gradient">Build</span>
                            </h3>

                            {/* Content Section (Main Area) */}
                            <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full mt-4 sm:mt-6">
                                {/* Step 1 */}
                                <div className="flex flex-col items-start relative pr-2 sm:pr-4 text-left">
                                    <div className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.15)] mb-4 sm:mb-6 shrink-0 transition-transform hover:scale-105">
                                        <span className="text-purple-400 text-xs sm:text-sm font-bold font-mono">01</span>
                                    </div>
                                    <h4 className="text-white text-[13px] sm:text-[16px] xl:text-[18px] font-bold mb-2 tracking-wide break-words" style={{ marginTop: '10px' }}>Architecture</h4>
                                    <p className="text-[#8B95A5] text-[12px] sm:text-[13px] leading-relaxed">Scalable system planning.</p>
                                </div>

                                {/* Step 2 */}
                                <div className="flex flex-col items-start relative px-2 sm:px-4 text-left">
                                    {/* Delicate Divider */}
                                    <div className="absolute -left-2 sm:-left-3 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                                    <div className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.15)] mb-4 sm:mb-6 shrink-0 transition-transform hover:scale-105">
                                        <span className="text-purple-400 text-xs sm:text-sm font-bold font-mono">02</span>
                                    </div>
                                    <h4 className="text-white text-[13px] sm:text-[16px] xl:text-[18px] font-bold mb-2 tracking-wide break-words" style={{ marginTop: '10px' }}>Development</h4>
                                    <p className="text-[#8B95A5] text-[12px] sm:text-[13px] leading-relaxed">Clean, modular coding.</p>
                                </div>

                                {/* Step 3 */}
                                <div className="flex flex-col items-start relative pl-2 sm:pl-4 text-left">
                                    {/* Delicate Divider */}
                                    <div className="absolute -left-2 sm:-left-3 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                                    <div className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.15)] mb-4 sm:mb-6 shrink-0 transition-transform hover:scale-105">
                                        <span className="text-purple-400 text-xs sm:text-sm font-bold font-mono">03</span>
                                    </div>
                                    <h4 className="text-white text-[13px] sm:text-[16px] xl:text-[18px] font-bold mb-2 tracking-wide break-words" style={{ marginTop: '10px' }}>Optimization</h4>
                                    <p className="text-[#8B95A5] text-[12px] sm:text-[13px] leading-relaxed">Performance & deployment.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Card 4: Animated Grid Background */}
                    {id === 4 && (
                        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: -1, opacity: 0.4 }}>
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#A855F730_1px,transparent_1px),linear-gradient(to_bottom,#A855F730_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A855F7]/20 to-transparent"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                style={{ width: '200%' }}
                            />
                        </div>
                    )}

                    {/* Card 5: Daisy UI Stacked Cards */}
                    {id === 5 && (
                        <div className="w-full h-full flex flex-col items-center justify-start pt-2 px-6 sm:px-12 relative z-20 gap-4">
                            <div className="flex flex-col items-center gap-3">
                                <p className="uppercase tracking-[0.5em] text-[10px] md:text-sm text-[#DDD6FE] opacity-60 font-medium whitespace-nowrap">
                                    PATH OF GROWTH
                                </p>
                                <h2 className="text-white font-bold text-[32px] sm:text-5xl lg:text-6xl tracking-tight leading-tight text-center">
                                    Work <span className="text-gradient">Experience</span>
                                </h2>
                            </div>

                            <div className="w-full">
                                <ExperienceStack />
                            </div>
                        </div>
                    )}

                    {/* Card 6: Interactive Connect Button - REDESIGNED */}
                    {id === 6 && (
                        <div className="relative z-20 h-full flex flex-col justify-start pt-2 px-6 sm:px-8 overflow-hidden rounded-2vxl gap-4 sm:gap-6">
                            {/* Subtle Spotlight glow behind text */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-600/10 rounded-full blur-[60px] pointer-events-none z-0" />

                            <div className="flex flex-col items-center gap-2 relative z-10 w-full">
                                <p className="uppercase tracking-[0.5em] text-[10px] sm:text-xs text-[#DDD6FE] opacity-60 font-medium whitespace-nowrap">
                                    GET IN TOUCH
                                </p>
                                <h2 className="text-white font-bold text-[24px] sm:text-3xl lg:text-4xl tracking-tight leading-tight text-center">
                                    Let's <span className="text-gradient">Connect</span>
                                </h2>
                            </div>

                            <div className="relative z-10 space-y-2 pointer-events-none text-center">
                                <p className="text-[#8B95A5] text-[12px] sm:text-[13px] leading-relaxed mx-auto max-w-[280px]">
                                    Let’s build a fast, scalable, and future-ready web solution.
                                </p>
                            </div>

                            <div className="relative z-10 pointer-events-auto mt-auto mb-2">
                                <div
                                    className="magic-button h-[45px] cursor-pointer shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-shadow duration-300"
                                    onClick={() => {
                                        window.location.href = 'mailto:mdemon.tech@gmail.com';
                                    }}
                                >
                                    <span className="magic-button-bg" />
                                    <span className="magic-button-content text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center">
                                        <Send size={16} className="mr-2 text-purple-400 group-hover:text-white transition-colors" />
                                        Let’s Discuss
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};





const About = () => {
    const cards = [
        {
            id: 1,
            title: "I prioritize client collaboration, fostering open communication",
            description: "",
            className: "lg:col-span-3 md:col-span-6 md:row-span-5",
            img: "/about.png",
        },
        {
            id: 2,
            title: "Always ready for the next big challenge",
            description: "",
            className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        },
        {
            id: 3,
            title: "My tech stack",
            description: "",
            className: "lg:col-span-2 md:col-span-3 md:row-span-3",
        },
        {
            id: 4,
            title: "Tech enthusiast with a passion for development.",
            description: "",
            className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        },
        {
            id: 5,
            title: "",
            description: "",
            className: "lg:col-span-3 md:col-span-3 md:row-span-2",
            spareImg: ""
        },
        {
            id: 6,
            title: "",
            description: "",
            className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        },
    ];

    return (
        <section id="about" style={{ padding: '60px 0', width: '100%', position: 'relative', zIndex: 10 }}>
            <div
                className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-6 lg:gap-8"
                style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: '0 24px'
                }}
            >
                {cards.map((item) => (
                    <BentoCard
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
        </section>
    );
};

export default About;
