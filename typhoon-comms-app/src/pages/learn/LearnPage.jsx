import { Link } from 'react-router-dom';
import { useProgress } from '../../contexts/ProgressContext';
import { allModules } from '../../utils/courseDataLoader';

const LearnPage = () => {
  const { getModuleProgress, getOverallProgress } = useProgress();
  const overallProgress = getOverallProgress(allModules);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-deep-navy mb-4">Learn</h1>
        <p className="text-lg text-gray-600">
          Complete 6-module training course covering Typhoon communication systems from fundamentals to advanced topics.
        </p>
      </div>

      {/* Overall Progress */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-deep-navy">Your Progress</h2>
          <span className="text-3xl font-bold text-raf-blue">{overallProgress.percentComplete}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-raf-blue h-4 rounded-full transition-all"
            style={{ width: `${overallProgress.percentComplete}%` }}
          ></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-deep-navy">{overallProgress.completedLessons} / {overallProgress.totalLessons}</div>
            <div className="text-sm text-gray-600">Lessons</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-deep-navy">{overallProgress.passedQuizzes} / {overallProgress.totalModules}</div>
            <div className="text-sm text-gray-600">Quizzes Passed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-deep-navy">
              {overallProgress.passedQuizzes === overallProgress.totalModules ? '✓' : `${overallProgress.passedQuizzes}/${overallProgress.totalModules}`}
            </div>
            <div className="text-sm text-gray-600">Course Status</div>
          </div>
        </div>
      </div>

      {/* Modules */}
      <div className="space-y-6">
        {allModules.map((module) => {
          const moduleProgress = getModuleProgress(module.id);
          const completedCount = moduleProgress.completedLessons.length;
          const totalLessons = module.lessons.length;
          const percentComplete = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

          return (
            <div key={module.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-deep-navy text-white rounded-lg flex items-center justify-center font-bold text-2xl flex-shrink-0">
                      {module.number}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-deep-navy mb-2">{module.title}</h2>
                      <p className="text-gray-600">{module.description}</p>
                    </div>
                  </div>
                  {moduleProgress.quizPassed && (
                    <div className="flex items-center space-x-2 text-green-600">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">Complete</span>
                    </div>
                  )}
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>{completedCount} of {totalLessons} lessons complete</span>
                    <span>{percentComplete}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-raf-blue h-2 rounded-full transition-all"
                      style={{ width: `${percentComplete}%` }}
                    ></div>
                  </div>
                </div>

                {/* Module Info */}
                <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    {module.lessons.length} Lessons
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    1 Quiz
                  </div>
                  {moduleProgress.quizScore !== null && (
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Quiz Score: {moduleProgress.quizScore}%
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <Link
                  to={`/learn/${module.id}`}
                  className="inline-block bg-raf-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-deep-navy transition"
                >
                  {completedCount === 0 ? 'Start Module' : completedCount === totalLessons && moduleProgress.quizPassed ? 'Review Module' : 'Continue Module'}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearnPage;
