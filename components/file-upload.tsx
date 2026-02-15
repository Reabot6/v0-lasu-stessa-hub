'use client';

import { useState, useRef } from 'react';
import { uploadResourceFile } from '@/lib/storage';

interface FileUploadProps {
  courseId: string;
  onUploadSuccess: (url: string, fileName: string, fileSize: number) => void;
  onUploadError: (error: string) => void;
}

export function FileUpload({ courseId, onUploadSuccess, onUploadError }: FileUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setProgress(0);

    try {
      console.log('[v0] Starting file upload:', file.name);
      setProgress(30);

      const result = await uploadResourceFile(file, courseId);

      if (result) {
        setProgress(100);
        console.log('[v0] Upload successful');
        onUploadSuccess(result.url, result.fileName, result.fileSize);
        // Reset input
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('[v0] Upload error:', error);
      onUploadError(error instanceof Error ? error.message : 'Upload failed');
    } finally {
      setUploading(false);
      setProgress(0);
    }
  };

  return (
    <div className="space-y-3">
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        disabled={uploading}
        className="block w-full text-sm text-foreground/60
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:text-sm file:font-semibold
          file:bg-primary file:text-primary-foreground
          hover:file:bg-accent
          disabled:opacity-50"
        accept="*/*"
      />
      
      {uploading && (
        <div className="space-y-2">
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-foreground/60">Uploading... {progress}%</p>
        </div>
      )}
    </div>
  );
}
