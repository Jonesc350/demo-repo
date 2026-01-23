// This file merges all course data modules

// Import modules 1-3
import { modules as modules13 } from '../data/courseData';
// Import module 4
import { additionalModules as module4 } from '../data/courseDataPart2';
// Import modules 5-6
import { modules56 } from '../data/modules56';

// Merge all modules
export const allModules = [
  ...modules13,
  ...module4,
  ...modules56
];

// Helper functions
export const getModuleById = (moduleId) => {
  return allModules.find(m => m.id === moduleId);
};

export const getLessonById = (moduleId, lessonId) => {
  const module = getModuleById(moduleId);
  return module?.lessons.find(l => l.id === lessonId);
};

export const getQuizByModuleId = (moduleId) => {
  const module = getModuleById(moduleId);
  return module?.quiz;
};

export const getNextLesson = (moduleId, lessonId) => {
  const module = getModuleById(moduleId);
  if (!module) return null;

  const currentIndex = module.lessons.findIndex(l => l.id === lessonId);
  if (currentIndex === -1) return null;

  // Check if there's a next lesson in current module
  if (currentIndex < module.lessons.length - 1) {
    return {
      moduleId: module.id,
      lesson: module.lessons[currentIndex + 1]
    };
  }

  // Check if there's a quiz for this module
  if (module.quiz) {
    return {
      moduleId: module.id,
      quiz: true
    };
  }

  // Move to next module
  const nextModule = allModules.find(m => m.number === module.number + 1);
  if (nextModule && nextModule.lessons.length > 0) {
    return {
      moduleId: nextModule.id,
      lesson: nextModule.lessons[0]
    };
  }

  return null; // Course complete
};

export const getPreviousLesson = (moduleId, lessonId) => {
  const module = getModuleById(moduleId);
  if (!module) return null;

  const currentIndex = module.lessons.findIndex(l => l.id === lessonId);
  if (currentIndex === -1) return null;

  // Check if there's a previous lesson in current module
  if (currentIndex > 0) {
    return {
      moduleId: module.id,
      lesson: module.lessons[currentIndex - 1]
    };
  }

  // Move to previous module
  const prevModule = allModules.find(m => m.number === module.number - 1);
  if (prevModule && prevModule.lessons.length > 0) {
    return {
      moduleId: prevModule.id,
      lesson: prevModule.lessons[prevModule.lessons.length - 1]
    };
  }

  return null; // At beginning
};
