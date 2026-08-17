"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { mockCartItems } from "@/data/products";
import { useEffect } from "react";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const subtotal = mockCartItems.reduce((s, i) => s + i.price * i.qty, 0);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed top-0 right-0 bottom-0 z-[90] w-full max-w-sm bg-[#0f0f0f] border-l border-brand-border flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-brand-border">
              <h2 className="font-condensed font-black text-lg tracking-[0.1em] text-white">
                YOUR CART
                <span className="ml-2 text-accent text-sm">
                  ({mockCartItems.reduce((s, i) => s + i.qty, 0)})
                </span>
              </h2>
              <button
                onClick={onClose}
                aria-label="Close cart"
                className="text-brand-muted hover:text-white transition-colors"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto divide-y divide-brand-border">
              {mockCartItems.map((item) => (
                <div key={item.id} className="px-6 py-5 flex gap-4">
                  {/* Product image */}
                  <div className="w-16 h-16 flex-shrink-0 relative overflow-hidden bg-brand-surface border border-brand-border">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-condensed font-bold text-sm tracking-[0.06em] text-white truncate">
                      {item.name}
                    </p>
                    <p className="text-[11px] text-brand-muted mt-0.5">{item.variant}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-brand-border">
                        <button className="w-7 h-7 text-brand-muted hover:text-white transition-colors text-lg leading-none flex items-center justify-center">−</button>
                        <span className="w-8 text-center text-sm font-condensed font-bold text-white">{item.qty}</span>
                        <button className="w-7 h-7 text-brand-muted hover:text-white transition-colors text-lg leading-none flex items-center justify-center">+</button>
                      </div>
                      <span className="font-condensed font-bold text-sm text-white">
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-brand-border px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-condensed font-semibold text-sm tracking-[0.08em] text-brand-muted">SUBTOTAL</span>
                <span className="font-condensed font-black text-xl text-white">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-[11px] text-brand-muted">Shipping & taxes calculated at checkout.</p>
              <button className="w-full bg-accent text-white font-condensed font-bold text-sm tracking-[0.12em] py-4 hover:bg-orange-500 active:scale-[0.98] transition-all duration-150">
                CHECKOUT →
              </button>
              <button
                onClick={onClose}
                className="w-full border border-brand-border text-white/60 font-condensed font-semibold text-[12px] tracking-[0.12em] py-3 hover:bg-brand-surface transition-colors"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
