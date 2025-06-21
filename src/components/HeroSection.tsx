
import React from 'react';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Simple Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900" />

      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-300/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Simple geometric shapes */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-purple-400/5 to-pink-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-fade-in">
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium text-white/90">Premium KPB Solutions</span>
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Business Consultant</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              & IT Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge consulting and IT services. 
            We deliver innovative solutions that drive growth and success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button 
              onClick={() => navigate('/services')}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3 font-semibold text-lg"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button 
              onClick={() => navigate('/about')}
              className="group bg-white/10 text-white px-10 py-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/20 font-semibold text-lg"
            >
              <span>Learn About Us</span>
            </button>
          </div>

          {/* Quick navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white/5 text-white/80 px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-200 border border-white/10 font-medium hover:scale-105"
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate('/search')}
              className="bg-white/5 text-white/80 px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-200 border border-white/10 font-medium hover:scale-105"
            >
              Search Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
