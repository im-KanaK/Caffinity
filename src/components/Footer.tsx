
import { Coffee, Facebook, Instagram, Twitter, Heart } from 'lucide-react';
import { VisitorCounter } from './VisitorCounter';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Story', href: '#about' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' }
    ],
    menu: [
      { label: 'Coffee', href: '#menu' },
      { label: 'Food', href: '#menu' },
      { label: 'Catering', href: '#' },
      { label: 'Gift Cards', href: '#' }
    ],
    support: [
      { label: 'Contact', href: '#contact' },
      { label: 'FAQ', href: '#' },
      { label: 'Feedback', href: '#contact' },
      { label: 'Accessibility', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Coffee className="h-8 w-8 text-caffinity-latte" />
                <span className="text-2xl font-playfair font-bold text-caffinity-latte">
                  Caffinity
                </span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Where passion meets perfection in every cup. We're more than just a coffee shop – 
                we're a community hub where connections are made and memories are created over 
                exceptional coffee experiences.
              </p>
              
              {/* Visitor Counter */}
              <div className="mb-6">
                <VisitorCounter />
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-playfair font-semibold text-lg mb-4 text-caffinity-latte">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-primary-foreground/80 hover:text-caffinity-latte transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Menu Links */}
            <div>
              <h3 className="font-playfair font-semibold text-lg mb-4 text-caffinity-latte">
                Menu & Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.menu.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-primary-foreground/80 hover:text-caffinity-latte transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-primary-foreground/20 pt-8 mb-8">
            <div className="text-center">
              <h3 className="font-playfair font-semibold text-xl mb-2 text-caffinity-latte">
                Stay Connected
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                Get the latest updates on new blends, events, and special offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-caffinity-latte"
                />
                <button className="px-6 py-2 bg-caffinity-latte text-caffinity-coffee rounded-lg font-semibold hover:bg-caffinity-latte/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} Caffinity. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-1 text-primary-foreground/80 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>for coffee lovers</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <button className="text-primary-foreground/80 hover:text-caffinity-latte transition-colors">
                Privacy Policy
              </button>
              <button className="text-primary-foreground/80 hover:text-caffinity-latte transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
