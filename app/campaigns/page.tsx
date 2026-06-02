import type { Metadata } from "next";
import Image from "next/image";
import { CampaignGrid } from "@/components/CampaignGrid";
import type { CampaignCardProps } from "@/components/CampaignCard";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "الحملات",
  description:
    "تصفحي حملات مؤسسة مؤنث سالم للتنمية — حملات ضد العنف، والتمكين الاقتصادي، والأمان الرقمي، والدعم النفسي.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

interface Campaign extends CampaignCardProps {
  id: number;
  slug: string;
}

const campaigns: Campaign[] = [
  { id: 1,  slug: "aiwa-ana-itanaft",       title: "أيوه أنا أتعنفت",                  description: "حملة لرفع الوعي بأشكال العنف المختلفة التي تتعرض لها النساء وكسر حاجز الصمت",              category: "violence",     hashtag: "#أيوه_أنا_أتعنفت",   date: "2023", status: "completed" },
  { id: 2,  slug: "bedoun-ajr",             title: "بدون أجر",                          description: "تسليط الضوء على العمل غير المأجور الذي تقوم به النساء يومياً دون اعتراف أو تقدير",      category: "economic",     hashtag: "#بدون_أجر",           date: "2023", status: "completed" },
  { id: 3,  slug: "daam-nafsi-filistiniyyat", title: "الدعم النفسي للفلسطينيات",       description: "برنامج دعم نفسي مجاني للنساء الفلسطينيات في مواجهة صدمات الحرب",                         category: "psychological", hashtag: "#دعم_نفسي",           date: "2023", status: "completed" },
  { id: 4,  slug: "ikhtarteeha-leh",        title: "اخترتيها ليه",                      description: "استكشاف قصص النساء في مجالات مهنية غير تقليدية وتحديات الاختيار المهني",                category: "economic",     hashtag: "#اخترتيها_ليه",       date: "2023", status: "completed" },
  { id: 5,  slug: "alagr-aladel-haq",      title: "الأجر العادل حق",                   description: "المطالبة بتطبيق مبدأ المساواة في الأجور بين الجنسين في بيئات العمل المصرية",             category: "economic",     hashtag: "#الأجر_العادل_حق",    date: "2023", status: "completed" },
  { id: 6,  slug: "warsha-daam-nafsi",      title: "ورشة دعم نفسي للصحفيات",           description: "ورشة عمل متخصصة لدعم الصحفيات نفسياً في مواجهة ضغوط العمل والتحرش",                    category: "psychological", hashtag: "#دعم_نفسي_للصحفيات", date: "2023", status: "completed" },
  { id: 7,  slug: "mish-zanbi-inni-om",     title: "مش ذنبي إني أم",                   description: "مناهضة التمييز في بيئة العمل بسبب الأمومة والمطالبة بحماية حقوق الأمهات العاملات",      category: "economic",     hashtag: "#مش_ذنبي_إني_أم",     date: "2024", status: "completed" },
  { id: 8,  slug: "matalib-alsahfiyyat",    title: "مطالب الصحفيات ضرورة",              description: "رصد مطالب الصحفيات النقابية وتضخيمها للوصول لصانعي القرار",                             category: "economic",     hashtag: "#مطالب_الصحفيات",     date: "2024", status: "completed" },
  { id: 9,  slug: "warsha-daam-digital",    title: "ورشة الدعم النفسي والعنف الرقمي", description: "ورشة متكاملة تجمع بين الدعم النفسي ومواجهة العنف الإلكتروني",                            category: "digital",      hashtag: "#العنف_الرقمي",       date: "2024", status: "completed" },
  { id: 10, slug: "ittifaqiyya-190",        title: "اتفاقية العمل 190",                 description: "التوعية باتفاقية منظمة العمل الدولية رقم 190 الخاصة بالقضاء على العنف في بيئة العمل",   category: "violence",     hashtag: "#اتفاقية_190",        date: "2024", status: "completed" },
  { id: 11, slug: "min-awwal-almashhwar",   title: "من أول المشوار",                    description: "برنامج تمكين مهني للنساء في بداية مسيرتهن المهنية",                                      category: "economic",     hashtag: "#من_أول_المشوار",     date: "2024", status: "completed" },
  { id: 12, slug: "alsalama-alraqamiyya",   title: "السلامة الرقمية",                   description: "تدريب النساء على أدوات وتقنيات الحماية الرقمية وصون الخصوصية الإلكترونية",              category: "digital",      hashtag: "#السلامة_الرقمية",    date: "2024", status: "completed" },
  { id: 13, slug: "lugha-hassasa",          title: "اللغة الحساسة للنوع الاجتماعي",    description: "توعية بأهمية استخدام لغة منصفة ومراعية للنوع الاجتماعي في الإعلام والتواصل",           category: "training",     hashtag: "#لغة_حساسة",          date: "2024", status: "completed" },
  { id: 14, slug: "taghayyurat-manakhiyya", title: "التغيرات المناخية والقصص الصحفية", description: "تدريب الصحفيات على تغطية قضايا التغير المناخي من منظور النوع الاجتماعي",                 category: "training",     hashtag: "#صحافة_مناخية",       date: "2024", status: "completed" },
  { id: 15, slug: "fatura-alunf",           title: "فاتورة العنف",                      description: "حملة تسلط الضوء على التكلفة الاقتصادية والنفسية للعنف ضد النساء التي تدفعها الضحايا لسنوات", category: "violence",  hashtag: "#فاتورة_العنف",       date: "2025", status: "active" },
  { id: 16, slug: "aman-qalami",            title: "أمان رقمي / أمان قلمي",            description: "مبادرة لحماية الصحفيات من العنف الإلكتروني وتعزيز سلامتهن الرقمية والمهنية",            category: "digital",      hashtag: "#أمان_قلمي",          date: "2025", status: "active" },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CampaignsPage() {
  return (
    <>
      {/* ── Hero Banner ───────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-primary px-4 py-14 md:px-8 md:py-20 lg:px-16"
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-4">
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 bg-white/10 text-white/90 font-cairo font-semibold text-xs md:text-sm px-4 py-2 rounded-full border border-white/20">
            <span
              aria-hidden="true"
              className="w-2 h-2 rounded-full bg-secondary inline-block"
            />
            مبادرة مؤنث سالم
          </span>

          {/* H1 */}
          <h1 className="font-cairo font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-snug">
            حملاتنا
          </h1>

          {/* Tagline */}
          <p className="font-tajawal text-base md:text-lg text-white/80 max-w-md leading-relaxed">
            من «بدون أجر» إلى «أمان قلمي» — حملات وطنية لدعم الصحفيات المصريات
          </p>

          {/* Decorative divider */}
          <div
            aria-hidden="true"
            className="w-16 h-1 rounded-full bg-secondary mt-2"
          />
        </div>
      </section>

      {/* ── Image banner ──────────────────────────────────────────────── */}
      <section dir="rtl" className="bg-bg px-4 pt-8 md:px-8 md:pt-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5">
            <Image
              src="/images/women-solidarity.jpg"
              alt="مجموعة نساء في تضامن"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Campaign Grid ─────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-bg px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20"
      >
        <div className="max-w-6xl mx-auto">
          <CampaignGrid campaigns={campaigns} />
        </div>
      </section>
    </>
  );
}
