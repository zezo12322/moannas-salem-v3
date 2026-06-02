"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants, Card } from "@heroui/react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  fadeInLeft,
  fadeInRight,
} from "@/lib/animations";

// ─── Icons ────────────────────────────────────────────────────────────────────

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="w-7 h-7"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="w-7 h-7"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2Zm0 0v4m0 12v-4m10-6h-4M6 12H2"
      />
      <circle cx="12" cy="12" r="3" strokeWidth={1.8} />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      />
    </svg>
  );
}

function DocumentCheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m0 0a4.49 4.49 0 0 1 1.18-3.012"
      />
    </svg>
  );
}

function ScalesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97Z"
      />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const coreValues = [
  {
    icon: <PeopleIcon />,
    title: "التعاون والشراكة",
    desc: "العمل الحقوقي قائم على التنسيق مع كافة الأطراف",
  },
  {
    icon: <DocumentCheckIcon />,
    title: "الحوكمة",
    desc: "شفافية كاملة في الأنشطة والميزانيات",
  },
  {
    icon: <HandshakeIcon />,
    title: "الالتزام",
    desc: "الوفاء بما تعهدت به المؤسسة تجاه الفئات المستهدفة",
  },
  {
    icon: <ScalesIcon />,
    title: "العدالة",
    desc: "لكل مستفيدة الحق في الخدمات دون أي اعتبار",
  },
  {
    icon: <LightbulbIcon />,
    title: "الابتكار والإبداع",
    desc: "تشجيع الأفكار المميزة ومكافأة التجديد",
  },
  {
    icon: <StarIcon />,
    title: "المهنية والتطوير",
    desc: "عمل قائم على منهجية مهنية واضحة",
  },
];

const strategicGoals = [
  "مشاركة فاعلة للنساء في الحياة الاقتصادية وحماية حقوق النساء العاملات",
  "مشاركة نساء مصر في عملية صنع القرار في الفضاءين العام والخاص على أساس العدالة والمساواة",
  "ضمان حماية النساء والفتيات من كافة أشكال العنف المبني على النوع الاجتماعي",
  "تتمتع المؤسسة بقدرات فعالة وبنية مؤسسية متماسكة للقيام بدورها الطليعي في المجتمع",
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutClient() {
  return (
    <>
      {/* ── 1. HERO BANNER ───────────────────────────────────────────────── */}
      <section dir="rtl" className="bg-primary px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center gap-5"
          >
            {/* Eyebrow badge */}
            <motion.div variants={scaleIn}>
              <span className="inline-flex items-center gap-2 bg-white/10 text-white/90 font-cairo font-semibold text-xs md:text-sm px-4 py-2 rounded-full border border-white/20">
                <span
                  aria-hidden="true"
                  className="w-2 h-2 rounded-full bg-secondary inline-block"
                />
                مؤسسة مدنية نسوية حقوقية
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeInUp}
              className="font-cairo font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-[1.3]"
            >
              من نحن
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeInUp}
              className="font-tajawal text-base md:text-xl text-white/80 max-w-2xl leading-relaxed"
            >
              مؤسسة مدنية نسوية حقوقية — تأسست من رحم الحاجة الحقيقية
            </motion.p>

            {/* Decorative divider */}
            <motion.div
              variants={scaleIn}
              aria-hidden="true"
              className="w-20 h-1 rounded-full bg-secondary mt-1"
            />
          </motion.div>
        </div>
      </section>

      {/* ── 2. FOUNDATION STORY ──────────────────────────────────────────── */}
      <section dir="rtl" className="bg-bg px-4 py-14 md:py-20 lg:py-28">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          {/* Section heading */}
          <AnimateOnScroll className="text-center">
            <h2 className="font-cairo font-bold text-2xl md:text-3xl lg:text-4xl text-primary">
              قصتنا
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-3 w-16 h-1 rounded-full bg-secondary"
            />
          </AnimateOnScroll>

          {/* Story block with gold right-border (RTL: visual left margin) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="border-r-4 border-secondary pr-6 md:pr-8 flex flex-col gap-7"
          >
            <motion.p
              variants={fadeInUp}
              className="font-tajawal text-base md:text-lg text-gray-700 leading-[1.95]"
            >
              خلال الربع الأخير من العام 2022، شرعت مجموعة من الشابات
              المصريات، بشكل تطوعي، بتنفيذ أنشطة لتمكين النساء ضمن مبادرة
              حملت اسم &lsquo;مؤنث سالم&rsquo;، لما لمسنه من تمييز تتعرض له
              الصحافيات أثناء عملهن.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="font-tajawal text-base md:text-lg text-gray-700 leading-[1.95]"
            >
              مع انتصاف العام 2023، قررت المجموعة الاعتماد على جهود عضواتها
              للعمل من أجل تسليط الضوء على ما تعانيه النساء العاملات من
              انتهاك لحقوقهن في بيئة العمل.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="font-tajawal text-base md:text-lg text-gray-700 leading-[1.95]"
            >
              مع نهاية 2024، تم ترخيص المؤسسة رسمياً تحت ولاية وزارة
              التضامن الاجتماعي وفقاً للقانون 149/2019، لتتحول المبادرة إلى
              مؤسسة مدنية ذات حوكمة واضحة وشفافية كاملة.
            </motion.p>
          </motion.div>

          {/* Story image */}
          <AnimateOnScroll className="mt-4">
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5">
              <Image
                src="/images/workshop.jpg"
                alt="ورشة دعم وتدريب للنساء"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── 3. VISION & MISSION ──────────────────────────────────────────── */}
      <section dir="rtl" className="bg-surface px-4 py-14 md:py-20 lg:py-28">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          {/* Section heading */}
          <AnimateOnScroll className="text-center">
            <h2 className="font-cairo font-bold text-2xl md:text-3xl lg:text-4xl text-primary">
              رؤيتنا ورسالتنا
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-3 w-16 h-1 rounded-full bg-secondary"
            />
          </AnimateOnScroll>

          {/* Two-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Vision Card */}
            <AnimateOnScroll variants={fadeInRight}>
              <Card className="bg-white border-t-4 border-primary p-8 gap-5 h-full">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                    <EyeIcon />
                  </span>
                  <Card.Title className="font-cairo font-bold text-xl md:text-2xl text-primary">
                    الرؤية
                  </Card.Title>
                </div>
                <p className="font-tajawal text-foreground/85 text-base leading-[1.9]">
                  مجتمع مصري حر يقوم على مبادئ العدالة، والكرامة الإنسانية،
                  واحترام حق المواطنة، وحقوق الإنسان، بحيث تتمكن النساء من
                  التمتع بالمساواة الكاملة. عالم عمل آمن وعادل للنساء في
                  كافة المجالات.
                </p>
              </Card>
            </AnimateOnScroll>

            {/* Mission Card */}
            <AnimateOnScroll variants={fadeInLeft} delay={0.1}>
              <Card className="bg-white border-t-4 border-primary p-8 gap-5 h-full">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                    <TargetIcon />
                  </span>
                  <Card.Title className="font-cairo font-bold text-xl md:text-2xl text-primary">
                    الرسالة
                  </Card.Title>
                </div>
                <p className="font-tajawal text-foreground/85 text-base leading-[1.9]">
                  مؤسسة مدنية نسوية حقوقية تسعى لتحقيق المساواة من منظور
                  النوع الاجتماعي، ومناهضة العنف المبني على النوع الاجتماعي،
                  وتعمل على ضمان حق الوصول العادل للموارد، والمساهمة في
                  عملية التنمية من خلال توفير الدعم النفسي والقانوني وتشجيع
                  مشاركة النساء السياسية والاقتصادية والاجتماعية.
                </p>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── 4. CORE VALUES ───────────────────────────────────────────────── */}
      <section dir="rtl" className="bg-bg px-4 py-14 md:py-20 lg:py-28">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          {/* Section heading */}
          <AnimateOnScroll className="text-center">
            <h2 className="font-cairo font-bold text-2xl md:text-3xl lg:text-4xl text-primary">
              قيمنا المؤسسية
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-3 w-16 h-1 rounded-full bg-secondary"
            />
          </AnimateOnScroll>

          {/* Values grid — 2 cols mobile, 3 cols desktop */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {coreValues.map((value) => (
              <motion.div key={value.title} variants={scaleIn} className="h-full">
                <Card variant="default" className="p-6 hover:shadow-md transition-shadow h-full">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-secondary/15 text-secondary shrink-0">
                    {value.icon}
                  </span>
                  <Card.Header>
                    <Card.Title className="font-cairo font-bold text-base md:text-lg text-foreground leading-snug">
                      {value.title}
                    </Card.Title>
                    <Card.Description className="font-tajawal text-muted text-sm leading-relaxed">
                      {value.desc}
                    </Card.Description>
                  </Card.Header>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. STRATEGIC GOALS ───────────────────────────────────────────── */}
      <section dir="rtl" className="bg-primary px-4 py-14 md:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          {/* Section heading */}
          <AnimateOnScroll className="text-center">
            <h2 className="font-cairo font-bold text-2xl md:text-3xl lg:text-4xl text-white">
              أهدافنا الاستراتيجية 2025-2030
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-3 w-16 h-1 rounded-full bg-secondary"
            />
          </AnimateOnScroll>

          {/* Goals list */}
          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-5"
          >
            {strategicGoals.map((goal, index) => (
              <motion.li
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-5 bg-white/8 rounded-2xl px-6 py-5 border border-white/10 hover:bg-white/12 transition-colors"
              >
                {/* Gold decorative number */}
                <span
                  aria-hidden="true"
                  className="font-cairo font-bold text-3xl md:text-4xl text-secondary leading-none shrink-0 tabular-nums mt-0.5"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-tajawal text-white/90 text-base md:text-lg leading-[1.85] pt-1">
                  {goal}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* ── 6. WHO WE ARE / CTA ──────────────────────────────────────────── */}
      <section dir="rtl" className="bg-surface px-4 py-14 md:py-20 lg:py-28">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-10">
          {/* Section heading */}
          <AnimateOnScroll className="text-center w-full">
            <h2 className="font-cairo font-bold text-2xl md:text-3xl lg:text-4xl text-primary">
              من نحن
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-3 w-16 h-1 rounded-full bg-secondary"
            />
          </AnimateOnScroll>

          {/* Description */}
          <AnimateOnScroll delay={0.1} className="w-full">
            <p className="font-tajawal text-base md:text-lg text-gray-700 leading-[1.95] text-center">
              مجموعة من الباحثات والناشطات النسويات في النقابات والمجالات
              المختلفة، نعمل على تحقيق مبادئ العدالة والمساواة وتكافؤ الفرص
              بين الجنسين. تنطلق توجهاتنا من الإيمان العميق بحقوق المرأة
              الواردة في المواثيق والمعاهدات الدولية، وتدعم توجهاتنا أهداف
              التنمية المستدامة 2030 وخطة مصر 2030.
            </p>
          </AnimateOnScroll>

          {/* CTA Button */}
          <AnimateOnScroll delay={0.2}>
            <Link
              href="/contact"
              className={buttonVariants({ size: "lg", variant: "primary" })}
            >
              شاركي معنا
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
