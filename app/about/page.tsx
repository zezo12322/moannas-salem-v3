import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "من نحن",
  description:
    "مبادرة مؤنث سالم — تأسست أواخر 2022 على يد مجموعة من الصحفيات بقيادة أسماء فتحي، ومرخصة منذ نهاية 2024 تحت ولاية وزارة التضامن الاجتماعي.",
};

export default function AboutPage() {
  return <AboutClient />;
}
