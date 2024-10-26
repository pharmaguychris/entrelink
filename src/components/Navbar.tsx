import React from 'react';
import { Network } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Network className="h-8 w-8 text-sky-600" />
            <span className="text-xl font-semibold text-gray-900">EntreLink</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-sky-600 transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-sky-600 transition-colors">Testimonials</a>
    
            <button className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}