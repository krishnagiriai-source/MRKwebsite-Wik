"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Cinematic Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
        <img 
          src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-60 scale-105"
          alt="Luxury ingredients"
        />
      </div>

      <div className="container relative z-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-primary font-bold tracking-[0.3em] text-sm uppercase mb-4 block">
            Established 1997 | Mumbai
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 tracking-tight leading-tight">
             Source of Global <br />
            <span className="italic text-primary">Gourmet</span> Excellence
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Distributing the world&apos;s finest ingredients to India&apos;s Michelin-standard kitchens and gourmet connoisseurs.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link 
              href="/shop" 
              className="w-full md:w-auto bg-primary text-background px-10 py-4 rounded-sm font-bold tracking-widest uppercase text-sm hover:bg-accent transition-all duration-300 transform hover:scale-105"
            >
              Order Online
            </Link>
            <Link 
              href="/b2b-portal" 
              className="w-full md:w-auto border border-primary/50 text-primary px-10 py-4 rounded-sm font-bold tracking-widest uppercase text-sm hover:bg-primary/10 transition-all duration-300"
            >
              Request Bulk Quote
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Scroll Link */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-white/40 uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};
