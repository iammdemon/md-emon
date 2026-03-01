import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Portfolio = () => {
    return (
        <main className="bg-[#000319] relative flex flex-col overflow-hidden min-h-screen">
            <Navbar />

            {/* Hero Section - Bleeds to edges */}
            <Hero />

            {/* Boxed Content Area */}
            <div
                className="w-full mx-auto sm:px-10 px-5"
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
