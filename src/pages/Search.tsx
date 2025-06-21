
import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import { Search as SearchIcon, Filter, Grid, List } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const searchResults = [
    {
      type: 'Service',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      category: 'Development'
    },
    {
      type: 'Service',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      category: 'Development'
    },
    {
      type: 'Portfolio',
      title: 'E-commerce Platform',
      description: 'Complete e-commerce solution with payment integration and inventory management.',
      category: 'Project'
    },
    {
      type: 'Blog',
      title: 'Modern Web Development Trends',
      description: 'Exploring the latest trends and technologies in web development for 2024.',
      category: 'Article'
    },
    {
      type: 'Service',
      title: 'Digital Solutions',
      description: 'Comprehensive digital transformation and business automation solutions.',
      category: 'Consulting'
    },
    {
      type: 'Portfolio',
      title: 'Healthcare Management System',
      description: 'Custom healthcare management system with patient tracking and scheduling.',
      category: 'Project'
    }
  ];

  const filteredResults = searchResults.filter(result =>
    result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    result.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Search</span> Everything
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Find services, projects, articles, and resources using our advanced search capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Search Bar */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 shadow-lg mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for services, projects, articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 h-12">
                <SearchIcon className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {/* Search Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </Button>
              <span className="text-gray-600">
                {filteredResults.length} results found
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Search Results */}
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
            {filteredResults.map((result, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded-full">
                      {result.type}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {result.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{result.title}</h3>
                <p className="text-gray-600 mb-4">{result.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-200"
                >
                  View Details
                </Button>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredResults.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <SearchIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">Try adjusting your search terms or browse our services.</p>
            </div>
          )}
        </div>
      </section>

      {/* Popular Searches */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-white/60 backdrop-blur-sm p-12 rounded-2xl border border-gray-200/50 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Searches</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Web Development', 'Mobile Apps', 'Digital Solutions', 'Portfolio', 'Support', 'Consulting'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="px-4 py-2 bg-white/80 text-gray-700 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-200 border border-gray-200/50"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
