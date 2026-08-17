"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { megaCategories } from "@/data/products";

export default function CategoryMegaSection() {
  return (
    <section className="border-t border-brand-border py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 space-y-16">
        {megaCategories.map((cat, ci) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: ci * 0.08 }}
          >
            <div className="flex items-end justify-between mb-6 border-b border-brand-border pb-4">
              <h2 className="font-condensed font-black text-2xl md:text-3xl tracking-tight text-white">
                {cat.title}
              </h2>
              <Link
                href="#"
                className="font-condensed font-semibold text-[12px] tracking-[0.1em] text-brand-muted hover:text-accent transition-colors flex items-center gap-1 group"
              >
                VIEW ALL
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-brand-border">
              {cat.items.map((item, ii) => (
                <Link
                  key={ii}
                  href={item.href}
                  className="group bg-[#0a0a0a] flex flex-col overflow-hidden hover:-translate-y-0.5 transition-transform duration-200 border border-transparent hover:border-accent/30"
                >
                  {/* Image */}
                  <div className="relative aspect-video bg-brand-surface overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[#0a0a0a]/40 group-hover:bg-[#0a0a0a]/10 transition-colors duration-300" />
                  </div>

                  {/* Label */}
                  <div className="p-4 border-t border-brand-border flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-condensed font-bold text-sm tracking-[0.08em] text-white group-hover:text-accent transition-colors duration-150">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-brand-muted mt-1">{item.sub}</p>
                    </div>
                    <p className="mt-4 text-[11px] font-condensed font-semibold tracking-[0.1em] text-brand-muted group-hover:text-accent transition-colors flex items-center gap-1">
                      SHOP NOW
                      <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
