import { Link } from "wouter";
import { BookOpen } from "lucide-react";

/**
 * Header Component
 * 
 * Design Philosophy: Modern Academic Elegance
 * - Sticky navigation with subtle shadow on scroll
 * - Clean typography using Geist for brand and Inter for navigation
 * - Teal accent color for interactive elements
 */

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border/40 backdrop-blur-sm">
      <nav className="container flex items-center justify-between h-16">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2 no-underline group">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <span className="font-bold text-lg text-foreground" style={{ fontFamily: 'Geist' }}>
            CourseHub
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors no-underline">
            Home
          </Link>
          <Link href="/courses" className="text-sm font-medium text-foreground hover:text-primary transition-colors no-underline">
            Courses
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors no-underline">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
