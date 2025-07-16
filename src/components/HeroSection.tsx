
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Coffee } from 'lucide-react';

export const HeroSection = () => {
  useEffect(() => {
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const hero = document.getElementById('hero-bg');
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        id="hero-bg"
        className="absolute inset-0 w-full h-120 bg-gradient-to-br from-caffinity-latte via-caffinity-mocha to-caffinity-coffee dark:from-gray-900 dark:via-stone-800 dark:to-caffinity-coffee"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F2EAD3' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3Ccircle cx='53' cy='7' r='7'/%3E%3Ccircle cx='7' cy='53' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Dark mode overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40 pointer-events-none" />

      {/* Floating Coffee Beans Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20 dark:opacity-30"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 2) * 30}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <Coffee className="h-8 w-8 text-caffinity-coffee dark:text-caffinity-latte rotate-12" />
          </div>
        ))}
      </div>

      {/* Steam Effect */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 pointer-events-none">
        <div className="relative">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="steam-bubble" />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-shadow">
            <span className="text-caffinity-coffee dark:text-caffinity-cream">Caffinity</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-caffinity-coffee/80 dark:text-caffinity-cream/90 font-light">
            Where passion meets perfection in every cup
          </p>
          <p className="text-lg mb-12 text-caffinity-coffee/70 dark:text-caffinity-cream/80 max-w-2xl mx-auto">
            Experience the art of coffee brewing with our premium blends, 
            expertly crafted to awaken your senses and fuel your day.
          </p>
        </div>
        
        <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="hover-glow bg-caffinity-coffee text-caffinity-cream hover:bg-caffinity-coffee/90 dark:bg-caffinity-latte dark:text-caffinity-coffee dark:hover:bg-caffinity-latte/90 px-8 py-4 text-lg"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Menu
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="hover-glow border-caffinity-coffee text-caffinity-coffee hover:bg-caffinity-coffee hover:text-caffinity-cream dark:border-caffinity-latte dark:text-caffinity-latte dark:hover:bg-caffinity-latte dark:hover:text-caffinity-coffee px-8 py-4 text-lg"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Our Story
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="sm"
          onClick={scrollToAbout}
          className="text-caffinity-coffee dark:text-caffinity-cream"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};
