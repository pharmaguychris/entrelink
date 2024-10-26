import React from 'react';
import { Network, Users, MessageSquare, Rocket, Shield, Globe } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Network,
      title: "Smart Networking",
      description: "AI-powered matching connects you with the right professionals based on your goals and interests."
    },
    {
      icon: Users,
      title: "Exclusive Community",
      description: "Join a curated network of verified entrepreneurs and industry leaders."
    },
    {
      icon: MessageSquare,
      title: "Meaningful Conversations",
      description: "Engage in focused discussions that drive real business value and partnerships."
    },
    {
      icon: Rocket,
      title: "Growth Resources",
      description: "Access premium tools and resources to accelerate your business growth."
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Enterprise-grade security ensures your data and connections remain private."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with professionals from over 150 countries worldwide."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose EntreLink?</h2>
          <p className="mt-4 text-xl text-gray-600">Powerful features designed for professional success</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border border-gray-100 hover:border-sky-100 transition-colors group">
              <feature.icon className="w-10 h-10 text-sky-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}