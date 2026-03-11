import { create } from 'zustand';
import { CartItem, Product } from './types';

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCart = create<CartState>((set, get) => ({
  items: [],
  total: 0,
  addItem: (product) => {
    const currentItems = get().items;
    const existing = currentItems.find(i => i.id === product.id);
    if (existing) {
      set({
        items: currentItems.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
      });
    } else {
      set({ items: [...currentItems, { ...product, quantity: 1 }] });
    }
  },
  removeItem: (id) => set({ items: get().items.filter(i => i.id !== id) }),
  updateQuantity: (id, qty) => {
    if (qty <= 0) return get().removeItem(id);
    set({ items: get().items.map(i => i.id === id ? { ...i, quantity: qty } : i) });
  },
  clearCart: () => set({ items: [] }),
}));
