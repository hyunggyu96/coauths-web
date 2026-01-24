import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "CoAuths | Transparency Without Ads, Trust Guaranteed by AI",
  description: "The neutral information hub for the medical aesthetics and medical device industry. Building a Single Source of Truth that all stakeholders can trust.",
  keywords: "medical aesthetics, AI, healthcare, medical devices, compliance, transparency",
  openGraph: {
    title: "CoAuths",
    description: "Transparency Without Ads, Trust Guaranteed by AI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoAuths",
    description: "Transparency Without Ads, Trust Guaranteed by AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <I18nProvider>
          <div className="app-wrapper">
            <Header />
            <main className="main-content">
              {children}
            </main>
            <Footer />
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
