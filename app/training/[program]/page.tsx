import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buttonVariants, Card } from "@heroui/react";
import { programs, getProgramById } from "@/lib/programs";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import TrainingRegistrationForm from "@/app/training/TrainingRegistrationForm";

// ─── Static generation ────────────────────────────────────────────────────────

export function generateStaticParams() {
  return programs.map((p) => ({ program: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ program: string }>;
}): Promise<Metadata> {
  const { program: id } = await params;
  const program = getProgramById(id);
  if (!program) return {};
  return {
    title: program.title,
    description: program.description,
  };
}

// ─── Check icon ──────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 shrink-0"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ program: string }>;
}) {
  const { program: id } = await params;
  const program = getProgramById(id);
  if (!program) notFound();

  const relatedPrograms = programs.filter((p) => p.id !== id).slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section dir="rtl" className="bg-primary px-4 py-14 md:px-8 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-5 text-center">
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" className="flex justify-center gap-2 font-tajawal text-sm text-white/60">
            <Link href="/training" className="hover:text-white transition-colors">التدريب</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/90">{program.title}</span>
          </nav>

          {/* Badge */}
          <div className="flex justify-center">
            <span className={`inline-block font-cairo font-semibold text-sm px-5 py-2 rounded-full ${program.badgeClass}`}>
              {program.badge}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-cairo font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-snug">
            {program.title}
          </h1>

          {/* Status + meta */}
          <div className="flex flex-wrap justify-center items-center gap-3 text-sm">
            <span
              className={`font-cairo font-medium px-3 py-1 rounded-full text-xs ${
                program.statusAvailable
                  ? "bg-green-500/20 text-green-300 border border-green-400/30"
                  : "bg-white/10 text-white/70"
              }`}
            >
              {program.status}
            </span>
            {program.meta && (
              <span className="font-tajawal text-white/70">
                {program.meta.label}: <span className="text-secondary">{program.meta.value}</span>
              </span>
            )}
            {program.duration && (
              <span className="font-tajawal text-white/70">{program.duration}</span>
            )}
          </div>

          <div aria-hidden="true" className="mx-auto mt-1 w-16 h-1 rounded-full bg-secondary" />
        </div>
      </section>

      {/* ── Main image ────────────────────────────────────────────────────── */}
      <section dir="rtl" className="bg-bg px-4 -mt-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/10">
            <Image
              src={program.image}
              alt={program.title}
              fill
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Overview + Sidebar ────────────────────────────────────────────── */}
      <section dir="rtl" className="bg-bg px-4 py-14 md:px-8 md:py-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h2 className="font-cairo font-bold text-2xl md:text-3xl text-primary mb-5">عن البرنامج</h2>
              {program.fullDescription.split("\n\n").map((para, i) => (
                <p key={i} className="font-tajawal text-base md:text-lg text-foreground/85 leading-[1.95] mb-4">
                  {para}
                </p>
              ))}
            </div>
            <div>
              <h2 className="font-cairo font-bold text-xl text-primary mb-3">لمن هذا البرنامج؟</h2>
              <p className="font-tajawal text-base text-foreground/85 leading-relaxed">{program.targetAudience}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            <Card className="bg-white p-6 gap-4">
              <h3 className="font-cairo font-bold text-base text-foreground">تفاصيل البرنامج</h3>
              {program.duration && (
                <div className="flex items-center gap-3">
                  <span className="font-cairo font-medium text-sm text-muted">المدة</span>
                  <span className="font-tajawal text-sm text-foreground">{program.duration}</span>
                </div>
              )}
              {program.format && (
                <div className="flex items-center gap-3">
                  <span className="font-cairo font-medium text-sm text-muted">الأسلوب</span>
                  <span className="font-tajawal text-sm text-foreground">{program.format}</span>
                </div>
              )}
              {program.meta && (
                <div className="flex items-center gap-3">
                  <span className="font-cairo font-medium text-sm text-muted">{program.meta.label}</span>
                  <span className="font-tajawal text-sm text-foreground">{program.meta.value}</span>
                </div>
              )}
              <div className="flex items-center gap-3">
                <span className="font-cairo font-medium text-sm text-muted">الحالة</span>
                <span className={`text-xs font-cairo font-medium px-3 py-1 rounded-full border ${
                  program.statusAvailable
                    ? "bg-green-50 border-green-200 text-green-700"
                    : "bg-gray-50 border-gray-200 text-gray-500"
                }`}>
                  {program.status}
                </span>
              </div>
            </Card>

            {program.statusAvailable ? (
              <Card className="bg-primary/5 border border-primary/15 p-5 text-center gap-3">
                <p className="font-cairo font-semibold text-primary text-sm">جاهزة للتسجيل؟</p>
                <p className="font-tajawal text-muted text-xs">املئي النموذج أدناه وسنتواصل معك بالتفاصيل</p>
                <a
                  href="#register"
                  className={buttonVariants({ size: "sm", variant: "primary" })}
                >
                  سجلي الآن
                </a>
              </Card>
            ) : (
              <Card className="bg-amber-50 border border-amber-200 p-5 text-center gap-3">
                <p className="font-cairo font-semibold text-amber-800 text-sm">قريباً</p>
                <p className="font-tajawal text-amber-700 text-xs">سجلي اهتمامك وسنُعلمك عند الإطلاق</p>
                <Link href="/contact" className={buttonVariants({ size: "sm", variant: "outline" })}>
                  سجلي الاهتمام
                </Link>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* ── Topics / Curriculum ───────────────────────────────────────────── */}
      <section dir="rtl" className="bg-surface px-4 py-14 md:px-8 md:py-20">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="font-cairo font-bold text-2xl md:text-3xl text-primary">محاور البرنامج</h2>
            <div aria-hidden="true" className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {program.topics.map((topic, i) => (
              <AnimateOnScroll key={i} delay={i * 0.06}>
                <Card className="bg-white p-5 gap-3 h-full">
                  <span aria-hidden="true" className="font-cairo font-bold text-3xl text-secondary leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-tajawal text-base text-foreground/85 leading-relaxed">{topic}</p>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── What you learn ────────────────────────────────────────────────── */}
      <section dir="rtl" className="bg-bg px-4 py-14 md:px-8 md:py-20">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="font-cairo font-bold text-2xl md:text-3xl text-primary">ماذا ستتعلمين</h2>
            <div aria-hidden="true" className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {program.whatYouLearn.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 0.08}>
                <Card className="bg-white p-5 flex-row items-start gap-4 h-full">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/15 text-secondary shrink-0 mt-0.5">
                    <CheckIcon />
                  </span>
                  <p className="font-tajawal text-base text-foreground/85 leading-relaxed">{item}</p>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registration form ─────────────────────────────────────────────── */}
      {program.statusAvailable && (
        <section id="register" dir="rtl" className="bg-surface px-4 py-14 md:px-8 md:py-20">
          <div className="max-w-2xl mx-auto">
            <AnimateOnScroll className="text-center mb-8">
              <h2 className="font-cairo font-bold text-2xl md:text-3xl text-primary">سجلي في البرنامج</h2>
              <p className="mt-2 font-tajawal text-muted text-base leading-relaxed">
                أخبرينا عن اهتمامك وسنتواصل معكِ بتفاصيل الدورة القادمة
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <Card className="bg-white p-6 md:p-8">
                <TrainingRegistrationForm defaultProgram={program.title} />
              </Card>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* ── Related programs ──────────────────────────────────────────────── */}
      <section dir="rtl" className="bg-bg px-4 py-14 md:px-8 md:py-20">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="font-cairo font-bold text-2xl md:text-3xl text-primary">برامج أخرى</h2>
            <div aria-hidden="true" className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedPrograms.map((rel) => (
              <Link key={rel.id} href={`/training/${rel.id}`} className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                <Card className="bg-white p-5 gap-3 h-full hover:shadow-md transition-shadow border border-gray-100 group-hover:border-secondary">
                  <span className={`self-start text-xs font-cairo font-semibold px-3 py-1 rounded-full ${rel.badgeClass}`}>
                    {rel.badge}
                  </span>
                  <Card.Header>
                    <Card.Title className="font-cairo font-bold text-base text-foreground group-hover:text-primary transition-colors leading-snug">
                      {rel.title}
                    </Card.Title>
                    <Card.Description className="font-tajawal text-xs text-muted leading-relaxed line-clamp-2">
                      {rel.description}
                    </Card.Description>
                  </Card.Header>
                </Card>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/training" className={buttonVariants({ variant: "outline" })}>
              عرضي كل البرامج
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
