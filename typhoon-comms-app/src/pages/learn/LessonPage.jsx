import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useProgress } from '../../contexts/ProgressContext';
import { getModuleById, getLessonById, getNextLesson, getPreviousLesson } from '../../utils/courseDataLoader';
import ReactMarkdown from 'react-markdown';

const LessonPage = () => {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  const { markLessonComplete, isLessonComplete } = useProgress();
  const [showObjectives, setShowObjectives] = useState(true);
  const [showTakeaways, setShowTakeaways] = useState(false);

  const module = getModuleById(moduleId);
  const lesson = getLessonById(moduleId, lessonId);
  const isComplete = isLessonComplete(moduleId, lessonId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lessonId]);

  if (!module || !lesson) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-deep-navy mb-4">Lesson Not Found</h1>
          <Link to="/learn" className="text-raf-blue hover:underline">Return to Learn</Link>
        </div>
      </div>
    );
  }

  const handleComplete = () => {
    markLessonComplete(moduleId, lessonId);
    setShowTakeaways(true);
  };

  const handleNext = () => {
    const next = getNextLesson(moduleId, lessonId);
    if (next) {
      if (next.quiz) {
        navigate(`/learn/${next.moduleId}/quiz`);
      } else if (next.lesson) {
        navigate(`/learn/${next.moduleId}/${next.lesson.id}`);
      }
    } else {
      navigate('/learn');
    }
  };

  const previous = getPreviousLesson(moduleId, lessonId);
  const next = getNextLesson(moduleId, lessonId);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-16 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="/learn" className="text-raf-blue hover:underline">Learn</Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link to={`/learn/${moduleId}`} className="text-raf-blue hover:underline">
                Module {module.number}
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-700">Lesson {lesson.number}</span>
            </div>
            {isComplete && (
              <div className="flex items-center text-green-600 text-sm font-semibold">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Complete
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Lesson Header */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-deep-navy text-white rounded-lg flex items-center justify-center font-bold text-2xl flex-shrink-0">
                {lesson.number}
              </div>
              <div>
                <div className="text-sm text-raf-blue font-semibold mb-1">
                  Module {module.number}: {module.title}
                </div>
                <h1 className="text-3xl font-bold text-deep-navy">{lesson.title}</h1>
              </div>
            </div>

            {/* Learning Objectives */}
            {lesson.objectives && lesson.objectives.length > 0 && (
              <div className="border-l-4 border-raf-blue bg-blue-50 p-4 rounded">
                <button
                  onClick={() => setShowObjectives(!showObjectives)}
                  className="flex items-center justify-between w-full text-left font-semibold text-deep-navy mb-2"
                >
                  <span>Learning Objectives</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${showObjectives ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showObjectives && (
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {lesson.objectives.map((obj, idx) => (
                      <li key={idx}>{obj}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          {/* Lesson Content */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown>{lesson.content}</ReactMarkdown>
            </div>
          </div>

          {/* Key Takeaways */}
          {lesson.keyTakeaways && lesson.keyTakeaways.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-8 mb-6">
              <button
                onClick={() => setShowTakeaways(!showTakeaways)}
                className="flex items-center justify-between w-full text-left font-bold text-xl text-deep-navy mb-4"
              >
                <span>Key Takeaways</span>
                <svg
                  className={`w-6 h-6 transition-transform ${showTakeaways ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showTakeaways && (
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {lesson.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="leading-relaxed">{takeaway}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                {previous ? (
                  <Link
                    to={`/learn/${previous.moduleId}/${previous.lesson.id}`}
                    className="flex items-center text-raf-blue hover:text-deep-navy font-semibold"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous Lesson
                  </Link>
                ) : (
                  <Link
                    to={`/learn/${moduleId}`}
                    className="flex items-center text-gray-500 hover:text-gray-700 font-semibold"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Module
                  </Link>
                )}
              </div>

              <div className="flex items-center space-x-4">
                {!isComplete && (
                  <button
                    onClick={handleComplete}
                    className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Mark Complete
                  </button>
                )}

                {next && (
                  <button
                    onClick={handleNext}
                    className="bg-raf-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-deep-navy transition flex items-center"
                  >
                    {next.quiz ? 'Take Quiz' : 'Next Lesson'}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}

                {!next && isComplete && (
                  <Link
                    to={`/learn/${moduleId}`}
                    className="bg-raf-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-deep-navy transition"
                  >
                    Back to Module
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
