
import React from 'react';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur Effect */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80)'
          }}
        />
        <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-blue-900/40" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-white/10 to-purple-50/20" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-300/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Geometric shapes */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-fade-in">
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 shadow-2xl">
            <Sparkles className="h-5 w-5 text-yellow-400 fill-current animate-pulse" />
            <span className="text-sm font-semibold text-white/90">Premium KPB Support Solutions</span>
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
          </div>

          {/* Main heading with enhanced styling */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white drop-shadow-2xl">Business Consultant</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
              & IT Solution
            </span>
          </h1>

          {/* Enhanced description */}
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light">
            Unlock unprecedented growth with our cutting-edge business consulting and IT services. 
            We craft innovative solutions that propel your business into tomorrow.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-16">
            <button 
              onClick={() => navigate('/services')}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-3 font-semibold text-lg backdrop-blur-sm border border-white/10"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={() => navigate('/about')}
              className="group bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-2xl border border-white/20 font-semibold text-lg"
            >
              <span>Learn About Us</span>
            </button>
          </div>

          {/* Quick action buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white/5 backdrop-blur-md text-white/80 px-6 py-2 rounded-full hover:bg-white/10 transition-all duration-200 border border-white/10 text-sm font-medium"
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate('/search')}
              className="bg-white/5 backdrop-blur-md text-white/80 px-6 py-2 rounded-full hover:bg-white/10 transition-all duration-200 border border-white/10 text-sm font-medium"
            >
              Search Solutions
            </button>
          </div>

          {/* Enhanced features highlight */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { 
                title: 'Innovation First', 
                desc: 'Cutting-edge technology solutions',
                icon: '🚀'
              },
              { 
                title: 'Expert Team', 
                desc: 'Industry-leading professionals',
                icon: '👥'
              },
              { 
                title: '24/7 Support', 
                desc: 'Always here when you need us',
                icon: '🛡️'
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl hover:shadow-white/10 transition-all duration-300 hover:scale-105 hover:bg-white/10"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-white mb-3 text-lg">{feature.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
