
import { useState, useEffect } from 'react';
import { X, Mail, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Show popup after 10 seconds if not shown before
    const hasShown = localStorage.getItem('caffinity-newsletter-shown');
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('caffinity-newsletter-shown', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Welcome to Caffinity!",
        description: "Thanks for subscribing! Check your email for a special welcome offer.",
      });
      handleClose();
      setIsSubmitting(false);
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={handleClose} />
      
      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md mx-auto animate-scale-in shadow-2xl">
          <CardHeader className="relative pb-4">
            <Button
              onClick={handleClose}
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2"
            >
              <X className="h-4 w-4" />
            </Button>
            
            <div className="text-center pt-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-primary mb-2">
                Welcome to Caffinity!
              </h3>
              <p className="text-muted-foreground">
                Get 15% off your first order and stay updated with our latest blends and events.
              </p>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full hover-glow bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? 'Subscribing...' : 'Get My 15% Off'}
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              No spam, unsubscribe at any time. By signing up, you agree to our privacy policy.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
