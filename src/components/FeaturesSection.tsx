import { useState, useEffect } from 'react';
import { Check, Shield, Zap, Globe, Lock, RefreshCw } from 'lucide-react';

const features = [
  { icon: Shield, label: 'SECURE_CHECKOUT', status: 'ACTIVE' },
  { icon: Zap, label: 'INSTANT_DELIVERY', status: 'ACTIVE' },
  { icon: Globe, label: 'GLOBAL_SHIPPING', status: 'ACTIVE' },
  { icon: Lock, label: 'ENCRYPTED_DATA', status: 'ACTIVE' },
  { icon: RefreshCw, label: 'EASY_RETURNS', status: 'ACTIVE' },
];

const systemStats = [
  { label: 'ACTIVE_USERS', value: '12,847', change: '+24%' },
  { label: 'ORDERS_TODAY', value: '1,293', change: '+18%' },
  { label: 'AVG_RESPONSE', value: '0.3s', change: '-12%' },
  { label: 'UPTIME', value: '99.97%', change: '+0.02%' },
];

export const FeaturesSection = () => {
  const [activeStats, setActiveStats] = useState(systemStats);

  // Simulate live stats
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStats(prev =>
        prev.map(stat => ({
          ...stat,
          value: stat.label === 'ACTIVE_USERS'
            ? (parseInt(stat.value.replace(',', '')) + Math.floor(Math.random() * 10) - 5).toLocaleString()
            : stat.value,
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 px-4 bg-background-secondary relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Features Panel */}
          <div className="terminal-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
              <h3 className="text-lg font-display font-bold text-foreground">
                SYSTEM_FEATURES
              </h3>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-4 p-4 bg-background/50 border border-primary/10 hover:border-primary/30 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-primary/30 text-primary">
                    <feature.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-sm text-foreground">
                      {feature.label}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-success">
                    <Check size={14} />
                    [{feature.status}]
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Monitor */}
          <div className="terminal-card p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <h3 className="text-lg font-display font-bold text-foreground">
                  SYSTEM_MONITOR
                </h3>
              </div>
              <span className="text-xs font-mono text-foreground-muted">
                LIVE_FEED
                <span className="ml-1 text-success animate-blink">●</span>
              </span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {activeStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="p-4 bg-background/50 border border-primary/10 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-xs font-mono text-foreground-muted mb-2">
                    {stat.label}
                  </div>
                  <div className="text-2xl font-display font-bold text-primary terminal-glow-subtle">
                    {stat.value}
                  </div>
                  <div className={`text-xs font-mono mt-1 ${
                    stat.change.startsWith('+') ? 'text-success' : 'text-info'
                  }`}>
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal Log */}
            <div className="bg-background p-4 border border-primary/10 font-mono text-xs space-y-1 max-h-32 overflow-auto">
              <div className="text-foreground-muted">[{new Date().toISOString()}] System initialized</div>
              <div className="text-success">[OK] All services running</div>
              <div className="text-foreground-muted">[INFO] Cache refreshed</div>
              <div className="text-primary">[NEW] Order #12847 processed</div>
              <div className="text-foreground-muted">[INFO] User session validated</div>
              <div className="animate-blink text-primary">█</div>
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="terminal-card p-8 mt-8">
          <div className="text-xs font-mono text-foreground-muted mb-4">
            {'>'} SYSTEM_INFO:
          </div>
          <div className="max-w-3xl space-y-4 text-foreground-secondary">
            <p className="text-lg leading-relaxed">
              We are not just a brand. <span className="text-primary">We are a collective.</span>
            </p>
            <p className="leading-relaxed">
              A crew of innovators, creators, and rebels who believe in pushing boundaries.
              Our mission is to deliver exclusive experiences that transcend traditional commerce.
            </p>
            <p className="leading-relaxed">
              Every piece in our catalogue is designed with precision, crafted with purpose,
              and delivered with the commitment of a system that never sleeps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
