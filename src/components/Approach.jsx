import React from 'react';

const Approach = () => {
    return (
        <section className="w-full py-60 px-5" id="approach">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-24 text-white leading-tight tracking-tighter">
                My <span className="text-gradient">approach</span>
            </h1>

            <div className="my-24 flex flex-col lg:flex-row items-center justify-center w-full gap-8 lg:gap-12 max-w-7xl mx-auto">
                <PhaseCard
                    title="Planning & Strategy"
                    phase="Phase 1"
                    des="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
                />
                <PhaseCard
                    title="Development & Progress Update"
                    phase="Phase 2"
                    des="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
                />
                <PhaseCard
                    title="Development & Launch"
                    phase="Phase 3"
                    des="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
                />
            </div>
        </section>
    );
};

const PhaseCard = ({ title, phase, des }) => {
    return (
        <div className="border border-white/5 group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative h-[35rem] rounded-[32px] bg-[#020010] overflow-hidden transition-all duration-500 hover:border-[#A855F7]/20">
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center p-12 group-hover:justify-start group-hover:pt-24 transition-all duration-700">
                <div className="group-hover/canvas-card:opacity-0 transition duration-300 w-full mx-auto flex items-center justify-center opacity-100 mb-8">
                    <button className="inline-flex h-14 animate-shimmer items-center justify-center rounded-xl border border-white/5 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10 font-bold text-white/80 transition-all text-lg shadow-2xl">
                        {phase}
                    </button>
                </div>
                <h2 className="text-white text-3xl md:text-4xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-6 font-bold transition duration-300 tracking-tight">
                    {title}
                </h2>
                <p className="text-base lg:text-lg opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-6 font-medium transition duration-300 text-[#DDD6FE] leading-relaxed">
                    {des}
                </p>
            </div>

            {/* Decorative background effects on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#8B5CF6]/10 to-transparent opacity-0 group-hover/canvas-card:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#8B5CF6] rounded-full blur-[120px] opacity-0 group-hover/canvas-card:opacity-20 transition-opacity duration-700 pointer-events-none" />
        </div>
    );
};

export default Approach;
