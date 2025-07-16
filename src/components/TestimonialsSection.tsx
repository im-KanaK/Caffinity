
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Local Artist',
      content: 'Caffinity has become my creative sanctuary. The atmosphere is perfect for inspiration, and their lavender latte is absolutely divine. The staff remembers my order and always greets me with a smile.',
      rating: 5,
      avatar: '👩‍🎨'
    },
    {
      id: 2,
      name: 'Marcus Chen',
      role: 'Software Developer',
      content: 'As someone who practically lives on coffee, I can say Caffinity serves the best espresso in town. Their cold brew is perfect for those long coding sessions, and the WiFi is reliable.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Book Club Organizer',
      content: 'Our book club has been meeting at Caffinity for over a year now. The cozy atmosphere and excellent service make it the perfect spot for our discussions. Plus, their pastries are incredible!',
      rating: 5,
      avatar: '📚'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Local Business Owner',
      content: 'I bring all my business meetings to Caffinity. The professional atmosphere, great coffee, and excellent service always impress my clients. It\'s become an extension of my office.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Fitness Instructor',
      content: 'After my morning classes, Caffinity is my go-to spot. Their protein smoothies are perfect post-workout, and the staff is always so welcoming. It\'s my favorite way to start the day.',
      rating: 5,
      avatar: '🏃‍♀️'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-primary">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it – hear from the wonderful people who make 
              Caffinity a part of their daily routine.
            </p>
          </div>

          {/* Main Testimonial Carousel */}
          <div className="relative mb-12">
            <Card className="animate-on-scroll-scale max-w-4xl mx-auto hover-glow">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  {/* Avatar */}
                  <div className="text-6xl mb-6">
                    {testimonials[currentIndex].avatar}
                  </div>
                  
                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  
                  {/* Author */}
                  <div>
                    <p className="font-playfair font-semibold text-xl text-primary">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 hover-glow"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 hover-glow"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>

          {/* Additional Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={testimonial.id} className="animate-on-scroll hover-glow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 italic">
                    "{testimonial.content.substring(0, 100)}..."
                  </p>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{testimonial.avatar}</span>
                    <div>
                      <p className="font-semibold text-sm text-primary">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
