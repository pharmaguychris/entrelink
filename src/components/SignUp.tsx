import React, { useState } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically handle the email submission to your backend
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-sky-50 to-gray-50">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/"
          className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Join EntreLink</h2>
          <p className="text-gray-600 mb-6">Enter your email to start networking with purpose</p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="text-sky-600 mb-4">✓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank you for joining!</h3>
              <p className="text-gray-600">Check your email for next steps.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}