'use client';

import { useState } from 'react';

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    code: '',
    description: '',
    credits: '3',
    faculty: '',
    semester: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Save course
    console.log('Course data:', formData);
    setFormData({ title: '', code: '', description: '', credits: '3', faculty: '', semester: '' });
    setShowForm(false);
    alert('Course created successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Courses Management</h1>
              <p className="text-slate-400 mt-1">Create and manage academic courses</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 active:scale-95"
            >
              + Add Course
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {showForm && (
          <div className="mb-8 bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Add New Course</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Course Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-green-500 focus:outline-none transition"
                    placeholder="Introduction to Computer Science"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Course Code *</label>
                  <input
                    type="text"
                    required
                    value={formData.code}
                    onChange={(e) => setFormData({...formData, code: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-green-500 focus:outline-none transition"
                    placeholder="CS101"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Credits</label>
                  <input
                    type="number"
                    value={formData.credits}
                    onChange={(e) => setFormData({...formData, credits: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-green-500 focus:outline-none transition"
                    min="1"
                    max="6"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Faculty</label>
                  <input
                    type="text"
                    value={formData.faculty}
                    onChange={(e) => setFormData({...formData, faculty: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-green-500 focus:outline-none transition"
                    placeholder="Dr. John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Semester</label>
                  <select
                    value={formData.semester}
                    onChange={(e) => setFormData({...formData, semester: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-green-500 focus:outline-none transition"
                  >
                    <option value="">Select Semester</option>
                    <option value="1st">1st Semester</option>
                    <option value="2nd">2nd Semester</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-green-500 focus:outline-none transition"
                  placeholder="Course description..."
                  rows={4}
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Add Course
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Courses</h2>
          
          {courses.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">📚</div>
              <p className="text-slate-400 text-lg">No courses created yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {courses.map((course, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-700 rounded-lg p-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-white">{course.title}</h3>
                    <p className="text-slate-400 text-sm">{course.code}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition">Edit</button>
                    <button className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
