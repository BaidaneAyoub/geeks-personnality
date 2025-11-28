import { Share2, RefreshCw, ArrowRight, CheckCircle, Download, Briefcase as BriefcaseIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TestResult } from '../types';
import { personalityData } from '../data/personalityTypes';

interface ResultsPageProps {
  results: TestResult | null;
}

export function ResultsPage({ results }: ResultsPageProps) {
  const navigate = useNavigate();

  if (!results) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <RefreshCw className="w-8 h-8 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">No Results Found</h2>
        <p className="text-gray-600 mb-6">It seems you haven't taken the test yet.</p>
        <button
          onClick={() => navigate('/test')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Take the Test
        </button>
      </div>
    );
  }

  const { typeId, traitScores } = results;

  // 1. كناخدو الكود الأصلي (مثلا isfp) باش نقلبو فالداتا
  const baseTypeId = typeId.split('-')[0].toLowerCase(); 
  const type = personalityData[baseTypeId] || personalityData['intj'];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-2 bg-green-100 text-green-700 rounded-full mb-4">
          <CheckCircle className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">Test Completed Successfully</span>
        </div>
        
        {/* 🔥 FIX: .toUpperCase() باش الحروف يبانو كبار بزز */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Your Personality Type is <span className="text-blue-600">{typeId.toUpperCase()}</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">{type.name}</p>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => navigate(`/types/${type.id}`)}
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Read Full Profile
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button className="flex items-center px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            <Share2 className="w-5 h-5 mr-2" />
            Share Results
          </button>
        </div>
      </div>

      {/* Trait Scores */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Trait Scores</h3>
        <div className="space-y-6">
          {traitScores.map((trait: any, index: number) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm font-medium text-gray-600">
                <span>{trait.left}</span>
                <span>{trait.right}</span>
              </div>
              <div className="h-4 bg-gray-100 rounded-full overflow-hidden relative">
                <div
                  className={`absolute top-0 bottom-0 w-1/2 transition-all duration-1000 ease-out ${trait.score < 50 ? 'right-1/2 bg-blue-500 rounded-l-full' : 'left-1/2 bg-purple-500 rounded-r-full'
                    }`}
                  style={{ width: `${Math.abs(trait.score - 50) * 2}%` }}
                />
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-300 -ml-px" />
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{trait.score < 50 ? `${100 - trait.score}%` : ''}</span>
                <span>{trait.score >= 50 ? `${trait.score}%` : ''}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Summary */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-purple-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-purple-900 mb-4">Strengths</h3>
          <ul className="space-y-3">
            {type.strengths?.map((strength: string, index: number) => (
              <li key={index} className="flex items-start text-purple-800">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                {strength}
              </li>
            )) || <li>No strengths data available</li>}
          </ul>
        </div>
        <div className="bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Career Matches</h3>
          <ul className="space-y-3">
            {type.careerMatches?.map((career: string, index: number) => (
              <li key={index} className="flex items-start text-blue-800">
                <BriefcaseIcon className="w-4 h-4 mt-1 mr-3 flex-shrink-0" />
                {career}
              </li>
            )) || <li>No career data available</li>}
          </ul>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => navigate('/test')}
          className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Retake Test
        </button>
        <button className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
          <Download className="w-5 h-5 mr-2" />
          Save Results
        </button>
      </div>
    </div>
  );
}