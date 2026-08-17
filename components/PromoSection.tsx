"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { promoSections } from "@/data/products";

export default function PromoSections() {
  return (
    <section className="border-t border-brand-border">
      {promoSections.map((promo) => (
        <div key={promo.id} className="border-b border-brand-border">
          <div
            className={`max-w-[1400px] mx-auto flex flex-col ${
              promo.imageLeft ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: promo.imageLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="w-full md:w-1/2 aspect-video md:aspect-auto md:min-h-[440px] relative overflow-hidden bg-brand-surface border-b md:border-b-0 border-brand-border"
            >
              <Image
                src={promo.image}
                alt={promo.headline}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient blend into dark bg */}
              <div
                className={`absolute inset-0 bg-gradient-to-${
                  promo.imageLeft ? "r" : "l"
                } from-transparent to-[#0a0a0a]/60`}
              />

              {/* Floating animation overlay element */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 right-6 border border-accent/30 bg-[#0a0a0a]/80 backdrop-blur-sm px-4 py-2"
              >
                <p className="font-condensed font-bold text-[10px] tracking-[0.18em] text-accent">
                  {promo.eyebrow}
                </p>
              </motion.div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full md:w-1/2 flex items-center px-8 md:px-14 py-14 bg-[#0a0a0a]"
            >
              <div className="max-w-md">
                <p className="font-condensed font-semibold text-[11px] tracking-[0.2em] text-accent mb-4">
                  {promo.eyebrow}
                </p>
                <h2 className="font-condensed font-black text-3xl md:text-4xl lg:text-5xl leading-none tracking-tight text-white whitespace-pre-line mb-5">
                  {promo.headline}
                </h2>
                <p className="text-white/50 text-sm md:text-base leading-relaxed mb-8">
                  {promo.description}
                </p>
                <Link
                  href={promo.ctaHref}
                  className="inline-flex items-center gap-3 font-condensed font-bold text-[13px] tracking-[0.12em] text-white border border-white/30 px-7 py-3 hover:bg-white hover:text-[#0a0a0a] transition-colors duration-150 group"
                >
                  {promo.ctaText}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
}
