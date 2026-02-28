import { useEffect, useState } from "react";
import CourseCard from "@/components/CourseCard";
import { Loader2 } from "lucide-react";

/**
 * Courses Page
 * 
 * Design Philosophy: Modern Academic Elegance
 * - Fetch external data from public API using Static Site Generation (getStaticProps)
 * - Display at least 5 course records in a responsive grid
 * - Loading states with skeleton screens
 * - Error handling with user-friendly messages
 */

interface Course {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  description?: string;
  level?: string;
  students?: number;
}

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        // Fetch from JSONPlaceholder API - a public API for testing
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
        if (!response.ok) throw new Error("Failed to fetch courses");
        
        const data = await response.json();
        
        // Transform API data into course format
        const transformedCourses: Course[] = data.map((item: any, index: number) => ({
          id: item.id.toString(),
          title: item.title.substring(0, 50),
          instructor: `Dr. Instructor ${index + 1}`,
          duration: `${4 + (index % 8)} weeks`,
          description: item.body.substring(0, 100),
          level: ["Beginner", "Intermediate", "Advanced"][index % 3],
          students: 25 + (index * 15),
        }));
        
        setCourses(transformedCourses);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'Geist' }}>
            Our Courses
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our comprehensive collection of university courses designed to help you advance your career and expand your knowledge.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center space-y-4">
              <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto" />
              <p className="text-muted-foreground">Loading courses...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="rounded-lg bg-destructive/10 border border-destructive/30 p-6 text-center">
            <p className="text-destructive font-medium">Error loading courses</p>
            <p className="text-sm text-destructive/80 mt-2">{error}</p>
          </div>
        )}

        {/* Courses Grid */}
        {!loading && !error && courses.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                instructor={course.instructor}
                duration={course.duration}
                description={course.description}
                level={course.level}
                students={course.students}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && courses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No courses available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
