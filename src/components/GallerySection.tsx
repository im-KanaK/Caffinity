
import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'coffee' | 'food' | 'atmosphere';
}

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  // Coffee shop gallery images
  const allGalleryImages: GalleryImage[] = [
    { 
      id: 1, 
      src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Cozy coffee shop interior with warm lighting', 
      category: 'atmosphere' 
    },
    { 
      id: 2, 
      src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Perfect latte art heart design', 
      category: 'coffee' 
    },
    { 
      id: 3, 
      src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Fresh pastries and baked goods display', 
      category: 'food' 
    },
    { 
      id: 4, 
      src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'People enjoying coffee together', 
      category: 'atmosphere' 
    },
    { 
      id: 5, 
      src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Coffee beans roasting process', 
      category: 'coffee' 
    },
    { 
      id: 6, 
      src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Artisan sandwich and coffee pairing', 
      category: 'food' 
    },
    { 
      id: 7, 
      src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Coffee garden and plantation', 
      category: 'coffee' 
    },
    { 
      id: 8, 
      src: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Iced coffee perfection with beautiful presentation', 
      category: 'coffee' 
    },
    { 
      id: 9, 
      src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Weekend brunch spread with coffee', 
      category: 'food' 
    },
    { 
      id: 10, 
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Friends chatting over coffee', 
      category: 'atmosphere' 
    },
    { 
      id: 11, 
      src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Barista crafting the perfect espresso', 
      category: 'coffee' 
    },
    { 
      id: 12, 
      src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Coffee shop window view with natural light', 
      category: 'atmosphere' 
    },
    { 
      id: 13, 
      src: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Specialty coffee brewing equipment', 
      category: 'coffee' 
    },
    { 
      id: 14, 
      src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Fresh croissants and pastries display', 
      category: 'food' 
    },
    { 
      id: 15, 
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Coffee shop outdoor seating area', 
      category: 'atmosphere' 
    },
    { 
      id: 16, 
      src: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Latte with beautiful foam art', 
      category: 'coffee' 
    },
    { 
      id: 17, 
      src: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Healthy breakfast options', 
      category: 'food' 
    },
    { 
      id: 18, 
      src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Coffee shop counter with barista at work', 
      category: 'atmosphere' 
    }
  ];

  const galleryImages = showAllPhotos ? allGalleryImages : allGalleryImages.slice(0, 12);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-primary">
              Gallery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Step into our world through images that capture the essence of Caffinity – 
              from our artisanal coffee creations to the warm atmosphere we've crafted.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`animate-on-scroll-scale relative group cursor-pointer overflow-hidden rounded-lg aspect-square ${
                  index % 7 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <p className="font-semibold capitalize">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12 animate-on-scroll">
            <Button
              onClick={() => setShowAllPhotos(!showAllPhotos)}
              variant="outline"
              size="lg"
              className="hover-glow border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              {showAllPhotos ? 'Show Less Photos' : 'View More Photos'}
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="relative bg-background rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto">
            <Button
              onClick={closeModal}
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10"
            >
              <X className="h-6 w-6" />
            </Button>
            
            <div className="text-center">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="w-full max-h-96 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-playfair font-semibold mb-2 text-primary">
                {selectedImage.alt}
              </h3>
              <p className="text-muted-foreground capitalize">
                {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
