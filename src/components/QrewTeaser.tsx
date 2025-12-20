import { Link } from 'react-router-dom';
import { Lock, ArrowRight } from 'lucide-react';

export const QrewTeaser = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="terminal-card p-8 md:p-12 border-warning/30 animate-glow-pulse">
          {/* Warning Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 flex items-center justify-center border border-warning text-warning">
              <Lock size={18} />
            </div>
            <span className="text-warning font-mono text-sm animate-blink">
              ⚠️ RESTRICTED_ACCESS_ZONE
            </span>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  QREW_EXCLUSIVE
                </h2>
                <p className="text-foreground-secondary leading-relaxed">
                  Access members-only drops, pre-orders, and special pricing.
                  The inner circle for those who are part of the collective.
                </p>
              </div>

              <div className="space-y-2 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-success">[✓]</span>
                  <span className="text-foreground-secondary">Early access to new drops</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-success">[✓]</span>
                  <span className="text-foreground-secondary">Exclusive member pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-success">[✓]</span>
                  <span className="text-foreground-secondary">Limited edition items</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-success">[✓]</span>
                  <span className="text-foreground-secondary">Priority shipping</span>
                </div>
              </div>

              <Link
                to="/qrew"
                className="inline-flex items-center gap-3 px-6 py-4 bg-warning text-warning-foreground font-mono text-sm font-bold hover:bg-warning/90 transition-all group"
              >
                <span>REQUEST_ACCESS</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right - ASCII Art Panel */}
            <div className="terminal-card p-6 bg-background/80 border-warning/20">
              <pre className="text-warning/60 text-[0.5rem] sm:text-xs font-mono leading-tight text-center">
{`
┌─────────────────────────────────────┐
│                                     │
│   ██████╗ ██████╗ ███████╗██╗    ██╗│
│  ██╔═══██╗██╔══██╗██╔════╝██║    ██║│
│  ██║   ██║██████╔╝█████╗  ██║ █╗ ██║│
│  ██║▄▄ ██║██╔══██╗██╔══╝  ██║███╗██║│
│  ╚██████╔╝██║  ██║███████╗╚███╔███╔╝│
│   ╚══▀▀═╝ ╚═╝  ╚═╝╚══════╝ ╚══╝╚══╝ │
│                                     │
│         [ EXCLUSIVE ACCESS ]        │
│                                     │
│    SECURITY CLEARANCE REQUIRED      │
│                                     │
└─────────────────────────────────────┘
`}
              </pre>

              <div className="text-center mt-4 text-xs font-mono text-foreground-muted">
                STATUS: <span className="text-warning">AUTHENTICATION_REQUIRED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
