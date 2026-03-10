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
  title: "Hunters Gym - Premium Fitness Experience",
  description: "Train Like a Hunter in our premium facility. Equipped for strength, designed for greatness.",
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