import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Spotlight = ({ className, fill }) => {
    return (
        <svg
            className={`animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0 ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3787 2842"
            fill="none"
        >
            <g filter="url(#filter)">
                <ellipse
                    cx="1924.71"
                    cy="273.501"
                    rx="1924.71"
                    ry="273.501"
                    transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
                    fill={fill || "white"}
                    fillOpacity="0.21"
                ></ellipse>
            </g>
            <defs>
                <filter
                    id="filter"
                    x="0.860352"
                    y="0.838989"
                    width="3785.16"
                    height="2840.26"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        stdDeviation="151"
                        result="effect1_foregroundBlur_1065_8"
                    ></feGaussianBlur>
                </filter>
            </defs>
        </svg>
    );
};

const Hero = () => {
    return (
        <div className="relative overflow-hidden w-full h-screen min-h-[800px] flex flex-col items-center justify-center bg-[#000319] pt-20 pb-60" id="home">
            {/**
       *  Spotlight effects
       */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <Spotlight
                    className="-top-40 left-10 md:left-60 md:-top-20 opacity-[0.1]"
                    fill="white"
                />
                <Spotlight
                    className="top-10 -right-20 h-[80vh] w-[50vw] opacity-[0.05]"
                    fill="white"
                />
            </div>

            {/**
       *  Grid background
       */}
            <div className="h-full w-full absolute top-0 left-0 flex items-center justify-center -z-10">
                <div className="absolute inset-0 grid-background opacity-20" />
                {/* Radial gradient overlay to fade the grid */}
                <div className="absolute inset-0 bg-[#000319] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]" />
            </div>

            <div className="flex justify-center relative z-10 w-full px-4">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[75vw] flex flex-col items-center justify-center text-center">
                    <p className="uppercase tracking-[0.6em] text-[10px] md:text-sm text-[#DDD6FE] opacity-60 max-w-lg mb-10 font-medium">
                        Dynamic Web Magic with Next.js
                    </p>

                    {/**
           *  Heading
           */}
                    <h1
                        className="text-center text-[38px] md:text-7xl lg:text-8xl font-bold leading-[2.25] tracking-[0.02em] text-white"
                        style={{ paddingTop: '15px', paddingBottom: '15px', paddingLeft: '0px', paddingRight: '0px' }}
                    >
                        Transforming Concepts into <br className="hidden md:block" /> Seamless{" "}
                        <span className="text-gradient">
                            User Experiences
                        </span>
                    </h1>

                    <p className="text-center tracking-wide md:tracking-widest mb-16 text-sm md:text-lg lg:text-2xl mt-12 text-[#DDD6FE] font-light max-w-[950px] leading-relaxed opacity-90">
                        Hi! I&apos;m Emon, a Next.js Developer based in Bangladesh.
                    </p>

                    <a href="#projects" style={{ marginTop: '40px', display: 'block' }}>
                        <div className="magic-button">
                            <span className="magic-button-bg" />
                            <span className="magic-button-content text-lg md:text-xl font-bold uppercase tracking-widest">
                                See my work <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-4" />
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
