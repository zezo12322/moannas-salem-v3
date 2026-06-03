import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OrganizationSchema } from "@/components/OrganizationSchema";
import { ScrollProgress } from "@/components/ScrollProgress";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--next-font-cairo",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--next-font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muanathsalem.org"),
  title: {
    default: "مؤنث سالم — بيئة عمل آمنة وعادلة للصحفيات المصريات",
    template: "%s | مؤنث سالم",
  },
  description:
    "مبادرة نسوية حقوقية تأسستها أسماء فتحي ومجموعة من الصحفيات لمواجهة التمييز والعنف ضد النساء في الإعلام، وتقديم الدعم القانوني والنفسي والرقمي.",
  keywords: [
    "مؤنث سالم",
    "صحفيات مصريات",
    "حقوق المرأة",
    "العنف ضد الصحفيات",
    "الأمان الرقمي",
    "أمان قلمي",
    "بدون أجر",
    "أسماء فتحي",
    "مصر",
  ],
  openGraph: {
    title: "مؤنث سالم — بيئة عمل آمنة وعادلة للصحفيات",
    description:
      "مبادرة نسوية حقوقية تعمل من أجل صحفيات مصر — دعم قانوني ونفسي ورقمي.",
    url: "https://muanathsalem.org",
    siteName: "مؤنث سالم",
    locale: "ar_EG",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "مؤنث سالم" },
  alternates: { canonical: "https://muanathsalem.org" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${tajawal.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-bg overflow-x-hidden">
        <ScrollProgress />
        <OrganizationSchema />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:right-4 bg-primary text-white px-4 py-2 rounded-b-lg z-[100] font-semibold"
        >
          انتقل للمحتوى الرئيسي
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        {/* Mobile sticky-CTA spacer — height matches Header's fixed bottom CTA */}
        <div aria-hidden="true" className="h-20 md:hidden" />

      </body>
    </html>
  );
}
