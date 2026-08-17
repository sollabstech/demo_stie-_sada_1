"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryGrid from "@/components/CategoryGrid";
import PromoSections from "@/components/PromoSection";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import CategoryMegaSection from "@/components/CategoryMegaSection";
import CartDrawer from "@/components/CartDrawer";
import SearchOverlay from "@/components/SearchOverlay";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { mockCartItems } from "@/data/products";

export default function HomePage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const cartCount = mockCartItems.reduce((s, i) => s + i.qty, 0);

  return (
    <>
      <Navbar
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        onSearchOpen={() => setSearchOpen(true)}
      />

      <main>
        {/* ── Hero ───────────────────────────────── */}
        <HeroCarousel />

        {/* ── Trust bar ─────────────────────────── */}
        <div className="border-b border-brand-border bg-brand-surface">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 flex flex-wrap items-center justify-center md:justify-between gap-4">
            {[
              { icon: "⚡", text: "FREE SHIPPING OVER $49" },
              { icon: "↩", text: "30-DAY RETURNS" },
              { icon: "✂", text: "PRECISION-CUT GUARANTEE" },
              { icon: "★", text: "4.9 AVERAGE RATING" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2">
                <span className="text-accent text-sm">{b.icon}</span>
                <span className="font-condensed font-semibold text-[11px] tracking-[0.14em] text-brand-muted">
                  {b.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Category Grid ──────────────────────── */}
        <CategoryGrid />

        {/* ── Promo Sections ────────────────────── */}
        <PromoSections />

        {/* ── Testimonial Marquee ───────────────── */}
        <TestimonialMarquee />

        {/* ── Category Mega Sections ────────────── */}
        <CategoryMegaSection />

        {/* ── Newsletter CTA ────────────────────── */}
        <section className="border-t border-brand-border py-20">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
            <p className="font-condensed font-semibold text-[11px] tracking-[0.2em] text-accent mb-3">
              STAY IN THE LOOP
            </p>
            <h2 className="font-condensed font-black text-3xl md:text-5xl tracking-tight text-white mb-4">
              NEW DROPS. EXCLUSIVE DEALS.
            </h2>
            <p className="text-brand-muted text-sm mb-8 max-w-md mx-auto">
              No spam. Just the good stuff — new textures, limited editions, and the occasional secret sale.
            </p>
            <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                placeholder="YOUR@EMAIL.COM"
                className="flex-1 bg-brand-surface border border-brand-border px-5 py-4 font-condensed font-semibold text-[12px] tracking-[0.1em] text-white placeholder-brand-muted/50 outline-none focus:border-accent transition-colors"
                aria-label="Email address"
              />
              <button className="bg-accent text-white font-condensed font-bold text-[12px] tracking-[0.12em] px-8 py-4 hover:bg-accent-hover active:scale-[0.98] transition-all duration-150 border border-accent whitespace-nowrap">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* ── Overlays ───────────────────────────────── */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <ScrollToTop />
    </>
  );
}
