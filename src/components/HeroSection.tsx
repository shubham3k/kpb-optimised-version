
import React from 'react';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="animate-fade-in">
              {/* Premium Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 py-3 mb-8 shadow-lg">
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Premium KPB Solutions</span>
                <Star className="h-3 w-3 text-blue-600 fill-current" />
              </div>

              {/* Main heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Business Consultant
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  & IT Solutions
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed mb-12">
                Transform your business with cutting-edge consulting and IT services. 
                We deliver innovative solutions that drive growth and success.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                <button 
                  onClick={() => navigate('/services')}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3 font-semibold text-lg"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <button 
                  onClick={() => navigate('/about')}
                  className="group bg-white/80 backdrop-blur-sm text-gray-700 px-10 py-4 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-200/50 font-semibold text-lg"
                >
                  <span>Learn About Us</span>
                </button>
              </div>

              {/* Quick navigation */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-white/80 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-full hover:bg-white transition-all duration-200 border border-gray-200/50 font-medium hover:scale-105"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => navigate('/search')}
                  className="bg-white/80 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-full hover:bg-white transition-all duration-200 border border-gray-200/50 font-medium hover:scale-105"
                >
                  Search Solutions
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative lg:order-last">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional woman working on laptop - Business consulting and IT solutions"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
