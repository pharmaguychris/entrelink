import React from 'react';
import { ArrowRight, Users, Briefcase, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-sky-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Build Your Professional Network
            <span className="text-sky-600"> With AI</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
          EntreLink leverages AI to bring professionals together, offering intelligent recommendations, personalized digital business cards, and optimized networking experiences.
          </p>
          <div className="flex justify-center">
            <Link 
              to="/signup"
              className="group bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors flex items-center space-x-2"
            >
              <span>Join waitinglist</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Users, title: "50k+", subtitle: "Active Members" },
              { icon: Briefcase, title: "10k+", subtitle: "Business Connections" },
              { icon: Target, title: "95%", subtitle: "Success Rate" }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <stat.icon className="w-8 h-8 text-sky-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">{stat.title}</h3>
                <p className="text-gray-600">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}