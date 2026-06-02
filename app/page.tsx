"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { buttonVariants, Card } from "@heroui/react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
} from "@/lib/animations";

// ─── useCountUp ──────────────────────────────────────────────────────────────

function useCountUp(target: number, isInView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const step = (timestamp: number, startTime: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame((t) => step(t, startTime));
    };
    requestAnimationFrame((t) => step(t, t));
  }, [isInView, target]);
  return count;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5V6a1.5 1.5 0 1 1 3 0m-3 5.5a1.5 1.5 0 0 0-3 0V14a6 6 0 1 0 12 0v-5a1.5 1.5 0 0 0-3 0m-6 3V11m6-2.5v2.5m0 0a1.5 1.5 0 0 1 3 0" />
      </svg>
    ),
    title: "الدعم والمشاركة",
    desc: "نرافق النساء في رحلتهن نحو الأمان والاعتراف بحقوقهن من خلال الدعم المباشر والمشاركة المجتمعية الفعّالة.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
    title: "التمكين والاستقلال",
    desc: "نبني قدرات المرأة الاقتصادية والنفسية لتحقيق استقلاليتها واتخاذ قراراتها بحرية وثقة.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "التثقيف والتوعية",
    desc: "نرفع الوعي المجتمعي بقضايا النوع الاجتماعي والمساواة من خلال برامج تثقيفية متنوعة وشاملة.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "الوعي الحقوقي",
    desc: "نوفر المعلومات القانونية الضرورية وندعم النساء في فهم حقوقهن والمطالبة بها أمام المؤسسات.",
  },
];

const campaigns = [
  {
    title: "أمان قلمي",
    category: "رقمي",
    badgeClass: "bg-purple-100 text-purple-700",
    desc: "مواجهة العنف الإلكتروني الموجَّه ضد الصحفيات وتعزيز سلامتهن الرقمية",
    hashtag: "#أمان_قلمي",
    slug: "aman-qalami",
    image: "/images/digital-safety.jpg",
  },
  {
    title: "بدون أجر",
    category: "اقتصادي",
    badgeClass: "bg-green-100 text-green-700",
    desc: "تسليط الضوء على معاناة الصحفيات مع العمل غير المأجور — بالشراكة مع مؤسسة جنوبية حرة",
    hashtag: "#بدون_أجر",
    slug: "bedoun-ajr",
    image: "/images/journalist-desk.jpg",
  },
  {
    title: "أيوه أنا اتعنفت",
    category: "عنف",
    badgeClass: "bg-red-100 text-red-700",
    desc: "كسر وصم دائرة العنف وتشجيع الناجيات على رواية تجاربهن بصوت عالٍ",
    hashtag: "#أيوه_أنا_اتعنفت",
    slug: "aiwa-ana-itanaft",
    image: "/images/power-fist.jpg",
  },
];

const stats = [
  { value: 5,   suffix: "+", label: "حملات وطنية" },
  { value: 30,  suffix: "+", label: "صحفية مشاركة" },
  { value: 12,  suffix: "+", label: "ورشة دعم نفسي" },
  { value: 2022, suffix: "", label: "تأسست في" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(value, isInView);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="flex flex-col items-center gap-1 text-center"
    >
      <span className="font-cairo font-bold text-4xl md:text-5xl text-white tabular-nums">
        {count}
        {suffix}
      </span>
      <span className="font-tajawal text-sm md:text-base text-white/80 leading-snug max-w-[120px]">
        {label}
      </span>
    </motion.div>
  );
}

function CampaignCard({
  title,
  category,
  badgeClass,
  desc,
  hashtag,
  slug,
  image,
}: (typeof campaigns)[number]) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
      className="h-full"
    >
      <Card className="!p-0 overflow-hidden h-full">
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={image}
            alt={`صورة حملة ${title}`}
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          <span
            className={`absolute top-3 right-3 text-xs font-cairo font-semibold px-3 py-1 rounded-full ${badgeClass}`}
          >
            {category}
          </span>
        </div>
        <div className="flex flex-col gap-3 p-5 flex-1">
          <h3 className="font-cairo font-bold text-lg text-foreground leading-snug">
            {title}
          </h3>
          <p className="font-tajawal text-muted text-sm leading-relaxed flex-1">
            {desc}
          </p>
          <span className="font-tajawal text-accent text-sm font-medium">
            {hashtag}
          </span>
          <Link
            href={`/campaigns/${slug}`}
            className="inline-flex items-center gap-1 font-cairo font-semibold text-sm text-primary hover:text-accent transition-colors min-h-[44px] pt-1"
            aria-label={`اعرفي أكتر عن حملة ${title}`}
          >
            اعرفي أكتر
            <span aria-hidden="true" className="text-base">←</span>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="relative overflow-hidden bg-bg"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 md:px-8 md:py-16 lg:px-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-14 items-center">
          {/* Text column — text first on mobile so CTA is above the fold */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-right gap-4 md:gap-7 order-1 lg:order-1"
          >
            <motion.div variants={scaleIn}>
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-cairo font-semibold text-xs md:text-sm px-4 py-2 rounded-full border border-primary/20">
                <span
                  aria-hidden="true"
                  className="w-2 h-2 rounded-full bg-secondary inline-block"
                />
                مبادرة مؤنث سالم
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-cairo font-bold text-[26px] leading-[1.35] sm:text-3xl sm:leading-[1.3] md:text-4xl lg:text-5xl text-primary"
            >
              بيئة عمل آمنة وعادلة
              <br className="hidden sm:block" />
              <span className="text-accent"> للصحفيات المصريات</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="font-tajawal text-[15px] md:text-lg text-gray-700 leading-relaxed"
            >
              مبادرة نسوية حقوقية تأسست لمواجهة التمييز والعنف ضد النساء في
              الإعلام، وتقديم الدعم القانوني والنفسي والرقمي للصحفيات.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <Link
                href="/resources"
                className={buttonVariants({ size: "lg", variant: "primary" })}
              >
                اعرفي حقوقك
              </Link>
              <Link
                href="/campaigns"
                className={buttonVariants({ size: "lg", variant: "outline" })}
              >
                شاركي في الحملات
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-3 font-tajawal text-sm text-gray-600 mt-1"
            >
              <span>5 حملات وطنية</span>
              <span className="text-secondary font-bold">•</span>
              <span>30+ صحفية</span>
              <span className="text-secondary font-bold">•</span>
              <span>منذ 2022</span>
            </motion.div>
          </motion.div>

          {/* Image column — second on mobile so text-first layout */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[3/4] lg:aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 lg:max-w-none order-2 lg:order-2"
          >
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-secondary/20 blur-2xl" aria-hidden="true" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-accent/15 blur-2xl" aria-hidden="true" />
            <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image
                src="/images/power-fist.jpg"
                alt="صحفيات في تضامن"
                fill
                priority
                loading="eager"
                sizes="(min-width: 1024px) 50vw, 90vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. FOUR PILLARS ──────────────────────────────────────────────── */}
      <section dir="rtl" className="bg-surface px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-24">
        <div className="max-w-5xl mx-auto flex flex-col gap-10 md:gap-14">
          <AnimateOnScroll className="text-center">
            <h2 className="font-cairo font-bold text-2xl md:text-3xl lg:text-4xl text-primary">
              ما الذي نعمل عليه
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-3 w-16 h-1 rounded-full bg-secondary"
            />
          </AnimateOnScroll>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {pillars.map((pillar) => (
              <motion.div key={pillar.title} variants={fadeInUp} className="h-full">
                <Card className="bg-white p-5 md:p-6 hover:shadow-md transition-shadow h-full">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/15 text-secondary shrink-0">
                    {pillar.icon}
                  </span>
                  <Card.Header>
                    <Card.Title className="font-cairo font-bold text-base md:text-lg text-foreground leading-snug">
                      {pillar.title}
                    </Card.Title>
                    <Card.Description className="font-tajawal text-muted text-sm leading-relaxed">
                      {pillar.desc}
                    </Card.Description>
                  </Card.Header>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. STATS ─────────────────────────────────────────────────────── */}
      <section dir="rtl" className="bg-primary px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
          >
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. LATEST CAMPAIGNS ──────────────────────────────────────────── */}
      <section dir="rtl" className="bg-bg px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-24">
        <div className="max-w-5xl mx-auto flex flex-col gap-10 md:gap-14">
          <AnimateOnScroll className="text-center">
            <h2 className="font-cairo font-bold text-2xl md:text-3xl lg:text-4xl text-primary">
              أحدث حملاتنا
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-3 w-16 h-1 rounded-full bg-secondary"
            />
          </AnimateOnScroll>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {campaigns.map((c) => (
              <CampaignCard key={c.slug} {...c} />
            ))}
          </motion.div>

          <AnimateOnScroll className="flex justify-center" delay={0.2}>
            <Link
              href="/campaigns"
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              عرضي كل الحملات
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── 5. TESTIMONIAL ───────────────────────────────────────────────── */}
      <section dir="rtl" className="bg-surface px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll variants={scaleIn}>
            <Card className="bg-white !rounded-3xl !shadow-sm px-6 py-10 md:px-12 md:py-14 items-center text-center">
              <span
                aria-hidden="true"
                className="font-cairo font-bold text-8xl md:text-9xl text-secondary leading-none select-none -mb-4"
              >
                &ldquo;
              </span>
              <blockquote className="font-tajawal text-base md:text-lg text-foreground/80 leading-loose max-w-xl">
                ورشة الدعم النفسي كانت أول مساحة قدرت فيها أحكي عن ضغوط الشغل
                من غير ما أتحكم — حسّيت إن في حد فاهم اللي بأمر بيه.
              </blockquote>
              <div className="flex flex-col items-center gap-1">
                <span className="font-cairo font-semibold text-sm text-foreground">
                  م. ع. — صحفية شابة، القاهرة
                </span>
                <span className="font-tajawal text-xs text-accent">
                  من ورشة الدعم النفسي للصحفيات
                </span>
              </div>
            </Card>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── 6. CTA BANNER ────────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="gradient-animate px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20"
        style={{
          background:
            "linear-gradient(135deg, #0f2157 0%, #1E3A8A 60%, #1e40af 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
          <AnimateOnScroll>
            <h2 className="font-cairo font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-snug">
              هل تحتاجين مساعدة أو دعماً؟
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p className="font-tajawal text-base md:text-lg text-white/85 leading-relaxed max-w-lg">
              فريقنا متاح لتقديم الدعم القانوني والنفسي بسرية تامة
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <Link
              href="/contact"
              className={buttonVariants({ size: "lg", variant: "secondary" })}
            >
              تواصلي معنا الآن
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
