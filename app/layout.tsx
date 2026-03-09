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