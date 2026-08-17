"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

const SUGGESTIONS = [
  "iPhone 15 Pro skin",
  "MacBook Air wrap",
  "PS5 skin",
  "Samsung Galaxy case",
  "Steam Deck skin",
  "Carbon fiber texture",
];

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col items-center pt-28 px-4"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="w-full max-w-2xl"
          >
            {/* Search input */}
            <div className="relative border border-brand-border flex items-center bg-brand-surface">
              <svg className="ml-4 text-brand-muted flex-shrink-0" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <path d="M16.5 16.5L21 21" strokeLinecap="round" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products…"
                className="flex-1 bg-transparent text-white placeholder-brand-muted text-lg font-sans px-4 py-5 outline-none"
                aria-label="Search"
              />
              {query && (
                <button onClick={() => setQuery("")} className="px-4 text-brand-muted hover:text-white">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                  </svg>
                </button>
              )}
              <button
                onClick={onClose}
                className="px-5 py-5 border-l border-brand-border text-brand-muted hover:text-white font-condensed font-semibold text-[12px] tracking-[0.12em] transition-colors"
              >
                ESC
              </button>
            </div>

            {/* Suggestions */}
            {!query && (
              <div className="mt-6">
                <p className="font-condensed font-semibold text-[11px] tracking-[0.18em] text-accent mb-3">
                  POPULAR SEARCHES
                </p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => setQuery(s)}
                      className="font-condensed font-semibold text-[12px] tracking-[0.06em] text-brand-text/70 border border-brand-border px-3 py-2 hover:border-accent hover:text-white transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {query && (
              <div className="mt-6 border border-brand-border bg-brand-surface p-4">
                <p className="font-condensed text-sm text-brand-muted tracking-wide">
                  {/* TODO: Wire up real search results */}
                  Showing placeholder results for &ldquo;<span className="text-white">{query}</span>&rdquo;
                </p>
                <p className="text-[11px] text-brand-muted/60 mt-2">
                  Connect to your product catalog to display live results.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
