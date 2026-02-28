import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Collaborating with Emon was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
            name: "Michael Johnson",
            title: "Director of AlphaStream Technologies",
            img: "https://i.pravatar.cc/150?u=michael"
        },
        {
            quote: "Collaborating with Emon was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
            name: "Michael Johnson",
            title: "Director of AlphaStream Technologies",
            img: "https://i.pravatar.cc/150?u=michael2"
        },
        {
            quote: "Collaborating with Emon was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
            name: "Michael Johnson",
            title: "Director of AlphaStream Technologies",
            img: "https://i.pravatar.cc/150?u=michael3"
        },
    ];

    return (
        <section id="testimonials" className="py-48 w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-32 text-white leading-tight tracking-tighter">
                Kind words from <span className="text-gradient">satisfied clients</span>
            </h1>

            <div className="flex flex-col items-center">
                <div className="h-[60vh] md:h-[35rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden w-full">
                    <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
                        {testimonials.map((testimonial, idx) => (
                            <div
                                key={idx}
                                className="w-[90vw] max-w-full relative rounded-3xl border border-b-0 flex-shrink-0 border-white/[0.05] p-10 md:p-20 md:w-[60vw] bg-black-100"
                                style={{
                                    background: "rgb(4,7,29)",
                                    backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                                }}
                            >
                                <blockquote>
                                    <span className="relative z-20 text-lg md:text-2xl leading-[1.6] text-white font-normal italic">
                                        "{testimonial.quote}"
                                    </span>
                                    <div className="relative z-20 mt-12 flex flex-row items-center">
                                        <div className="me-5">
                                            <img src={testimonial.img} alt="profile" className="w-14 h-14 rounded-full border-2 border-[#8B5CF6]/20" />
                                        </div>
                                        <span className="flex flex-col gap-1">
                                            <span className="text-lg leading-[1.6] text-white font-bold tracking-tight">
                                                {testimonial.name}
                                            </span>
                                            <span className="text-base leading-[1.6] text-[#C1C2D3] font-normal">
                                                {testimonial.title}
                                            </span>
                                        </span>
                                    </div>
                                </blockquote>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-32 mt-24">
                    {["Cloudinary", "Appwrite", "Hashnode", "Stream", "Docker"].map((name) => (
                        <div key={name} className="flex md:max-w-60 max-w-32 gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer group">
                            <span className="text-white font-black md:text-4xl text-2xl uppercase tracking-tighter group-hover:text-[#8B5CF6]">
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
