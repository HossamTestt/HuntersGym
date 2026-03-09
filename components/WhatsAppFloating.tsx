"use client";

import { site } from "@/lib/site";

export default function WhatsAppFloating() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-[90] inline-flex items-center justify-center rounded-full bg-[#EEB41E] px-5 py-3 text-sm font-extrabold text-black shadow-[0_0_24px_rgba(238,180,30,0.25)] transition duration-300 hover:scale-105 hover:bg-[#D1830C] md:bottom-6 md:right-6"
      aria-label="WhatsApp"
    >
      WhatsApp
    </a>
  );
}