"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { site } from "@/lib/site";
import { Menu, X } from "lucide-react";

export default function Navbar({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass =
    "relative text-white/80 transition duration-300 hover:text-[#EEB41E] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#EEB41E] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-[#EEB41E]/15 bg-[#03070b]/92 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            : "bg-[#03070b]/80 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <a href="#home" className="group flex items-center gap-3 md:gap-4">
            <img
              src="/logo.png"
              alt="Hunters Gym"
              className={`w-auto shrink-0 object-contain transition-all duration-500 ${
                scrolled ? "h-12 md:h-16" : "h-14 md:h-20"
              } drop-shadow-[0_0_28px_rgba(238,180,30,0.35)] group-hover:scale-105`}
            />

            <div className="flex flex-col leading-tight">
              <p className="font-[var(--font-oswald)] text-xl font-bold uppercase tracking-tight text-white md:text-3xl">
                Hunters Gym
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.38em] text-[#EEB41E] md:text-xs">
                {site.slogan}
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            <a href="#memberships" className={navLinkClass}>
              {lang === "ar" ? "العضويات" : "Memberships"}
            </a>
            <a href="#gallery" className={navLinkClass}>
              {lang === "ar" ? "الجاليري" : "Gallery"}
            </a>
            <a href="#contact" className={navLinkClass}>
              {lang === "ar" ? "تواصل" : "Contact"}
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 font-semibold text-white transition hover:bg-white/10"
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            >
              {lang === "ar" ? "EN" : "AR"}
            </button>

            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-[#EEB41E] px-5 py-2 font-bold text-black shadow-[0_0_18px_rgba(238,180,30,0.28)] transition duration-300 hover:scale-105 hover:bg-[#D1830C]"
            >
              WhatsApp
            </a>
          </div>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#EEB41E]/30 to-transparent" />
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className={`absolute top-0 h-full w-[82%] max-w-[340px] bg-[#03070b] p-6 shadow-[0_0_30px_rgba(0,0,0,0.35)] ${
              lang === "ar" ? "right-0" : "left-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-8 flex items-center justify-between">
              <p className="font-[var(--font-oswald)] text-2xl font-bold uppercase text-white">
                Menu
              </p>
              <button
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-white"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col gap-5">
              <a
                href="#memberships"
                className="text-lg font-semibold text-white/85 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {lang === "ar" ? "العضويات" : "Memberships"}
              </a>

              <a
                href="#gallery"
                className="text-lg font-semibold text-white/85 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {lang === "ar" ? "الجاليري" : "Gallery"}
              </a>

              <a
                href="#contact"
                className="text-lg font-semibold text-white/85 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {lang === "ar" ? "تواصل" : "Contact"}
              </a>

              <button
                className="mt-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-semibold text-white transition hover:bg-white/10"
                onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              >
                {lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
              </button>

              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-[#EEB41E] px-5 py-3 text-center font-bold text-black transition hover:bg-[#D1830C]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}