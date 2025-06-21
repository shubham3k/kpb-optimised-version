
import React from 'react';
import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import ContentSections from '../components/ContentSections';

const Index = () => {
  return (
    <div className="relative">
      <NavigationBar />
      <HeroSection />
      <ContentSections />
    </div>
  );
};

export default Index;
