import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import LegalFAQ from "./LegalFAQ";

export const metadata: Metadata = {
  title: "الدعم القانوني",
  description:
    "تعرفي على حقوقك القانونية كامرأة عاملة في مصر — قانون العمل، حماية الأمومة، ومناهضة التمييز.",
};

// ─── Law articles data ────────────────────────────────────────────────────────

const articles = [
  {
    number: "المادة 35",
    name: "حظر التمييز في الأجور",
    text: "تلتزم جهات العمل بعدم التمييز في الأجر بين العامل والعاملة في ذات العمل.",
  },
  {
    number: "المادة 89",
    name: "ساعات تشغيل النساء",
    text: "لا يجوز تشغيل المرأة خلال ساعات معينة دون موافقتها وتوفير وسائل النقل.",
  },
  {
    number: "المادة 91",
    name: "إجازة الوضع",
    text: "تستحق العاملة إجازة وضع بأجر كامل مدتها ثلاثة أشهر.",
  },
  {
    number: "المادة 94",
    name: "إجازة رعاية الطفل",
    text: "للأم حق في إجازة غير مدفوعة الأجر لرعاية الطفل مدتها سنتان.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LegalPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-primary px-4 py-14 md:px-8 md:py-20 lg:px-16 lg:py-24"
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
            <span className="text-white/90">الدعم القانوني</span>
          </nav>

          <h1 className="font-cairo font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-snug">
            حقوقك القانونية
          </h1>
          <p className="font-tajawal text-base md:text-lg text-white/85 leading-relaxed max-w-xl mx-auto">
            لأن المعرفة هي أول درع ضد الظلم
          </p>
          <div
            aria-hidden="true"
            className="mx-auto mt-2 w-16 h-1 rounded-full bg-secondary"
          />
        </div>
      </section>

      {/* ── Image banner ─────────────────────────────────────────────────── */}
      <section dir="rtl" className="bg-bg px-4 pt-8 md:px-8 md:pt-12">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5">
              <Image
                src="/images/legal-scales.jpg"
                alt="ميزان عدالة بجوار لابتوب — رمز للقانون والحقوق"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Law Articles ─────────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-bg px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20"
        aria-labelledby="articles-heading"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll>
            <div className="text-center">
              <h2
                id="articles-heading"
                className="font-cairo font-bold text-2xl md:text-3xl text-primary"
              >
                مواد قانون العمل الأساسية
              </h2>
              <div
                aria-hidden="true"
                className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary"
              />
              <p className="font-tajawal text-gray-600 text-base mt-3 max-w-xl mx-auto leading-relaxed">
                قانون العمل المصري رقم 12 لسنة 2003 يتضمن نصوصاً صريحة تحمي حقوق المرأة العاملة
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {articles.map((article, i) => (
              <AnimateOnScroll key={article.number} delay={i * 0.08}>
                <article
                  className="bg-surface rounded-2xl border-r-4 border-secondary p-5 md:p-6 flex flex-col gap-3 shadow-sm"
                  aria-label={`${article.number}: ${article.name}`}
                >
                  <span className="font-cairo font-bold text-sm text-secondary uppercase tracking-wide">
                    {article.number}
                  </span>
                  <h3 className="font-cairo font-bold text-base md:text-lg text-gray-900 leading-snug">
                    {article.name}
                  </h3>
                  <p className="font-tajawal text-gray-600 text-sm md:text-base leading-relaxed">
                    {article.text}
                  </p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-surface px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll>
            <div className="text-center">
              <h2
                id="faq-heading"
                className="font-cairo font-bold text-2xl md:text-3xl text-primary"
              >
                أسئلة شائعة
              </h2>
              <div
                aria-hidden="true"
                className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <LegalFAQ />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-bg px-4 py-12 md:px-8 md:py-16 lg:px-16"
      >
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <div className="bg-primary rounded-3xl px-6 py-10 md:px-12 md:py-14 text-center flex flex-col items-center gap-5">
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
                تحتاجين استشارة قانونية؟
              </h2>
              <p className="font-tajawal text-white/85 text-base leading-relaxed max-w-md">
                المحامون المتطوعون في مؤسستنا مستعدون لمساعدتك — الاستشارة الأولى مجانية تماماً وسرية
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[52px] px-10 py-3 rounded-xl bg-secondary text-white font-cairo font-bold text-base hover:bg-secondary/90 transition-colors shadow-lg shadow-black/20"
              >
                اطلبي استشارة قانونية مجانية
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
