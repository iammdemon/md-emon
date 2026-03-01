import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SpotlightCursor from '../components/SpotlightCursor';

const Portfolio = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <main className="bg-[#000319] relative flex flex-col overflow-hidden min-h-screen">
            <SpotlightCursor />
            <Navbar />

            {/* Hero Section - Bleeds to edges */}
            <Hero />

            {/* Boxed Content Area */}
            <div
                className="w-full mx-auto sm:px-10 px-5 relative z-10"
                style={{
                    maxWidth: '1280px',
                    margin: '0 auto'
                }}
            >
                <About />
                <Projects />
                <Testimonials />
                <Contact />
                <Footer />
            </div>
        </main>
    );
};

export default Portfolio;
