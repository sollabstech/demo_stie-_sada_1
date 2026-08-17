"use client";

import Link from "next/link";
import { BRAND_NAME } from "@/data/products";

const footerLinks = {
  PRODUCTS: ["Skins", "Cases", "Screen Protectors", "Accessories", "New Arrivals", "Sale"],
  SUPPORT: ["Track Your Order", "Shipping & Delivery", "Returns & Exchanges", "FAQ", "Contact Us"],
  COMPANY: ["About", "Careers", "Press", "Sustainability", "Affiliates"],
  LEGAL: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-bg">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Main grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            {/* TODO: Replace with client logo */}
            <span className="font-condensed font-black text-xl tracking-[0.15em] text-white block mb-4">
              {BRAND_NAME}
            </span>
            <p className="text-[12px] text-brand-muted leading-relaxed max-w-xs">
              {/* TODO: Replace with client tagline */}
              Precision-cut protection for the gadgets you refuse to baby.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {["IG", "TW", "YT", "TK"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-8 h-8 border border-brand-border text-brand-muted hover:border-accent hover:text-accent transition-colors flex items-center justify-center font-condensed font-bold text-[10px] tracking-wider"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-condensed font-bold text-[11px] tracking-[0.18em] text-accent mb-4">
                {heading}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[12px] text-brand-muted hover:text-white transition-colors underline-animate"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-border py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-brand-muted">
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
            {/* TODO: Update with client's legal entity name */}
          </p>
          <div className="flex items-center gap-4">
            {/* Payment icons placeholder */}
            {["VISA", "MC", "AMEX", "PAYPAL"].map((p) => (
              <span key={p} className="font-condensed font-bold text-[9px] tracking-widest text-brand-muted/40 border border-brand-border/40 px-2 py-1">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
