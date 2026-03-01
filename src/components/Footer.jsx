import React from 'react';
import { Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    const socialMedia = [
        { id: 1, icon: <Facebook size={18} />, link: '#', label: 'Facebook' },
        { id: 2, icon: <Instagram size={18} />, link: '#', label: 'Instagram' },
        { id: 3, icon: <Linkedin size={18} />, link: '#', label: 'LinkedIn' },
        { id: 4, icon: <Github size={18} />, link: '#', label: 'GitHub' }
    ];

    return (
        <footer className="w-full pt-20 pb-16 relative">
            {/* Background grid for footer */}
            <div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-40"
                    onError={(e) => { e.target.style.display = 'none' }}
                />
            </div>

            <div
                className="flex mt-32 md:flex-row flex-col justify-between items-center max-w-7xl mx-auto w-full px-5 border-t border-white/5 pt-12"
                style={{ padding: '16px 0px' }}
            >
                <p className="md:text-lg text-sm md:font-normal font-light text-[#DDD6FE] opacity-70">
                    Copyright © {new Date().getFullYear()} MD EMON
                </p>

                <div className="flex items-center md:gap-3 gap-6 mt-8 md:mt-0">
                    {socialMedia.map((info) => (
                        <a
                            key={info.id}
                            href={info.link}
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-white/5 rounded-full border border-white/10 text-[#94A3B8] hover:text-white hover:bg-[#A855F7]/20 hover:border-[#A855F7]/30 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.25)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:scale-110"
                            aria-label={info.label}
                        >
                            {info.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
