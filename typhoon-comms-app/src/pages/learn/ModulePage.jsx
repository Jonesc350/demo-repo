import { Link, useParams } from 'react-router-dom';
import { useProgress } from '../../contexts/ProgressContext';
import { getModuleById } from '../../utils/courseDataLoader';

const ModulePage = () => {
  const { moduleId } = useParams();
  const module = getModuleById(moduleId);
  const { getModuleProgress, isLessonComplete } = useProgress();

  if (!module) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-deep-navy mb-4">Module Not Found</h1>
          <Link to="/learn" className="text-raf-blue hover:underline">Return to Learn</Link>
        </div>
      </div>
    );
  }

  const moduleProgress = getModuleProgress(module.id);
  const completedCount = moduleProgress.completedLessons.length;
  const percentComplete = Math.round((completedCount / module.lessons.length) * 100);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm">
        <Link to="/learn" className="text-raf-blue hover:underline">Learn</Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-700">{module.title}</span>
      </div>

      {/* Module Header */}
      <div className="bg-gradient-to-r from-deep-navy to-raf-blue text-white rounded-lg p-8 mb-8">
        <div className="flex items-start space-x-4">
          <div className="w-20 h-20 bg-white text-deep-navy rounded-lg flex items-center justify-center font-bold text-3xl flex-shrink-0">
            {module.number}
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-3">{module.title}</h1>
            <p className="text-xl text-gray-100 mb-4">{module.description}</p>
            <div className="flex items-center space-x-6 text-sm">
              <div>{module.lessons.length} Lessons</div>
              <div>•</div>
              <div>1 Quiz</div>
              <div>•</div>
              <div>{completedCount} / {module.lessons.length} Complete</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Progress</span>
            <span>{percentComplete}%</span>
          </div>
          <div className="w-full bg-white bg-opacity-30 rounded-full h-3">
            <div
              className="bg-white h-3 rounded-full transition-all"
              style={{ width: `${percentComplete}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Lessons List */}
      <div className="space-y-4 mb-8">
        <h2 className="text-2xl font-bold text-deep-navy mb-4">Lessons</h2>
        {module.lessons.map((lesson, index) => {
          const isComplete = isLessonComplete(module.id, lesson.id);
          const isFirst = index === 0;
          const prevComplete = index === 0 || isLessonComplete(module.id, module.lessons[index - 1].id);

          return (
            <div
              key={lesson.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden ${!prevComplete ? 'opacity-60' : ''}`}
            >
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  {/* Lesson Number */}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg ${isComplete ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    {isComplete ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      lesson.number
                    )}
                  </div>

                  {/* Lesson Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-deep-navy mb-1">{lesson.title}</h3>
                    <div className="text-sm text-gray-600">
                      {lesson.objectives && lesson.objectives.length > 0 && (
                        <div>Objectives: {lesson.objectives.length}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                {prevComplete ? (
                  <Link
                    to={`/learn/${module.id}/${lesson.id}`}
                    className="bg-raf-blue text-white px-6 py-2 rounded font-semibold hover:bg-deep-navy transition"
                  >
                    {isComplete ? 'Review' : isFirst || completedCount > 0 ? 'Start' : 'Locked'}
                  </Link>
                ) : (
                  <button
                    disabled
                    className="bg-gray-300 text-gray-600 px-6 py-2 rounded font-semibold cursor-not-allowed"
                  >
                    Locked
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Quiz Section */}
      {module.quiz && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-deep-navy mb-2">Module Quiz</h2>
              <p className="text-gray-600 mb-4">
                Test your knowledge of {module.title}. Pass with {module.quiz.passingScore}% or higher.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div>{module.quiz.questions.length} Questions</div>
                {moduleProgress.quizScore !== null && (
                  <>
                    <div>•</div>
                    <div className={moduleProgress.quizPassed ? 'text-green-600 font-semibold' : 'text-red-600'}>
                      Last Score: {moduleProgress.quizScore}%
                    </div>
                  </>
                )}
                {moduleProgress.quizAttempts > 0 && (
                  <>
                    <div>•</div>
                    <div>Attempts: {moduleProgress.quizAttempts}</div>
                  </>
                )}
              </div>
            </div>
            <Link
              to={`/learn/${module.id}/quiz`}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                completedCount === module.lessons.length
                  ? 'bg-raf-blue text-white hover:bg-deep-navy'
                  : 'bg-gray-300 text-gray-600 cursor-not-allowed pointer-events-none'
              }`}
            >
              {moduleProgress.quizPassed ? 'Retake Quiz' : 'Take Quiz'}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModulePage;
