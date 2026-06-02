import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants, Card } from "@heroui/react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "الأخبار والتغطيات",
  description: "تغطية إعلامية لمبادرة مؤنث سالم — مقالات وتقارير منشورة في الصحف المصرية والعربية.",
};

const pressCoverage = [
  {
    outlet: "شبكة الصحفيين الدوليين",
    date: "2023",
    title: "«مؤنث سالم».. مبادرة إعلامية لدعم الصحفيات المصريات",
    excerpt:
      "تعريف بمبادرة مؤنث سالم التي أسستها أسماء فتحي، صحفية مستقلة متخصصة في تغطية قضايا النساء، لتوفير بيئة عمل آمنة وعادلة للصحفيات.",
    url: "https://ijnet.org/ar/story/%D9%85%D8%A4%D9%86%D8%AB-%D8%B3%D8%A7%D9%84%D9%85-%D9%85%D8%A8%D8%A7%D8%AF%D8%B1%D8%A9-%D8%A5%D8%B9%D9%84%D8%A7%D9%85%D9%8A%D8%A9-%D9%84%D8%AF%D8%B9%D9%85-%D8%A7%D9%84%D8%B5%D8%AD%D9%81%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D8%A7%D8%AA",
  },
  {
    outlet: "بوابة الدستور",
    date: "2023",
    title: "«مؤنث سالم» تطلق حملة «أيوه أنا اتعنفت» لرفع الوعي بأشكال العنف",
    excerpt:
      "تغطية إطلاق حملة «أيوه أنا اتعنفت» التي تستهدف كسر وصم العنف وتشجيع الناجيات على سرد تجاربهن.",
    url: "https://www.dostor.org/4574597",
  },
  {
    outlet: "وطني نت",
    date: "مارس 2023",
    title: "مبادرة «مؤنث سالم» تبدأ ورش «الدعم النفسي» للصحافيات",
    excerpt:
      "ورشة بدأت في 21 مارس 2023 بقيادة هالة حماد، إكلينيكية متخصصة في الدعم النفسي، وتناولت التمييز الجندري في بيئات العمل وأسبابه وآثاره النفسية.",
    url: "https://www.wataninet.com/2023/03/%D8%A8%D8%A7%D9%84%D9%81%D9%8A%D8%AF%D9%8A%D9%88-%D9%85%D8%A8%D8%A7%D8%AF%D8%B1%D8%A9-%D9%85%D8%A4%D9%86%D8%AB-%D8%B3%D8%A7%D9%84%D9%85-%D8%AA%D8%A8%D8%AF%D8%A3-%D9%88%D8%B1%D8%B4-%D8%A7%D9%84/",
  },
  {
    outlet: "أخبار اليوم",
    date: "2023",
    title: "«مؤنث سالم» تنظم ورشة عمل حول الدعم النفسي للصحفيات في بيئة العمل",
    excerpt:
      "تغطية لورشة عمل متخصصة في مساعدة الصحفيات على التعامل مع ضغوط بيئة العمل والآثار النفسية للتمييز.",
    url: "https://akhbarelyom.com/news/newdetails/4045930",
  },
  {
    outlet: "وطني نت",
    date: "10 ديسمبر 2023",
    title: "حملة «بدون أجر» — تسليط الضوء على معاناة العمل غير المأجور للصحفيات",
    excerpt:
      "بالشراكة مع مؤسسة جنوبية حرة، شاركت أكثر من 30 صحفية بشهاداتهن الواقعية حول العمل غير المأجور في الإعلام المصري والعربي.",
    url: "https://www.wataninet.com/2023/12/%D9%84%D8%AA%D8%B3%D9%84%D9%8A%D8%B7-%D8%A7%D9%84%D8%B6%D9%88%D8%A1-%D8%B9%D9%84%D9%89-%D9%85%D8%B9%D8%A7%D9%86%D8%A7%D8%A9-%D8%A7%D9%84%D8%B9%D9%85%D9%84-%D8%BA%D9%8A%D8%B1-%D8%A7%D9%84%D9%85%D8%A3/",
  },
  {
    outlet: "بوابة الدستور",
    date: "2024",
    title: "«مؤنث سالم» تختتم حملة «أمان قلمي»",
    excerpt:
      "تغطية اختتام حملة «أمان قلمي» التي وجّهت لمواجهة العنف الإلكتروني الموجَّه ضد الصحفيات وتعزيز سلامتهن الرقمية.",
    url: "https://www.dostor.org/4887336",
  },
];

export default function NewsPage() {
  return (
    <div dir="rtl">
      {/* Hero Banner */}
      <section className="bg-primary px-4 py-14 md:px-8 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-4">
          <h1 className="font-cairo font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            الأخبار والتغطيات الإعلامية
          </h1>
          <p className="font-tajawal text-base md:text-lg text-white/85 leading-relaxed max-w-xl mx-auto">
            ما كتبته الصحف عن مبادرة مؤنث سالم وحملاتها
          </p>
          <div aria-hidden="true" className="mx-auto mt-2 w-16 h-1 rounded-full bg-secondary" />
        </div>
      </section>

      {/* Image banner */}
      <section className="bg-bg px-4 pt-8 md:px-8 md:pt-12">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5">
              <Image
                src="/images/journalist-writing.jpg"
                alt="صحفية تكتب في دفتر ملاحظات"
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Press list */}
      <section className="bg-bg px-4 py-12 md:px-8 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto flex flex-col gap-5 md:gap-6">
          {pressCoverage.map((item, i) => (
            <AnimateOnScroll key={item.url} delay={i * 0.08}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
              >
                <Card className="bg-white p-6 md:p-7 hover:shadow-md transition-shadow border border-gray-100 group-hover:border-secondary">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-cairo font-semibold text-xs md:text-sm text-accent uppercase tracking-wide">
                      {item.outlet}
                    </span>
                    <span className="font-tajawal text-xs md:text-sm text-gray-400">
                      {item.date}
                    </span>
                  </div>
                  <Card.Header>
                    <Card.Title className="font-cairo font-bold text-lg md:text-xl text-primary group-hover:text-accent transition-colors leading-snug">
                      {item.title}
                    </Card.Title>
                    <Card.Description className="font-tajawal text-muted text-sm md:text-base leading-relaxed">
                      {item.excerpt}
                    </Card.Description>
                  </Card.Header>
                  <span className="inline-flex items-center gap-1 font-cairo text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                    اقرأي المقال الأصلي
                    <span aria-hidden="true">←</span>
                  </span>
                </Card>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Social CTA */}
      <section className="bg-surface px-4 py-12 md:py-16 text-center">
        <p className="font-cairo font-bold text-xl md:text-2xl text-primary mb-2">
          تابعينا على منصاتنا
        </p>
        <p className="font-tajawal text-gray-600 mb-8">آخر الأنشطة والحملات أولاً بأول</p>
        <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
          <Link
            href="https://www.facebook.com/muanathsalem"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "primary" })}
          >
            فيسبوك
          </Link>
          <Link
            href="https://www.instagram.com/muanathsalem"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "secondary" })}
          >
            إنستغرام
          </Link>
        </div>
      </section>
    </div>
  );
}
