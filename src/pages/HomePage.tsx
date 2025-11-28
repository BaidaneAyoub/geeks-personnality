import { ArrowRight, CheckCircle, BarChart3, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold leading-tight">
              Discover Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Unique</span> Personality
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Take our comprehensive personality test to unlock insights about your unique traits,
              strengths, and potential. Get personalized recommendations for your career and relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/test')}
                className="group inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <span className="text-lg font-semibold">Start Test</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate('/types')}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-gray-700 border-2 border-gray-200 rounded-full hover:border-purple-200 hover:bg-purple-50 transition-all"
              >
                <span className="text-lg font-medium">Explore Types</span>
              </button>
            </div>
            <p className="text-sm text-gray-500 flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              Takes less than 12 minutes • No registration required
            </p>
          </div>

          {/* Hero Illustration */}
          <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
            {/* Background Blob */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-100 to-green-100 rounded-[3rem] opacity-60 blur-3xl transform rotate-3"></div>

            {/* Character Composition */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                {/* Analyst */}
                <img
                  src="/src/assets/characters/intj.png"
                  alt="Analyst"
                  className="absolute top-0 right-0 w-40 h-40 object-contain drop-shadow-xl animate-float-slow"
                  style={{ animationDelay: '0s' }}
                />
                {/* Diplomat */}
                <img
                  src="/src/assets/characters/diplomat.png"
                  alt="Diplomat"
                  className="absolute bottom-0 left-0 w-40 h-40 object-contain drop-shadow-xl animate-float-slow"
                  style={{ animationDelay: '1s' }}
                />
                {/* Sentinel */}
                <img
                  src="/src/assets/characters/sentinel.png"
                  alt="Sentinel"
                  className="absolute top-1/4 left-10 w-32 h-32 object-contain drop-shadow-lg animate-float-slow"
                  style={{ animationDelay: '2s' }}
                />
                {/* Explorer */}
                <img
                  src="/src/assets/characters/explorer.png"
                  alt="Explorer"
                  className="absolute bottom-1/4 right-10 w-36 h-36 object-contain drop-shadow-lg animate-float-slow"
                  style={{ animationDelay: '1.5s' }}
                />

                {/* Center Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center z-20">
                  <Sparkles className="w-10 h-10 text-purple-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Steps Section */}
      <section className="py-16 bg-white rounded-3xl shadow-sm mb-16">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl text-gray-900">Complete the Test</h3>
              <p className="text-gray-600">
                Answer 60 quick questions about your preferences, behaviors, and thinking patterns.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl text-gray-900">View Detailed Results</h3>
              <p className="text-gray-600">
                Get a comprehensive breakdown of your personality type with detailed trait analysis.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl text-gray-900">Unlock Your Potential</h3>
              <p className="text-gray-600">
                Receive personalized advice for career growth, relationships, and personal development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl text-gray-900">
            Ready to discover who you are?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of people who have already discovered their personality type
            and unlocked their full potential.
          </p>
          <button
            onClick={() => navigate('/types')}
            className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-purple-500 text-purple-600 rounded-full hover:bg-purple-50 transition-all"
          >
            <span className="text-lg">Explore Personality Types</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

