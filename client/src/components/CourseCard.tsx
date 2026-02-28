import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ArrowRight } from "lucide-react";

/**
 * CourseCard Component
 * 
 * Design Philosophy: Modern Academic Elegance
 * - Card elevation with soft shadows and hover lift effects
 * - Refined typography hierarchy
 * - Teal accent for interactive elements
 * - Props-based dynamic content (course title, instructor, duration)
 */

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  description?: string;
  level?: string;
  students?: number;
}

export default function CourseCard({
  id,
  title,
  instructor,
  duration,
  description,
  level = "Intermediate",
  students = 0,
}: CourseCardProps) {
  return (
    <Link href={`/course/${id}`} className="no-underline group">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer border-border/60">
        {/* Card Header with Level Badge */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
            <Badge variant="secondary" className="ml-2 whitespace-nowrap">
              {level}
            </Badge>
          </div>

          {/* Instructor */}
          <p className="text-sm text-muted-foreground mb-3">
            by <span className="font-medium text-foreground">{instructor}</span>
          </p>

          {/* Description */}
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {description}
            </p>
          )}
        </div>

        {/* Card Footer with Metadata */}
        <div className="px-6 py-4 bg-secondary/20 border-t border-border/40">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            {students > 0 && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>{students} students</span>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
            View Details
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
