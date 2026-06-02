import type { Metadata } from "next";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import TrainingRegistrationForm from "./TrainingRegistrationForm";
import ProgramsGrid from "./ProgramsGrid";

export const metadata: Metadata = {
  title: "التدريب والبرامج",
  description:
    "برامج تدريبية لتمكين النساء المصريات — صحافة الموبايل، الأمان الرقمي، الكتابة الإبداعية، وأكثر.",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

export interface Program {
  id: string;
  title: string;
  badge: string;
  badgeClass: string;
  meta: { label: string; value: string } | null;
  description: string;
  topics: string[];
  status: string;
  statusAvailable: boolean;
}

const programs: Program[] = [
  {
    id: "mobile",
    title: "تدريب صحافة الموبايل",
    badge: "صحافة",
    badgeClass: "bg-primary text-white",
    meta: { label: "المدة", value: "يومان مكثفان" },
    description:
      "من الفكرة إلى النشر — تعلمي إنتاج محتوى إعلامي احترافي باستخدام هاتفك فقط",
    topics: [
      "أشكال وأحجام الكادرات الاحترافية",
      "إنتاج قصة صحفية متكاملة بالموبايل",
      "التصوير الاحترافي للمحتوى الرقمي",
      "مونتاج الفيديو عبر الموبايل",
      "مكساج الصوت والنشر الاحترافي",
    ],
    status: "متاح — سجلي الآن",
    statusAvailable: true,
  },
  {
    id: "junior",
    title: "مؤنث سالم جونيور",
    badge: "أطفال",
    badgeClass: "bg-accent text-white",
    meta: { label: "الفئة العمرية", value: "للأطفال 8-14 سنة" },
    description:
      "برنامج تدريبي للأطفال لتعلم أساسيات الأمان الرقمي وبناء جيل واعٍ بمخاطر الإنترنت",
    topics: [
      "أساسيات الأمان الرقمي للأطفال",
      "كيف تتصرف إذا تعرضت للتنمر الإلكتروني",
      "سفراء الأمان الرقمي — TOT",
    ],
    status: "سجلي الاهتمام",
    statusAvailable: true,
  },
  {
    id: "creative-writing",
    title: "ورشة الكتابة الإبداعية — طعم الكلام",
    badge: "كتابة",
    badgeClass: "bg-secondary text-primary",
    meta: null,
    description:
      "ورشة إبداعية لتحرير الصوت الداخلي عبر الكتابة — قصص، شعر، تعبير حر",
    topics: [
      "تقنيات الكتابة الإبداعية",
      "السرد الشخصي والشهادات",
      "الكتابة كأداة للشفاء النفسي",
    ],
    status: "قريباً",
    statusAvailable: false,
  },
  {
    id: "gender-language",
    title: "ورشة اللغة الحساسة للنوع الاجتماعي",
    badge: "لغة",
    badgeClass: "bg-green-600 text-white",
    meta: null,
    description:
      "كيف نتحدث عن النساء والقضايا الجندرية بلغة منصفة وغير مُضرّة",
    topics: [
      "مفهوم اللغة الجنسانية والألفاظ المُضرّة",
      "البدائل اللغوية المنصفة",
      "تطبيق اللغة الحساسة في الكتابة الإعلامية",
    ],
    status: "متاح",
    statusAvailable: true,
  },
  {
    id: "psych-support",
    title: "ورشة الدعم النفسي للصحفيات",
    badge: "دعم نفسي",
    badgeClass: "bg-violet-600 text-white",
    meta: null,
    description:
      "ورشة متخصصة لمساعدة الصحفيات في التعامل مع ضغوط المهنة والصدمات الناتجة عن التغطيات الصعبة",
    topics: [
      "الصدمة الثانوية وكيفية التعامل معها",
      "مهارات الحدود المهنية والشخصية",
      "تقنيات الرعاية الذاتية للصحفيات",
    ],
    status: "متاح",
    statusAvailable: true,
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TrainingPage() {
  return (
    <div dir="rtl" className="bg-bg min-h-screen">
      {/* ── 1. Hero ── */}
      <section className="bg-primary px-4 py-14 md:px-8 md:py-20 text-center">
        <AnimateOnScroll>
          <h1 className="font-cairo font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            التدريب والبرامج
          </h1>
          <p className="mt-4 font-tajawal text-base md:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
            نبني قدراتكِ لتبني مستقبلكِ
          </p>
        </AnimateOnScroll>
      </section>

      {/* ── Image banner ── */}
      <section className="px-4 pt-8 md:px-8 md:pt-12">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5">
              <Image
                src="/images/seminar.jpg"
                alt="ورشة تدريبية للنساء"
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── 2. Programs Grid ── */}
      <section
        className="px-4 py-10 md:px-8 md:py-16 lg:px-16 lg:py-20"
        aria-labelledby="programs-heading"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-10 md:gap-14">
          <AnimateOnScroll className="text-center">
            <h2
              id="programs-heading"
              className="font-cairo font-bold text-2xl md:text-3xl lg:text-4xl text-primary"
            >
              برامجنا التدريبية
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-3 w-16 h-1 rounded-full bg-secondary"
            />
          </AnimateOnScroll>

          <ProgramsGrid programs={programs} />
        </div>
      </section>

      {/* ── 3. Registration Form ── */}
      <section
        className="bg-surface px-4 py-10 md:px-8 md:py-16 lg:px-16 lg:py-20"
        aria-labelledby="register-heading"
      >
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll className="text-center mb-8">
            <h2
              id="register-heading"
              className="font-cairo font-bold text-2xl md:text-3xl text-primary"
            >
              سجلي في البرامج
            </h2>
            <p className="mt-2 font-tajawal text-gray-600 text-sm md:text-base leading-relaxed">
              أخبرينا عن اهتمامك وسنتواصل معكِ بالتفاصيل
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <TrainingRegistrationForm />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
