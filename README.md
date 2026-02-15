# LASU STESSA Resource Hub

A comprehensive resource management platform for the LASU STESSA (Science, Technology, Engineering and Skills Services for Africa) program.

## Features

- **Academics**: Browse and manage courses organized by department
- **Resources**: Access educational materials (PDFs, videos, documents, links) linked to courses
- **News**: View and manage departmental announcements and updates
- **Admin Dashboard**: Full CRUD functionality for managing all content
- **Real-time Sync**: Data synchronized across devices using Supabase
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Session-based admin authentication
- **UI Components**: shadcn/ui

## Setup & Deployment

### Prerequisites

- Node.js 18+ and pnpm
- Supabase project set up
- Environment variables configured

### Environment Variables

The following environment variables are required (automatically set up with Supabase integration):

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
```

### Installation & Database Setup

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Initialize the database**:
   Run the migration script to create tables and seed default data:
   ```bash
   node scripts/migrate.mjs
   ```

3. **Start development server**:
   ```bash
   pnpm dev
   ```

4. **Build for production**:
   ```bash
   pnpm build
   pnpm start
   ```

### Deployment

Deploy to Vercel with one click or use the Vercel CLI:

```bash
vercel deploy
```

Ensure all Supabase environment variables are set in your Vercel project settings.

## Usage

### Accessing the Application

- **Homepage**: View feature overview and navigation
- **Academics**: Browse all courses
- **Resources**: Filter resources by course
- **News**: Read latest announcements
- **Admin Panel**: `/admin/login` to access management features

### Admin Login

**Email**: `stessaedu@gmail.com`  
**Password**: `admin123stessa`

### Admin Dashboard Features

The admin dashboard provides three tabs:

1. **Courses**: Create, edit, and delete courses
2. **Resources**: Manage learning materials linked to courses
3. **News**: Publish and manage announcements

All changes are saved to Supabase and reflected across all devices in real-time.

## Database Schema

### Tables

- **courses**: Store course information (title, code, department, description)
- **resources**: Learning materials linked to courses (title, type, URL, description)
- **news**: Announcements and departmental updates (title, content, date, author)
- **admin_users**: Administrator credentials

### Field Names

Note: The database uses snake_case field names:
- `course_id` (instead of courseId)
- `resource_id` (instead of resourceId)

## File Structure

```
├── app/
│   ├── page.tsx              # Homepage
│   ├── academics/page.tsx    # Courses listing
│   ├── resources/page.tsx    # Resources page
│   ├── news/page.tsx         # News page
│   └── admin/
│       ├── page.tsx          # Admin dashboard
│       └── login/page.tsx    # Admin login
├── components/
│   ├── navigation.tsx        # Main navigation
│   └── ui/                   # shadcn/ui components
├── lib/
│   └── storage.ts            # Supabase integration
└── scripts/
    └── migrate.mjs           # Database migration
```

## Troubleshooting

### Database not syncing

- Verify Supabase environment variables are set correctly
- Check that the migration script was executed successfully
- Ensure Supabase network access allows your deployment

### Admin login not working

- Verify you're using the correct credentials
- Check that the admin_users table was created in the migration
- Clear browser session storage and try again

### Course codes must be unique

When adding courses, ensure each course code is unique. The database enforces this constraint.

## Support

For issues or questions, refer to the admin guide or contact the system administrator.

---

&copy; 2024 LASU STESSA. All rights reserved.
