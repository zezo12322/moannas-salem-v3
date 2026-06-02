"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@heroui/react";
import { fadeInUp } from "@/lib/animations";

export interface CampaignCardProps {
  title: string;
  description: string;
  category: "violence" | "economic" | "psychological" | "digital" | "training";
  hashtag: string;
  date: string;
  status: "active" | "completed";
  slug?: string;
}

// ─── Category config ────────────────────────────────────────────────────────

const categoryConfig: Record<
  CampaignCardProps["category"],
  {
    label: string;
    gradient: string;
    badgeBg: string;
    badgeText: string;
  }
> = {
  violence: {
    label: "العنف والحماية",
    gradient: "from-red-400 to-red-600",
    badgeBg: "bg-red-100",
    badgeText: "text-red-700",
  },
  economic: {
    label: "التمكين الاقتصادي",
    gradient: "from-green-500 to-green-700",
    badgeBg: "bg-green-100",
    badgeText: "text-green-700",
  },
  psychological: {
    label: "الدعم النفسي",
    gradient: "from-blue-400 to-blue-600",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
  },
  digital: {
    label: "الأمان الرقمي",
    gradient: "from-violet-500 to-violet-700",
    badgeBg: "bg-violet-100",
    badgeText: "text-violet-700",
  },
  training: {
    label: "التدريب",
    gradient: "from-amber-400 to-amber-600",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-700",
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

export function CampaignCard({
  title,
  description,
  category,
  hashtag,
  date,
  status,
  slug,
}: CampaignCardProps) {
  const config = categoryConfig[category];

  return (
    <motion.div
      dir="rtl"
      variants={fadeInUp}
      whileHover={{ scale: 1.02, transition: { duration: 0.22, ease: "easeOut" } }}
      className="h-full"
    >
      <Card className="group bg-white !p-0 overflow-hidden h-full hover:shadow-md transition-shadow border border-gray-100 hover:border-secondary">
        {/* Colored top strip */}
        <div
          aria-hidden="true"
          className={`h-1 w-full bg-gradient-to-l ${config.gradient} shrink-0`}
        />

        {/* Card body */}
        <div className="flex flex-col gap-3 p-5 flex-1">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span
              className={`text-xs font-cairo font-semibold px-3 py-1 rounded-full ${config.badgeBg} ${config.badgeText}`}
            >
              {config.label}
            </span>
            <span
              className={`text-xs font-cairo font-medium px-2.5 py-1 rounded-full ${
                status === "active"
                  ? "bg-green-50 text-green-700"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {status === "active" ? "نشطة 🟢" : "منتهية"}
            </span>
          </div>

          <h3 className="font-cairo font-bold text-lg text-primary leading-snug">
            {title}
          </h3>

          <p className="font-tajawal text-sm text-muted leading-7 line-clamp-3 flex-1">
            {description}
          </p>

          <div className="flex items-center justify-between gap-2 pt-1 mt-auto border-t border-gray-50">
            <div className="flex flex-col gap-0.5">
              <span className="font-cairo text-xs text-accent">{hashtag}</span>
              <span className="font-tajawal text-xs text-gray-400">{date}</span>
            </div>

            {slug ? (
              <Link
                href={`/campaigns/${slug}`}
                className="font-cairo font-medium text-sm text-primary hover:text-accent transition-colors"
              >
                اعرفي أكتر ←
              </Link>
            ) : (
              <button
                type="button"
                className="font-cairo font-medium text-sm text-primary hover:text-accent transition-colors"
              >
                اعرفي أكتر ←
              </button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
