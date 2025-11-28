import { ArrowLeft, Briefcase, Heart, TrendingUp, AlertCircle } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { personalityData } from '../data/personalityTypes';

interface PersonalityDetailPageProps { }

export function PersonalityDetailPage() {
  const { typeId } = useParams<{ typeId: string }>();
  const data = personalityData[typeId || 'intj'] || personalityData['intj'];

  const colorClasses = {
    purple: {
      bg: 'from-purple-100 to-purple-200',
      text: 'text-purple-600',
      bar: 'bg-purple-500',
      badge: 'bg-purple-100 text-purple-700'
    },
    green: {
      bg: 'from-green-100 to-green-200',
      text: 'text-green-600',
      bar: 'bg-green-500',
      badge: 'bg-green-100 text-green-700'
    }
  };

  const colors = colorClasses[data.color as keyof typeof colorClasses] || colorClasses.purple;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Back Button */}
      <Link
        to="/types"
        className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Personality Types</span>
      </Link>

      {/* Header */}
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden mb-8">
        <div className={`bg-gradient-to-br ${colors.bg} p-8 md:p-12`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 relative z-10">
              <div className={`inline-block px-4 py-2 ${colors.badge} rounded-full bg-white/90 backdrop-blur-sm shadow-sm`}>
                {data.code}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                {data.name}
              </h1>
              <p className="text-xl text-gray-800 font-medium leading-relaxed">
                {data.tagline}
              </p>
            </div>

            {/* Illustration */}
            <div className="flex justify-center md:justify-end relative">
              <div className="w-64 h-64 md:w-80 md:h-80 relative z-10">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
              {/* Decorative background circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Trait Bars */}
      <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 mb-8">
        <h2 className="text-2xl text-gray-900 mb-6">Personality Traits</h2>
        <div className="space-y-6">
          {data.traits.map((trait: any) => (
            <div key={trait.name}>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">{trait.name}</span>
                <span className={colors.text}>{trait.value}%</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${colors.bar} rounded-full transition-all duration-1000`}
                  style={{ width: `${trait.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strengths & Weaknesses */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-3xl shadow-sm p-8">
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl text-gray-900">Strengths</h2>
          </div>
          <ul className="space-y-3">
            {data.strengths.map((strength: string, index: number) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700">{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-3xl shadow-sm p-8">
          <div className="flex items-center space-x-3 mb-6">
            <AlertCircle className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl text-gray-900">Weaknesses</h2>
          </div>
          <ul className="space-y-3">
            {data.weaknesses.map((weakness: string, index: number) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-orange-500 mt-1">!</span>
                <span className="text-gray-700">{weakness}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Career Recommendations */}
      <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <Briefcase className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl text-gray-900">Career Recommendations</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {data.careerMatches.map((career: string, index: number) => (
            <div
              key={index}
              className="px-4 py-3 bg-gray-50 rounded-xl text-gray-700 text-center hover:bg-gray-100 transition-colors"
            >
              {career}
            </div>
          ))}
        </div>
      </div>

      {/* Relationship Insights */}
      <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
        <div className="flex items-center space-x-3 mb-6">
          <Heart className="w-6 h-6 text-pink-600" />
          <h2 className="text-2xl text-gray-900">Relationship Insights</h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          {data.relationships}
        </p>
      </div>
    </div>
  );
}

