import React from 'react';
import GradualSpacing from '@/components/ui/gradual-spacing';
import {RainbowButton} from '@/components/ui/rainbow-button';

export default function LandingPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold">SpaceExplorer</div>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        
        <div className="z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Explore the Universe</h1>
          <p className="text-xl mb-8">Embark on a journey through space and time</p>
          <RainbowButton>Start Your Adventure</RainbowButton>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">About Our Mission</h2>
          <GradualSpacing className="text-lg leading-relaxed">
            <p>We are pioneers in space exploration, pushing the boundaries of human knowledge and technology.</p>
            <p>Our team of expert scientists and engineers work tirelessly to uncover the mysteries of the cosmos.</p>
            <p>Join us in our quest to understand the universe and our place within it.</p>
          </GradualSpacing>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
          <form className="max-w-md mx-auto">
            <input type="text" placeholder="Your Name" className="w-full mb-4 p-2 bg-gray-800 rounded" />
            <input type="email" placeholder="Your Email" className="w-full mb-4 p-2 bg-gray-800 rounded" />
            <textarea placeholder="Your Message" className="w-full mb-4 p-2 bg-gray-800 rounded" rows="4"></textarea>
            <RainbowButton type="submit">Send Message</RainbowButton>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 SpaceExplorer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}