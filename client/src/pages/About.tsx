import { Card } from "@/components/ui/card";
import { Zap, Target, Users } from "lucide-react";

/**
 * About Page
 * 
 * Design Philosophy: Modern Academic Elegance
 * - Clear information hierarchy
 * - Refined typography and spacing
 * - Visual elements that support the content
 */

export default function About() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground" style={{ fontFamily: 'Geist' }}>
            About CourseHub
          </h1>
          <p className="text-lg text-muted-foreground">
            Connecting students with quality education and expert instructors.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="p-8 md:p-12 mb-12 border-border/40">
          <h2 className="text-3xl font-semibold text-foreground mb-4" style={{ fontFamily: 'Geist' }}>
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At CourseHub, we believe that quality education should be accessible to everyone. Our platform connects students with expert instructors and comprehensive courses across multiple disciplines. We're committed to providing an engaging learning experience that empowers individuals to achieve their educational and professional goals.
          </p>
        </Card>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center" style={{ fontFamily: 'Geist' }}>
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Value 1 */}
            <Card className="p-6 border-border/40 hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                We maintain the highest standards in course content and instruction to ensure our students receive quality education.
              </p>
            </Card>

            {/* Value 2 */}
            <Card className="p-6 border-border/40 hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Community</h3>
              <p className="text-sm text-muted-foreground">
                We foster a supportive learning community where students and instructors collaborate and grow together.
              </p>
            </Card>

            {/* Value 3 */}
            <Card className="p-6 border-border/40 hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                We continuously improve our platform and courses to incorporate the latest educational technologies and methodologies.
              </p>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <Card className="p-8 md:p-12 border-border/40">
          <h2 className="text-3xl font-semibold text-foreground mb-6" style={{ fontFamily: 'Geist' }}>
            Our Team
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            CourseHub is built by a dedicated team of educators, developers, and designers passionate about transforming education. Our team brings together expertise from academia, technology, and user experience design to create a platform that truly serves learners.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We work closely with university partners and industry experts to ensure our course catalog remains relevant, comprehensive, and aligned with current educational standards and market demands.
          </p>
        </Card>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Have questions? We'd love to hear from you.
          </p>
          <a href="mailto:info@coursehub.edu" className="text-primary font-semibold hover:underline">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
