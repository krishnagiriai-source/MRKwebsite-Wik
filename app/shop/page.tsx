import { PRODUCTS } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { Filter, SlidersHorizontal, Search } from 'lucide-react';

export default function ShopPage() {
  return (
    <div className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 uppercase">Gourmet Emporium</h1>
          <p className="text-white/40 max-w-2xl">Browse our curated selection of Michelin-standard ingredients imported directly from the source.</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="space-y-8 sticky top-32">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input 
                  type="text" 
                  placeholder="Search catalog..." 
                  className="w-full bg-secondary border border-white/5 pl-10 pr-4 py-3 text-sm focus:border-primary outline-none transition-colors"
                />
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Categories</h3>
                <div className="space-y-3">
                  {['Chocolate & Pastry', 'Asian Pantry', 'Truffles & Oils', 'Dairy & Cream', 'Bulk Ingredients'].map(cat => (
                    <label key={cat} className="flex items-center gap-3 group cursor-pointer">
                      <div className="w-4 h-4 border border-white/10 group-hover:border-primary transition-colors rounded-sm" />
                      <span className="text-sm text-white/60 group-hover:text-white transition-colors">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Brands</h3>
                <div className="space-y-3">
                  {['Lee Kum Kee', 'Felchlin', 'Urbani', 'Kewpie', 'Figaro'].map(brand => (
                    <label key={brand} className="flex items-center gap-3 group cursor-pointer">
                      <div className="w-4 h-4 border border-white/10 group-hover:border-primary transition-colors rounded-sm" />
                      <span className="text-sm text-white/60 group-hover:text-white transition-colors">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="grow">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
              <p className="text-xs font-bold tracking-widest uppercase text-white/40">Showing {PRODUCTS.length} Results</p>
              <div className="flex items-center gap-4">
                <select className="bg-transparent border-none text-xs font-bold tracking-widest uppercase text-white focus:ring-0 cursor-pointer">
                  <option>Newest First</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
