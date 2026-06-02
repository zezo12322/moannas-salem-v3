import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@heroui/react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "الموارد",
  description:
    "موارد قانونية ونفسية ورقمية لدعم النساء المصريات — من مؤسسة مؤنث سالم للتنمية.",
};

// ─── Icons ────────────────────────────────────────────────────────────────────

function ScalesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10"
      aria-hidden="true"
    >
      <path d="M12 3v18M3 6l9-3 9 3M5 10l-2 6h4L5 10ZM19 10l-2 6h4L19 10ZM5 16h14" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10"
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

// ─── Cards data ───────────────────────────────────────────────────────────────

const cards = [
  {
    href: "/resources/legal",
    icon: <ScalesIcon />,
    colorClass: "bg-primary",
    hoverBorder: "hover:border-secondary",
    title: "الدعم القانوني",
    description:
      "تعرفي على حقوقك القانونية كموظفة وكإنسانة — قوانين العمل، حقوق الأمومة، والحماية من التمييز",
    label: "انتقلي لصفحة الدعم القانوني",
  },
  {
    href: "/resources/psychological",
    icon: <HeartIcon />,
    colorClass: "bg-accent",
    hoverBorder: "hover:border-secondary",
    title: "الدعم النفسي",
    description:
      "وحدة الدعم النفسي في مؤسستنا — جلسات سرية، مجموعات دعم، وموارد للصحة النفسية",
    label: "انتقلي لصفحة الدعم النفسي",
  },
  {
    href: "/resources/digital",
    icon: <ShieldIcon />,
    colorClass: "bg-[#059669]",
    hoverBorder: "hover:border-secondary",
    title: "الأمان الرقمي",
    description:
      "احمي نفسك من العنف الإلكتروني والتحرش الرقمي — أدوات وخطوات عملية",
    label: "انتقلي لصفحة الأمان الرقمي",
  },
];

// ─── Resource Card ─────────────────────────────────────────────────────────────

function ResourceCard({
  href,
  icon,
  colorClass,
  hoverBorder,
  title,
  description,
  label,
}: (typeof cards)[number]) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={`group relative flex flex-row items-center gap-4 md:gap-6 bg-white rounded-2xl shadow-sm border-2 border-transparent ${hoverBorder} hover:scale-[1.015] hover:shadow-lg transition-all duration-300 p-4 md:p-8 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-secondary/50`}
    >
      <span
        className={`shrink-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl ${colorClass} text-white shadow-md`}
      >
        {icon}
      </span>
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <h2 className="font-cairo font-bold text-lg md:text-2xl text-foreground group-hover:text-primary transition-colors leading-snug">
          {title}
        </h2>
        <p className="font-tajawal text-muted text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-none">
          {description}
        </p>
      </div>
      <span
        aria-hidden="true"
        className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 group-hover:bg-secondary group-hover:text-white transition-colors text-gray-400 text-base font-bold"
      >
        ←
      </span>
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResourcesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-primary px-4 py-14 md:px-8 md:py-20 lg:px-16 lg:py-24"
      >
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-4">
          <h1 className="font-cairo font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-snug">
            الموارد
          </h1>
          <p className="font-tajawal text-base md:text-lg text-white/85 leading-relaxed max-w-xl mx-auto">
            دعم قانوني ونفسي ورقمي — لأن كل امرأة تستحق الدعم الكافي
          </p>
          <div
            aria-hidden="true"
            className="mx-auto mt-2 w-16 h-1 rounded-full bg-secondary"
          />
        </div>
      </section>

      {/* ── Resource Cards ────────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-bg px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-24"
        aria-label="أقسام الموارد"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-5 md:gap-6">
          {cards.map((card, i) => (
            <AnimateOnScroll key={card.href} delay={i * 0.1}>
              <ResourceCard {...card} />
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-surface px-4 py-12 md:px-8 md:py-16"
      >
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
          <AnimateOnScroll>
            <h2 className="font-cairo font-bold text-2xl md:text-3xl text-primary leading-snug">
              هل تحتاجين مساعدة مباشرة؟
            </h2>
            <p className="font-tajawal text-gray-600 text-base mt-2 leading-relaxed max-w-lg mx-auto">
              فريقنا متاح للإجابة على أسئلتك وتقديم الدعم المناسب لوضعك بسرية تامة
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <Link
              href="/contact"
              className={buttonVariants({ size: "lg", variant: "primary" })}
            >
              تواصلي معنا الآن
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
