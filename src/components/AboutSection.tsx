
import { Coffee, Heart, Users, Award } from 'lucide-react';

export const AboutSection = () => {
  const features = [
    {
      icon: Coffee,
      title: 'Premium Beans',
      description: 'Sourced directly from the finest coffee regions around the world'
    },
    {
      icon: Heart,
      title: 'Crafted with Love',
      description: 'Every cup is prepared with passion and attention to detail'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Building connections one conversation at a time'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in coffee and customer service'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-primary">
              Our Coffee Story
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Born from a passion for exceptional coffee, Caffinity began as a dream to create 
              the perfect gathering place where quality meets community.
            </p>
          </div>

          {/* Main Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-on-scroll">
              <div className="relative rounded-2xl overflow-hidden h-96">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Coffee beans on wooden plate representing our story"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white z-10">
                  <Coffee className="h-12 w-12 mb-2 animate-float" />
                  <p className="font-semibold text-lg">Est. 2020</p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll space-y-6">
              <h3 className="text-3xl font-playfair font-semibold text-primary mb-4">
                A Journey of Flavor
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our journey started with a simple belief: that great coffee has the power to 
                bring people together. From carefully selecting beans from sustainable farms 
                to perfecting our roasting techniques, every step is guided by our commitment 
                to quality and community.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, Caffinity stands as more than just a coffee shop – we're a gathering 
                place where stories are shared, connections are made, and every cup tells 
                a story of craftsmanship and care.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="animate-on-scroll-scale text-center p-6 rounded-xl hover:bg-card hover:shadow-lg transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-playfair font-semibold mb-3 text-primary">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
