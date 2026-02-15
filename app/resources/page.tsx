'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Navigation } from '@/components/navigation';
import { getResources, getCourses, Resource, Course, isAdminLoggedIn } from '@/lib/storage';
import Link from 'next/link';

export default function ResourcesPage() {
  const searchParams = useSearchParams();
  const courseFilter = searchParams.get('course');

  const [resources, setResources] = useState<Resource[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>(courseFilter || '');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setResources(getResources());
    setCourses(getCourses());
    setIsAdmin(isAdminLoggedIn());
  }, []);

  const filteredResources = resources.filter(resource => {
    const matchesCourse = !selectedCourse || resource.courseId === selectedCourse;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCourse && matchesSearch;
  });

  const getCourseName = (courseId: string) => {
    return courses.find(c => c.id === courseId)?.title || 'Unknown Course';
  };

  const getResourceIcon = (type: string) => {
    const icons: { [key: string]: string } = {
      pdf: '📄',
      video: '🎥',
      document: '📝',
      link: '🔗',
    };
    return icons[type] || '📎';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Resources</h1>
          <p className="text-lg opacity-90">
            Access course materials, videos, and educational content
          </p>
        </div>
      </section>

      {/* Filters and Content */}
      <section className="py-12 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          {/* Search and Filter */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <input
              type="text"
              placeholder="Search resources by title or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-3 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="px-4 py-3 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Courses</option>
              {courses.map(course => (
                <option key={course.id} value={course.id}>
                  {course.code} - {course.title}
                </option>
              ))}
            </select>
          </div>

          {/* Resources List */}
          {filteredResources.length > 0 ? (
            <div className="space-y-4">
              {filteredResources.map((resource) => (
                <div key={resource.id} className="resource-card">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{getResourceIcon(resource.type)}</span>
                        <div>
                          <h3 className="text-lg font-bold text-primary">{resource.title}</h3>
                          <p className="text-sm text-foreground/60">{getCourseName(resource.courseId)}</p>
                        </div>
                      </div>
                      <p className="text-foreground/80 mb-4">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-muted text-foreground px-2 py-1 rounded capitalize">
                          {resource.type}
                        </span>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-semibold hover:text-accent transition"
                        >
                          Access Resource →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-foreground/60">
                {resources.length === 0 ? 'No resources available yet.' : 'No resources match your search.'}
              </p>
            </div>
          )}

          {/* Total Count */}
          <div className="mt-8 text-center text-foreground/60">
            <p>Showing {filteredResources.length} of {resources.length} resources</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="opacity-80">
            &copy; 2024 LASU STESSA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
