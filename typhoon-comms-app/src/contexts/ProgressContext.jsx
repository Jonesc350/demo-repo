import { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('courseProgress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('courseProgress', JSON.stringify(progress));
  }, [progress]);

  const markLessonComplete = (moduleId, lessonId) => {
    setProgress(prev => {
      const moduleProgress = prev[moduleId] || {
        completedLessons: [],
        quizScore: null,
        quizPassed: false
      };

      if (!moduleProgress.completedLessons.includes(lessonId)) {
        return {
          ...prev,
          [moduleId]: {
            ...moduleProgress,
            completedLessons: [...moduleProgress.completedLessons, lessonId]
          }
        };
      }
      return prev;
    });
  };

  const isLessonComplete = (moduleId, lessonId) => {
    return progress[moduleId]?.completedLessons?.includes(lessonId) || false;
  };

  const saveQuizScore = (moduleId, score, passed) => {
    setProgress(prev => ({
      ...prev,
      [moduleId]: {
        ...(prev[moduleId] || { completedLessons: [] }),
        quizScore: score,
        quizPassed: passed,
        quizAttempts: (prev[moduleId]?.quizAttempts || 0) + 1,
        lastQuizDate: new Date().toISOString()
      }
    }));
  };

  const getModuleProgress = (moduleId) => {
    return progress[moduleId] || {
      completedLessons: [],
      quizScore: null,
      quizPassed: false,
      quizAttempts: 0
    };
  };

  const getOverallProgress = (modules) => {
    let totalLessons = 0;
    let completedLessons = 0;
    let passedQuizzes = 0;

    modules.forEach(module => {
      totalLessons += module.lessons.length;
      const moduleProgress = progress[module.id] || { completedLessons: [], quizPassed: false };
      completedLessons += moduleProgress.completedLessons.length;
      if (moduleProgress.quizPassed) passedQuizzes++;
    });

    return {
      totalModules: modules.length,
      totalLessons,
      completedLessons,
      passedQuizzes,
      percentComplete: totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0
    };
  };

  const clearProgress = () => {
    setProgress({});
    localStorage.removeItem('courseProgress');
  };

  const getCurrentLesson = (modules) => {
    // Find the first incomplete lesson
    for (const module of modules) {
      for (const lesson of module.lessons) {
        if (!isLessonComplete(module.id, lesson.id)) {
          return {
            moduleId: module.id,
            lessonId: lesson.id,
            moduleNumber: module.number,
            lessonNumber: lesson.number
          };
        }
      }
      // If all lessons complete but quiz not passed
      const moduleProgress = getModuleProgress(module.id);
      if (!moduleProgress.quizPassed) {
        return {
          moduleId: module.id,
          quizPending: true,
          moduleNumber: module.number
        };
      }
    }
    // All complete
    return null;
  };

  const value = {
    progress,
    markLessonComplete,
    isLessonComplete,
    saveQuizScore,
    getModuleProgress,
    getOverallProgress,
    clearProgress,
    getCurrentLesson
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};
