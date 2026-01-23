import { Link } from 'react-router-dom';
import { useProgress } from '../../contexts/ProgressContext';
import { allModules } from '../../utils/courseDataLoader';

const HomePage = () => {
  const { getOverallProgress, getCurrentLesson } = useProgress();
  const overallProgress = getOverallProgress(allModules);
  const currentLesson = getCurrentLesson(allModules);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-deep-navy to-raf-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Typhoon Communication Systems Training
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Master Link 16, MIDS-JTRS, and tactical data link operations for the Eurofighter Typhoon.
              Comprehensive training from fundamentals to advanced multi-domain operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/learn"
                className="bg-white text-deep-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Start Learning
              </Link>
              <Link
                to="/aircraft-systems"
                className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-deep-navy transition"
              >
                Explore Systems
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      {overallProgress.completedLessons > 0 && (
        <section className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-deep-navy">Your Progress</h2>
                <span className="text-3xl font-bold text-raf-blue">{overallProgress.percentComplete}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div
                  className="bg-raf-blue h-4 rounded-full transition-all duration-500"
                  style={{ width: `${overallProgress.percentComplete}%` }}
                ></div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-deep-navy">{overallProgress.completedLessons}</div>
                  <div className="text-sm text-gray-600">Lessons Complete</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-deep-navy">{overallProgress.passedQuizzes}</div>
                  <div className="text-sm text-gray-600">Quizzes Passed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-deep-navy">{overallProgress.totalModules}</div>
                  <div className="text-sm text-gray-600">Total Modules</div>
                </div>
              </div>
              {currentLesson && !currentLesson.quizPending && (
                <div className="mt-4">
                  <Link
                    to={`/learn/module-${currentLesson.moduleNumber}/lesson-${currentLesson.lessonNumber}`}
                    className="block w-full bg-raf-blue text-white text-center py-3 rounded-lg font-semibold hover:bg-deep-navy transition"
                  >
                    Resume: Module {currentLesson.moduleNumber}, Lesson {currentLesson.lessonNumber}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Quick Access Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-navy mb-8 text-center">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Link 16 / MIDS */}
            <Link to="/aircraft-systems/tactical-data-links" className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition group">
              <div className="w-12 h-12 bg-raf-blue rounded-lg flex items-center justify-center mb-4 group-hover:bg-deep-navy transition">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-deep-navy mb-2">Link 16 / MIDS</h3>
              <p className="text-gray-600 text-sm">Tactical data link fundamentals and MIDS-JTRS operations</p>
            </Link>

            {/* Voice Comms */}
            <Link to="/aircraft-systems/voice-comms" className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition group">
              <div className="w-12 h-12 bg-raf-blue rounded-lg flex items-center justify-center mb-4 group-hover:bg-deep-navy transition">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-deep-navy mb-2">Voice Comms</h3>
              <p className="text-gray-600 text-sm">UHF/VHF, HAVE QUICK, and SATURN secure voice systems</p>
            </Link>

            {/* IFF */}
            <Link to="/aircraft-systems/iff" className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition group">
              <div className="w-12 h-12 bg-raf-blue rounded-lg flex items-center justify-center mb-4 group-hover:bg-deep-navy transition">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-deep-navy mb-2">IFF Mode 5</h3>
              <p className="text-gray-600 text-sm">Identification systems and Link 16 integration</p>
            </Link>

            {/* SATCOM */}
            <Link to="/aircraft-systems" className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition group">
              <div className="w-12 h-12 bg-raf-blue rounded-lg flex items-center justify-center mb-4 group-hover:bg-deep-navy transition">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-deep-navy mb-2">SATCOM & Data</h3>
              <p className="text-gray-600 text-sm">Beyond line-of-sight communications and data systems</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Course Modules Overview */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-navy mb-8 text-center">6-Module Training Course</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allModules.map((module) => {
              const moduleProgress = overallProgress.passedQuizzes >= module.number ? 100 : 0;
              return (
                <div key={module.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-deep-navy text-white rounded-lg flex items-center justify-center font-bold text-xl">
                      {module.number}
                    </div>
                    {moduleProgress === 100 && (
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-deep-navy mb-2">{module.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{module.description}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    {module.lessons.length} Lessons • 1 Quiz
                  </div>
                  <Link
                    to={`/learn/${module.id}`}
                    className="block w-full bg-raf-blue text-white text-center py-2 rounded font-semibold hover:bg-deep-navy transition"
                  >
                    Start Module
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-navy mb-8 text-center">Interactive Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/tools/tdma-calculator" className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-deep-navy mb-2">TDMA Calculator</h3>
              <p className="text-gray-600 text-sm">Calculate Link 16 timing from frame/timeslot values</p>
            </Link>
            <Link to="/reference/j-series" className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-deep-navy mb-2">J-Series Lookup</h3>
              <p className="text-gray-600 text-sm">Searchable reference for common Link 16 messages</p>
            </Link>
            <Link to="/reference/glossary" className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-deep-navy mb-2">Glossary Search</h3>
              <p className="text-gray-600 text-sm">Filter and search acronyms and terminology</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-navy mb-8 text-center">Recent Updates</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-sm text-raf-blue font-semibold mb-2">Latest</div>
              <h3 className="font-bold text-lg mb-2">Complete 6-Module Course Now Available</h3>
              <p className="text-gray-600 text-sm">All modules from fundamentals through advanced topics and future capabilities are now live.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-sm text-raf-blue font-semibold mb-2">Reference</div>
              <h3 className="font-bold text-lg mb-2">J-Series Message Reference Added</h3>
              <p className="text-gray-600 text-sm">Comprehensive quick reference for Link 16 J-Series messages with examples.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-sm text-raf-blue font-semibold mb-2">Interactive</div>
              <h3 className="font-bold text-lg mb-2">TDMA Calculator Tool</h3>
              <p className="text-gray-600 text-sm">Calculate Link 16 timing parameters with the new interactive tool.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
