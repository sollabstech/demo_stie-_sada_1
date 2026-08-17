"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { navLinks, BRAND_NAME } from "@/data/products";

interface NavbarProps {
  cartCount: number;
  onCartOpen: () => void;
  onSearchOpen: () => void;
}

export default function Navbar({ cartCount, onCartOpen, onSearchOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        animate={{
          backgroundColor: scrolled ? "rgba(10,10,10,0.97)" : "rgba(10,10,10,0)",
          borderBottomColor: scrolled ? "#222222" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
        style={{ borderBottomWidth: 1, borderBottomStyle: "solid" }}
      >
        <nav className="max-w-[1400px] mx-auto px-4 md:px-8 h-14 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            {/* TODO: Replace with client's actual logo image */}
            <span className="font-condensed font-black text-xl tracking-[0.15em] text-white">
              {BRAND_NAME}
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1 flex-1">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => link.mega.length > 0 && setActiveMenu(link.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={link.href}
                  className="font-condensed font-semibold text-[13px] tracking-[0.12em] text-brand-text/80 hover:text-white px-3 py-4 block transition-colors duration-150 underline-animate"
                >
                  {link.label}
                </Link>

                {/* Mega Menu */}
                <AnimatePresence>
                  {activeMenu === link.label && link.mega.length > 0 && (
                    <motion.div
                      ref={menuRef}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-0 min-w-[480px] bg-[#0f0f0f] border border-brand-border p-6 grid gap-6"
                      style={{ gridTemplateColumns: `repeat(${link.mega.length}, 1fr)` }}
                    >
                      {link.mega.map((col) => (
                        <div key={col.col}>
                          <p className="font-condensed font-bold text-[11px] tracking-[0.15em] text-accent mb-3">
                            {col.col}
                          </p>
                          <ul className="space-y-2">
                            {col.links.map((l) => (
                              <li key={l}>
                                <Link
                                  href="#"
                                  className="font-sans text-[13px] text-brand-text/70 hover:text-white transition-colors underline-animate"
                                >
                                  {l}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Icon cluster */}
          <div className="flex items-center gap-1">
            {/* Search */}
            <button
              onClick={onSearchOpen}
              aria-label="Search"
              className="p-2 text-brand-text/70 hover:text-white transition-colors"
            >
              <SearchIcon />
            </button>

            {/* Account */}
            <button aria-label="Account" className="p-2 text-brand-text/70 hover:text-white transition-colors hidden md:flex">
              <AccountIcon />
            </button>

            {/* Cart */}
            <button
              onClick={onCartOpen}
              aria-label="Cart"
              className="p-2 relative text-brand-text/70 hover:text-white transition-colors"
            >
              <CartIcon />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-accent text-white text-[9px] font-bold font-condensed w-4 h-4 flex items-center justify-center leading-none">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="md:hidden p-2 text-brand-text/70 hover:text-white transition-colors ml-1"
            >
              <HamburgerIcon />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 z-[70] w-80 bg-[#0a0a0a] border-r border-brand-border flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-brand-border">
                <span className="font-condensed font-black text-xl tracking-[0.15em] text-white">
                  {BRAND_NAME}
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-brand-text/60 hover:text-white"
                >
                  <CloseIcon />
                </button>
              </div>
              <ul className="flex-1 overflow-y-auto p-4 space-y-1">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-condensed font-bold tracking-[0.12em] text-sm text-brand-text/80 hover:text-white hover:text-accent px-3 py-3 block border-b border-brand-border/40 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────

function SearchIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5L21 21" strokeLinecap="round" />
    </svg>
  );
}
function AccountIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
    </svg>
  );
}
function CartIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}
function HamburgerIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
    </svg>
  );
}
