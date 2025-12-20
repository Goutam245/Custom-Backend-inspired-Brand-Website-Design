import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Lock, AlertTriangle, CheckCircle, Eye, EyeOff } from 'lucide-react';

const QrewExclusive = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Demo password for showcase
  const DEMO_PASSWORD = 'QREW2024';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    setLoadingProgress(0);

    // Simulate loading
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    // Simulate verification delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (password.toUpperCase() === DEMO_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      setError('ACCESS_DENIED: Invalid credentials');
    }
    setIsLoading(false);
  };

  const ProgressBar = ({ progress }: { progress: number }) => {
    const filled = Math.floor(progress / 5);
    const empty = 20 - filled;
    return (
      <div className="font-mono text-sm">
        [{'▓'.repeat(filled)}{'░'.repeat(empty)}] {progress}%
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-lg">
          {!isAuthenticated ? (
            // Login Panel
            <div className="terminal-card animate-fade-in-up">
              {/* Header */}
              <div className="border-b border-primary/20 p-4 flex items-center gap-3">
                <AlertTriangle className="text-warning" size={20} />
                <span className="font-mono text-sm text-warning">
                  RESTRICTED_ACCESS_ZONE
                </span>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                {/* ASCII Box */}
                <pre className="text-primary/40 text-xs font-mono text-center">
{`┌─────────────────────────────────┐
│  SECURITY CLEARANCE REQUIRED    │
│                                 │
│      AUTHORIZED ACCESS ONLY     │
└─────────────────────────────────┘`}
                </pre>

                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <Lock className="text-primary" size={24} />
                    <h1 className="text-xl font-display font-bold text-foreground">
                      QREW_EXCLUSIVE
                    </h1>
                  </div>
                  <p className="text-sm text-foreground-muted font-mono">
                    Enter access code to continue
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-foreground-muted">
                      {'>'} ENTER_ACCESS_CODE:
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 bg-background border border-primary/30 text-foreground font-mono focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="________________"
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground-muted hover:text-primary transition-colors"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                      <span className="absolute right-12 top-1/2 -translate-y-1/2 text-primary animate-blink">
                        _
                      </span>
                    </div>
                  </div>

                  {error && (
                    <div className="p-3 bg-destructive/10 border border-destructive/30 text-destructive text-sm font-mono animate-fade-in">
                      {error}
                    </div>
                  )}

                  {isLoading && (
                    <div className="p-4 bg-background/50 border border-primary/20 space-y-2 animate-fade-in">
                      <div className="text-sm font-mono text-foreground-muted">
                        VERIFYING_CREDENTIALS...
                      </div>
                      <ProgressBar progress={loadingProgress} />
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading || !password}
                    className="w-full py-4 bg-primary text-primary-foreground font-mono font-bold text-sm hover:bg-secondary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'AUTHENTICATING...' : '> AUTHENTICATE'}
                  </button>
                </form>

                <div className="text-center text-xs font-mono text-foreground-muted">
                  <p>Need access? Contact admin for credentials.</p>
                  <p className="mt-2 text-primary/50">
                    Demo password: QREW2024
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Authenticated View
            <div className="space-y-6 animate-fade-in-up">
              {/* Success Banner */}
              <div className="terminal-card border-success/30 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="text-success" size={24} />
                  <span className="font-mono text-success font-bold">
                    ACCESS_GRANTED
                  </span>
                </div>
                <pre className="text-success/60 text-xs font-mono">
{`╔═══════════════════════════════════╗
║  ✓ AUTHENTICATION SUCCESSFUL      ║
╠═══════════════════════════════════╣
║                                   ║
║  WELCOME BACK, QREW MEMBER        ║
║  SESSION INITIALIZED              ║
║                                   ║
║  [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%     ║
║                                   ║
╚═══════════════════════════════════╝`}
                </pre>
              </div>

              {/* Exclusive Content Preview */}
              <div className="terminal-card p-6">
                <h2 className="text-xl font-display font-bold text-foreground mb-4">
                  EXCLUSIVE_CATALOGUE
                </h2>
                <p className="text-foreground-muted font-mono text-sm mb-6">
                  Coming soon: Enable backend to unlock full QREW features including member-only products, special pricing, and pre-orders.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-background/50 border border-primary/20 flex items-center justify-center">
                    <span className="text-foreground-muted font-mono text-sm">[PRE_ORDER_001]</span>
                  </div>
                  <div className="aspect-square bg-background/50 border border-primary/20 flex items-center justify-center">
                    <span className="text-foreground-muted font-mono text-sm">[PRE_ORDER_002]</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsAuthenticated(false);
                  setPassword('');
                }}
                className="w-full py-3 border border-primary/30 text-foreground-secondary font-mono text-sm hover:border-primary hover:text-primary transition-all"
              >
                {'>'} LOGOUT_SESSION
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QrewExclusive;
