import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';

const navItems = [
  { label: 'HOME', path: '/' },
  { label: 'PRODUCTS', path: '/#products' },
  { label: 'QREW_EXCLUSIVE', path: '/qrew' },
  { label: 'ABOUT', path: '/#about' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.hash === path.replace('/', '');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'glass shadow-lg border-primary/30' 
          : 'bg-background/95 backdrop-blur-sm border-primary/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          
          {/* Logo with Traffic Lights */}
          <div className="flex items-center gap-4 lg:gap-6">
            <Link to="/" className="flex items-center gap-2 group shrink-0">
              <div className="text-primary font-display font-bold text-lg lg:text-xl terminal-glow group-hover:text-secondary transition-colors tracking-wider">
                [QREW]
              </div>
            </Link>
            
            {/* Traffic Light Dots - Hidden on mobile */}
            <div className="hidden sm:flex items-center gap-1.5 ml-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_rgba(255,95,87,0.5)]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_6px_rgba(255,189,46,0.5)]" />
              <span className="w-3 h-3 rounded-full bg-[#28ca41] shadow-[0_0_6px_rgba(40,202,65,0.5)]" />
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center gap-1 bg-background-secondary/30 rounded-lg px-2 py-1 border border-primary/10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 xl:px-6 py-2 text-sm font-mono transition-all duration-200 rounded-md ${
                    isActive(item.path)
                      ? 'text-primary bg-primary/10 terminal-glow-subtle'
                      : 'text-foreground-secondary hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.label}
                  {item.label === 'QREW_EXCLUSIVE' && (
                    <span className="ml-1.5 text-[10px] text-warning animate-blink font-bold">[!]</span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-xs font-mono transition-all duration-200 rounded ${
                  isActive(item.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground-secondary hover:text-primary'
                }`}
              >
                {item.label.replace('_', ' ')}
              </Link>
            ))}
          </div>

          {/* System Status */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 text-xs font-mono text-foreground-muted shrink-0">
            <div className="flex items-center gap-2 bg-background-secondary/50 px-3 py-1.5 rounded-full border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_8px_rgba(0,255,136,0.6)]" />
              <span className="hidden lg:inline text-foreground-secondary">SYSTEM_ACTIVE</span>
              <span className="lg:hidden text-foreground-secondary">ACTIVE</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-primary/20 animate-fade-in shadow-xl">
          <div className="px-4 py-3">
            {/* Mobile Header */}
            <div className="flex items-center justify-between mb-3 pb-3 border-b border-primary/10">
              <div className="flex items-center gap-2 text-xs font-mono text-foreground-muted">
                <Terminal size={14} className="text-primary" />
                <span>NAVIGATION_MENU</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-[10px] font-mono text-foreground-muted">ONLINE</span>
              </div>
            </div>
            
            {/* Mobile Nav Items */}
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3 px-4 text-sm font-mono rounded-lg transition-all ${
                    isActive(item.path)
                      ? 'text-primary bg-primary/15 border border-primary/30'
                      : 'text-foreground-secondary hover:text-primary hover:bg-primary/5 border border-transparent'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-primary text-xs">{'>'}</span>
                    <span>{item.label.replace('_', ' ')}</span>
                  </div>
                  {item.label === 'QREW_EXCLUSIVE' && (
                    <span className="text-[10px] text-warning bg-warning/10 px-2 py-0.5 rounded-full font-bold">
                      RESTRICTED
                    </span>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Footer */}
            <div className="mt-4 pt-3 border-t border-primary/10">
              <div className="flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28ca41]" />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
