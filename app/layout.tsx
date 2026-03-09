import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Oswald, Alexandria } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "600", "700"],
});

const alexandria = Cairo({
  subsets: ["latin", "arabic"],
  variable: "--font-cairo",
  weight: ["400", "600", "700"],
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
      <html lang="en" dir="ltr"> 
        <body className={`${montserrat.variable} ${oswald.variable} ${alexandria.variable} font-sans antialiased scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
