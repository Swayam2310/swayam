// src/components/Header.tsx
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleSmoothScroll = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll('#home');
            }}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-amber-500/30 shadow-[0_0_10px_rgba(251,191,36,0.35)] overflow-hidden bg-gradient-to-br from-[#0e0e0f] to-[#171718]">
              <img
                src="/LogoSP.png?v=3" // served from /public
                alt="SwayamWorks Logo"
                width={44}
                height={44}
                className="object-contain"
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold font-inter bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500 group-hover:from-amber-300 group-hover:to-orange-400 transition-colors">
                SwayamWorks
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-wider">
                .online
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button
              className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-5 h-10 text-sm font-medium shadow-none"
              onClick={() => handleSmoothScroll('#contact')}
            >
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-4 pt-4 border-t border-border"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-5 h-10 text-sm font-medium shadow-none mt-2"
                onClick={() => {
                  handleSmoothScroll('#contact');
                  setIsMobileMenuOpen(false);
                }}
              >
                Let&apos;s Talk
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
