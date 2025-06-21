
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
        <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-br from-blue-900/50 via-purple-900/40 to-blue-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-300/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Geometric shapes */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-fade-in">
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 shadow-lg">
            <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
            <span className="text-sm font-medium text-white/90">Premium KPB Solutions</span>
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white drop-shadow-lg">Business Consultant</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              & IT Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge consulting and IT services. 
            We deliver innovative solutions that drive growth and success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button 
              onClick={() => navigate('/services')}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-2 font-semibold"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button 
              onClick={() => navigate('/about')}
              className="group bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/20 font-semibold"
            >
              <span>Learn About Us</span>
            </button>
          </div>

          {/* Quick navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white/5 backdrop-blur-md text-white/80 px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200 border border-white/10 text-sm font-medium hover:scale-105"
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate('/search')}
              className="bg-white/5 backdrop-blur-md text-white/80 px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200 border border-white/10 text-sm font-medium hover:scale-105"
            >
              Search Solutions
            </button>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { 
                title: 'Innovation First', 
                desc: 'Cutting-edge solutions',
                icon: '🚀'
              },
              { 
                title: 'Expert Team', 
                desc: 'Industry professionals',
                icon: '👥'
              },
              { 
                title: '24/7 Support', 
                desc: 'Always available',
                icon: '🛡️'
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/10"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-2xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.desc}</p>
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
