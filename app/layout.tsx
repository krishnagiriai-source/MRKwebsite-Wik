import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "MRK Foods | Premium Imported Gourmet Distributor India",
  description: "Official distributor for Lee Kum Kee, Felchlin, and Urbani Truffles in India. Supplying premium ingredients to Hotels, Restaurants, and Gourmet Chefs since 1997.",
  openGraph: {
    title: "MRK Foods - The Gold Standard of Gourmet Ingredients",
    description: "Discover premium imported foods for high-end hospitality and direct gourmet shopping.",
    images: ["https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1200"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} bg-background font-sans text-foreground antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}

function Chatbot() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="bg-primary w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
         <svg className="w-6 h-6 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
         </svg>
      </button>
    </div>
  )
}
