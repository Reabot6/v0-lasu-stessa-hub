'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function AdminFacultyPage() {
  const supabase = createClient();
  const [faculty, setFaculty] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialization: '',
    office_location: '',
    office_hours: '',
    bio: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

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
      handleImageSelect(files[0]);
    }
  };

  const handleImageSelect = (file: File) => {
    if (file.type.startsWith('image/')) {
      setImageFile(file);
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
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        alert('You must be logged in to add faculty');
        setLoading(false);
        return;
      }

      let imageUrl = null;

      // Upload image if provided
      if (imageFile) {
        const fileName = `faculty-${Date.now()}-${imageFile.name}`;
        const { error: uploadError } = await supabase.storage
          .from('uploads')
          .upload(`faculty/${fileName}`, imageFile);

        if (uploadError) {
          console.error('Image upload error:', uploadError);
          alert('Failed to upload image');
          setLoading(false);
          return;
        }

        // Get public URL
        const { data } = supabase.storage
          .from('uploads')
          .getPublicUrl(`faculty/${fileName}`);
        imageUrl = data.publicUrl;
      }

      // Insert faculty record into database
      const { error: insertError } = await supabase
        .from('faculty')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            specialization: formData.specialization,
            office_location: formData.office_location,
            office_hours: formData.office_hours,
            bio: formData.bio,
            image_url: imageUrl,
            created_by: user.id,
          },
        ]);

      if (insertError) {
        console.error('Insert error:', insertError);
        alert('Failed to add faculty member: ' + insertError.message);
      } else {
        alert('Faculty member added successfully!');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          specialization: '',
          office_location: '',
          office_hours: '',
          bio: '',
        });
        setImageFile(null);
        setPreviewImage(null);
        setShowForm(false);

        // Refresh faculty list
        fetchFaculty();
      }
    } catch (error) {
      console.error('Error adding faculty:', error);
      alert('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const fetchFaculty = async () => {
    try {
      const { data, error } = await supabase
        .from('faculty')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Fetch error:', error);
      } else {
        setFaculty(data || []);
      }
    } catch (error) {
      console.error('Error fetching faculty:', error);
    }
  };

  // Fetch faculty on component mount
  useEffect(() => {
    fetchFaculty();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Faculty Management</h1>
              <p className="text-slate-400 mt-1">Add, edit, and manage faculty members</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 active:scale-95"
            >
              + Add Faculty
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Add Faculty Form */}
        {showForm && (
          <div className="mb-8 bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Add New Faculty Member</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition"
                    placeholder="Dr. John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition"
                    placeholder="john@lasu.edu.ng"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition"
                    placeholder="+234 800 000 0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Specialization</label>
                  <input
                    type="text"
                    value={formData.specialization}
                    onChange={(e) => setFormData({...formData, specialization: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition"
                    placeholder="Computer Science"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Office Location</label>
                  <input
                    type="text"
                    value={formData.office_location}
                    onChange={(e) => setFormData({...formData, office_location: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition"
                    placeholder="Room 101, Building A"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Office Hours</label>
                  <input
                    type="text"
                    value={formData.office_hours}
                    onChange={(e) => setFormData({...formData, office_hours: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition"
                    placeholder="Mon-Fri 2-4 PM"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Bio</label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({...formData, bio: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition"
                  placeholder="Brief biography..."
                  rows={4}
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Faculty Photo</label>
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition ${
                    dragActive
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-slate-600 hover:border-slate-500'
                  }`}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => e.target.files && handleImageSelect(e.target.files[0])}
                    className="hidden"
                    id="image-upload"
                  />
                  
                  {previewImage ? (
                    <div className="space-y-4">
                      <img src={previewImage} alt="Preview" className="w-32 h-32 object-cover rounded-lg mx-auto" />
                      <p className="text-slate-300">Click or drag to change image</p>
                    </div>
                  ) : (
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <div className="text-4xl mb-2">📷</div>
                      <p className="text-slate-300 font-medium">Drag image here or click to upload</p>
                      <p className="text-slate-500 text-sm">PNG, JPG up to 5MB</p>
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
                  {loading ? 'Adding...' : 'Add Faculty Member'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      specialization: '',
                      office_location: '',
                      office_hours: '',
                      bio: '',
                    });
                    setImageFile(null);
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

        {/* Faculty List */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Faculty Members</h2>
          
          {faculty.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">👥</div>
              <p className="text-slate-400 text-lg">No faculty members added yet</p>
              <p className="text-slate-500">Click "Add Faculty" to get started</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {faculty.map((member, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition">
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-slate-400 text-sm">{member.specialization}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
