import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Oswald } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata = {
  title: "Hunters Gym | Best Gym in Egypt",
  description:
    "Hunters Gym offers professional fitness training, bodybuilding programs, and personal coaching. Train Like a Hunter.",
  
keywords: [
    "Hunters Gym",
    "Gym Egypt",
    "Bodybuilding gym",
    "Fitness training Egypt",
    "Personal trainer gym",
  ],

  verification: {
    google: "cZPztibhOqOHPPfWPL0veS6cFXOMlgvnAGElOUgmzZU",
  },

  openGraph: {
    title: "Hunters Gym",
    description: "Train Like a Hunter",
    url: "https://www.huntersgym.com",
    siteName: "Hunters Gym",
    images: [
      {
        url: "/logo-large.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${montserrat.variable} ${oswald.variable} bg-[#03070b] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
