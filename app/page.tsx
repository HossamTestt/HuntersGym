"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Music2, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { site } from "@/lib/site";
import Navbar from "@/components/Navbar";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import GallerySlider from "@/components/GallerySlider";

const galleryImages = [
  "/gallery/g1.jpg",
  "/gallery/g2.jpg",
  "/gallery/g3.jpg",
  "/gallery/g4.jpg",
  "/gallery/g5.jpg",
  "/gallery/g6.jpg",
  "/gallery/g7.jpg",
  "/gallery/g8.jpg",
  "/gallery/g9.jpg",
  "/gallery/g10.jpg",
];

export default function Page() {
  const [lang, setLang] = useState<Lang>("en");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const dir = useMemo(() => (lang === "ar" ? "rtl" : "ltr"), [lang]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const goPrevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1
    );
  };

  const goNextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      selectedImageIndex === galleryImages.length - 1 ? 0 : selectedImageIndex + 1
    );
  };

  const services =
    lang === "ar"
      ? [
          "أجهزة احترافية",
          "أجواء تدريب قوية",
          "طاقة تدريب محفزة",
          "تحليل InBody",
          "سبا ومنطقة استشفاء",
          "تدريب احترافي",
          "تدريب شخصي",
          "حصص تدريب جماعي",
        ]
      : [
          "Premium Equipment",
          "High Energy Atmosphere",
          "Motivating Training Energy",
          "InBody Analysis",
          "Spa & Recovery Area",
          "Professional Coaching",
          "Personal Training",
          "Group Training Classes",
        ];

  const memberships = [
    {
      nameEn: "1 Month Package",
      nameAr: "باقة شهر",
      price: "2000 L.E",
      featuresEn: [
        "1 week freezing",
        "1 orientation session",
        "1 in-Body assessment",
        "2 free invitations for your friends",
        "Unlimited access to the spa",
        "Unlimited access for all group training classes",
      ],
      featuresAr: [
        "أسبوع تجميد",
        "جلسة تعريفية واحدة",
        "قياس In-Body واحد",
        "دعوتان مجانيتان لأصدقائك",
        "دخول غير محدود للسبا",
        "دخول غير محدود لجميع حصص الجروب",
      ],
    },
    {
      nameEn: "3 Months Package",
      nameAr: "باقة 3 شهور",
      price: "4500 L.E",
      featuresEn: [
        "2 weeks freezing",
        "2 orientation sessions",
        "2 in-Body assessments",
        "6 free invitations for your friends",
        "Unlimited access to the spa",
        "Unlimited access for all group training classes",
      ],
      featuresAr: [
        "أسبوعان تجميد",
        "جلستان تعريفيتان",
        "قياسان In-Body",
        "6 دعوات مجانية لأصدقائك",
        "دخول غير محدود للسبا",
        "دخول غير محدود لجميع حصص الجروب",
      ],
    },
    {
      nameEn: "6 Months Package",
      nameAr: "باقة 6 شهور",
      price: "6000 L.E",
      featuresEn: [
        "4 weeks freezing",
        "4 orientation sessions",
        "6 in-Body assessments",
        "15 free invitations for your friends",
        "Unlimited access to the spa",
        "Unlimited access for all group training classes",
      ],
      featuresAr: [
        "4 أسابيع تجميد",
        "4 جلسات تعريفية",
        "6 قياسات In-Body",
        "15 دعوة مجانية لأصدقائك",
        "دخول غير محدود للسبا",
        "دخول غير محدود لجميع حصص الجروب",
      ],
    },
    {
      nameEn: "1 Year Package",
      nameAr: "باقة سنة",
      price: "9000 L.E",
      featuresEn: [
        "8 weeks freezing",
        "8 orientation sessions",
        "12 in-Body assessments",
        "20 free invitations for your friends",
        "Unlimited access to the spa",
        "Unlimited access for all group training classes",
      ],
      featuresAr: [
        "8 أسابيع تجميد",
        "8 جلسات تعريفية",
        "12 قياس In-Body",
        "20 دعوة مجانية لأصدقائك",
        "دخول غير محدود للسبا",
        "دخول غير محدود لجميع حصص الجروب",
      ],
    },
  ];

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#03070b]">
        <div className="text-center">
          <img
            src="/logo.png"
            alt="Hunters Gym"
            className="mx-auto h-24 w-auto animate-pulse drop-shadow-[0_0_30px_rgba(238,180,30,0.35)]"
          />
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.4em] text-[#EEB41E]">
            Train Like a Hunter
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#03070b] text-white" dir={dir}>
      <Navbar lang={lang} setLang={setLang} />
      <WhatsAppFloating />

      <section id="home" className="scroll-mt-28 mx-auto max-w-6xl px-4 pt-8 md:pt-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#05090d] px-6 py-8 shadow-[0_0_60px_rgba(0,0,0,0.45)] transition duration-500 hover:scale-[1.01] md:px-10 md:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(238,180,30,0.07),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(238,180,30,0.07),transparent_22%)]" />
          <div className="pointer-events-none absolute -left-8 top-10 h-40 w-40 animate-pulse rounded-full bg-[#EEB41E]/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-10 h-44 w-44 animate-pulse rounded-full bg-[#EEB41E]/10 blur-3xl [animation-delay:700ms]" />

          <img
            src="/logo-watermark.png"
            alt=""
            className={`pointer-events-none absolute top-1/2 z-0 hidden -translate-y-1/2 opacity-50 blur-[1px] md:block lg:w-[440px] ${
              lang === "ar"
                ? "left-[-20px] w-[340px]"
                : "right-[-20px] w-[340px]"
            }`}
          />

          <div
            className={`relative z-10 max-w-3xl ${
              lang === "ar" ? "ml-auto text-right" : "text-left"
            }`}
            dir={lang === "ar" ? "rtl" : "ltr"}
          >
            <p className="text-xs font-bold uppercase tracking-[0.38em] text-[#EEB41E] md:text-sm">
              Hunters Gym • Mokattam
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-4 font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.92] tracking-tight text-white md:text-7xl"
            >
              {lang === "ar" ? (
                <>
                  اتدرّب بعقلية
                  <span className="block text-[#f8f8f8] drop-shadow-[0_0_18px_rgba(255,255,255,0.06)]">
                    الصياد
                  </span>
                </>
              ) : (
                <>
                  Train Like a
                  <span className="block text-[#f8f8f8] drop-shadow-[0_0_18px_rgba(255,255,255,0.06)]">
                    Hunter
                  </span>
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-5 max-w-2xl text-base leading-8 text-white/72 md:text-lg md:leading-9"
            >
              {lang === "ar"
                ? "مكان مصمم للقوة والانضباط والتحول الحقيقي. أجهزة قوية، أجواء احترافية، وتجربة تدريب تدفعك للأمام."
                : "Built for strength, discipline, and elite transformation. Powerful equipment, premium atmosphere, and a training experience designed to push you further."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-7 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-[#EEB41E] px-7 py-4 text-base font-extrabold text-black transition duration-300 hover:scale-[1.03] hover:bg-[#D1830C] hover:shadow-[0_0_24px_rgba(238,180,30,0.28)]"
              >
                {lang === "ar" ? "احجز عبر واتساب" : "Join via WhatsApp"}
              </a>

              <a
                href="#memberships"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white transition duration-300 hover:scale-[1.03] hover:bg-white/10"
              >
                {lang === "ar" ? "شوف العضويات" : "See memberships"}
              </a>
            </motion.div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {services.map((item, i) => (
                <div
                  key={item}
                  className={`rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-bold text-white/90 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.18)] transition duration-300 hover:border-[#EEB41E]/35 hover:bg-white/[0.07] hover:[transform:rotateX(4deg)_rotateY(-4deg)_translateY(-6px)] ${
                    i === 7 ? "md:col-start-2" : ""
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="memberships" className="scroll-mt-28 mx-auto max-w-6xl px-4 pt-14">
        <div className="mb-7">
          <h2 className="font-[var(--font-oswald)] text-4xl font-bold uppercase text-white md:text-5xl">
            {lang === "ar" ? "العضويات" : "Membership Plans"}
          </h2>
          <p className="mt-2 max-w-2xl text-white/65">
            {lang === "ar"
              ? "اختر الباقة المناسبة لهدفك واستمتع بتجربة تدريب متكاملة داخل Hunters Gym."
              : "Choose the package that fits your goals and enjoy a complete premium training experience at Hunters Gym."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {memberships.map((pkg) => (
            <div
              key={pkg.nameEn}
              className="rounded-[28px] border border-white/10 bg-[#0b1117]/80 p-6 shadow-[0_0_30px_rgba(0,0,0,0.18)] transition duration-300 hover:border-[#EEB41E]/40 hover:shadow-[0_0_30px_rgba(238,180,30,0.10)] hover:[transform:rotateX(3deg)_rotateY(-3deg)_translateY(-8px)] md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-extrabold text-[#EEB41E]">
                    {lang === "ar" ? pkg.nameAr : pkg.nameEn}
                  </p>
                  <p className="mt-3 text-4xl font-black tracking-tight text-white">
                    {pkg.price}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#EEB41E]/20 bg-[#EEB41E]/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#EEB41E]">
                  {lang === "ar" ? "مميز" : "Premium"}
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <ul className="mt-6 space-y-3 text-sm leading-7 text-white/85">
                {(lang === "ar" ? pkg.featuresAr : pkg.featuresEn).map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-[#EEB41E]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-[#EEB41E] px-5 py-3 text-sm font-extrabold text-black transition duration-300 hover:scale-[1.02] hover:bg-[#D1830C] hover:shadow-[0_0_24px_rgba(238,180,30,0.22)]"
              >
                {lang === "ar" ? "احجز عبر واتساب" : "Join via WhatsApp"}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="scroll-mt-28 mx-auto max-w-6xl px-4 pt-14">
        <div className={lang === "ar" ? "text-right" : "text-left"}>
          <h2 className="font-[var(--font-oswald)] text-4xl font-bold uppercase text-white md:text-5xl">
            {lang === "ar" ? "الجاليري" : "Gallery"}
          </h2>

          <p className="mt-2 text-white/65">
            {lang === "ar"
              ? "لقطات من أجواء Hunters Gym"
              : "A look inside Hunters Gym"}
          </p>
        </div>

        <GallerySlider images={galleryImages} onImageClick={setSelectedImageIndex} />
      </section>

      <section id="contact" className="scroll-mt-28 mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-[var(--font-oswald)] text-4xl font-bold uppercase text-white md:text-5xl">
          {lang === "ar" ? "تواصل معنا" : "Contact Us"}
        </h2>

        <p className="mt-3 max-w-2xl text-white/70">
          {lang === "ar"
            ? "للاستفسار أو الانضمام، تواصل معنا مباشرة عبر الهاتف أو واتساب أو من خلال صفحاتنا الرسمية."
            : "For inquiries or joining, contact us directly by phone, WhatsApp, or through our official social pages."}
        </p>

        <div className="mt-7 grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-[#212526]/40 p-6 shadow-[0_0_30px_rgba(0,0,0,0.2)]">
              <h3 className="text-2xl font-bold text-white">
                {lang === "ar" ? "بيانات التواصل" : "Contact Details"}
              </h3>

              <div className="mt-5 space-y-4 text-white/75">
                <p>
                  <span className="font-semibold text-white">
                    {lang === "ar" ? "العنوان: " : "Address: "}
                  </span>
                  {lang === "ar" ? site.addressAr : site.addressEn}
                </p>

                <p>
                  <span className="font-semibold text-white">
                    {lang === "ar" ? "الهاتف: " : "Phone: "}
                  </span>
                  <a href={`tel:${site.phone}`} className="transition hover:text-[#EEB41E]">
                    {site.phone}
                  </a>
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#EEB41E] px-5 py-3 font-semibold text-black transition hover:scale-105 hover:bg-[#D1830C]"
                >
                  {lang === "ar" ? "تواصل واتساب" : "WhatsApp"}
                </a>

                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:scale-105 hover:bg-white/10"
                >
                  {lang === "ar" ? "اتصل الآن" : "Call Now"}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#212526]/40 p-6 shadow-[0_0_30px_rgba(0,0,0,0.2)]">
              <h3 className="text-2xl font-bold text-white">
                {lang === "ar" ? "تابعنا" : "Follow Us"}
              </h3>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:border-[#EEB41E]/40 hover:shadow-[0_0_20px_rgba(238,180,30,0.12)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-[#EEB41E]/10 p-3 text-[#EEB41E]">
                      <Facebook className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white transition group-hover:text-[#EEB41E]">
                        Facebook
                      </div>
                      <div className="mt-1 text-xs text-white/55">
                        {lang === "ar" ? "تابعنا" : "Follow us"}
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:border-[#EEB41E]/40 hover:shadow-[0_0_20px_rgba(238,180,30,0.12)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-[#EEB41E]/10 p-3 text-[#EEB41E]">
                      <Instagram className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white transition group-hover:text-[#EEB41E]">
                        Instagram
                      </div>
                      <div className="mt-1 text-xs text-white/55">
                        {lang === "ar" ? "صور وأخبار" : "Photos & updates"}
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href={site.social.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:border-[#EEB41E]/40 hover:shadow-[0_0_20px_rgba(238,180,30,0.12)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-[#EEB41E]/10 p-3 text-[#EEB41E]">
                      <Music2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white transition group-hover:text-[#EEB41E]">
                        TikTok
                      </div>
                      <div className="mt-1 text-xs text-white/55">
                        {lang === "ar" ? "فيديوهات قصيرة" : "Short videos"}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#212526]/40 shadow-[0_0_30px_rgba(0,0,0,0.2)]">
            <div className="border-b border-white/10 px-6 py-4">
              <h3 className="text-2xl font-bold text-white">
                {lang === "ar" ? "موقعنا" : "Our Location"}
              </h3>
            </div>

            <div className="h-[420px] w-full">
              <iframe
                src={site.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Hunters Gym Location"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>

        <footer className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
          © {new Date().getFullYear()} Hunters Gym
        </footer>
      </section>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(null);
            }}
            className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrevImage();
            }}
            className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-3 text-white transition hover:bg-white/20 md:flex"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goNextImage();
            }}
            className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-3 text-white transition hover:bg-white/20 md:flex"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <SwipeableLightboxImage
            src={galleryImages[selectedImageIndex]}
            onPrev={goPrevImage}
            onNext={goNextImage}
          />
        </div>
      )}
    </main>
  );
}

function SwipeableLightboxImage({
  src,
  onPrev,
  onNext,
}: {
  src: string;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [touchStartX, setTouchStartX] = useState(0);

  return (
    <img
      src={src}
      alt="Gallery Preview"
      onClick={(e) => e.stopPropagation()}
      onTouchStart={(e) => setTouchStartX(e.changedTouches[0].clientX)}
      onTouchEnd={(e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;

        if (diff > 50) {
          onNext();
        } else if (diff < -50) {
          onPrev();
        }
      }}
      className="max-h-[90vh] max-w-[92vw] rounded-2xl object-contain shadow-[0_0_40px_rgba(0,0,0,0.45)]"
    />
  );
}