"use client";
import React from 'react';
import { Product } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, ExternalLink } from 'lucide-react';
import { useCart } from '@/lib/store';
import Link from 'next/link';

export const ProductCard = ({ product }: { product: Product }) => {
  const addItem = useCart((state) => state.addItem);

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-secondary border border-white/5 overflow-hidden"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <button 
            onClick={() => addItem(product)}
            className="p-3 bg-primary text-background rounded-full hover:scale-110 transition-transform"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
          <Link 
            href={`/products/${product.slug}`}
            className="p-3 bg-white text-background rounded-full hover:scale-110 transition-transform"
          >
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
        {product.isBestseller && (
          <span className="absolute top-4 left-4 bg-primary text-background px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
            Bestseller
          </span>
        )}
      </div>

      <div className="p-6">
        <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">{product.brand}</p>
        <h3 className="text-white font-medium text-lg leading-tight mb-3 line-clamp-1">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-white text-lg font-serif">{formatCurrency(product.price)}</span>
          <span className="text-white/40 text-[10px] uppercase font-bold tracking-tighter">Bestseller</span>
        </div>
      </div>
    </motion.div>
  );
};
