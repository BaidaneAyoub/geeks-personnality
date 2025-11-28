import { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TestResult } from '../types';

interface TestPageProps {
  onComplete: (results: TestResult) => void;
}

// --- 1. DATA (60 Questions) ---
const rawQuestions = [
  "Vous vous faites fréquemment de nouveaux amis.",
  "Les idées complexes et novatrices vous enthousiasment plus que les idées simples et directes.",
  "Vous vous laissez plus facilement convaincre par des émotions que par des arguments factuels.",
  "Vos espaces de vie et de travail sont propres et organisés.",
  "Vous restez généralement calme, même sous une forte pression.",
  "Vous trouvez l’idée de réseauter ou de vous promouvoir auprès d’étrangers très intimidante.",
  "Vous priorisez et planifiez les tâches efficacement, souvent bien avant la date limite.",
  "Les récits et les émotions des gens vous parlent plus fort que les chiffres ou les données.",
  "Vous aimez utiliser des outils de gestion tels que calendriers et listes.",
  "Même une petite erreur peut vous faire douter de vos capacités ou connaissances.",
  "Vous n’avez aucun mal à approcher quelqu’un d’intéressant et entamer une conversation.",
  "Vous n’aimez pas particulièrement discuter des différentes interprétations d’œuvres créatives.",
  "Vous accordez la priorité aux faits plutôt qu’aux sentiments pour déterminer une ligne de conduite.",
  "Vous laissez souvent la journée se dérouler sans programme.",
  "Vous vous souciez rarement de faire bonne impression auprès des gens que vous rencontrez.",
  "Vous appréciez participer à des activités en équipe.",
  "Vous aimez expérimenter des approches nouvelles et non testées.",
  "Vous privilégiez une attitude sensible plutôt qu’une honnêteté totale.",
  "Vous êtes en quête constante de nouvelles expériences et connaissances.",
  "Vous avez tendance à vous inquiéter que les choses empirent.",
  "Vous appréciez davantage les passe-temps solitaires qu’en groupe.",
  "Vous ne vous voyez pas exercer un métier d’écrivain de fiction.",
  "Vous préconisez des décisions efficaces, même si cela implique de négliger certains aspects émotionnels.",
  "Vous préférez accomplir vos tâches avant de vous détendre.",
  "En cas de désaccord, vous privilégiez la défense de votre point de vue plutôt que les sentiments d’autrui.",
  "Vous attendez que les autres se présentent en premier lors des réunions sociales.",
  "Votre humeur peut changer très rapidement.",
  "Vous ne vous laissez pas facilement influencer par des arguments émotionnels.",
  "Vous faites souvent les choses à la dernière minute.",
  "Vous aimez débattre de dilemmes éthiques.",
  "Vous préférez généralement être entouré que seul.",
  "Vous vous lassez lorsque la discussion devient très théorique.",
  "En cas de conflit entre faits et sentiments, vous suivez généralement votre cœur.",
  "Vous avez du mal à maintenir un horaire de travail ou d’études cohérent.",
  "Vous remettez rarement en question les choix que vous avez faits.",
  "Vos amis vous décriraient comme enjoué et extraverti.",
  "Vous êtes attiré par diverses formes d’expression créative, comme l’écriture.",
  "Vous fondez généralement vos choix sur des faits objectifs plutôt que sur des impressions émotionnelles.",
  "Vous aimez dresser une liste de choses à faire au quotidien.",
  "Vous manquez rarement de confiance en vous.",
  "Vous évitez de passer des appels téléphoniques.",
  "Vous aimez découvrir des idées et points de vue qui ne vous sont pas familiers.",
  "Il vous est facile de créer des liens avec des personnes que vous venez de rencontrer.",
  "Si vos projets sont interrompus, votre priorité est de reprendre vos activités le plus vite possible.",
  "Vous êtes encore préoccupé par des erreurs commises il y a longtemps.",
  "Les théories sur ce à quoi le monde pourrait ressembler à l’avenir vous intéressent peu.",
  "Vos émotions vous contrôlent plus que vous ne les contrôlez.",
  "Lorsque vous prenez des décisions, vous vous souciez davantage des sentiments des personnes concernées que de l’efficacité logique.",
  "Votre style de travail ressemble plus à des explosions d’énergie spontanées qu’à des efforts réguliers.",
  "Lorsque quelqu’un vous apprécie beaucoup, vous vous demandez combien de temps avant de le décevoir.",
  "Vous aimeriez un travail où vous travaillez seul la plupart du temps.",
  "Vous pensez que réfléchir à des questions philosophiques abstraites est une perte de temps.",
  "Vous êtes plus attiré par les lieux animés que par les lieux calmes.",
  "Si une décision vous semble juste, vous agissez souvent sans exiger plus de preuves.",
  "Vous vous sentez souvent submergé.",
  "Vous accomplissez les tâches méthodiquement, sans sauter d’étapes.",
  "Vous préférez les tâches qui demandent des solutions créatives plutôt que des étapes concrètes.",
  "Vous vous fiez davantage à votre intuition émotionnelle qu’à votre raisonnement logique.",
  "Vous avez du mal à respecter les délais.",
  "Vous êtes confiant que les choses vont s’arranger pour vous."
];

// --- 2. MAPPING CORRIGÉ ---
const mapping = [
  {dim:'E',p:1}, {dim:'N',p:1}, {dim:'F',p:1}, {dim:'J',p:1}, 
  {dim:'A',p:1}, {dim:'I',p:1}, {dim:'J',p:1}, {dim:'F',p:1}, {dim:'J',p:1}, 
  {dim:'A',p:-1}, {dim:'E',p:1}, {dim:'S',p:1}, {dim:'T',p:1}, {dim:'P',p:1}, 
  {dim:'T',p:1}, {dim:'E',p:1}, {dim:'N',p:1}, {dim:'F',p:1}, {dim:'N',p:1}, 
  {dim:'A',p:-1}, {dim:'I',p:1}, {dim:'S',p:1}, {dim:'T',p:1}, {dim:'J',p:1}, 
  {dim:'T',p:1}, {dim:'I',p:1}, {dim:'A',p:-1}, {dim:'T',p:1}, {dim:'P',p:1}, 
  {dim:'N',p:1}, {dim:'E',p:1}, {dim:'S',p:1}, {dim:'F',p:1}, {dim:'P',p:1}, 
  {dim:'J',p:1}, {dim:'E',p:1}, {dim:'N',p:1}, {dim:'T',p:1}, {dim:'J',p:1}, 
  {dim:'A',p:1}, {dim:'I',p:1}, {dim:'N',p:1}, {dim:'E',p:1}, {dim:'J',p:1}, 
  {dim:'A',p:-1}, {dim:'S',p:1}, {dim:'A',p:-1}, {dim:'F',p:1}, {dim:'P',p:1}, 
  {dim:'A',p:-1}, {dim:'I',p:1}, {dim:'S',p:1}, {dim:'E',p:1}, {dim:'F',p:1}, 
  {dim:'A',p:-1}, {dim:'J',p:1}, {dim:'N',p:1}, {dim:'F',p:1}, {dim:'P',p:1}, 
  {dim:'A',p:1}
];

const questions = rawQuestions.map((text, index) => ({
  id: index,
  text: text,
  dimension: mapping[index]?.dim || 'N',
  polarity: mapping[index]?.p || 1
}));

const scaleOptions = [
  { value: 3, label: 'Tout à fait d\'accord' },
  { value: 2, label: 'D\'accord' },
  { value: 1, label: 'Légèrement d\'accord' },
  { value: 0, label: 'Neutre' },
  { value: -1, label: 'Légèrement pas d\'accord' },
  { value: -2, label: 'Pas d\'accord' },
  { value: -3, label: 'Pas du tout d\'accord' }
];

export function TestPage({ onComplete }: TestPageProps) {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  
  // Default selection is NEUTRAL (0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(0);
  const [completed, setCompleted] = useState(false);

  const progress = (Object.keys(answers).length / questions.length) * 100;

  const handleAnswer = (value: number) => {
    setSelectedAnswer(value);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const newAnswers = { ...answers, [questions[currentQuestion].id]: selectedAnswer };
      setAnswers(newAnswers);
      setSelectedAnswer(0); // Reset to Neutral for next question

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setCompleted(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[questions[currentQuestion - 1].id] ?? 0);
    }
  };

  const oppositeOf = (letter: string) => {
    const map: Record<string, string> = { 'E': 'I', 'I': 'E', 'N': 'S', 'S': 'N', 'F': 'T', 'T': 'F', 'J': 'P', 'P': 'J' };
    return map[letter] || letter;
  };

  const calculateResults = () => {
    const scores = { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0, A: 0, Turb: 0 };

    questions.forEach((q) => {
      const val = answers[q.id] || 0;
      
      if (q.dimension === 'A') {
        if (q.polarity === 1) {
           if (val > 0) scores.A += val;
           else scores.Turb += Math.abs(val);
        } else {
           if (val > 0) scores.Turb += val;
           else scores.A += Math.abs(val);
        }
      } else {
        if (val > 0) {
          scores[q.dimension as keyof typeof scores] += val;
        } else {
          scores[oppositeOf(q.dimension) as keyof typeof scores] += Math.abs(val);
        }
      }
    });

    // --- ALGO MGAD (FIXED) ---
    // Si égalité (ex: E=0, I=0), on favorise I, S, F, P pour garantir ISFP par défaut.
    
    // 1. Extraversion vs Introversion (Default: Introvert)
    const first = scores.E > scores.I ? 'E' : 'I'; 
    
    // 2. Intuition vs Sensing (Default: Sensing)
    const second = scores.N > scores.S ? 'N' : 'S';
    
    // 3. Thinking vs Feeling (Default: Feeling)
    // Note: Si scores.F == scores.T, ça donne 'F'
    const third = scores.T > scores.F ? 'T' : 'F';
    
    // 4. Judging vs Prospecting (Default: Prospecting)
    const fourth = scores.J > scores.P ? 'J' : 'P';
    
    // 5. Identity (Default: Turbulent)
    const fifth = scores.A > scores.Turb ? '-A' : '-T';

    // Résultat final
    const type = `${first}${second}${third}${fourth}${fifth}`;

    // --- CALCUL DES POURCENTAGES ---
    const calcPct = (a: number, b: number) => {
       const total = a + b;
       // Si total est 0 (tout neutre), on retourne 50% ou 51% pour forcer l'affichage du coté par défaut
       if (total === 0) return 51; 
       return Math.round((a / total) * 100);
    };

    // Note: On envoie le pourcentage du coté "Droit" (I, S, F, P) pour les barres
    const traitScores = [
      { left: 'Extraverted', right: 'Introverted', score: calcPct(scores.I, scores.E) },
      { left: 'Intuitive', right: 'Observant', score: calcPct(scores.S, scores.N) },
      { left: 'Thinking', right: 'Feeling', score: calcPct(scores.F, scores.T) }, // Si F > T, le score sera > 50%
      { left: 'Judging', right: 'Prospecting', score: calcPct(scores.P, scores.J) },
      { left: 'Assertive', right: 'Turbulent', score: calcPct(scores.Turb, scores.A) }
    ];

    const finalResults: TestResult = {
      typeId: type.toLowerCase(),
      rawScores: scores,
      traitScores: traitScores,
      timestamp: Date.now()
    };

    onComplete(finalResults);
    navigate('/results');
  };

  const question = questions[currentQuestion];
  const hasAnswer = selectedAnswer !== null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          {!completed ? (
            <>
              <span>Question {currentQuestion + 1} sur {questions.length}</span>
              <span>{Math.round(progress)}% Complété</span>
            </>
          ) : (
            <span>Terminé</span>
          )}
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
            style={{ width: `${completed ? 100 : progress}%` }}
          ></div>
        </div>
      </div>

      {!completed ? (
        <>
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-2xl md:text-3xl text-gray-900 text-center mb-12 font-medium">
              {question.text}
            </h2>
            <div className="space-y-3">
              {scaleOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    selectedAnswer === option.value
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">{option.label}</span>
                    {selectedAnswer === option.value && (
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-gray-200 rounded-full hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-gray-600"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Précédent</span>
            </button>
            <button
              onClick={handleNext}
              disabled={!hasAnswer}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:from-purple-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg font-medium"
            >
              <span>{currentQuestion === questions.length - 1 ? 'Terminer' : 'Suivant'}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </>
      ) : (
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Test Terminé !</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Vous avez répondu aux {questions.length} questions. Cliquez ci-dessous pour voir votre résultat.
          </p>
          <button
            onClick={calculateResults}
            className="inline-flex items-center space-x-2 px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:from-purple-600 hover:to-blue-600 transition-all shadow-xl text-lg font-bold"
          >
            <span>Voir le Résultat</span>
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}