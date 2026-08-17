"use client";

import { testimonials } from "@/data/products";

// Duplicate for seamless loop
const doubled = [...testimonials, ...testimonials];

export default function TestimonialMarquee() {
  return (
    <section className="border-t border-brand-border py-20 overflow-hidden">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mb-12 text-center">
        <p className="font-condensed font-semibold text-[11px] tracking-[0.2em] text-accent mb-3">
          SOCIAL PROOF
        </p>
        <h2 className="font-condensed font-black text-3xl md:text-5xl tracking-tight text-white">
          OVER 2 MILLION CUSTOMERS WORLDWIDE
        </h2>
        <p className="text-brand-muted text-sm mt-3">
          {/* TODO: Update with real customer count / social proof stat */}
          Real people. Real builds. Real opinions.
        </p>
      </div>

      {/* Marquee track */}
      <div className="marquee-track relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-bg to-transparent z-10" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-bg to-transparent z-10" />

        <div
          className="marquee-inner flex gap-4"
          style={{
            animation: "marquee 40s linear infinite",
            width: "max-content",
          }}
        >
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-72 flex-shrink-0 border border-brand-border p-5 bg-brand-surface hover:border-accent/40 transition-colors duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                {/* Avatar */}
                <div className="w-8 h-8 bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-condensed font-bold text-[10px] text-accent">{t.avatar}</span>
                </div>
                <span className="font-condensed font-semibold text-[12px] tracking-[0.05em] text-brand-muted">
                  {t.handle}
                </span>
              </div>
              <p className="text-sm text-brand-text/80 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              {/* Star row */}
              <div className="flex gap-0.5 mt-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="10" height="10" viewBox="0 0 24 24" fill="#ff6a00">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
