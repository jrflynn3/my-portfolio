import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Header } from "@/Components/layout/Header";
import { Footer } from "@/Components/layout/Footer";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "John Flynn",
  description: "React/React Native developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
