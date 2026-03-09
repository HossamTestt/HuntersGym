"use client";

import { site } from "@/lib/site";

export default function WhatsAppFloating({ lang }: { lang: "ar" | "en" }) {
  return (
    <div className="fixed bottom-4 right-4 z-[90] md:bottom-6 md:right-6">
      {/* Pulse Effect Background */}
      <div className="absolute inset-0 rounded-full bg-[#EEB41E] animate-ping opacity-60"></div>
      
      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#EEB41E] to-[#D1830C] px-5 py-3 text-sm font-extrabold text-black shadow-[0_0_24px_rgba(238,180,30,0.5)] transition duration-300 hover:scale-105"
        aria-label="WhatsApp"
      >
        {lang === "ar" ? "واتساب" : "WhatsApp"}
      </a>
    </div>
  );
}