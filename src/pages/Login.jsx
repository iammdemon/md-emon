import React, { useState } from 'react';
import { Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Login = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const { login } = useData();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(password)) {
            navigate('/dashboard');
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bento-card border-primary/20 bg-dark-accent p-10 space-y-8"
            >
                <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                        <Lock size={32} />
                    </div>
                    <h2 className="text-3xl font-black text-white uppercase tracking-tight">Access Control</h2>
                    <p className="text-slate-500 font-medium">Enter credentials to architect content</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="font-mono text-[0.6rem] text-slate-500 uppercase tracking-widest">Master Key</label>
                        <div className="relative group">
                            <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" size={20} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'} pl-12 pr-4 py-4 rounded-xl text-white focus:outline-none focus:border-primary transition-all`}
                                placeholder="••••••••"
                            />
                        </div>
                        {error && <p className="text-red-500 text-[0.65rem] font-bold uppercase tracking-widest mt-2">Authentication Failed</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-5 neon-btn-primary text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-3 group transition-all cursor-pointer"
                    >
                        Initialize Session <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-center text-[0.6rem] text-slate-600 font-mono uppercase tracking-widest">
                        Default Key: admin123
                    </p>
                </form>
            </motion.div>
        </div>
    );
};

export default Login;
