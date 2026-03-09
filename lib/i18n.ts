export type Lang = "ar" | "en";

export const t = (lang: Lang) => ({
  nav: {
    home: lang === "ar" ? "الرئيسية" : "Home",
    pricing: lang === "ar" ? "الاشتراكات" : "Memberships",
    schedule: lang === "ar" ? "الجدول" : "Schedule",
    trainers: lang === "ar" ? "المدربين" : "Trainers",
    contact: lang === "ar" ? "تواصل" : "Contact",
  },
  hero: {
    title: lang === "ar" ? "قوتك تبدأ من هنا" : "Your strength starts here",
    subtitle:
      lang === "ar"
        ? "تدريب احترافي، أجهزة قوية، وبيئة تساعدك تلتزم وتوصل لهدفك."
        : "Pro training, powerful equipment, and the environment you need to stay consistent.",
    cta: lang === "ar" ? "اشترك عبر واتساب" : "Join via WhatsApp",
    secondary: lang === "ar" ? "شوف الاشتراكات" : "See memberships",
  },
  sections: {
    benefits: lang === "ar" ? "ليه Hunters Gym؟" : "Why Hunters Gym?",
    pricing: lang === "ar" ? "خطط الاشتراك" : "Membership Plans",
    schedule: lang === "ar" ? "جدول الحصص" : "Class Schedule",
    trainers: lang === "ar" ? "المدربين" : "Trainers",
    contact: lang === "ar" ? "تواصل معنا" : "Contact Us",
  },
});