import React, { useEffect } from 'react';
import { motion, useSpring, useMotionTemplate } from 'framer-motion';

const SpotlightCursor = () => {
    const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
    const mouseX = useSpring(0, springConfig);
    const mouseY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const background = useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(168, 85, 247, 0.15), transparent 80%)`;

    return (
        <>
            <motion.div
                className="fixed inset-0 pointer-events-none z-[9999]"
                style={{ background }}
            />
            {/* The actual tiny follower dot */}
            <motion.div
                className="fixed w-6 h-6 border border-purple-500/30 rounded-full pointer-events-none z-[10000]"
                style={{
                    left: mouseX,
                    top: mouseY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
            />
        </>
    );
};

export default SpotlightCursor;
