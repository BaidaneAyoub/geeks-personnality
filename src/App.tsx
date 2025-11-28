import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { PersonalityTypesPage } from "./pages/PersonalityTypesPage";
import { PersonalityDetailPage } from "./pages/PersonalityDetailPage";
import { TestPage } from "./pages/TestPage";
import { LoginPage } from "./pages/LoginPage";
import { OurInfoPage } from "./pages/OurInfoPage";
import { ResultsPage } from "./pages/ResultsPage";
import { useState } from 'react';

export default function App() {
  // We can keep some state here if needed, or move it to context/local state
  // For now, let's keep testResults in state to pass to ResultsPage, 
  // though in a real app this might go to a store or URL params.
  const [testResults, setTestResults] = useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleTestComplete = (results: any) => {
    setTestResults(results);
    // Navigation will be handled in the component or here via useNavigate if we wrap this
  };

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
          <Header isLoggedIn={isLoggedIn} />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/test" element={<TestPage onComplete={handleTestComplete} />} />
              <Route path="/types" element={<PersonalityTypesPage />} />
              <Route path="/types/:typeId" element={<PersonalityDetailPage />} />
              <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
              <Route path="/info" element={<OurInfoPage />} />
              <Route path="/results" element={
                <ResultsPage
                  results={testResults}
                />
              } />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}