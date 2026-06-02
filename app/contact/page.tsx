import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "تواصلي معنا",
  description:
    "تواصلي مع مؤسسة مؤنث سالم للتنمية — للاستشارات، الشراكات، أو الدعم.",
};

const contactItems = [
  {
    icon: (
      <svg
        className="w-5 h-5 shrink-0 text-secondary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
    ),
    label: "المقر",
    value: "شارع الجامعة، الحيسين، الجيزة",
    href: null,
  },
  {
    icon: (
      <svg
        className="w-5 h-5 shrink-0 text-secondary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
    label: "البريد",
    value: "info@muanathsalem.org",
    href: "mailto:info@muanathsalem.org",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 shrink-0 text-secondary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
    label: "أوقات العمل",
    value: "الأحد - الخميس: 9 صباحاً - 5 مساءً",
    href: null,
  },
];

const socialLinks = [
  {
    name: "فيسبوك",
    href: "https://www.facebook.com/muanathsalem",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" />
      </svg>
    ),
    colorClass: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  {
    name: "إنستاغرام",
    href: "https://www.instagram.com/muanathsalem",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
      </svg>
    ),
    colorClass:
      "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:opacity-90 text-white",
  },
  {
    name: "لينكدإن",
    href: "https://www.linkedin.com/company/muanathsalem",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
      </svg>
    ),
    colorClass: "bg-blue-700 hover:bg-blue-800 text-white",
  },
];

export default function ContactPage() {
  return (
    <div dir="rtl" className="bg-bg min-h-screen">
      {/* ── Hero ── */}
      <section className="bg-primary px-4 py-12 md:px-8 md:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <AnimateOnScroll>
            <h1 className="font-cairo font-bold text-3xl md:text-4xl lg:text-5xl text-white">
              تواصلي معنا
            </h1>
            <p className="mt-3 font-tajawal text-base md:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
              نحن هنا للاستماع — سواء كنتِ تبحثين عن دعم، استشارة، أو شراكة
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Two-column body ── */}
      <section className="px-4 py-10 md:px-8 md:py-16 lg:px-16 lg:py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Right column — form (comes first in RTL DOM order) */}
          <AnimateOnScroll>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h2 className="font-cairo font-bold text-xl md:text-2xl text-gray-900 mb-6">
                أرسلي لنا رسالة
              </h2>
              <ContactForm />
            </div>
          </AnimateOnScroll>

          {/* Left column — info */}
          <div className="flex flex-col gap-6">
            <AnimateOnScroll delay={0.1}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h2 className="font-cairo font-bold text-xl md:text-2xl text-gray-900 mb-6">
                  معلومات التواصل
                </h2>
                <ul className="flex flex-col gap-5">
                  {contactItems.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <span className="mt-0.5">{item.icon}</span>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-cairo font-medium text-xs text-gray-500 uppercase tracking-wide">
                          {item.label}
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-tajawal text-sm text-gray-800 hover:text-primary transition-colors min-h-[44px] flex items-center"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="font-tajawal text-sm text-gray-800 leading-relaxed">
                            {item.value}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            {/* Social media */}
            <AnimateOnScroll delay={0.2}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-cairo font-bold text-base text-gray-900 mb-4">
                  تابعينا على وسائل التواصل
                </h3>
                <div className="flex flex-col gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-cairo font-medium text-sm min-h-[52px] transition-opacity ${social.colorClass}`}
                    >
                      {social.icon}
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Safety note */}
            <AnimateOnScroll delay={0.3}>
              <div
                role="note"
                className="bg-amber-50 border border-amber-200 rounded-xl p-4"
              >
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 shrink-0 text-amber-600 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>
                  <p className="font-tajawal text-sm text-amber-800 leading-relaxed">
                    <strong className="font-cairo font-semibold">ملاحظة للسلامة:</strong>{" "}
                    إذا كنتِ في خطر فوري، يرجى التواصل مع الجهات المختصة. جميع
                    معلوماتكِ تُحفظ بسرية تامة.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
