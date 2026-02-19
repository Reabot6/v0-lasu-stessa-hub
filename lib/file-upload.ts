export const ALLOWED_FILE_TYPES = {
  images: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  videos: ['video/mp4', 'video/webm', 'video/quicktime'],
  documents: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  ],
  all: [
    'image/jpeg', 'image/png', 'image/gif', 'image/webp',
    'video/mp4', 'video/webm', 'video/quicktime',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  ],
};

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

/**
 * Validates a file before upload
 * @param file - The file to validate
 * @param allowedTypes - Optional: specific types (defaults to all)
 */
export function validateFile(
  file: File,
  allowedTypes: string[] = ALLOWED_FILE_TYPES.all
): { valid: boolean; error?: string } {
  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: `File size exceeds ${MAX_FILE_SIZE / (1024 * 1024)}MB limit`,
    };
  }

  if (!allowedTypes.includes(file.type)) {
    const allowedExtensions = allowedTypes
      .map(t => t.split('/')[1] || t)
      .filter(Boolean)
      .join(', ');
    return {
      valid: false,
      error: `File type not allowed. Allowed types: ${allowedExtensions}`,
    };
  }

  // Optional extra checks
  if (file.name.length > 200) {
    return { valid: false, error: 'File name is too long (max 200 characters)' };
  }

  return { valid: true };
}