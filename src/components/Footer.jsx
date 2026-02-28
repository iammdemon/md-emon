import React from 'react';
import { Navigation } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full pt-60 pb-16 relative" id="contact">
            {/* Background grid for footer */}
            <div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-40"
                    onError={(e) => { e.target.style.display = 'none' }}
                />
            </div>

            <div className="flex flex-col items-center px-5">
                <h1 className="text-4xl md:text-6xl font-bold lg:max-w-[50vw] text-center mb-16 text-white leading-[1.1] tracking-tighter">
                    Ready to take <span className="text-gradient">your</span> digital presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-12 my-8 text-center text-[#DDD6FE] font-light text-lg md:text-xl max-w-[600px] leading-relaxed">
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>
                <div className="mt-10">
                    <a href="mailto:contact@jsmastery.pro">
                        <div className="magic-button">
                            <span className="magic-button-bg" />
                            <span className="magic-button-content text-lg md:text-xl font-bold uppercase tracking-widest">
                                Let&apos;s get in touch <Navigation size={22} className="rotate-45 ml-4" />
                            </span>
                        </div>
                    </a>
                </div>
            </div>

            <div className="flex mt-32 md:flex-row flex-col justify-between items-center max-w-7xl mx-auto w-full px-5 border-t border-white/5 pt-12">
                <p className="md:text-lg text-sm md:font-normal font-light text-[#DDD6FE] opacity-70">
                    Copyright © 2024 MD EMON
                </p>

                <div className="flex items-center md:gap-6 gap-10 mt-8 md:mt-0">
                    {[1, 2, 3].map((info) => (
                        <div
                            key={info}
                            className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-2xl border border-white/10 hover:border-[#8B5CF6]/40 transition-all duration-300"
                        >
                            <div className="w-5 h-5 bg-white/10 rounded-md" />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
