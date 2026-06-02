import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    heading: "عن المؤسسة",
    links: [
      { label: "من نحن",       href: "/about" },
      { label: "الحملات",     href: "/campaigns" },
      { label: "التدريب",     href: "/training" },
    ],
  },
  {
    heading: "الموارد",
    links: [
      { label: "الدعم القانوني",   href: "/resources/legal" },
      { label: "الدعم النفسي",    href: "/resources/psychological" },
      { label: "الأمان الرقمي",   href: "/resources/digital" },
    ],
  },
  {
    heading: "تواصل معنا",
    links: [
      { label: "تواصلي معنا",     href: "/contact" },
      { label: "الأخبار",        href: "/news" },
      { label: "فيسبوك",         href: "https://www.facebook.com/muanathsalem" },
      { label: "إنستاغرام",      href: "https://www.instagram.com/muanathsalem" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* شبكة الأعمدة */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* عمود الهوية */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/logo.jpg"
                alt=""
                width={48}
                height={48}
                className="rounded-full ring-1 ring-white/10"
              />
              <p className="font-bold text-lg text-[#F5A623]">مؤنث سالم</p>
            </div>
            <p className="text-[14px] text-white/60 leading-7">
              مؤسسة مدنية نسوية حقوقية تعمل على تمكين النساء المصريات وحمايتهن
              وضمان حقوقهن.
            </p>
          </div>

          {/* الأعمدة */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[14px] font-semibold text-[#F5A623] mb-4">
                {col.heading}
              </h3>
              <ul className="list-none m-0 p-0 flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-white/70 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* الفاصل السفلي */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex items-center gap-2 text-[#2D6A4F] text-[13px] mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>بياناتك سرية ولا تُشارك خارج الفريق المختص.</span>
          </div>

          <p className="text-[13px] text-white/50">
            © 2025 مؤسسة مؤنث سالم للتنمية — جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
