import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useData } from '../context/DataContext';

const Contact = () => {
    const { content } = useData();
    const { contact } = content;

    return (
        <section id="contact" className="py-24 w-full bg-[#000319] overflow-hidden px-4 md:px-8 relative">
            {/* Background effects for branding */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center">

                {/* Section Header */}
                <div className="flex flex-col items-center justify-center text-center mb-16 gap-3">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="uppercase tracking-[0.5em] text-[10px] md:text-sm text-[#DDD6FE] opacity-60 font-medium whitespace-nowrap"
                    >
                        GET IN TOUCH
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15]"
                    >
                        Let’s Build <span className="text-gradient">Something Great</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#8B95A5] text-base md:text-lg max-w-[600px] leading-relaxed mt-2"
                        style={{ marginBottom: '22px' }}
                    >
                        {contact.description || "Have a project in mind or just want to say hi? Feel free to reach out. Let's create scalable, future-ready web solutions together."}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center relative z-10 w-full" style={{ padding: '30px 0px' }}>

                    {/* LEFT SIDE: Contact Info List */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <div className="flex flex-col gap-[20px]">
                            <a href={`mailto:${contact.email}`} className="flex items-center gap-4 group cursor-pointer w-fit">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:border-purple-500/30 transition-all">
                                    <Mail size={18} />
                                </div>
                                <span className="text-white/80 group-hover:text-white transition-colors text-base font-medium">
                                    {contact.email}
                                </span>
                            </a>

                            <a href={`tel:${contact.phone}`} className="flex items-center gap-4 group cursor-pointer w-fit">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:border-purple-500/30 transition-all">
                                    <Phone size={18} />
                                </div>
                                <span className="text-white/80 group-hover:text-white transition-colors text-base font-medium">
                                    {contact.phone}
                                </span>
                            </a>

                            <div className="flex items-center gap-4 group cursor-pointer w-fit">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:border-purple-500/30 transition-all">
                                    <MapPin size={18} />
                                </div>
                                <span className="text-white/80 group-hover:text-white transition-colors text-base font-medium">
                                    Sylhet, Bangladesh
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: Contact Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bento-card p-8 flex flex-col relative"
                        style={{ boxShadow: '0 0 50px -10px rgba(168, 85, 247, 0.15)' }}
                    >
                        {/* Inner Background Glows */}
                        <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

                        <form
                            className="flex flex-col gap-5 relative z-10 p-8"
                            style={{ padding: '20px' }}
                        >
                            <div className="flex flex-col md:flex-row gap-5">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full bg-transparent border border-white/10 text-white placeholder-white/40 p-1 rounded-[12px] focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                                    style={{ padding: '8px' }}
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-transparent border border-white/10 text-white placeholder-white/40 p-1 rounded-[12px] focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                                    style={{ padding: '8px' }}
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full bg-transparent border border-white/10 text-white placeholder-white/40 p-1 rounded-[12px] focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                                style={{ padding: '8px' }}
                            />

                            <textarea
                                placeholder="Message"
                                className="w-full bg-transparent border border-white/10 text-white placeholder-white/40 p-1 rounded-[12px] focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all resize-none h-[150px]"
                                style={{ padding: '8px' }}
                            ></textarea>

                            <button
                                type="submit"
                                className="magic-button !w-full mt-2"
                            >
                                <span className="magic-button-bg" />
                                <span className="magic-button-content w-full h-full flex items-center justify-center gap-2">
                                    Send Message <Send size={18} className="text-purple-400" />
                                </span>
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
