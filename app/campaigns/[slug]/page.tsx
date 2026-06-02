import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buttonVariants, Card } from "@heroui/react";
import { campaigns, getCampaignBySlug } from "@/lib/campaigns";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

// ─── Static generation ────────────────────────────────────────────────────────

export function generateStaticParams() {
  return campaigns.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const campaign = getCampaignBySlug(slug);
  if (!campaign) return {};
  return {
    title: campaign.title,
    description: campaign.description,
  };
}

// ─── Category labels ──────────────────────────────────────────────────────────

const categoryLabels: Record<string, string> = {
  violence: "العنف والحماية",
  economic: "التمكين الاقتصادي",
  psychological: "الدعم النفسي",
  digital: "الأمان الرقمي",
  training: "التدريب",
};

const categoryColors: Record<string, string> = {
  violence: "bg-red-100 text-red-700",
  economic: "bg-green-100 text-green-700",
  psychological: "bg-blue-100 text-blue-700",
  digital: "bg-violet-100 text-violet-700",
  training: "bg-amber-100 text-amber-700",
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function CampaignPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const campaign = getCampaignBySlug(slug);
  if (!campaign) notFound();

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section dir="rtl" className="bg-primary px-4 py-14 md:px-8 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-5 text-center">
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" className="flex justify-center gap-2 font-tajawal text-sm text-white/60">
            <Link href="/campaigns" className="hover:text-white transition-colors">الحملات</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/90">{campaign.title}</span>
          </nav>

          {/* Hashtag badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 bg-secondary/20 text-secondary border border-secondary/30 font-cairo font-semibold text-sm px-5 py-2 rounded-full">
              {campaign.hashtag}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-cairo font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-snug">
            {campaign.title}
          </h1>

          {/* Status + date + partner */}
          <div className="flex flex-wrap justify-center items-center gap-3 text-sm">
            <span
              className={`font-cairo font-semibold px-3 py-1 rounded-full text-xs ${
                campaign.status === "active"
                  ? "bg-green-500/20 text-green-300 border border-green-400/30"
                  : "bg-white/10 text-white/70"
              }`}
            >
              {campaign.status === "active" ? "نشطة 🟢" : "مكتملة"}
            </span>
            <span className="font-tajawal text-white/70">{campaign.date}</span>
            {campaign.partnerOrg && (
              <span className="font-tajawal text-white/70">
                بالشراكة مع <span className="text-secondary font-medium">{campaign.partnerOrg}</span>
              </span>
            )}
          </div>

          {/* Divider */}
          <div aria-hidden="true" className="mx-auto mt-1 w-16 h-1 rounded-full bg-secondary" />
        </div>
      </section>

      {/* ── Main image ────────────────────────────────────────────────────── */}
      <section dir="rtl" className="bg-bg px-4 -mt-8 pb-0 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/10">
            <Image
              src={campaign.image}
              alt={campaign.title}
              fill
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Content + Sidebar ─────────────────────────────────────────────── */}
      <section dir="rtl" className="bg-bg px-4 py-14 md:px-8 md:py-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <div>
              <h2 className="font-cairo font-bold text-2xl md:text-3xl text-primary mb-5">
                عن الحملة
              </h2>
              {campaign.fullDescription.split("\n\n").map((para, i) => (
                <p key={i} className="font-tajawal text-base md:text-lg text-foreground/85 leading-[1.95] mb-4">
                  {para}
                </p>
              ))}
            </div>

            <div>
              <h2 className="font-cairo font-bold text-2xl md:text-3xl text-primary mb-5">
                لماذا هذه الحملة؟
              </h2>
              <p className="font-tajawal text-base md:text-lg text-foreground/85 leading-[1.95]">
                {campaign.why}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            <Card className="bg-white p-6 gap-4">
              {/* Category */}
              <div className="flex items-center gap-3">
                <span className="font-cairo font-medium text-sm text-muted">التصنيف</span>
                <span className={`text-xs font-cairo font-semibold px-3 py-1 rounded-full ${categoryColors[campaign.category]}`}>
                  {categoryLabels[campaign.category]}
                </span>
              </div>
              {/* Status */}
              <div className="flex items-center gap-3">
                <span className="font-cairo font-medium text-sm text-muted">الحالة</span>
                <span className={`text-xs font-cairo font-medium px-3 py-1 rounded-full ${
                  campaign.status === "active" ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-500"
                }`}>
                  {campaign.status === "active" ? "نشطة" : "مكتملة"}
                </span>
              </div>
              {/* Date */}
              <div className="flex items-center gap-3">
                <span className="font-cairo font-medium text-sm text-muted">التاريخ</span>
                <span className="font-tajawal text-sm text-foreground">{campaign.date}</span>
              </div>
              {/* Partner */}
              {campaign.partnerOrg && (
                <div className="flex items-center gap-3">
                  <span className="font-cairo font-medium text-sm text-muted">شراكة مع</span>
                  <span className="font-tajawal text-sm text-primary font-medium">{campaign.partnerOrg}</span>
                </div>
              )}
              {/* Hashtag */}
              <div className="pt-2 border-t border-gray-100">
                <span className="font-cairo font-bold text-xl text-secondary">{campaign.hashtag}</span>
              </div>
            </Card>

            {/* Share CTA */}
            <Card className="bg-primary/5 border border-primary/15 p-5 text-center gap-3">
              <p className="font-cairo font-semibold text-primary text-sm">
                شاركي هذه الحملة
              </p>
              <p className="font-tajawal text-muted text-xs leading-relaxed">
                المشاركة تُضخّم الأثر — ساعدينا في الوصول لأكبر عدد ممكن
              </p>
              <span className="font-cairo font-bold text-secondary text-sm">{campaign.hashtag}</span>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Activities ────────────────────────────────────────────────────── */}
      <section dir="rtl" className="bg-surface px-4 py-14 md:px-8 md:py-20">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="font-cairo font-bold text-2xl md:text-3xl text-primary">
              ما فعلناه
            </h2>
            <div aria-hidden="true" className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {campaign.activities.map((activity, i) => (
              <AnimateOnScroll key={i} delay={i * 0.07}>
                <Card className="bg-white p-5 gap-3 h-full">
                  <span
                    aria-hidden="true"
                    className="font-cairo font-bold text-3xl text-secondary leading-none"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-tajawal text-base text-foreground/85 leading-relaxed">
                    {activity}
                  </p>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact stats ─────────────────────────────────────────────────── */}
      {campaign.impact && campaign.impact.length > 0 && (
        <section dir="rtl" className="bg-primary px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {campaign.impact.map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center gap-2">
                  <span className="font-cairo font-bold text-4xl md:text-5xl text-secondary">
                    {item.stat}
                  </span>
                  <span className="font-tajawal text-sm text-white/80">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Quote ─────────────────────────────────────────────────────────── */}
      {campaign.quote && (
        <section dir="rtl" className="bg-surface px-4 py-14 md:py-20">
          <div className="max-w-3xl mx-auto">
            <AnimateOnScroll>
              <Card className="bg-white !rounded-3xl px-8 py-10 md:px-12 md:py-14 items-center text-center gap-5">
                <span aria-hidden="true" className="font-cairo font-bold text-8xl text-secondary leading-none -mb-4">
                  &ldquo;
                </span>
                <blockquote className="font-tajawal text-base md:text-lg text-foreground/85 leading-loose max-w-xl">
                  {campaign.quote.text}
                </blockquote>
                <div>
                  <span className="font-cairo font-semibold text-sm text-foreground">
                    {campaign.quote.attribution}
                  </span>
                  <br />
                  <span className="font-tajawal text-xs text-accent">{campaign.hashtag}</span>
                </div>
              </Card>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="px-4 py-14 md:py-20"
        style={{ background: "linear-gradient(135deg, #0f2157 0%, #1E3A8A 60%, #1e40af 100%)" }}
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
          <h2 className="font-cairo font-bold text-2xl md:text-3xl text-white leading-snug">
            هل تريدين الانضمام أو الدعم؟
          </h2>
          <p className="font-tajawal text-white/85 text-base leading-relaxed max-w-md">
            فريقنا يرحب بالمتطوعات والمتضامنات والمانحات. معاً نُحدث الفرق.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className={buttonVariants({ size: "lg", variant: "secondary" })}>
              تواصلي معنا
            </Link>
            <Link href="/campaigns" className={buttonVariants({ size: "lg", variant: "outline" }) + " !text-white !border-white/40 hover:!bg-white/10"}>
              الحملات الأخرى
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
