"use client";

import { useState } from "react";

const faqs = [
  {
    q: "ما الذي يُعدّ تمييزاً في بيئة العمل؟",
    a: "يُعدّ تمييزاً أي معاملة غير متساوية تستند إلى الجنس أو الحمل أو الأمومة في الأجور أو الترقية أو التوظيف أو الفصل من العمل. كذلك يشمل إلزام المرأة بشروط أو قواعد لا تُطبَّق على زملائها الذكور في ذات الوظيفة.",
  },
  {
    q: "كيف أتقدم بشكوى لمفتشية العمل؟",
    a: "يمكنك التوجه إلى مكتب مفتشية العمل التابع للمحافظة التي يقع فيها مقر العمل، أو التقدم بشكوى عبر بوابة وزارة القوى العاملة الإلكترونية. يُنصح بإحضار عقد العمل وأي مستندات أو رسائل تثبت الانتهاك.",
  },
  {
    q: "ما حقوقي إذا تعرضت للفصل التعسفي؟",
    a: "يحق لكِ الطعن في قرار الفصل أمام محكمة العمل خلال ثلاثة أشهر من تاريخ الإخطار به. في حالة ثبوت التعسف، يحق لكِ التعويض بما يعادل أجر مدة لا تقل عن شهرين عن كل سنة خدمة، فضلاً عن مستحقاتك الأخرى.",
  },
  {
    q: "هل يمكنني التقاضي ضد صاحب العمل؟",
    a: "نعم. القانون المصري يكفل حق التقاضي لكل عاملة. يمكن رفع دعوى أمام المحكمة العمالية المختصة. ننصح بالاستعانة بمحامٍ متخصص — يمكننا مساعدتك في التواصل مع المحامين المتطوعين لدى المؤسسة مجاناً.",
  },
  {
    q: "كيف أتواصل مع المحامين المتطوعين لدى المؤسسة؟",
    a: "يمكنك التواصل معنا عبر نموذج الاستفسار في صفحة التواصل، أو مراسلتنا مباشرة عبر البريد الإلكتروني أو وسائل التواصل الاجتماعي. سيتواصل معكِ أحد أعضاء فريقنا القانوني خلال 48 ساعة لتحديد موعد استشارة مجانية.",
  },
];

export default function LegalFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div
      className="flex flex-col gap-3"
      role="list"
      aria-label="الأسئلة الشائعة حول الحقوق القانونية"
    >
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            role="listitem"
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
              id={`faq-question-${i}`}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-right focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-primary/30"
            >
              <span className="font-cairo font-semibold text-base md:text-lg text-gray-900 leading-snug text-right">
                {faq.q}
              </span>
              <span
                aria-hidden="true"
                className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </button>

            <div
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-question-${i}`}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="font-tajawal text-gray-600 text-base leading-relaxed px-5 pb-5 md:px-6 md:pb-6 pt-0">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
