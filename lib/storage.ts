import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.warn('[Supabase] Missing URL or ANON KEY in environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// ──────────────────────────────────────────────
// Type Definitions (aligned with your tables)
// ──────────────────────────────────────────────

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
  type: string;
  url: string;          // internal storage path
  file_url: string;     // public Supabase URL
  description?: string;
  file_name?: string;
  file_size?: number;
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

// ──────────────────────────────────────────────
// Simple fallback admin auth (localStorage + hardcoded check)
// ──────────────────────────────────────────────

export const verifyAdmin = async (
  email: string,
  password: string
): Promise<boolean> => {
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

// ──────────────────────────────────────────────
// Courses
// ──────────────────────────────────────────────

export async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Failed to fetch courses:', error.message);
    return [];
  }

  return data || [];
}

export async function getCourseById(id: string): Promise<Course | null> {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    console.error('Failed to fetch course by ID:', error.message);
    return null;
  }

  return data;
}

export async function addCourse(
  course: Omit<Course, 'id' | 'created_at' | 'updated_at'>
): Promise<Course | null> {
  const { data, error } = await supabase
    .from('courses')
    .insert([course])
    .select()
    .single();

  if (error) {
    console.error('Failed to add course:', error.message);
    return null;
  }

  return data;
}

export async function updateCourse(
  id: string,
  updates: Partial<Omit<Course, 'id' | 'created_at' | 'updated_at'>>
): Promise<Course | null> {
  const { data, error } = await supabase
    .from('courses')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Failed to update course:', error.message);
    return null;
  }

  return data;
}

export async function deleteCourse(id: string): Promise<boolean> {
  try {
    // Delete related resources first
    const { error: resError } = await supabase.from('resources').delete().eq('course_id', id);
    if (resError) throw resError;

    const { error } = await supabase.from('courses').delete().eq('id', id);
    if (error) throw error;

    return true;
  } catch (err: any) {
    console.error('Failed to delete course:', err?.message);
    return false;
  }
}

// ──────────────────────────────────────────────
// Resources
// ──────────────────────────────────────────────

export async function getResources(): Promise<Resource[]> {
  const { data, error } = await supabase
    .from('resources')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Failed to fetch resources:', error.message);
    return [];
  }

  return data || [];
}

export async function getResourcesByCourse(courseId: string): Promise<Resource[]> {
  const { data, error } = await supabase
    .from('resources')
    .select('*')
    .eq('course_id', courseId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Failed to fetch resources by course:', error.message);
    return [];
  }

  return data || [];
}

export async function addResource(
  resource: Omit<Resource, 'id' | 'created_at' | 'updated_at'>
): Promise<Resource | null> {
  const { data, error } = await supabase
    .from('resources')
    .insert([resource])
    .select()
    .single();

  if (error) {
    console.error('Failed to add resource:', error.message);
    return null;
  }

  return data;
}

export async function updateResource(
  id: string,
  updates: Partial<Omit<Resource, 'id' | 'created_at' | 'updated_at'>>
): Promise<Resource | null> {
  const { data, error } = await supabase
    .from('resources')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Failed to update resource:', error.message);
    return null;
  }

  return data;
}

export async function deleteResource(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('resources')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Failed to delete resource:', error.message);
    return false;
  }

  return true;
}

// ──────────────────────────────────────────────
// News
// ──────────────────────────────────────────────

export async function getNews(): Promise<NewsItem[]> {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .order('date', { ascending: false });

  if (error) {
    console.error('Failed to fetch news:', error.message);
    return [];
  }

  return data || [];
}

export async function addNews(
  news: Omit<NewsItem, 'id' | 'created_at' | 'updated_at'>
): Promise<NewsItem | null> {
  const { data, error } = await supabase
    .from('news')
    .insert([news])
    .select()
    .single();

  if (error) {
    console.error('Failed to add news:', error.message);
    return null;
  }

  return data;
}

export async function updateNews(
  id: string,
  updates: Partial<Omit<NewsItem, 'id' | 'created_at' | 'updated_at'>>
): Promise<NewsItem | null> {
  const { data, error } = await supabase
    .from('news')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Failed to update news:', error.message);
    return null;
  }

  return data;
}

export async function deleteNews(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('news')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Failed to delete news:', error.message);
    return false;
  }

  return true;
}