
import React from 'react';
import { Settings, User, Mail, Search } from 'lucide-react';

const ContentSections = () => {
  const sections = [
    {
      id: 'services',
      title: 'Our Services',
      icon: Settings,
      content: 'We provide comprehensive solutions tailored to your business needs.',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'about',
      title: 'About Us',
      icon: User,
      content: 'Learn more about our mission, vision, and the team behind KPB Solutions.',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'contact',
      title: 'Contact',
      icon: Mail,
      content: 'Get in touch with us for any inquiries or support needs.',
      bgColor: 'bg-green-50'
    },
    {
      id: 'search',
      title: 'Search',
      icon: Search,
      content: 'Find exactly what you\'re looking for with our advanced search capabilities.',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <div className="space-y-0">
      {sections.map((section, index) => (
        <section 
          key={section.id}
          id={section.id}
          className={`min-h-screen flex items-center justify-center ${section.bgColor} relative`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-8">
                <section.icon className="h-8 w-8 text-gray-700" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                {section.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {section.content}
              </p>
              <div className="mt-8">
                <button className="bg-white text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ContentSections;
