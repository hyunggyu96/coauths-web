import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "Coauths | Transparency Without Ads, Trust Guaranteed by AI",
  description: "The neutral information hub for the medical aesthetics and medical device industry. Building a Single Source of Truth that all stakeholders can trust.",
  keywords: "medical aesthetics, AI, healthcare, medical devices, compliance, transparency",
  openGraph: {
    title: "Coauths",
    description: "Transparency Without Ads, Trust Guaranteed by AI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coauths",
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
      <body className={`${notoSans.variable} ${notoSansKR.variable}`}>
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
