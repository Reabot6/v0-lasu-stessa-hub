'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Navigation } from '@/components/navigation';
import {
  getCourses, getResources, getNews, isAdminLoggedIn,
  Course, Resource, NewsItem,
  addCourse, updateCourse, deleteCourse,
  addResource, updateResource, deleteResource,
  addNews, updateNews, deleteNews,
} from '@/lib/storage';

type Tab = 'courses' | 'resources' | 'news';

export default function AdminPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>('courses');
  const [courses, setCourses] = useState<Course[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);

  const [editingId, setEditingId] = useState<string | null>(null);

  // Course form
  const [courseForm, setCourseForm] = useState<Partial<Course>>({});
  
  // Resource form
  const [resourceForm, setResourceForm] = useState<Partial<Resource>>({});
  
  // News form
  const [newsForm, setNewsForm] = useState<Partial<NewsItem>>({});

  useEffect(() => {
    if (!isAdminLoggedIn()) {
      router.push('/admin/login');
      return;
    }

    loadData();
  }, [router]);

  const loadData = () => {
    setCourses(getCourses());
    setResources(getResources());
    setNews(getNews());
  };

  // COURSES
  const handleAddCourse = () => {
    if (!courseForm.title || !courseForm.code || !courseForm.department) {
      alert('Please fill in all required fields');
      return;
    }

    const newCourse: Course = {
      id: editingId || `course_${Date.now()}`,
      title: courseForm.title || '',
      code: courseForm.code || '',
      department: courseForm.department || '',
      description: courseForm.description || '',
    };

    if (editingId) {
      updateCourse(editingId, newCourse);
    } else {
      addCourse(newCourse);
    }

    setCourseForm({});
    setEditingId(null);
    loadData();
  };

  const handleEditCourse = (course: Course) => {
    setCourseForm(course);
    setEditingId(course.id);
  };

  const handleDeleteCourse = (id: string) => {
    if (confirm('Are you sure you want to delete this course?')) {
      deleteCourse(id);
      loadData();
    }
  };

  // RESOURCES
  const handleAddResource = () => {
    if (!resourceForm.title || !resourceForm.courseId || !resourceForm.type) {
      alert('Please fill in all required fields');
      return;
    }

    const newResource: Resource = {
      id: editingId || `resource_${Date.now()}`,
      title: resourceForm.title || '',
      courseId: resourceForm.courseId || '',
      type: resourceForm.type as 'pdf' | 'video' | 'document' | 'link',
      url: resourceForm.url || '',
      description: resourceForm.description || '',
    };

    if (editingId) {
      updateResource(editingId, newResource);
    } else {
      addResource(newResource);
    }

    setResourceForm({});
    setEditingId(null);
    loadData();
  };

  const handleEditResource = (resource: Resource) => {
    setResourceForm(resource);
    setEditingId(resource.id);
  };

  const handleDeleteResource = (id: string) => {
    if (confirm('Are you sure you want to delete this resource?')) {
      deleteResource(id);
      loadData();
    }
  };

  // NEWS
  const handleAddNews = () => {
    if (!newsForm.title || !newsForm.content) {
      alert('Please fill in all required fields');
      return;
    }

    const newNewsItem: NewsItem = {
      id: editingId || `news_${Date.now()}`,
      title: newsForm.title || '',
      content: newsForm.content || '',
      date: newsForm.date || new Date().toISOString().split('T')[0],
      author: newsForm.author || 'Admin',
    };

    if (editingId) {
      updateNews(editingId, newNewsItem);
    } else {
      addNews(newNewsItem);
    }

    setNewsForm({});
    setEditingId(null);
    loadData();
  };

  const handleEditNews = (item: NewsItem) => {
    setNewsForm(item);
    setEditingId(item.id);
  };

  const handleDeleteNews = (id: string) => {
    if (confirm('Are you sure you want to delete this news item?')) {
      deleteNews(id);
      loadData();
    }
  };

  const handleCancel = () => {
    setCourseForm({});
    setResourceForm({});
    setNewsForm({});
    setEditingId(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="opacity-90">Manage courses, resources, and news</p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 flex">
          {(['courses', 'resources', 'news'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                handleCancel();
              }}
              className={`px-6 py-4 font-semibold capitalize transition ${
                activeTab === tab
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="py-8 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          {/* COURSES TAB */}
          {activeTab === 'courses' && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="resource-card h-fit">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  {editingId ? 'Edit Course' : 'Add Course'}
                </h2>
                <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); handleAddCourse(); }}>
                  <input
                    type="text"
                    placeholder="Course Title"
                    value={courseForm.title || ''}
                    onChange={(e) => setCourseForm({ ...courseForm, title: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    placeholder="Course Code"
                    value={courseForm.code || ''}
                    onChange={(e) => setCourseForm({ ...courseForm, code: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    placeholder="Department"
                    value={courseForm.department || ''}
                    onChange={(e) => setCourseForm({ ...courseForm, department: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    placeholder="Description"
                    value={courseForm.description || ''}
                    onChange={(e) => setCourseForm({ ...courseForm, description: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 border border-border rounded bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="flex gap-2">
                    <button type="submit" className="flex-1 btn-primary text-sm">
                      {editingId ? 'Update' : 'Add'}
                    </button>
                    {editingId && (
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="flex-1 btn-secondary text-sm"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* List */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-primary mb-4">Courses ({courses.length})</h2>
                <div className="space-y-2">
                  {courses.map(course => (
                    <div key={course.id} className="resource-card p-4 flex justify-between items-start gap-3">
                      <div className="flex-1">
                        <h3 className="font-bold">{course.title}</h3>
                        <p className="text-sm text-foreground/60">{course.code} • {course.department}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditCourse(course)}
                          className="text-primary text-sm font-semibold hover:text-accent"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteCourse(course.id)}
                          className="text-destructive text-sm font-semibold hover:text-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* RESOURCES TAB */}
          {activeTab === 'resources' && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="resource-card h-fit">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  {editingId ? 'Edit Resource' : 'Add Resource'}
                </h2>
                <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); handleAddResource(); }}>
                  <input
                    type="text"
                    placeholder="Resource Title"
                    value={resourceForm.title || ''}
                    onChange={(e) => setResourceForm({ ...resourceForm, title: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <select
                    value={resourceForm.courseId || ''}
                    onChange={(e) => setResourceForm({ ...resourceForm, courseId: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select Course</option>
                    {courses.map(course => (
                      <option key={course.id} value={course.id}>{course.code}</option>
                    ))}
                  </select>
                  <select
                    value={resourceForm.type || ''}
                    onChange={(e) => setResourceForm({ ...resourceForm, type: e.target.value as any })}
                    className="w-full px-3 py-2 border border-border rounded bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select Type</option>
                    <option value="pdf">PDF</option>
                    <option value="video">Video</option>
                    <option value="document">Document</option>
                    <option value="link">Link</option>
                  </select>
                  <input
                    type="text"
                    placeholder="URL"
                    value={resourceForm.url || ''}
                    onChange={(e) => setResourceForm({ ...resourceForm, url: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    placeholder="Description"
                    value={resourceForm.description || ''}
                    onChange={(e) => setResourceForm({ ...resourceForm, description: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-border rounded bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="flex gap-2">
                    <button type="submit" className="flex-1 btn-primary text-sm">
                      {editingId ? 'Update' : 'Add'}
                    </button>
                    {editingId && (
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="flex-1 btn-secondary text-sm"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* List */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-primary mb-4">Resources ({resources.length})</h2>
                <div className="space-y-2">
                  {resources.map(resource => (
                    <div key={resource.id} className="resource-card p-4 flex justify-between items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold truncate">{resource.title}</h3>
                        <p className="text-sm text-foreground/60">{resource.type} • {resource.courseId}</p>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <button
                          onClick={() => handleEditResource(resource)}
                          className="text-primary text-sm font-semibold hover:text-accent"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteResource(resource.id)}
                          className="text-destructive text-sm font-semibold hover:text-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* NEWS TAB */}
          {activeTab === 'news' && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="resource-card h-fit">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  {editingId ? 'Edit News' : 'Add News'}
                </h2>
                <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); handleAddNews(); }}>
                  <input
                    type="text"
                    placeholder="News Title"
                    value={newsForm.title || ''}
                    onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    placeholder="Content"
                    value={newsForm.content || ''}
                    onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })}
                    rows={5}
                    className="w-full px-3 py-2 border border-border rounded bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="date"
                    value={newsForm.date || new Date().toISOString().split('T')[0]}
                    onChange={(e) => setNewsForm({ ...newsForm, date: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    placeholder="Author"
                    value={newsForm.author || 'Admin'}
                    onChange={(e) => setNewsForm({ ...newsForm, author: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="flex gap-2">
                    <button type="submit" className="flex-1 btn-primary text-sm">
                      {editingId ? 'Update' : 'Add'}
                    </button>
                    {editingId && (
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="flex-1 btn-secondary text-sm"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* List */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-primary mb-4">News Items ({news.length})</h2>
                <div className="space-y-2">
                  {news.map(item => (
                    <div key={item.id} className="resource-card p-4 flex justify-between items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold truncate">{item.title}</h3>
                        <p className="text-sm text-foreground/60">{item.date} • {item.author}</p>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <button
                          onClick={() => handleEditNews(item)}
                          className="text-primary text-sm font-semibold hover:text-accent"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteNews(item.id)}
                          className="text-destructive text-sm font-semibold hover:text-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="opacity-80">
            &copy; 2024 LASU STESSA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
