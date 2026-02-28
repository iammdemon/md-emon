import React from 'react';

const Experience = () => {
    const workExperience = [
        {
            id: 1,
            title: "Frontend Engineer Intern",
            desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
            className: "md:col-span-2",
            thumbnail: "/exp1.svg",
        },
        {
            id: 2,
            title: "Mobile App Dev - JSM Tech",
            desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
            className: "md:col-span-2",
            thumbnail: "/exp2.svg",
        },
        {
            id: 3,
            title: "Freelance App Dev Project",
            desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
            className: "md:col-span-2",
            thumbnail: "/exp3.svg",
        },
        {
            id: 4,
            title: "Lead Frontend Developer",
            desc: "Developed and maintained user-facing features using modern frontend technologies.",
            className: "md:col-span-2",
            thumbnail: "/exp4.svg",
        },
    ];

    return (
        <section id="experience" className="py-48 w-full px-5">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-32 text-white leading-tight tracking-tighter">
                My <span className="text-gradient">work experience</span>
            </h1>

            <div className="w-full mt-20 grid lg:grid-cols-4 grid-cols-1 gap-12 max-w-7xl mx-auto">
                {workExperience.map((card) => (
                    <div
                        key={card.id}
                        className="flex-1 text-white bento-card p-12 lg:p-16 group relative"
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-4 gap-12">
                            <div className="lg:w-32 md:w-20 w-16 mb-5 lg:mb-0">
                                <div className="w-20 h-20 rounded-3xl bg-[#05001A] flex items-center justify-center border border-white/10 group-hover:border-[#A855F7] transition-all duration-500 shadow-2xl">
                                    <div className="w-6 h-6 bg-[#A855F7] rounded-full blur-[2px] opacity-40 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                            <div className="lg:ms-5 flex-1">
                                <h1 className="text-start text-2xl md:text-3xl font-bold tracking-tight">
                                    {card.title}
                                </h1>
                                <p className="text-start text-white-100 mt-5 font-medium text-[#BEC1DD] text-lg leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
