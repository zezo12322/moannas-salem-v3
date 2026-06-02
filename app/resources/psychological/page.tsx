import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "الدعم النفسي",
  description:
    "وحدة الدعم النفسي في مؤسسة مؤنث سالم — جلسات سرية ومجانية للنساء المصريات.",
};

// ─── Services data ────────────────────────────────────────────────────────────

const services = [
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
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "جلسات فردية",
    description: "دعم نفسي فردي مع متخصصة معتمدة في بيئة آمنة وخاصة تماماً",
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
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "مجموعات الدعم",
    description:
      "جلسات جماعية آمنة لمشاركة التجارب والدعم المتبادل بين النساء في ظروف مشابهة",
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
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91A16 16 0 0 0 14.09 16l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03Z" />
      </svg>
    ),
    title: "خط دعم الأزمات",
    description:
      "للحالات العاجلة وتوفير الدعم الفوري — متاح للتواصل عبر البريد الإلكتروني ووسائل التواصل",
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
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
        <path d="M8 7h8M8 11h6" />
      </svg>
    ),
    title: "موارد تعليمية",
    description:
      "مقاطع صوتية وتمارين للصحة النفسية الذاتية يمكنك الوصول إليها في أي وقت ومن أي مكان",
  },
];

const steps = [
  {
    number: "١",
    title: "تواصلي معنا",
    description:
      "تواصلي معنا عبر نموذج التواصل أو وسائل التواصل الاجتماعي في أي وقت يناسبك",
  },
  {
    number: "٢",
    title: "سنتواصل معكِ خلال 24 ساعة",
    description:
      "ستتواصل معكِ منسقة الدعم النفسي لدينا خلال 24 ساعة للترحيب بك والاستماع إليك",
  },
  {
    number: "٣",
    title: "تحديد موعد مناسب",
    description:
      "نحدد معاً موعداً مناسباً يلائم ظروفك وجدولك — وجهاً لوجه أو عن بُعد",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PsychologicalPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-accent px-4 py-14 md:px-8 md:py-20 lg:px-16 lg:py-24"
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
            <span className="text-white/90">الدعم النفسي</span>
          </nav>

          <h1 className="font-cairo font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-snug">
            الدعم النفسي
          </h1>
          <p className="font-tajawal text-base md:text-lg text-white/85 leading-relaxed max-w-xl mx-auto">
            مساحة آمنة للشفاء والدعم
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
                src="/images/psychological.jpg"
                alt="جلسة دعم نفسي هادئة"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── About the Unit ───────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-bg px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20"
        aria-labelledby="about-heading"
      >
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 px-6 py-8 md:px-10 md:py-10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent shrink-0"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
                  </svg>
                </span>
                <h2
                  id="about-heading"
                  className="font-cairo font-bold text-xl md:text-2xl text-primary leading-snug"
                >
                  وحدة الدعم النفسي
                </h2>
              </div>
              <p className="font-tajawal text-gray-700 text-base leading-loose">
                وحدة الدعم النفسي في مؤسسة مؤنث سالم تقدم خدمات نفسية متخصصة للنساء اللواتي
                تعرضن لأشكال مختلفة من العنف أو الضغوط النفسية. جميع الجلسات{" "}
                <strong className="font-cairo font-semibold text-accent">سرية تماماً</strong>{" "}
                و<strong className="font-cairo font-semibold text-accent">مجانية</strong> للمستفيدات.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Services Grid ────────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-surface px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20"
        aria-labelledby="services-heading"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll>
            <div className="text-center">
              <h2
                id="services-heading"
                className="font-cairo font-bold text-2xl md:text-3xl text-primary"
              >
                خدماتنا النفسية
              </h2>
              <div
                aria-hidden="true"
                className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary"
              />
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6 flex flex-col gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent shrink-0">
                    {service.icon}
                  </span>
                  <h3 className="font-cairo font-bold text-base md:text-lg text-gray-900 leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-tajawal text-gray-600 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Reach Us ──────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-bg px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20"
        aria-labelledby="steps-heading"
      >
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll>
            <div className="text-center">
              <h2
                id="steps-heading"
                className="font-cairo font-bold text-2xl md:text-3xl text-primary"
              >
                كيف تتواصلين معنا
              </h2>
              <div
                aria-hidden="true"
                className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary"
              />
            </div>
          </AnimateOnScroll>

          <ol className="flex flex-col gap-5 list-none" aria-label="خطوات التواصل">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.number} delay={i * 0.1}>
                <li className="flex items-start gap-5 bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6">
                  <span
                    aria-hidden="true"
                    className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white font-cairo font-bold text-xl"
                  >
                    {step.number}
                  </span>
                  <div className="flex flex-col gap-1 pt-1">
                    <h3 className="font-cairo font-bold text-base md:text-lg text-gray-900 leading-snug">
                      {step.title}
                    </h3>
                    <p className="font-tajawal text-gray-600 text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              </AnimateOnScroll>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Privacy Promise ──────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-surface px-4 py-12 md:px-8 md:py-16 lg:px-16"
      >
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <div
              className="bg-primary rounded-3xl px-6 py-8 md:px-10 md:py-10 flex flex-col items-start gap-4"
              role="note"
              aria-label="وعد السرية"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/15 text-white shrink-0"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <h2 className="font-cairo font-bold text-xl md:text-2xl text-white leading-snug">
                  وعدنا بالسرية
                </h2>
              </div>
              <p className="font-tajawal text-white/90 text-base leading-loose">
                جميع المعلومات التي تشاركينها معنا تظل{" "}
                <strong className="font-cairo font-semibold text-secondary">سرية تماماً</strong>{" "}
                ولن تُشارك مع أي جهة خارجية دون موافقتك الصريحة.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-bg px-4 py-12 md:px-8 md:py-16 lg:px-16"
      >
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
          <AnimateOnScroll>
            <h2 className="font-cairo font-bold text-2xl md:text-3xl text-primary leading-snug">
              جاهزة لأول خطوة؟
            </h2>
            <p className="font-tajawal text-gray-600 text-base mt-2 leading-relaxed max-w-md mx-auto">
              لا تترددي في التواصل معنا — كل رحلة تبدأ بخطوة واحدة
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-[52px] px-10 py-3 rounded-xl bg-accent text-white font-cairo font-bold text-base hover:bg-accent/90 transition-colors shadow-md"
            >
              تواصلي مع وحدة الدعم النفسي
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
