
import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

interface AppCardProps {
  title: string;
  image: string;
  link: string;
  description?: string;
}

const AppCard: React.FC<AppCardProps> = ({ title, image, link, description }) => {
  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 overflow-hidden relative animate-fade-in"
      onClick={handleClick}
    >
      {/* Animated sparkle effect */}
      <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
        <Sparkles className="w-5 h-5 text-yellow-400" />
      </div>
      
      {/* Animated border gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
      <div className="absolute inset-0.5 bg-white rounded-2xl"></div>
      
      <div className="relative z-10">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 md:h-56 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
          />
          
          {/* Animated overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          
          {/* Floating external link icon */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 animate-bounce">
            <ExternalLink className="w-4 h-4 text-gray-700" />
          </div>
          
          {/* Animated shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
          </div>
        </div>
        
        <div className="p-6 relative">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-all duration-300 transform group-hover:scale-105">
            {title}
          </h3>
          {description && (
            <p className="text-gray-600 text-sm leading-relaxed transition-all duration-300 group-hover:text-gray-700">
              {description}
            </p>
          )}
          
          {/* Animated bottom accent */}
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
