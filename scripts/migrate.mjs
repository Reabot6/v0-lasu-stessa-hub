import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing Supabase environment variables");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function runMigrations() {
  try {
    console.log("[v0] Starting migrations...");

    // Create courses table
    const { error: coursesError } = await supabase.rpc("execute_sql", {
      sql: `
        CREATE TABLE IF NOT EXISTS courses (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          title TEXT NOT NULL,
          department TEXT NOT NULL,
          description TEXT,
          code TEXT NOT NULL UNIQUE,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `,
    }).catch(() => ({ error: null }));

    // Create resources table with file support
    const { error: resourcesError } = await supabase.rpc("execute_sql", {
      sql: `
        CREATE TABLE IF NOT EXISTS resources (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          title TEXT NOT NULL,
          course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
          type TEXT NOT NULL,
          url TEXT NOT NULL,
          description TEXT,
          file_name TEXT,
          file_size INTEGER,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `,
    }).catch(() => ({ error: null }));

    // Create news table
    const { error: newsError } = await supabase.rpc("execute_sql", {
      sql: `
        CREATE TABLE IF NOT EXISTS news (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          title TEXT NOT NULL,
          content TEXT NOT NULL,
          date DATE NOT NULL,
          author TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `,
    }).catch(() => ({ error: null }));

    console.log("[v0] Tables created successfully");

    // Create storage bucket for resources if it doesn't exist
    try {
      const { data: buckets } = await supabase
        .storage
        .listBuckets();
      
      const resourcesBucketExists = buckets?.some(b => b.name === 'resources');
      
      if (!resourcesBucketExists) {
        const { error: bucketError } = await supabase
          .storage
          .createBucket('resources', {
            public: true,
            allowedMimeTypes: null, // Allow all file types
            fileSizeLimit: 104857600, // 100MB limit
          });
        
        if (!bucketError) {
          console.log("[v0] Resources storage bucket created");
        }
      } else {
        console.log("[v0] Resources storage bucket already exists");
      }
    } catch (error) {
      console.log("[v0] Could not create bucket (may already exist):", error.message);
    }

    // Insert default courses
    const { error: courseInsertError } = await supabase
      .from("courses")
      .insert([
        {
          title: "Introduction to Computer Science",
          department: "Computer Science",
          description: "Fundamentals of programming and computer systems",
          code: "CS101",
        },
        {
          title: "Data Structures",
          department: "Computer Science",
          description: "Advanced data structures and algorithms",
          code: "CS201",
        },
        {
          title: "Software Engineering",
          department: "Computer Science",
          description: "Software development methodologies and practices",
          code: "CS301",
        },
      ])
      .select();

    if (courseInsertError) {
      console.log("[v0] Courses already exist or skipping:", courseInsertError.message);
    } else {
      console.log("[v0] Default courses inserted");
    }

    // Get courses for resource insertion
    const { data: courses, error: courseFetchError } = await supabase
      .from("courses")
      .select("id, code");

    if (courseFetchError) {
      console.error("[v0] Error fetching courses:", courseFetchError);
      return;
    }

    const courseMap = {};
    courses?.forEach((course) => {
      courseMap[course.code] = course.id;
    });

    // Insert default resources
    const { error: resourceInsertError } = await supabase
      .from("resources")
      .insert([
        {
          title: "Python Basics Tutorial",
          course_id: courseMap["CS101"],
          type: "video",
          url: "#",
          description: "Learn Python fundamentals",
        },
        {
          title: "DSA Study Guide",
          course_id: courseMap["CS201"],
          type: "pdf",
          url: "#",
          description: "Comprehensive data structures guide",
        },
        {
          title: "Software Engineering Handbook",
          course_id: courseMap["CS301"],
          type: "document",
          url: "#",
          description: "Best practices and methodologies",
        },
      ])
      .select();

    if (resourceInsertError) {
      console.log("[v0] Resources already exist or skipping:", resourceInsertError.message);
    } else {
      console.log("[v0] Default resources inserted");
    }

    // Insert default news
    const { error: newsInsertError } = await supabase
      .from("news")
      .insert([
        {
          title: "Welcome to STESSA",
          content:
            "Welcome to the Science, Technology, Engineering and Skills Services for Africa program. This is your hub for accessing all educational resources and updates.",
          date: new Date().toISOString().split("T")[0],
          author: "Admin",
        },
      ])
      .select();

    if (newsInsertError) {
      console.log("[v0] News already exists or skipping:", newsInsertError.message);
    } else {
      console.log("[v0] Default news inserted");
    }

    console.log("[v0] Migrations completed successfully!");
  } catch (error) {
    console.error("[v0] Migration error:", error);
    process.exit(1);
  }
}

runMigrations();
