import React from 'react';
import { Mail, Smartphone, SendHorizontal, MessageSquare } from 'lucide-react';
import { useData } from '../context/DataContext';

const Contact = () => {
    const { content } = useData();
    const { contact } = content;

    return (
        <section id="contact" className="section-modern">
            <div className="container-modern">
                <div className="bento-grid">
                    {/* Header Cell */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="col-span-12 lg:col-span-5 bento-card bg-primary group hover:bg-primary/90 transition-all cursor-pointer overflow-hidden p-12"
                    >
                        <div className="flex flex-col h-full justify-between space-y-12">
                            <div className="p-4 bg-white/20 rounded-2xl w-fit">
                                <MessageSquare size={32} className="text-white" />
                            </div>
                            <div>
                                <h2 className="text-5xl font-extrabold text-white uppercase tracking-tight italic mb-6">
                                    {contact.title.split(' ').map((word, i) => (
                                        <React.Fragment key={i}>
                                            {word} {i === 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </h2>
                                <p className="text-white/70 font-medium text-lg">
                                    {contact.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Cell */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="col-span-12 lg:col-span-7 bento-card space-y-10"
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="font-mono text-[0.6rem] text-slate-500 uppercase tracking-widest">Client Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-primary transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-mono text-[0.6rem] text-slate-500 uppercase tracking-widest">Client Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-primary transition-all" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="font-mono text-[0.6rem] text-slate-500 uppercase tracking-widest">Message Briefing</label>
                                <textarea rows="4" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-primary transition-all resize-none" placeholder="Describe your project scope..."></textarea>
                            </div>
                            <button className="w-full py-5 bg-[#A855F7] text-white font-bold rounded-xl shadow-lg shadow-[#A855F7]/20 flex items-center justify-center gap-3 group transition-all cursor-pointer">
                                Transmit Inquiry <SendHorizontal size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info Cells */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="col-span-12 md:col-span-6 bento-card flex items-center gap-6 group cursor-pointer"
                    >
                        <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-primary transition-colors">
                            <Mail size={24} className="text-primary group-hover:text-white" />
                        </div>
                        <div>
                            <span className="font-mono text-[0.6rem] text-slate-500 uppercase tracking-widest block mb-1">Direct Email</span>
                            <span className="text-lg font-bold text-white uppercase">{contact.email}</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="col-span-12 md:col-span-6 bento-card flex items-center gap-6 group cursor-pointer"
                    >
                        <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-[#A855F7] transition-colors">
                            <Smartphone size={24} className="text-[#A855F7] group-hover:text-white" />
                        </div>
                        <div>
                            <span className="font-mono text-[0.6rem] text-slate-500 uppercase tracking-widest block mb-1">Electronic Line</span>
                            <span className="text-lg font-bold text-white">{contact.phone}</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
