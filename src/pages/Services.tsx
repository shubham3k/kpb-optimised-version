
import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { Settings, Code, Smartphone, Globe, Database, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['React & TypeScript', 'Responsive Design', 'Performance Optimized', 'SEO Ready']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'iOS Development', 'Android Development', 'Cross-Platform']
    },
    {
      icon: Globe,
      title: 'Digital Solutions',
      description: 'Comprehensive digital transformation and business automation solutions.',
      features: ['Business Automation', 'API Integration', 'Cloud Solutions', 'Digital Strategy']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Scalable database design, optimization, and management services.',
      features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup Solutions']
    },
    {
      icon: Shield,
      title: 'Security & Support',
      description: '24/7 technical support and comprehensive security solutions.',
      features: ['Security Audits', '24/7 Support', 'Maintenance', 'Monitoring']
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Tailored solutions designed specifically for your business needs.',
      features: ['Custom Development', 'Integration', 'Consulting', 'Training']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-white/60 backdrop-blur-sm p-12 rounded-2xl border border-gray-200/50 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our services can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Contact Us Today
            </button>
            <button className="bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-full hover:bg-white transition-all duration-200 transform hover:scale-105 shadow-lg border border-gray-200/50">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
