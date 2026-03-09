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

export const metadata: Metadata = {
  title: "Hunters Gym",
  description: "Train Like a Hunter",
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
      <body className={`${montserrat.variable} ${oswald.variable}`}>
        {children}
      </body>
    </html>
  );
}