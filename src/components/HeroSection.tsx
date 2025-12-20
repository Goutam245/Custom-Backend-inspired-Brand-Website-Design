import { useState, useEffect } from 'react';
import { TerminalText, TerminalLine } from './TerminalText';
import { ChevronDown } from 'lucide-react';

const bootSequence = [
  'INITIALIZING_SYSTEM...',
  'LOADING_ASSETS... [COMPLETE]',
  'ESTABLISHING_CONNECTION... [SUCCESS]',
  'SECURITY_PROTOCOLS... [ACTIVE]',
  'RENDERING_INTERFACE...',
];

const asciiLogo = `
   ██████╗ ██████╗ ███████╗██╗    ██╗
  ██╔═══██╗██╔══██╗██╔════╝██║    ██║
  ██║   ██║██████╔╝█████╗  ██║ █╗ ██║
  ██║▄▄ ██║██╔══██╗██╔══╝  ██║███╗██║
  ╚██████╔╝██║  ██║███████╗╚███╔███╔╝
   ╚══▀▀═╝ ╚═╝  ╚═╝╚══════╝ ╚══╝╚══╝ 
`;

export const HeroSection = () => {
  const [bootStep, setBootStep] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const bootTimer = setInterval(() => {
      setBootStep(prev => {
        if (prev >= bootSequence.length - 1) {
          clearInterval(bootTimer);
          setTimeout(() => setShowLogo(true), 500);
          return prev;
        }
        return prev + 1;
      });
    }, 600);

    return () => clearInterval(bootTimer);
  }, []);

  useEffect(() => {
    if (showLogo) {
      setTimeout(() => setShowContent(true), 800);
    }
  }, [showLogo]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Scanline Overlay */}
      <div className="scanlines" />

      {/* Matrix Rain Effect (simplified) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/10 font-mono text-xs animate-matrix-drop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
            }}
          >
            {[...Array(20)].map((_, j) => (
              <div key={j}>{String.fromCharCode(0x30A0 + Math.random() * 96)}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Terminal Window */}
      <div className="relative z-10 w-full max-w-4xl">
        {/* Terminal Header */}
        <div className="terminal-card">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive/70" />
              <div className="w-3 h-3 rounded-full bg-warning/70" />
              <div className="w-3 h-3 rounded-full bg-success/70" />
            </div>
            <div className="flex-1 text-center text-xs font-mono text-foreground-muted">
              qrew@system:~
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 md:p-8 space-y-4 min-h-[400px]">
            {/* Boot Sequence */}
            <div className="space-y-2 text-sm font-mono">
              {bootSequence.slice(0, bootStep + 1).map((line, index) => (
                <TerminalLine key={index} prefix="$">
                  <span className={line.includes('[COMPLETE]') || line.includes('[SUCCESS]') || line.includes('[ACTIVE]')
                    ? 'text-success'
                    : 'text-foreground-secondary'
                  }>
                    {line}
                  </span>
                </TerminalLine>
              ))}
            </div>

            {/* ASCII Logo */}
            {showLogo && (
              <pre className="text-primary terminal-glow text-[0.5rem] sm:text-xs md:text-sm leading-none font-mono animate-fade-in text-center">
                {asciiLogo}
              </pre>
            )}

            {/* Main Content */}
            {showContent && (
              <div className="space-y-6 animate-fade-in-up">
                <div className="text-center space-y-2">
                  <h1 className="text-2xl md:text-4xl font-display font-bold text-foreground">
                    <TerminalText text="WELCOME TO THE COLLECTIVE" speed={40} />
                  </h1>
                  <div className="flex items-center justify-center gap-4 text-sm font-mono text-foreground-muted">
                    <span>STATUS: <span className="text-success">OPERATIONAL</span></span>
                    <span>│</span>
                    <span>VERSION: <span className="text-primary">2.0.1</span></span>
                    <span>│</span>
                    <span>UPTIME: <span className="text-primary">99.9%</span></span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <a
                    href="#products"
                    className="group px-8 py-4 bg-primary text-primary-foreground font-mono text-sm font-bold transition-all duration-300 hover:bg-secondary hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">{'> '}</span>
                    ACCESS_SYSTEM
                    <span className="ml-2 animate-blink">_</span>
                  </a>
                  <a
                    href="#about"
                    className="group px-8 py-4 border border-primary text-primary font-mono text-sm transition-all duration-300 hover:bg-primary/10"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">{'> '}</span>
                    VIEW_CATALOGUE
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#products" className="flex flex-col items-center gap-2 text-foreground-muted hover:text-primary transition-colors">
          <span className="text-xs font-mono">SCROLL_DOWN</span>
          <ChevronDown size={24} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};
