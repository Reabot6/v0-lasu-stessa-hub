import { createClient } from '@/lib/supabase/client';

// Your bucket name — change only here if it ever changes
const BUCKET_NAME = 'uploads';

/**
 * Uploads a file to Supabase Storage bucket 'uploads'
 * Returns public URL + internal path on success, or structured error
 */
export async function uploadFile(
  filePath: string,
  file: File,
  options: {
    upsert?: boolean;
    folder?: string; // optional prefix like 'resources/CS101/'
  } = {}
): Promise<{ publicUrl: string; path: string } | { error: string }> {
  const supabase = createClient();

  try {
    // Build final path with optional folder prefix
    const finalPath = options.folder
      ? `${options.folder.replace(/\/$/, '')}/${filePath}`
      : filePath;

    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(finalPath, file, {
        cacheControl: '3600',
        upsert: options.upsert ?? false, // safer default: no overwrite
      });

    if (uploadError) {
      // Clean error message for user-facing display
      let userMessage = uploadError.message;

      if (uploadError.message.includes('Bucket not found')) {
        userMessage = `Bucket '${BUCKET_NAME}' does not exist. Please create it in the Supabase dashboard.`;
      } else if (uploadError.message.includes('duplicate key')) {
        userMessage = 'A file with this name already exists. Try a different name or enable upsert.';
      }

      console.error('[uploadFile] Storage error:', uploadError);
      return { error: userMessage };
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(finalPath);

    if (!urlData.publicUrl) {
      return { error: 'Upload succeeded but could not generate public URL' };
    }

    return {
      publicUrl: urlData.publicUrl,
      path: finalPath,
    };
  } catch (err: any) {
    console.error('[uploadFile] Unexpected error:', err);
    return { error: 'An unexpected error occurred during upload' };
  }
}

/**
 * Deletes a file from the 'uploads' bucket using its full storage path
 */
export async function deleteFile(
  filePath: string
): Promise<{ success: boolean; error?: string }> {
  const supabase = createClient();

  try {
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([filePath]);

    if (error) {
      console.error('[deleteFile] Storage error:', error);
      return {
        success: false,
        error: error.message || 'Failed to delete file from storage',
      };
    }

    return { success: true };
  } catch (err: any) {
    console.error('[deleteFile] Unexpected error:', err);
    return {
      success: false,
      error: 'An unexpected error occurred during deletion',
    };
  }
}