
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  featured?: boolean;
}

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuItems: MenuItem[] = [
    {
      name: 'Signature Espresso',
      description: 'Rich, full-bodied espresso with notes of chocolate and caramel',
      price: '$3.50',
      category: 'coffee',
      image: 'https://images.unsplash.com/photo-1510707577665-99da1fcc5771?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      featured: true
    },
    {
      name: 'Cappuccino Supreme',
      description: 'Perfect balance of espresso, steamed milk, and velvety foam',
      price: '$4.25',
      category: 'coffee',
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Vanilla Latte',
      description: 'Smooth espresso with steamed milk and vanilla syrup',
      price: '$4.75',
      category: 'coffee',
      image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Mocha Delight',
      description: 'Rich chocolate and espresso blend with whipped cream',
      price: '$5.25',
      category: 'coffee',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Americano',
      description: 'Bold espresso shots with hot water for a clean, strong taste',
      price: '$3.25',
      category: 'coffee',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Cold Brew Delight',
      description: 'Slow-steeped for 12 hours, served over ice with a hint of sweetness',
      price: '$3.95',
      category: 'cold',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Iced Caramel Macchiato',
      description: 'Espresso, cold milk, and caramel drizzle over ice',
      price: '$5.25',
      category: 'cold',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Iced Vanilla Latte',
      description: 'Refreshing iced latte with vanilla syrup and cold milk',
      price: '$4.95',
      category: 'cold',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Frappuccino',
      description: 'Blended ice coffee drink with whipped cream topping',
      price: '$5.75',
      category: 'cold',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Croissant Sandwich',
      description: 'Buttery croissant with ham, cheese, and fresh herbs',
      price: '$6.50',
      category: 'food',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Blueberry Muffin',
      description: 'Freshly baked with wild blueberries and a crispy top',
      price: '$3.25',
      category: 'food',
      image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Avocado Toast',
      description: 'Multigrain bread topped with fresh avocado and seasoning',
      price: '$7.95',
      category: 'food',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Chocolate Croissant',
      description: 'Flaky pastry filled with rich dark chocolate',
      price: '$4.25',
      category: 'food',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Bagel with Cream Cheese',
      description: 'Fresh bagel served with smooth cream cheese spread',
      price: '$4.75',
      category: 'food',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Banana Bread',
      description: 'Moist, homemade banana bread with walnuts',
      price: '$3.75',
      category: 'food',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'coffee', label: 'Hot Coffee' },
    { id: 'cold', label: 'Cold Drinks' },
    { id: 'food', label: 'Food' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-primary">
              Our Menu
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our carefully curated selection of premium coffees, refreshing cold drinks, 
              and delicious food items, all crafted with the finest ingredients.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                className={`hover-glow ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card
                key={index}
                className={`animate-on-scroll-scale hover-glow group cursor-pointer relative overflow-hidden ${
                  item.featured ? 'ring-2 ring-primary' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold z-10">
                    Featured
                  </div>
                )}
                
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-playfair font-semibold text-primary">
                        {item.name}
                      </h3>
                      <span className="text-lg font-bold text-primary">
                        {item.price}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <Button
                      className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      variant="outline"
                    >
                      Add to Order
                    </Button>
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
