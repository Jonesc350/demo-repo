import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useProgress } from '../../contexts/ProgressContext';
import { getModuleById } from '../../utils/courseDataLoader';

const QuizPage = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { saveQuizScore, getModuleProgress } = useProgress();

  const module = getModuleById(moduleId);
  const quiz = module?.quiz;
  const moduleProgress = getModuleProgress(moduleId);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);

  if (!module || !quiz) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-deep-navy mb-4">Quiz Not Found</h1>
          <Link to="/learn" className="text-raf-blue hover:underline">Return to Learn</Link>
        </div>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

  const handleAnswerSelect = (optionIndex) => {
    if (!showFeedback) {
      setSelectedAnswer(optionIndex);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setShowFeedback(true);
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    setAnswers([...answers, {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect
    }]);
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      completeQuiz();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  const completeQuiz = () => {
    const finalAnswers = [...answers, {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect: selectedAnswer === currentQuestion.correctAnswer
    }];

    const correctCount = finalAnswers.filter(a => a.isCorrect).length;
    const score = Math.round((correctCount / quiz.questions.length) * 100);
    const passed = score >= quiz.passingScore;

    saveQuizScore(moduleId, score, passed);
    setQuizComplete(true);
    setAnswers(finalAnswers);
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setAnswers([]);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const correctCount = answers.filter(a => a.isCorrect).length;
    const score = Math.round((correctCount / quiz.questions.length) * 100);
    const passed = score >= quiz.passingScore;

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className={`rounded-lg shadow-lg p-8 ${passed ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-500'}`}>
            <div className="text-center mb-6">
              {passed ? (
                <svg className="w-20 h-20 text-green-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-20 h-20 text-red-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
              <h1 className="text-3xl font-bold mb-2">{passed ? 'Quiz Passed!' : 'Quiz Not Passed'}</h1>
              <p className="text-xl mb-4">Your Score: {score}%</p>
              <p className="text-gray-600">
                {correctCount} correct out of {quiz.questions.length} questions
              </p>
              <p className="text-gray-600">
                Passing score: {quiz.passingScore}%
              </p>
            </div>

            <div className="space-y-4 mb-6">
              {passed ? (
                <p className="text-center text-gray-700">
                  Congratulations! You've successfully completed Module {module.number}.
                </p>
              ) : (
                <p className="text-center text-gray-700">
                  Review the module content and try again. You need {quiz.passingScore}% to pass.
                </p>
              )}
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={handleRetakeQuiz}
                className="bg-raf-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-deep-navy transition"
              >
                Retake Quiz
              </button>
              <Link
                to={`/learn/${moduleId}`}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition"
              >
                Back to Module
              </Link>
              {passed && (
                <Link
                  to="/learn"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  Continue Learning
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="/learn" className="text-raf-blue hover:underline">Learn</Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link to={`/learn/${moduleId}`} className="text-raf-blue hover:underline">
                Module {module.number}
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-700">Quiz</span>
            </div>
            <div className="text-sm font-semibold text-gray-700">
              Question {currentQuestionIndex + 1} of {quiz.questions.length}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{Math.round(((currentQuestionIndex + 1) / quiz.questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-raf-blue h-3 rounded-full transition-all"
                style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-deep-navy mb-6">
              {currentQuestion.question}
            </h2>

            {/* Answer Options */}
            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQuestion.correctAnswer;
                const showCorrect = showFeedback && isCorrect;
                const showIncorrect = showFeedback && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showFeedback}
                    className={`w-full text-left p-4 rounded-lg border-2 transition ${
                      showCorrect
                        ? 'border-green-500 bg-green-50'
                        : showIncorrect
                        ? 'border-red-500 bg-red-50'
                        : isSelected
                        ? 'border-raf-blue bg-blue-50'
                        : 'border-gray-300 hover:border-raf-blue hover:bg-gray-50'
                    } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold mr-4">
                        {String.fromCharCode(65 + index)}.
                      </span>
                      <span className="flex-1">{option}</span>
                      {showCorrect && (
                        <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                      {showIncorrect && (
                        <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className={`p-4 rounded-lg mb-6 ${selectedAnswer === currentQuestion.correctAnswer ? 'bg-green-50 border border-green-300' : 'bg-red-50 border border-red-300'}`}>
                <p className={`font-semibold mb-2 ${selectedAnswer === currentQuestion.correctAnswer ? 'text-green-800' : 'text-red-800'}`}>
                  {selectedAnswer === currentQuestion.correctAnswer ? '✓ Correct!' : '✗ Incorrect'}
                </p>
                <p className="text-gray-700">{currentQuestion.explanation}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
              {!showFeedback ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className={`px-6 py-3 rounded-lg font-semibold transition ${
                    selectedAnswer !== null
                      ? 'bg-raf-blue text-white hover:bg-deep-navy'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="bg-raf-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-deep-navy transition"
                >
                  {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
