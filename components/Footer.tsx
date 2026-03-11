import Link from 'next/link';
import { Instagram, Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/20 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
              <span className="text-primary">MRK</span>
              <span className="text-white">FOODS</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Direct importers and distributors of world-class gourmet food. Supplying India&apos;s top kitchens since 1997.
            </p>
            <div className="flex items-center space-x-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <Icon key={i} className="w-5 h-5 text-white/40 hover:text-primary cursor-pointer transition-colors" />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/40">
              {['Shop All', 'Bulk Orders', 'Brand Partners', 'Industry Solutions', 'Chef Resources'].map(item => (
                <li key={item}><Link href="#" className="hover:text-primary transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-8">Industries</h4>
            <ul className="space-y-4 text-sm text-white/40">
              {['Five Star Hotels', 'Fine Dining Restaurants', 'Artisanal Bakeries', 'Premium Caterers', 'Bulk Distribution'].map(item => (
                <li key={item}><Link href="#" className="hover:text-primary transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-8">Contact</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>Mumbai, India - Corporate HQ</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 22 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@mrkfoods.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-[10px] text-white/20 uppercase tracking-widest">
            © 2024 MRK Foods Private Limited. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-white/20 uppercase tracking-widest">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>GST Info</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
