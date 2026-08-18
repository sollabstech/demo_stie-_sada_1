"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { heroSlides } from "@/data/products";

const SLIDE_INTERVAL = 6000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = useCallback((idx: number) => {
    setCurrent((idx + heroSlides.length) % heroSlides.length);
    setProgress(0);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (!isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
      return;
    }
    setProgress(0);
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % heroSlides.length);
      setProgress(0);
    }, SLIDE_INTERVAL);
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + 100 / (SLIDE_INTERVAL / 50), 100));
    }, 50);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [isPlaying, current]);

  const touchStartX = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) { if (dx < 0) next(); else prev(); }
  };

  const slide = heroSlides[current];

  return (
    <section
      className="relative w-full h-[70vh] min-h-[520px] overflow-hidden bg-[#0a0a0a]"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onFocus={() => setIsPlaying(false)}
      onBlur={() => setIsPlaying(true)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Hero carousel"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
          className="absolute inset-0"
        >
          {/* Full-bleed background image */}
          <Image
            src={slide.image}
            alt={slide.headline}
            fill
            priority={slide.id === 1}
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Dark overlay gradient — left heavy for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />

          {/* Text content */}
          <div className="relative z-10 h-full flex flex-col justify-center max-w-[1400px] mx-auto px-6 md:px-16">
            <div className="max-w-xl">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.4 }}
                className="inline-block font-condensed font-semibold text-[11px] tracking-[0.22em] text-accent mb-4 border border-accent/40 px-3 py-1"
              >
                {slide.accentTag}
              </motion.span>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="font-condensed font-medium text-[13px] tracking-[0.18em] text-white/60 mb-3"
              >
                {slide.eyebrow}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.17, duration: 0.45 }}
                className="font-condensed font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight text-white whitespace-pre-line mb-6"
              >
                {slide.headline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.4 }}
                className="text-white/60 text-base md:text-lg leading-relaxed mb-9 max-w-md"
              >
                {slide.description}
              </motion.p>
              <motion.a
                href={slide.ctaHref}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block bg-accent text-white font-condensed font-bold text-sm tracking-[0.14em] px-10 py-4 hover:bg-white hover:text-[#0a0a0a] transition-colors duration-150"
              >
                {slide.ctaText}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress bars */}
      <div className="absolute bottom-6 left-6 md:left-16 z-20 flex items-center gap-4">
        <div className="flex gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-[3px] w-12 bg-white/20 overflow-hidden relative"
            >
              <motion.div
                className="absolute inset-y-0 left-0 bg-accent"
                animate={{ width: i === current ? `${progress}%` : i < current ? "100%" : "0%" }}
                transition={{ duration: 0.05 }}
              />
            </button>
          ))}
        </div>
        <button
          onClick={() => setIsPlaying((p) => !p)}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="text-white/40 hover:text-white transition-colors"
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>

      {/* Arrow controls */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-white/20 text-white/60 hover:text-white hover:border-white/60 transition-all flex items-center justify-center backdrop-blur-sm bg-black/20"
      >
        <ChevronLeftIcon />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-white/20 text-white/60 hover:text-white hover:border-white/60 transition-all flex items-center justify-center backdrop-blur-sm bg-black/20"
      >
        <ChevronRightIcon />
      </button>
    </section>
  );
}

function PauseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" />
    </svg>
  );
}
function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5,3 19,12 5,21" />
    </svg>
  );
}
function ChevronLeftIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChevronRightIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
