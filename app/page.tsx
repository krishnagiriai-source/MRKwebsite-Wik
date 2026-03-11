import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, BRANDS } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      <Hero />

      {/* Brand Showcase */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Trusted by Legends</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-tight">Our Premium Brand Portfolio</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {BRANDS.map((brand) => (
              <div key={brand.id} className="group relative flex flex-col items-center">
                <div className="w-full aspect-square glass-morphism p-8 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 rounded-sm">
                  <img src={brand.logo} alt={brand.name} className="max-w-full h-auto" />
                </div>
                <p className="mt-4 text-[10px] text-white/40 uppercase tracking-widest font-bold">{brand.origin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">The Gold List</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-tight">Michelin Star Masterpieces</h2>
            </div>
            <Link href="/shop" className="text-white hover:text-primary flex items-center gap-2 group transition-colors">
              <span className="text-xs font-bold uppercase tracking-widest">Explore Collection</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Supply Segment (B2B) */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">HORECA Solutions</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-8">Empowering India&apos;s Finest Hospitality</h2>
            <p className="text-lg text-white/50 mb-12 leading-relaxed">
              We provide end-to-end supply chain excellence for the luxury hospitality sector. From bulk quantities to specialized inventory management, MRK Foods is the partner of choice for Top Hotels and Artisanal Bakeries.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              {[
                { label: '500+', sub: 'Premium SKUs' },
                { label: '25+', sub: 'Luxury Brands' },
                { label: '24h', sub: 'Mumbai Logistics' },
                { label: 'GST', sub: 'Compliant Invoicing' }
              ].map((stat, i) => (
                <div key={i} className="border-l border-primary/20 pl-6">
                  <h4 className="text-3xl text-primary font-serif">{stat.label}</h4>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">{stat.sub}</p>
                </div>
              ))}
            </div>
            <Link href="/become-distributor" className="inline-block bg-white text-black px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors">
              Become a Distributor
            </Link>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1577214495584-37f26f7a6f23?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-sm glass-morphism scale-105"
              alt="Professional Chef"
            />
            <div className="absolute -bottom-10 -left-10 glass-morphism p-8 max-w-xs hidden md:block">
              <p className="text-white italic font-serif text-lg">&quot;Quality consistency is why we trust MRK for our Swiss couverture needs.&quot;</p>
              <div className="mt-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary" />
                <div>
                  <h5 className="text-white font-bold text-xs uppercase tracking-widest">Executive Chef</h5>
                  <p className="text-[10px] text-white/40">Luxury Hotel, Mumbai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
