// Data storage utilities for browser localStorage

export interface Course {
  id: string;
  title: string;
  department: string;
  description: string;
  code: string;
}

export interface Resource {
  id: string;
  title: string;
  courseId: string;
  type: 'pdf' | 'video' | 'document' | 'link';
  url: string;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
}

export interface AdminUser {
  email: string;
  password: string;
}

const STORAGE_KEYS = {
  COURSES: 'stessa_courses',
  RESOURCES: 'stessa_resources',
  NEWS: 'stessa_news',
  ADMIN_SESSION: 'stessa_admin_session',
};

// Initialize default data
export const initializeStorage = () => {
  if (typeof window === 'undefined') return;

  const defaultCourses: Course[] = [
    {
      id: 'cs101',
      title: 'Introduction to Computer Science',
      department: 'Computer Science',
      description: 'Fundamentals of programming and computer systems',
      code: 'CS101',
    },
    {
      id: 'cs201',
      title: 'Data Structures',
      department: 'Computer Science',
      description: 'Advanced data structures and algorithms',
      code: 'CS201',
    },
    {
      id: 'cs301',
      title: 'Software Engineering',
      department: 'Computer Science',
      description: 'Software development methodologies and practices',
      code: 'CS301',
    },
  ];

  const defaultResources: Resource[] = [
    {
      id: 'res1',
      title: 'Python Basics Tutorial',
      courseId: 'cs101',
      type: 'video',
      url: '#',
      description: 'Learn Python fundamentals',
    },
    {
      id: 'res2',
      title: 'DSA Study Guide',
      courseId: 'cs201',
      type: 'pdf',
      url: '#',
      description: 'Comprehensive data structures guide',
    },
    {
      id: 'res3',
      title: 'Software Engineering Handbook',
      courseId: 'cs301',
      type: 'document',
      url: '#',
      description: 'Best practices and methodologies',
    },
  ];

  const defaultNews: NewsItem[] = [
    {
      id: 'news1',
      title: 'Welcome to STESSA',
      content: 'Welcome to the Science, Technology, Engineering and Skills Services for Africa program. This is your hub for accessing all educational resources and updates.',
      date: new Date().toISOString().split('T')[0],
      author: 'Admin',
    },
  ];

  if (!localStorage.getItem(STORAGE_KEYS.COURSES)) {
    localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(defaultCourses));
  }

  if (!localStorage.getItem(STORAGE_KEYS.RESOURCES)) {
    localStorage.setItem(STORAGE_KEYS.RESOURCES, JSON.stringify(defaultResources));
  }

  if (!localStorage.getItem(STORAGE_KEYS.NEWS)) {
    localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(defaultNews));
  }
};

// Courses
export const getCourses = (): Course[] => {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(STORAGE_KEYS.COURSES);
  return data ? JSON.parse(data) : [];
};

export const getCourseById = (id: string): Course | undefined => {
  return getCourses().find(c => c.id === id);
};

export const addCourse = (course: Course): void => {
  const courses = getCourses();
  courses.push(course);
  localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(courses));
};

export const updateCourse = (id: string, updated: Partial<Course>): void => {
  const courses = getCourses();
  const index = courses.findIndex(c => c.id === id);
  if (index !== -1) {
    courses[index] = { ...courses[index], ...updated };
    localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(courses));
  }
};

export const deleteCourse = (id: string): void => {
  let courses = getCourses();
  courses = courses.filter(c => c.id !== id);
  localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(courses));
  
  // Also delete associated resources
  deleteResourcesByCourse(id);
};

// Resources
export const getResources = (): Resource[] => {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(STORAGE_KEYS.RESOURCES);
  return data ? JSON.parse(data) : [];
};

export const getResourcesByCourse = (courseId: string): Resource[] => {
  return getResources().filter(r => r.courseId === courseId);
};

export const addResource = (resource: Resource): void => {
  const resources = getResources();
  resources.push(resource);
  localStorage.setItem(STORAGE_KEYS.RESOURCES, JSON.stringify(resources));
};

export const updateResource = (id: string, updated: Partial<Resource>): void => {
  const resources = getResources();
  const index = resources.findIndex(r => r.id === id);
  if (index !== -1) {
    resources[index] = { ...resources[index], ...updated };
    localStorage.setItem(STORAGE_KEYS.RESOURCES, JSON.stringify(resources));
  }
};

export const deleteResource = (id: string): void => {
  let resources = getResources();
  resources = resources.filter(r => r.id !== id);
  localStorage.setItem(STORAGE_KEYS.RESOURCES, JSON.stringify(resources));
};

export const deleteResourcesByCourse = (courseId: string): void => {
  let resources = getResources();
  resources = resources.filter(r => r.courseId !== courseId);
  localStorage.setItem(STORAGE_KEYS.RESOURCES, JSON.stringify(resources));
};

// News
export const getNews = (): NewsItem[] => {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(STORAGE_KEYS.NEWS);
  return data ? JSON.parse(data) : [];
};

export const addNews = (news: NewsItem): void => {
  const items = getNews();
  items.unshift(news);
  localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(items));
};

export const updateNews = (id: string, updated: Partial<NewsItem>): void => {
  const items = getNews();
  const index = items.findIndex(n => n.id === id);
  if (index !== -1) {
    items[index] = { ...items[index], ...updated };
    localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(items));
  }
};

export const deleteNews = (id: string): void => {
  let items = getNews();
  items = items.filter(n => n.id !== id);
  localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(items));
};

// Admin
const ADMIN_EMAIL = 'stessaedu@gmail.com';
const ADMIN_PASSWORD = 'admin123stessa';

export const verifyAdmin = (email: string, password: string): boolean => {
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
};

export const setAdminSession = (token: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.ADMIN_SESSION, token);
};

export const getAdminSession = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEYS.ADMIN_SESSION);
};

export const clearAdminSession = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEYS.ADMIN_SESSION);
};

export const isAdminLoggedIn = (): boolean => {
  return !!getAdminSession();
};
