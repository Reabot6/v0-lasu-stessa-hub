import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface Course {
  id: string;
  title: string;
  department: string;
  description: string;
  code: string;
  created_at?: string;
  updated_at?: string;
}

export interface Resource {
  id: string;
  title: string;
  course_id: string;
  type: 'pdf' | 'video' | 'document' | 'link';
  url: string;
  description: string;
  created_at?: string;
  updated_at?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  created_at?: string;
  updated_at?: string;
}

// Initialize function - no longer needed for Supabase but kept for compatibility
export const initializeStorage = () => {
  console.log('[v0] Storage initialized with Supabase');
};

// ============== COURSES ==============

export const getCourses = async (): Promise<Course[]> => {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return (data as Course[]) || [];
  } catch (error) {
    console.error('[v0] Error fetching courses:', error);
    return [];
  }
};

export const getCourseById = async (id: string): Promise<Course | undefined> => {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data as Course;
  } catch (error) {
    console.error('[v0] Error fetching course:', error);
    return undefined;
  }
};

export const addCourse = async (course: Omit<Course, 'id' | 'created_at' | 'updated_at'>): Promise<Course | null> => {
  try {
    const { data, error } = await supabase
      .from('courses')
      .insert([course])
      .select()
      .single();

    if (error) throw error;
    return data as Course;
  } catch (error) {
    console.error('[v0] Error adding course:', error);
    return null;
  }
};

export const updateCourse = async (id: string, updates: Partial<Course>): Promise<Course | null> => {
  try {
    const { data, error } = await supabase
      .from('courses')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data as Course;
  } catch (error) {
    console.error('[v0] Error updating course:', error);
    return null;
  }
};

export const deleteCourse = async (id: string): Promise<boolean> => {
  try {
    const { error: resourceError } = await supabase
      .from('resources')
      .delete()
      .eq('course_id', id);

    if (resourceError) throw resourceError;

    const { error } = await supabase
      .from('courses')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('[v0] Error deleting course:', error);
    return false;
  }
};

// ============== RESOURCES ==============

export const getResources = async (): Promise<Resource[]> => {
  try {
    const { data, error } = await supabase
      .from('resources')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return (data as Resource[]) || [];
  } catch (error) {
    console.error('[v0] Error fetching resources:', error);
    return [];
  }
};

export const getResourcesByCourse = async (courseId: string): Promise<Resource[]> => {
  try {
    const { data, error } = await supabase
      .from('resources')
      .select('*')
      .eq('course_id', courseId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return (data as Resource[]) || [];
  } catch (error) {
    console.error('[v0] Error fetching resources by course:', error);
    return [];
  }
};

export const addResource = async (resource: Omit<Resource, 'id' | 'created_at' | 'updated_at'>): Promise<Resource | null> => {
  try {
    const { data, error } = await supabase
      .from('resources')
      .insert([resource])
      .select()
      .single();

    if (error) throw error;
    return data as Resource;
  } catch (error) {
    console.error('[v0] Error adding resource:', error);
    return null;
  }
};

export const updateResource = async (id: string, updates: Partial<Resource>): Promise<Resource | null> => {
  try {
    const { data, error } = await supabase
      .from('resources')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data as Resource;
  } catch (error) {
    console.error('[v0] Error updating resource:', error);
    return null;
  }
};

export const deleteResource = async (id: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('resources')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('[v0] Error deleting resource:', error);
    return false;
  }
};

export const deleteResourcesByCourse = async (courseId: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('resources')
      .delete()
      .eq('course_id', courseId);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('[v0] Error deleting resources by course:', error);
    return false;
  }
};

// ============== NEWS ==============

export const getNews = async (): Promise<NewsItem[]> => {
  try {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('date', { ascending: false });

    if (error) throw error;
    return (data as NewsItem[]) || [];
  } catch (error) {
    console.error('[v0] Error fetching news:', error);
    return [];
  }
};

export const addNews = async (news: Omit<NewsItem, 'id' | 'created_at' | 'updated_at'>): Promise<NewsItem | null> => {
  try {
    const { data, error } = await supabase
      .from('news')
      .insert([news])
      .select()
      .single();

    if (error) throw error;
    return data as NewsItem;
  } catch (error) {
    console.error('[v0] Error adding news:', error);
    return null;
  }
};

export const updateNews = async (id: string, updates: Partial<NewsItem>): Promise<NewsItem | null> => {
  try {
    const { data, error } = await supabase
      .from('news')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data as NewsItem;
  } catch (error) {
    console.error('[v0] Error updating news:', error);
    return null;
  }
};

export const deleteNews = async (id: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('news')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('[v0] Error deleting news:', error);
    return false;
  }
};

// ============== ADMIN ==============

export const verifyAdmin = async (email: string, password: string): Promise<boolean> => {
  // For client-side verification, we'll use a simple check
  // In production, this should be done server-side
  if (email === 'stessaedu@gmail.com' && password === 'admin123stessa') {
    return true;
  }
  return false;
};

export const setAdminSession = (token: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('stessa_admin_session', token);
};

export const getAdminSession = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('stessa_admin_session');
};

export const clearAdminSession = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('stessa_admin_session');
};

export const isAdminLoggedIn = (): boolean => {
  return !!getAdminSession();
};
