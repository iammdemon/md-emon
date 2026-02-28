import React from 'react';
import { Navigation } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "3D Solar System Planets to Explore",
            des: "Explore the wonders of our solar system with this interactive 3D simulation of the planets using Three.js.",
            img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=1000",
            iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
            link: "https://github.com/adrianhajdin/project_3d_solar_system",
        },
        {
            id: 2,
            title: "Yoom - Video Conferencing App",
            des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
            img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=1000",
            iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
            link: "https://github.com/adrianhajdin/zoom-clone",
        },
        {
            id: 3,
            title: "AI Image SaaS - Canva Application",
            des: "A REAL Software-as-a-Service app with AI features and a payments system using Next.js 14, Cloudinary AI, and Stripe.",
            img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
            iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
            link: "https://github.com/adrianhajdin/imaginify",
        },
        {
            id: 4,
            title: "Animated Apple iPhone 3D Website",
            des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D rendering.",
            img: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=1000",
            iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
            link: "https://github.com/adrianhajdin/iphone",
        },
    ];

    return (
        <div id="projects" className="py-48 w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-24 text-white leading-[1.1] tracking-tighter">
                A small selection of <span className="text-gradient">recent projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-24 mt-10 w-full max-w-7xl mx-auto px-5">
                {projects.map(({ id, title, des, img, iconLists }) => (
                    <div
                        key={id}
                        className="flex-shrink-0 lg:min-h-[44rem] flex flex-col items-center justify-center sm:w-[570px] w-full"
                    >
                        <div className="relative flex items-center justify-center sm:w-[570px] w-full overflow-hidden sm:h-[40vh] h-[30vh] mb-12 rounded-3xl bg-[#13162D] group">
                            <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                                <div className="absolute inset-0 grid-background opacity-30" />
                            </div>
                            <img
                                src={img}
                                alt={title}
                                className="z-10 absolute bottom-0 rotate-3 group-hover:rotate-0 group-hover:scale-110 transition-all duration-700 rounded-t-xl w-[90%] shadow-2xl"
                            />
                        </div>

                        <div className="flex flex-col w-full px-2">
                            <h1 className="font-bold lg:text-3xl md:text-2xl text-xl line-clamp-1 text-white leading-tight">
                                {title}
                            </h1>

                            <p className="lg:text-2xl lg:font-normal font-light text-base line-clamp-2 text-[#BEC1DD] mt-4 leading-relaxed max-w-[500px]">
                                {des}
                            </p>

                            <div className="flex items-center justify-between mt-10 mb-3">
                                <div className="flex items-center">
                                    {iconLists.map((icon, index) => (
                                        <div
                                            key={icon}
                                            className="border border-white/[0.1] rounded-full bg-black lg:w-12 lg:h-12 w-10 h-10 flex items-center justify-center"
                                            style={{
                                                transform: `translateX(-${8 * index}px)`,
                                            }}
                                        >
                                            <img src={icon} alt={icon} className="p-2 opacity-80" onError={(e) => { e.target.style.display = 'none' }} />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center items-center group cursor-pointer">
                                    <p className="flex lg:text-2xl md:text-base text-sm text-[#A855F7] font-medium transition-all group-hover:underline decoraion-[#A855F7]">
                                        Check Live Site
                                    </p>
                                    <Navigation className="ms-3 rotate-45 text-[#A855F7] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
