'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function AdminEventsPage() {
  const supabase = createClient();
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    event_date: '',
    event_time: '',
    location: '',
    event_type: 'seminar',
    capacity: '',
  });
  const [mediaFile, setMediaFile] = useState<File | null>(null);

  const handleDrag = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleMediaSelect(files[0]);
    }
  };

  const handleMediaSelect = (file: File) => {
    if (file.type.startsWith('image/')) {
      setMediaFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Event data:', formData);
      console.log('Media:', mediaFile);
      
      setFormData({
        title: '',
        description: '',
        event_date: '',
        event_time: '',
        location: '',
        event_type: 'seminar',
        capacity: '',
      });
      setMediaFile(null);
      setPreviewImage(null);
      setShowForm(false);
      
      alert('Event created successfully!');
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Failed to create event');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Events Management</h1>
              <p className="text-slate-400 mt-1">Create and manage school events and seminars</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 active:scale-95"
            >
              + Create Event
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Create Event Form */}
        {showForm && (
          <div className="mb-8 bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Create New Event</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Event Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:outline-none transition"
                    placeholder="Annual Seminar on Technology"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Event Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.event_date}
                    onChange={(e) => setFormData({...formData, event_date: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Time</label>
                  <input
                    type="time"
                    value={formData.event_time}
                    onChange={(e) => setFormData({...formData, event_time: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:outline-none transition"
                    placeholder="Main Auditorium"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Event Type</label>
                  <select
                    value={formData.event_type}
                    onChange={(e) => setFormData({...formData, event_type: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:outline-none transition"
                  >
                    <option value="seminar">Seminar</option>
                    <option value="workshop">Workshop</option>
                    <option value="lecture">Lecture</option>
                    <option value="examination">Examination</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Capacity</label>
                  <input
                    type="number"
                    value={formData.capacity}
                    onChange={(e) => setFormData({...formData, capacity: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:outline-none transition"
                    placeholder="500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:outline-none transition"
                  placeholder="Event description..."
                  rows={4}
                />
              </div>

              {/* Media Upload */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Event Image/Video</label>
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition ${
                    dragActive
                      ? 'border-purple-500 bg-purple-500/10'
                      : 'border-slate-600 hover:border-slate-500'
                  }`}
                >
                  <input
                    type="file"
                    accept="image/*,video/*"
                    onChange={(e) => e.target.files && handleMediaSelect(e.target.files[0])}
                    className="hidden"
                    id="media-upload"
                  />
                  
                  {previewImage ? (
                    <div className="space-y-4">
                      <img src={previewImage} alt="Preview" className="w-32 h-32 object-cover rounded-lg mx-auto" />
                      <p className="text-slate-300">Click or drag to change media</p>
                    </div>
                  ) : (
                    <label htmlFor="media-upload" className="cursor-pointer">
                      <div className="text-4xl mb-2">🎬</div>
                      <p className="text-slate-300 font-medium">Drag media here or click to upload</p>
                      <p className="text-slate-500 text-sm">Images or videos up to 50MB</p>
                    </label>
                  )}
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50"
                >
                  {loading ? 'Creating...' : 'Create Event'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setFormData({
                      title: '',
                      description: '',
                      event_date: '',
                      event_time: '',
                      location: '',
                      event_type: 'seminar',
                      capacity: '',
                    });
                    setMediaFile(null);
                    setPreviewImage(null);
                  }}
                  className="px-6 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Events List */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Events</h2>
          
          {events.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">📅</div>
              <p className="text-slate-400 text-lg">No events created yet</p>
              <p className="text-slate-500">Click "Create Event" to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {events.map((event, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-white">{event.title}</h3>
                    <p className="text-slate-400 text-sm">{event.event_date}</p>
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
