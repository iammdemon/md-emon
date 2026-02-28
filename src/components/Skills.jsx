import React from 'react';
import { Database, Layout, Terminal, Blocks } from 'lucide-react';
import { useData } from '../context/DataContext';

const Skills = () => {
    const { content } = useData();
    const { skills } = content;

    const iconMap = {
        "Frontend Hub": <Layout className="text-primary" size={24} />,
        "Backend Engine": <Database className="text-secondary" size={24} />,
        "Data Strategy": <Blocks className="text-primary" size={24} />,
        "Toolchain": <Terminal className="text-slate-400" size={24} />
    };

    return (
        <section id="skills" className="section-modern">
            <div className="container-modern">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="glass-pill mb-8 w-fit">{skills.tagline}</div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gradient uppercase tracking-tight">
                            {skills.title.split(' ').map((word, i) => (
                                <React.Fragment key={i}>
                                    {word} {i === 0 && <br />}
                                </React.Fragment>
                            ))}
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:w-1/3 text-slate-500 text-lg font-medium leading-relaxed"
                    >
                        {skills.description}
                    </motion.p>
                </div>

                <div className="bento-grid">
                    {skills.stack.map((item, idx) => (
                        <motion.div
                            key={item.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`${item.span} bento-card flex flex-col justify-between min-h-[350px] group`}
                        >
                            <div className="space-y-6">
                                <div className="p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-primary/20 transition-colors">
                                    {iconMap[item.category] || <Blocks className="text-primary" size={24} />}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.category}</h3>
                                    <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-10">
                                {item.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-xl font-mono text-[0.6rem] text-slate-400 uppercase tracking-widest group-hover:border-primary/30 group-hover:text-primary transition-all"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
