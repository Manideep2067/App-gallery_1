
import React from 'react';
import Hero from '../components/Hero';
import AppCard from '../components/AppCard';
import { apps } from '../data/apps';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Hero />
      
      <section className="py-16 px-6 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-100 rounded-full opacity-30 animate-bounce"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
              Featured Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in delay-200">
              Explore my collection of applications, each designed to solve specific problems 
              and deliver exceptional user experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {apps.map((app, index) => (
              <div 
                key={app.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AppCard
                  title={app.title}
                  image={app.image}
                  link={app.link}
                  description={app.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 py-8 relative">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 animate-fade-in">
            © 2024 My App Portfolio. Crafted with passion and precision.
          </p>
          <div className="mt-2 animate-pulse">
            <span className="text-2xl">✨</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
