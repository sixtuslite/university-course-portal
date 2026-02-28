import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";

/**
 * Home Page
 * 
 * Design Philosophy: Modern Academic Elegance
 * - Hero section with asymmetric layout
 * - Clear visual hierarchy and spacing
 * - Teal accent for CTAs
 * - Responsive design with mobile-first approach
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight" style={{ fontFamily: 'Geist' }}>
                  Discover Your Next Course
                </h1>
                <p className="text-lg text-muted-foreground">
                  Explore a curated collection of university courses designed to expand your knowledge and skills.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/courses">
                  <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                    Browse Courses
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full h-80">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl" />
                <div className="absolute top-12 right-12 w-24 h-24 bg-accent/20 rounded-full blur-3xl" />
                <div className="absolute bottom-12 left-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                
                {/* Content */}
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      <BookOpen className="w-16 h-16 text-primary/60" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Explore courses across multiple disciplines
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'Geist' }}>
              Why Choose Our Platform?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide a comprehensive platform for discovering and enrolling in quality university courses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-xl bg-background border border-border/40 hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Diverse Courses</h3>
              <p className="text-sm text-muted-foreground">
                Access a wide range of courses from various disciplines and expertise levels.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-xl bg-background border border-border/40 hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Expert Instructors</h3>
              <p className="text-sm text-muted-foreground">
                Learn from experienced faculty members and industry professionals.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-xl bg-background border border-border/40 hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Certifications</h3>
              <p className="text-sm text-muted-foreground">
                Earn recognized certificates upon course completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'Geist' }}>
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Browse our course catalog and find the perfect course for your educational goals.
            </p>
            <Link href="/courses">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore All Courses
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
