"use client";
import { useCart } from '@/lib/store';
import { formatCurrency } from '@/lib/utils';
import { Trash2, Plus, Minus, ShieldCheck, Truck } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCart();
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (items.length === 0) {
    return (
      <div className="pt-40 pb-40 container mx-auto px-6 text-center">
        <h1 className="text-4xl font-serif text-white mb-6">Your Cart is Empty</h1>
        <p className="text-white/40 mb-10">Luxury ingredients are just a click away.</p>
        <Link href="/shop" className="bg-primary px-10 py-4 text-background font-bold tracking-[0.2em] uppercase text-xs">
          Explore Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif text-white mb-12 uppercase">Your Selection</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            {items.map((item) => (
              <div key={item.id} className="flex gap-8 pb-8 border-b border-white/5 group">
                <div className="w-32 h-32 bg-secondary shrink-0 overflow-hidden">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="grow">
                  <div className="flex justify-between mb-2">
                    <div>
                      <p className="text-[10px] text-primary font-bold uppercase tracking-widest">{item.brand}</p>
                      <h3 className="text-white font-medium text-lg">{item.name}</h3>
                    </div>
                    <p className="text-white font-serif">{formatCurrency(item.price * item.quantity)}</p>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center border border-white/10">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:text-primary transition-colors">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 text-sm font-bold text-white">{item.quantity}</span>
                      <button 
                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:text-primary transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-white/20 hover:text-red-500 transition-colors flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest">
                      <Trash2 className="w-4 h-4" /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside>
            <div className="glass-morphism p-8 sticky top-32">
              <h3 className="text-lg text-white font-serif mb-6">Order Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-white/60 text-sm">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-white/60 text-sm">
                  <span>GST (Tax)</span>
                  <span className="text-green-500">Calculated at Checkout</span>
                </div>
                <div className="flex justify-between text-white/60 text-sm">
                  <span>Delivery</span>
                  <span>Free (Mumbai)</span>
                </div>
                <div className="h-[1px] bg-white/5 my-4" />
                <div className="flex justify-between text-white text-lg font-serif">
                  <span>Total</span>
                  <span className="text-primary">{formatCurrency(subtotal)}</span>
                </div>
              </div>

              <button className="w-full bg-primary py-4 text-background font-bold tracking-widest uppercase text-xs hover:bg-accent transition-colors mb-6">
                Proceed to Checkout
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/40">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Secure Gateway Payment</span>
                </div>
                <div className="flex items-center gap-3 text-white/40">
                  <Truck className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Cold-Chain Assured Delivery</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
