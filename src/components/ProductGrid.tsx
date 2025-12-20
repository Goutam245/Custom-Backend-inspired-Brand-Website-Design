import { ProductCard, Product } from './ProductCard';

const products: Product[] = [
  {
    id: 'PRD_001',
    name: 'Terminal Hoodie // Black',
    price: 89.99,
    status: 'AVAILABLE',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop',
    category: 'APPAREL',
    quantity: 247,
  },
  {
    id: 'PRD_002',
    name: 'Matrix Tee // Green',
    price: 49.99,
    status: 'LIMITED',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop',
    category: 'APPAREL',
    quantity: 23,
  },
  {
    id: 'PRD_003',
    name: 'Cyber Cap // Stealth',
    price: 39.99,
    status: 'AVAILABLE',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop',
    category: 'ACCESSORIES',
    quantity: 156,
  },
  {
    id: 'PRD_004',
    name: 'Code Joggers // Dark',
    price: 79.99,
    status: 'SOLD_OUT',
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=600&fit=crop',
    category: 'APPAREL',
    quantity: 0,
  },
  {
    id: 'PRD_005',
    name: 'Hacker Beanie // Neon',
    price: 34.99,
    status: 'AVAILABLE',
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=600&fit=crop',
    category: 'ACCESSORIES',
    quantity: 89,
  },
  {
    id: 'PRD_006',
    name: 'System Jacket // Midnight',
    price: 149.99,
    status: 'PRE_ORDER',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop',
    category: 'OUTERWEAR',
    quantity: 50,
  },
];

export const ProductGrid = () => {
  return (
    <section id="products" className="py-20 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="terminal-card p-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-foreground-muted mb-2">
                {'>'} CATALOGUE_INDEX
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                PRODUCT_DATABASE
              </h2>
            </div>
            <div className="flex items-center gap-4 text-sm font-mono">
              <span className="text-foreground-muted">
                ITEMS_LOADED: <span className="text-primary">{products.length}</span>
              </span>
              <span className="text-foreground-muted">│</span>
              <span className="text-foreground-muted">
                FILTER: <span className="text-primary">[ALL]</span>
              </span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 border border-primary/50 text-primary font-mono text-sm hover:border-primary hover:bg-primary/10 transition-all">
            {'>'} LOAD_MORE_ITEMS
            <span className="ml-2 text-foreground-muted">[PAGE 1/3]</span>
          </button>
        </div>
      </div>
    </section>
  );
};
