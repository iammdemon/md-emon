import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("About");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = [
                { id: 'home', name: '' },
                { id: 'about', name: 'About' },
                { id: 'projects', name: 'Projects' },
                { id: 'testimonials', name: 'Testimonials' },
                { id: 'contact', name: 'Contact' }
            ];

            let currentActive = '';

            // Highlight section when it reaches top 150px of viewport
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentActive = section.name;
                    }
                }
            }

            // Catch cases where user scrolled to bottom
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                currentActive = 'Contact';
            }

            setActive((prev) => (prev !== currentActive ? currentActive : prev));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Trigger once on mount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "About", link: "#about" },
        { name: "Projects", link: "#projects" },
        { name: "Testimonials", link: "#testimonials" },
        { name: "Contact", link: "#contact" },
    ];

    return (
        <nav className="fixed top-5 inset-x-0 z-[10000] px-4 flex justify-center pointer-events-none">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center justify-between gap-6 sm:gap-12 rounded-full border border-white/[0.08] bg-[#000319]/80 backdrop-blur-md transition-all duration-300 w-fit pointer-events-auto
          ${scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-white/[0.15]" : ""}
        `}
                style={{ padding: '10px 30px' }}
            >
                {/* Avatar Profile */}
                <a href="#home" className="relative group cursor-pointer flex items-center justify-center" onClick={() => setActive("")}>
                    {/* Glowing effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-cyan-500 rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-500"></div>

                    {/* Profile Image Wrapper */}
                    <div className="relative w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] rounded-full overflow-hidden border-2 border-[#000319] group-hover:border-purple-500/50 transition-colors duration-300">
                        <img
                            src="/profile.png"
                            alt="MD EMon"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://ui-avatars.com/api/?name=MD+Emon&background=A855F7&color=fff&bold=true';
                            }}
                        />
                    </div>
                </a>

                {/* Nav Items */}
                <div className="flex items-center gap-6 sm:gap-8">
                    {navItems.map((item, idx) => (
                        <div key={idx} className="relative flex flex-col items-center group">
                            <a
                                href={item.link}
                                onClick={() => setActive(item.name)}
                                className={`text-xs sm:text-sm font-medium transition-colors duration-300
                    ${active === item.name ? "text-white" : "text-[#DDD6FE] opacity-70 group-hover:opacity-100 hover:text-white"}
                  `}
                            >
                                {item.name}
                            </a>
                            {active === item.name && (
                                <motion.div
                                    layoutId="nav-dot"
                                    className="absolute -bottom-2 w-1.5 h-1.5 bg-[#A855F7] rounded-full shadow-[0_0_10px_#A855F7]"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
