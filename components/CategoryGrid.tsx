"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/products";

export default function CategoryGrid() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-20">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="font-condensed font-semibold text-[11px] tracking-[0.2em] text-accent mb-2">
            WHAT DO YOU NEED?
          </p>
          <h2 className="font-condensed font-black text-3xl md:text-4xl tracking-tight text-white">
            POPULAR CATEGORIES
          </h2>
        </div>
        <Link
          href="#"
          className="hidden md:flex items-center gap-2 font-condensed font-semibold text-[12px] tracking-[0.1em] text-brand-muted hover:text-accent transition-colors group"
        >
          VIEW ALL
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-brand-border">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <Link href={cat.href} className="group bg-brand-bg flex flex-col overflow-hidden block">
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-brand-surface">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 17vw"
                />
                {/* Hover tint */}
                <div className="absolute inset-0 bg-[#0a0a0a]/50 group-hover:bg-[#0a0a0a]/20 transition-colors duration-300" />
              </div>

              {/* Label */}
              <div className="p-3 border-t border-brand-border">
                <h3 className="font-condensed font-bold text-[13px] tracking-[0.1em] text-white group-hover:text-accent transition-colors duration-200 relative inline-block">
                  {cat.name}
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-accent transition-all duration-200 group-hover:w-full" />
                </h3>
                <p className="text-[11px] text-brand-muted mt-1">{cat.blurb}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
