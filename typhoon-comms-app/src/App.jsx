import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './contexts/ProgressContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/home/HomePage';
import LearnPage from './pages/learn/LearnPage';
import ModulePage from './pages/learn/ModulePage';
import LessonPage from './pages/learn/LessonPage';
import QuizPage from './pages/learn/QuizPage';
import AircraftSystemsPage from './pages/aircraft-systems/AircraftSystemsPage';
import GlossaryPage from './pages/reference/GlossaryPage';
import JSeriesPage from './pages/reference/JSeriesPage';
import ResourcesPage from './pages/resources/ResourcesPage';

function App() {
  return (
    <Router>
      <ProgressProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/learn" element={<LearnPage />} />
              <Route path="/learn/:moduleId" element={<ModulePage />} />
              <Route path="/learn/:moduleId/:lessonId" element={<LessonPage />} />
              <Route path="/learn/:moduleId/quiz" element={<QuizPage />} />
              <Route path="/aircraft-systems" element={<AircraftSystemsPage />} />
              <Route path="/aircraft-systems/:section" element={<AircraftSystemsPage />} />
              <Route path="/reference/glossary" element={<GlossaryPage />} />
              <Route path="/reference/j-series" element={<JSeriesPage />} />
              <Route path="/reference/tdma" element={<GlossaryPage />} />
              <Route path="/reference/track-management" element={<GlossaryPage />} />
              <Route path="/reference/troubleshooting" element={<GlossaryPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ProgressProvider>
    </Router>
  );
}

export default App;
