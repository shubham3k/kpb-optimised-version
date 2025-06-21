
import React from 'react';
import { Settings, User, Mail, Search, ArrowRight, Star, Zap, Shield } from 'lucide-react';

const ContentSections = () => {
  const sections = [
    {
      id: 'services',
      title: 'Our Services',
      icon: Settings,
      content: 'We provide comprehensive solutions tailored to your business needs.',
      bgColor: 'bg-gradient-to-br from-blue-50 via-white to-blue-100',
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      features: ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'Digital Strategy'],
      accentColor: 'from-blue-600 to-blue-700'
    },
    {
      id: 'about',
      title: 'About Us',
      icon: User,
      content: 'Learn more about our mission, vision, and the team behind KPB Solutions.',
      bgColor: 'bg-gradient-to-br from-purple-50 via-white to-purple-100',
      imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
      features: ['Expert Team', '100+ Projects', '5+ Years Experience', '24/7 Support'],
      accentColor: 'from-purple-600 to-purple-700'
    },
    {
      id: 'contact',
      title: 'Contact',
      icon: Mail,
      content: 'Get in touch with us for any inquiries or support needs.',
      bgColor: 'bg-gradient-to-br from-green-50 via-white to-emerald-100',
      imageUrl: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop',
      features: ['Quick Response', 'Multiple Channels', 'Global Reach', 'Personal Touch'],
      accentColor: 'from-green-600 to-emerald-700'
    },
    {
      id: 'search',
      title: 'Search',
      icon: Search,
      content: 'Find exactly what you\'re looking for with our advanced search capabilities.',
      bgColor: 'bg-gradient-to-br from-orange-50 via-white to-amber-100',
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      features: ['Smart Filters', 'Instant Results', 'AI-Powered', 'User Friendly'],
      accentColor: 'from-orange-600 to-amber-700'
    }
  ];

  return (
    <div className="space-y-0">
      {sections.map((section, index) => (
        <section 
          key={section.id}
          id={section.id}
          className={`min-h-screen flex items-center justify-center ${section.bgColor} relative overflow-hidden`}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className={`absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br ${section.accentColor} opacity-10 rounded-full blur-3xl`}></div>
            <div className={`absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-tr ${section.accentColor} opacity-10 rounded-full blur-3xl`}></div>
            
            {/* Floating geometric shapes */}
            <div className={`absolute top-20 left-10 w-16 h-16 bg-gradient-to-r ${section.accentColor} opacity-20 rounded-lg rotate-45 animate-pulse`}></div>
            <div className={`absolute bottom-32 right-20 w-12 h-12 bg-gradient-to-r ${section.accentColor} opacity-30 rounded-full animate-bounce`}></div>
            <div className={`absolute top-1/2 left-20 w-8 h-8 bg-gradient-to-r ${section.accentColor} opacity-25 rounded-full`} style={{ animationDelay: `${index * 0.5}s` }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              
              {/* Content Side */}
              <div className={`animate-fade-in ${index % 2 === 1 ? 'lg:col-start-2' : ''}`} style={{ animationDelay: `${index * 200}ms` }}>
                <div className="text-center lg:text-left">
                  {/* Icon with animation */}
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg mb-8 hover:scale-110 transition-transform duration-300">
                    <section.icon className={`h-10 w-10 bg-gradient-to-r ${section.accentColor} bg-clip-text text-transparent`} />
                  </div>
                  
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    {section.title}
                  </h2>
                  
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                    {section.content}
                  </p>

                  {/* Feature highlights */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {section.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm p-3 rounded-lg border border-gray-200/50">
                        <Star className={`h-4 w-4 bg-gradient-to-r ${section.accentColor} bg-clip-text text-transparent fill-current`} />
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className={`group bg-gradient-to-r ${section.accentColor} text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2`}>
                      <span className="font-semibold">Explore {section.title}</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                    <button className="bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-full hover:bg-white transition-all duration-200 transform hover:scale-105 shadow-lg border border-gray-200/50">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className={`animate-fade-in ${index % 2 === 1 ? 'lg:col-start-1' : ''}`} style={{ animationDelay: `${index * 300}ms` }}>
                <div className="relative">
                  {/* Main image container */}
                  <div className="relative bg-white/60 backdrop-blur-sm p-4 rounded-3xl border border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                    <img 
                      src={section.imageUrl} 
                      alt={section.title}
                      className="w-full h-80 object-cover rounded-2xl"
                    />
                    
                    {/* Overlay gradient */}
                    <div className={`absolute inset-4 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl`}></div>
                    
                    {/* Floating badge */}
                    <div className={`absolute top-8 left-8 bg-gradient-to-r ${section.accentColor} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                      Premium
                    </div>
                  </div>

                  {/* Decorative elements around image */}
                  <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r ${section.accentColor} opacity-20 rounded-full blur-xl`}></div>
                  <div className={`absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r ${section.accentColor} opacity-15 rounded-full blur-2xl`}></div>
                  
                  {/* Stats card overlay */}
                  <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-gray-200/50 hover:scale-110 transition-transform duration-300">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${section.accentColor} rounded-full flex items-center justify-center`}>
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">99%</div>
                        <div className="text-xs text-gray-600">Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom decorative line */}
            <div className="mt-16 flex justify-center">
              <div className={`w-24 h-1 bg-gradient-to-r ${section.accentColor} rounded-full`}></div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ContentSections;
