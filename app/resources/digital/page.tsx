import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "الأمان الرقمي",
  description:
    "دليلك للحماية من العنف الإلكتروني والتحرش الرقمي — أدوات وخطوات عملية من مؤسسة مؤنث سالم.",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const threatTypes = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "التحرش الإلكتروني",
    description:
      "الرسائل المسيئة، التهديدات، والإزعاج المتكرر عبر الإنترنت ومنصات التواصل الاجتماعي",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
    title: "الابتزاز الإلكتروني",
    description:
      "التهديد بنشر محتوى خاص أو حساس كوسيلة للضغط أو الإكراه",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="m9 8 3 3 3-3" />
      </svg>
    ),
    title: "الاختراق والمراقبة",
    description:
      "الوصول غير المصرح به للحسابات أو الأجهزة الشخصية بهدف المراقبة أو سرقة البيانات",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" />
      </svg>
    ),
    title: "التشهير والنشر غير المصرح",
    description:
      "نشر معلومات شخصية أو صور دون إذن بهدف الإيذاء أو الإضرار بالسمعة",
  },
];

const protectionTips = [
  "فعّلي المصادقة الثنائية على جميع حساباتك",
  "استخدمي كلمات مرور قوية وفريدة لكل حساب",
  "راجعي إعدادات الخصوصية على منصات التواصل الاجتماعي بصفة دورية",
  "لا تشاركي موقعك الجغرافي بشكل تلقائي أو مع جهات غير موثوقة",
  "احتفظي بنسخ احتياطية من أي أدلة على التحرش أو الابتزاز",
  "لا تردي على الرسائل المسيئة ولا تتفاعلي معها",
  "أبلغي المنصة فوراً عن أي محتوى مسيء أو حساب يتحرش بك",
  "تواصلي مع متخصصات الأمان الرقمي في مؤسستنا للحصول على دعم متخصص",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DigitalPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-[#065f46] px-4 py-14 md:px-8 md:py-20 lg:px-16 lg:py-24"
      >
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-4">
          {/* Breadcrumb */}
          <nav
            aria-label="مسار التنقل"
            className="flex justify-center gap-2 font-tajawal text-sm text-white/60"
          >
            <Link href="/resources" className="hover:text-white transition-colors">
              الموارد
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/90">الأمان الرقمي</span>
          </nav>

          <h1 className="font-cairo font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-snug">
            الأمان الرقمي
          </h1>
          <p className="font-tajawal text-base md:text-lg text-white/85 leading-relaxed max-w-xl mx-auto">
            حمايتكِ الرقمية حق، ليست رفاهية
          </p>
          <div
            aria-hidden="true"
            className="mx-auto mt-2 w-16 h-1 rounded-full bg-white/50"
          />
        </div>
      </section>

      {/* ── Image banner ─────────────────────────────────────────────────── */}
      <section dir="rtl" className="bg-bg px-4 pt-8 md:px-8 md:pt-12">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5">
              <Image
                src="/images/digital-safety.jpg"
                alt="حماية رقمية ولابتوب آمن"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Threat Types ─────────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-bg px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20"
        aria-labelledby="threats-heading"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll>
            <div className="text-center">
              <h2
                id="threats-heading"
                className="font-cairo font-bold text-2xl md:text-3xl text-primary"
              >
                أشكال العنف الرقمي
              </h2>
              <div
                aria-hidden="true"
                className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary"
              />
              <p className="font-tajawal text-gray-600 text-base mt-3 max-w-xl mx-auto leading-relaxed">
                معرفة أشكال التهديد هي الخطوة الأولى نحو الحماية منها
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {threatTypes.map((threat, i) => (
              <AnimateOnScroll key={threat.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6 flex flex-col gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#059669]/10 text-[#059669] shrink-0">
                    {threat.icon}
                  </span>
                  <h3 className="font-cairo font-bold text-base md:text-lg text-gray-900 leading-snug">
                    {threat.title}
                  </h3>
                  <p className="font-tajawal text-gray-600 text-sm md:text-base leading-relaxed">
                    {threat.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Protection Tips ──────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-surface px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20"
        aria-labelledby="tips-heading"
      >
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll>
            <div className="text-center">
              <h2
                id="tips-heading"
                className="font-cairo font-bold text-2xl md:text-3xl text-primary"
              >
                نصائح الحماية
              </h2>
              <div
                aria-hidden="true"
                className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <ol
              className="flex flex-col gap-3"
              aria-label="قائمة نصائح الأمان الرقمي"
            >
              {protectionTips.map((tip, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4"
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#059669] text-white font-cairo font-bold text-sm mt-0.5"
                  >
                    {i + 1}
                  </span>
                  <p className="font-tajawal text-gray-700 text-base leading-relaxed pt-0.5">
                    {tip}
                  </p>
                </li>
              ))}
            </ol>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Emergency Steps ──────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-bg px-4 py-12 md:px-8 md:py-16 lg:px-16"
      >
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <div
              className="bg-red-50 border border-red-200 rounded-2xl px-6 py-7 md:px-8 md:py-8"
              role="alert"
              aria-label="خطوات الطوارئ عند التعرض للتحرش الرقمي"
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  aria-hidden="true"
                  className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-600"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </span>
                <h2 className="font-cairo font-bold text-lg md:text-xl text-red-700 leading-snug">
                  إذا تعرضتِ للتحرش الرقمي الآن
                </h2>
              </div>

              <ol
                className="flex flex-col gap-3 list-none"
                aria-label="خطوات التعامل الفوري مع التحرش الرقمي"
              >
                {[
                  "خذي لقطة شاشة كدليل قبل أي إجراء آخر",
                  "أبلغي المنصة فوراً عن المحتوى أو الحساب المسيء",
                  "احجبي المتحرش على جميع المنصات",
                  "تواصلي معنا للحصول على الدعم القانوني والنفسي",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-red-200 text-red-700 font-cairo font-bold text-sm mt-0.5"
                    >
                      {i + 1}
                    </span>
                    <p className="font-tajawal text-red-800 text-base leading-relaxed pt-0.5">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-surface px-4 py-12 md:px-8 md:py-16 lg:px-16"
      >
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <div className="bg-[#065f46] rounded-3xl px-6 py-10 md:px-12 md:py-14 text-center flex flex-col items-center gap-5">
              <span
                aria-hidden="true"
                className="flex items-center justify-center w-14 h-14 rounded-full bg-white/15 text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              <h2 className="font-cairo font-bold text-xl md:text-2xl text-white leading-snug">
                هل تعرضتِ لعنف رقمي؟
              </h2>
              <p className="font-tajawal text-white/85 text-base leading-relaxed max-w-md">
                فريق الأمان الرقمي في مؤسستنا متاح لمساعدتك — قانونياً ونفسياً بسرية تامة
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[52px] px-10 py-3 rounded-xl bg-white text-[#065f46] font-cairo font-bold text-base hover:bg-white/90 transition-colors shadow-lg"
              >
                تواصلي مع فريق الأمان الرقمي
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
