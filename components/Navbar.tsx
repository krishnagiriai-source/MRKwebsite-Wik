"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';
import { useCart } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItems = useCart((state) => state.items);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-primary/20 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="text-primary">MRK</span>
          <span className="text-white">FOODS</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {['Shop', 'Brands', 'Industries', 'B2B Portal', 'Chef Resources'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase().replace(' ', '-')}`} 
              className="text-sm font-medium text-white/80 hover:text-primary transition-colors tracking-wide uppercase"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-white hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Link href="/cart" className="relative text-white hover:text-primary transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-background text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
          <button className="hidden md:block bg-primary px-6 py-2 text-background text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors rounded-sm">
            Login
          </button>
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary border-b border-primary/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {['Shop', 'Brands', 'Industries', 'B2B Portal', 'Chef Resources'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-lg font-medium text-white">
                  {item}
                </Link>
              ))}
              <hr className="border-white/10" />
              <button className="text-primary text-left font-bold">LOGIN / REGISTER</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
