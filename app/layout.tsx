import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Oswald, Cairo } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Hunters Gym | أكبر جيم في المقطم",
  description:
    "Hunters Gym هو أكبر جيم في المقطم يوفر أحدث معدات الجيم، كوتشينج احترافي، وبرامج تدريب متقدمة لبناء العضلات واللياقة. Train Like a Hunter في أفضل جيم في Mokattam.",
  keywords: [
    "Hunters Gym",
    "اكبر جيم في المقطم",
    "Gym Mokattam",
    "Best Gym Mokattam",
    "Fitness Gym Cairo",
    "Bodybuilding Gym Mokattam"
  ],
  verification: {
    google: "cZPztibhOqOHPPfWPL0veS6cFXOMlgvnAGElOUgmzZU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthClub",
              name: "Hunters Gym",
              url: "https://www.huntersgym.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mokattam",
                addressCountry: "EG",
              },
            }),
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${oswald.variable} ${cairo.variable} font-sans antialiased scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}