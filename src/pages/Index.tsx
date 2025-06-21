
import React from 'react';
import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import ContentSections from '../components/ContentSections';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="relative">
      <NavigationBar />
      <HeroSection />
      <ContentSections />
      <Footer />
    </div>
  );
};

export default Index;
