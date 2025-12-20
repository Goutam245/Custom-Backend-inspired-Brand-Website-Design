import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const socialLinks = [
  { label: 'INSTAGRAM', href: '#' },
  { label: 'TWITTER', href: '#' },
  { label: 'DISCORD', href: '#' },
];

const footerLinks = [
  { label: 'TERMS', href: '/terms' },
  { label: 'PRIVACY', href: '/privacy' },
  { label: 'CONTACT', href: '/contact' },
];

export const Footer = () => {
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    // Simulate uptime counter
    const startTime = Date.now() - Math.random() * 1000000000;
    
    const updateUptime = () => {
      const diff = Date.now() - startTime;
      setUptime(Math.floor(diff / 1000 / 60 / 60 / 24)); // days
    };

    updateUptime();
    const interval = setInterval(updateUptime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-background-elevated border-t border-primary/10 py-12 px-4">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-primary font-display font-bold text-2xl terminal-glow">
              [QREW]
            </div>
            <p className="text-foreground-muted text-sm font-mono">
              {'>'} THE_COLLECTIVE
            </p>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="status-dot status-active" />
              <span className="text-foreground-muted">
                UPTIME: <span className="text-primary">{uptime} days</span>
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-foreground-muted">
              {'>'} CONNECT_WITH_US
            </div>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-mono text-foreground-secondary hover:text-primary transition-colors group"
                >
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">{'>'}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-foreground-muted">
              {'>'} SYSTEM_LINKS
            </div>
            <div className="flex flex-wrap gap-4">
              {footerLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-mono text-foreground-secondary hover:text-primary transition-colors group"
                >
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">{'>'}</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-foreground-muted">
            <div>
              © {new Date().getFullYear()} [QREW] | ALL_RIGHTS_RESERVED
            </div>
            <div className="flex items-center gap-4">
              <span>BUILT_WITH: INNOVATION + CODE</span>
              <span className="hidden md:inline">│</span>
              <span>MAINTAINED_BY: THE_QREW</span>
            </div>
          </div>
        </div>

        {/* ASCII Footer */}
        <div className="mt-8 text-center">
          <pre className="text-primary/20 text-[0.4rem] font-mono leading-none inline-block">
{`════════════════════════════════════════════════════════════════════════════════
                         END_OF_TRANSMISSION
════════════════════════════════════════════════════════════════════════════════`}
          </pre>
        </div>
      </div>
    </footer>
  );
};
