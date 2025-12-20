import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProductGrid } from '@/components/ProductGrid';
import { FeaturesSection } from '@/components/FeaturesSection';
import { QrewTeaser } from '@/components/QrewTeaser';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProductGrid />
        <FeaturesSection />
        <QrewTeaser />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
