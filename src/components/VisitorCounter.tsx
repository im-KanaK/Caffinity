
import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

export const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Get existing visitor count from localStorage or start with a base number
    const existingCount = localStorage.getItem('caffinity-visitor-count');
    const baseCount = 15420; // Starting base count to make it look established
    
    if (existingCount) {
      const currentCount = parseInt(existingCount, 10);
      setVisitorCount(currentCount);
    } else {
      // First time visitor
      const newCount = baseCount + 1;
      localStorage.setItem('caffinity-visitor-count', newCount.toString());
      setVisitorCount(newCount);
    }

    // Simulate real-time visitor updates (optional enhancement)
    const interval = setInterval(() => {
      const randomIncrement = Math.random() < 0.3 ? 1 : 0; // 30% chance to increment
      if (randomIncrement) {
        setVisitorCount(prev => {
          const newCount = prev + 1;
          localStorage.setItem('caffinity-visitor-count', newCount.toString());
          return newCount;
        });
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  // Format number with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="flex items-center space-x-2 text-primary-foreground/80">
      <Eye className="h-4 w-4" />
      <span className="text-sm">
        <span className="font-semibold text-caffinity-latte">{formatNumber(visitorCount)}</span> visitors
      </span>
    </div>
  );
};
