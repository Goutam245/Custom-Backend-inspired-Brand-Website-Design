import { useState } from 'react';
import { ShoppingCart, Eye } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  price: number;
  status: 'AVAILABLE' | 'LIMITED' | 'SOLD_OUT' | 'PRE_ORDER';
  image: string;
  category: string;
  quantity?: number;
}

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const statusConfig = {
    AVAILABLE: { text: '[AVAILABLE]', color: 'text-success', dot: 'bg-success' },
    LIMITED: { text: '[LIMITED]', color: 'text-warning', dot: 'bg-warning' },
    SOLD_OUT: { text: '[SOLD_OUT]', color: 'text-destructive', dot: 'bg-destructive' },
    PRE_ORDER: { text: '[PRE_ORDER]', color: 'text-info', dot: 'bg-info' },
  };

  const status = statusConfig[product.status];

  return (
    <div
      className="terminal-card group transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ASCII Top Border */}
      <div className="text-primary/30 text-xs font-mono px-3 pt-3 overflow-hidden">
        ╔{'═'.repeat(38)}╗
      </div>

      {/* Header */}
      <div className="px-4 py-2 border-b border-primary/10">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-foreground-muted">
            PRODUCT_ID: {product.id}
          </span>
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${status.dot} animate-pulse`} />
            <span className={`text-xs font-mono ${status.color}`}>
              {status.text}
            </span>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Scanline Overlay */}
        <div className="scanlines opacity-50" />
        
        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end justify-center pb-8 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-primary text-primary-foreground font-mono text-sm hover:bg-secondary transition-colors flex items-center gap-2">
              <Eye size={16} />
              VIEW
            </button>
            <button
              className={`px-4 py-2 border border-primary text-primary font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2 ${
                product.status === 'SOLD_OUT' ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={product.status === 'SOLD_OUT'}
            >
              <ShoppingCart size={16} />
              {product.status === 'SOLD_OUT' ? 'UNAVAILABLE' : 'ADD'}
            </button>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 space-y-3">
        <div className="text-xs text-foreground-muted font-mono">
          {'>'} CATEGORY: {product.category}
        </div>
        <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <div className="font-mono">
            <span className="text-foreground-muted text-sm">PRICE: </span>
            <span className="text-primary terminal-glow-subtle text-lg font-bold">
              ${product.price.toFixed(2)}
            </span>
          </div>
          {product.quantity !== undefined && (
            <div className="text-xs text-foreground-muted">
              QTY: {product.quantity}
            </div>
          )}
        </div>
      </div>

      {/* Action Button */}
      <div className="px-4 pb-4">
        <button
          className={`w-full py-3 font-mono text-sm border transition-all duration-300 ${
            product.status === 'SOLD_OUT'
              ? 'border-foreground-muted text-foreground-muted cursor-not-allowed'
              : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground animate-glow-pulse'
          }`}
          disabled={product.status === 'SOLD_OUT'}
        >
          {'>'} {product.status === 'SOLD_OUT' ? 'OUT_OF_STOCK' : 'EXECUTE_ORDER'}
        </button>
      </div>

      {/* ASCII Bottom Border */}
      <div className="text-primary/30 text-xs font-mono px-3 pb-3 overflow-hidden">
        ╚{'═'.repeat(38)}╝
      </div>
    </div>
  );
};
