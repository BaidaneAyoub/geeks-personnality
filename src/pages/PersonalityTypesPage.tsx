import { useState } from 'react';
import { Brain, Heart, Shield, Compass, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { categories, personalityData } from '../data/personalityTypes';

interface PersonalityTypesPageProps { }

const colorClasses = {
  purple: {
    bg: 'from-purple-100 to-purple-200',
    text: 'text-purple-600',
    hover: 'hover:border-purple-400',
    button: 'bg-purple-500 hover:bg-purple-600',
    iconBg: 'bg-purple-200'
  },
  green: {
    bg: 'from-green-100 to-green-200',
    text: 'text-green-600',
    hover: 'hover:border-green-400',
    button: 'bg-green-500 hover:bg-green-600',
    iconBg: 'bg-green-200'
  },
  blue: {
    bg: 'from-blue-100 to-blue-200',
    text: 'text-blue-600',
    hover: 'hover:border-blue-400',
    button: 'bg-blue-500 hover:bg-blue-600',
    iconBg: 'bg-blue-200'
  },
  yellow: {
    bg: 'from-yellow-100 to-yellow-200',
    text: 'text-yellow-600',
    hover: 'hover:border-yellow-400',
    button: 'bg-yellow-500 hover:bg-yellow-600',
    iconBg: 'bg-yellow-200'
  }
};

export function PersonalityTypesPage() {
  const navigate = useNavigate();
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl text-gray-900 mb-4 font-bold">
          Personality Types
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore the 16 personality types organized into four distinct categories.
          Each type has its own unique strengths, weaknesses, and characteristics.
        </p>
      </div>

      <div className="space-y-20">
        {categories.map((category) => {
          const colors = colorClasses[category.color as keyof typeof colorClasses];

          return (
            <div key={category.id} className="relative">
              {/* Category Header */}
              <div className={`flex items-center space-x-4 mb-8 ${colors.text}`}>
                <div className={`p-3 rounded-xl ${colors.iconBg}`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold">{category.name}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.types.map((type) => {
                  // We need to get the full data to access the image
                  // In a real app, we might want to normalize this data structure better
                  // For now, we'll access it directly from the imported data if possible, 
                  // or rely on the fact that we updated the data structure but maybe not the categories array fully?
                  // Wait, categories array in data/personalityTypes.ts only has id, code, name.
                  // We need to fetch the image from personalityData.

                  // Let's import personalityData to get the image
                  const fullData = personalityData[type.id];

                  return (
                    <button
                      key={type.id}
                      onClick={() => navigate(`/types/${type.id}`)}
                      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden text-left flex flex-col h-full border border-gray-100 hover:border-transparent"
                    >
                      {/* Card Header / Background */}
                      <div className={`h-24 bg-gradient-to-br ${colors.bg} relative overflow-hidden`}>
                        <div className="absolute inset-0 opacity-50 bg-white/30"></div>
                      </div>

                      {/* Character Image - Floating */}
                      <div className="relative -mt-16 px-6 flex justify-center">
                        <div className="w-32 h-32 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                          <img
                            src={fullData?.image}
                            alt={type.name}
                            className="w-full h-full object-contain drop-shadow-md"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 pt-2 flex-grow flex flex-col items-center text-center">
                        <span className={`text-sm font-bold tracking-wider ${colors.text} mb-2`}>
                          {type.code}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                          {type.name}
                        </h3>
                        <div className={`w-8 h-1 rounded-full ${colors.button} opacity-0 group-hover:opacity-100 transition-opacity mt-auto`}></div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

