import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, Award, BookOpen, Loader2 } from "lucide-react";

/**
 * CourseDetail Page
 * 
 * Design Philosophy: Modern Academic Elegance
 * - Dynamic routing with course ID parameter
 * - Fetch detailed course information from API
 * - Full-width layout with sidebar navigation
 * - Responsive design with mobile-first approach
 */

interface CourseDetailData {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  description: string;
  fullDescription: string;
  level: string;
  students: number;
  rating: number;
  syllabus: string[];
}

export default function CourseDetail() {
  const params = useParams();
  const courseId = params?.id;
  
  const [course, setCourse] = useState<CourseDetailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourseDetail = async () => {
      if (!courseId) {
        setError("Course ID not found");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        // Fetch from JSONPlaceholder API
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${courseId}`);
        if (!response.ok) throw new Error("Course not found");
        
        const data = await response.json();
        
        // Transform API data into course detail format
        const courseDetail: CourseDetailData = {
          id: data.id.toString(),
          title: data.title.substring(0, 50),
          instructor: `Dr. ${["Smith", "Johnson", "Williams", "Brown"][parseInt(courseId) % 4]}`,
          duration: `${4 + (parseInt(courseId) % 8)} weeks`,
          description: data.body.substring(0, 100),
          fullDescription: data.body,
          level: ["Beginner", "Intermediate", "Advanced"][parseInt(courseId) % 3],
          students: 25 + (parseInt(courseId) * 15),
          rating: 4.5 + (parseInt(courseId) % 10) * 0.05,
          syllabus: [
            "Introduction and Course Overview",
            "Core Concepts and Fundamentals",
            "Practical Applications",
            "Advanced Topics",
            "Project Development",
            "Final Assessment and Certification",
          ],
        };
        
        setCourse(courseDetail);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setCourse(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetail();
  }, [courseId]);

  return (
    <div className="min-h-screen py-8 md:py-16">
      <div className="container">
        {/* Back Button */}
        <Link href="/courses">
          <Button variant="ghost" className="gap-2 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Button>
        </Link>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center space-y-4">
              <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto" />
              <p className="text-muted-foreground">Loading course details...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="rounded-lg bg-destructive/10 border border-destructive/30 p-6 text-center">
            <p className="text-destructive font-medium">Error loading course</p>
            <p className="text-sm text-destructive/80 mt-2">{error}</p>
          </div>
        )}

        {/* Course Detail Content */}
        {!loading && !error && course && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3" style={{ fontFamily: 'Geist' }}>
                      {course.title}
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      Taught by <span className="font-semibold text-foreground">{course.instructor}</span>
                    </p>
                  </div>
                  <Badge className="whitespace-nowrap">{course.level}</Badge>
                </div>

                {/* Rating and Stats */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-yellow-500">★</span>
                    <span>{course.rating.toFixed(1)} rating</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <Card className="p-6 border-border/40">
                <h2 className="text-2xl font-semibold text-foreground mb-4">About This Course</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {course.fullDescription}
                </p>
              </Card>

              {/* Syllabus */}
              <Card className="p-6 border-border/40">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Course Syllabus</h2>
                <div className="space-y-3">
                  {course.syllabus.map((topic, index) => (
                    <div key={index} className="flex gap-4 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-semibold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-foreground font-medium">{topic}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Learning Outcomes */}
              <Card className="p-6 border-border/40">
                <h2 className="text-2xl font-semibold text-foreground mb-6">What You'll Learn</h2>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <BookOpen className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Master core concepts and fundamental principles</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <BookOpen className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Apply practical skills through real-world projects</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <BookOpen className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Develop advanced expertise in the subject area</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <BookOpen className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Earn a recognized certification upon completion</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 border-border/40 sticky top-20 space-y-6">
                {/* Enrollment Card */}
                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Enroll Now
                  </Button>
                  <Button size="lg" variant="outline" className="w-full">
                    Add to Wishlist
                  </Button>
                </div>

                {/* Course Info */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Duration</p>
                    <p className="font-semibold text-foreground">{course.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Level</p>
                    <p className="font-semibold text-foreground">{course.level}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Instructor</p>
                    <p className="font-semibold text-foreground">{course.instructor}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Enrolled Students</p>
                    <p className="font-semibold text-foreground">{course.students}</p>
                  </div>
                </div>

                {/* Certificate */}
                <div className="p-4 rounded-lg bg-accent/10 border border-accent/20 space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    <p className="font-semibold text-foreground">Certificate Included</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Earn a recognized certificate upon successful completion.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
