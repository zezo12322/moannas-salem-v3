"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs } from "@heroui/react";
import { staggerContainer } from "@/lib/animations";
import { CampaignCard, type CampaignCardProps } from "@/components/CampaignCard";

// ─── Types ───────────────────────────────────────────────────────────────────

type Category = CampaignCardProps["category"] | "all";

interface CampaignData extends CampaignCardProps {
  id: number;
}

// ─── Filter config ────────────────────────────────────────────────────────────

const filterLabels: { value: Category; label: string }[] = [
  { value: "all", label: "الكل" },
  { value: "violence", label: "العنف والحماية" },
  { value: "economic", label: "التمكين الاقتصادي" },
  { value: "psychological", label: "الدعم النفسي" },
  { value: "digital", label: "الأمان الرقمي" },
  { value: "training", label: "التدريب" },
];

// ─── Component ────────────────────────────────────────────────────────────────

interface CampaignGridProps {
  campaigns: CampaignData[];
}

export function CampaignGrid({ campaigns }: CampaignGridProps) {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered =
    activeFilter === "all"
      ? campaigns
      : campaigns.filter((c) => c.category === activeFilter);

  return (
    <div dir="rtl" className="flex flex-col gap-8">
      {/* ── Filter bar ─────────────────────────────────────────────────── */}
      <Tabs
        selectedKey={activeFilter}
        onSelectionChange={(key) => setActiveFilter(key as Category)}
      >
        <Tabs.ListContainer className="overflow-x-auto scrollbar-hide">
          <Tabs.List
            aria-label="تصفية الحملات"
            className="flex gap-1 whitespace-nowrap"
          >
            {filterLabels.map(({ value, label }) => (
              <Tabs.Tab key={value} id={value} className="font-cairo">
                {label}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs.ListContainer>
      </Tabs>

      {/* ── Grid ───────────────────────────────────────────────────────── */}
      <motion.div
        key={activeFilter}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
      >
        {filtered.map((campaign) => (
          <CampaignCard
            key={campaign.id}
            title={campaign.title}
            description={campaign.description}
            category={campaign.category}
            hashtag={campaign.hashtag}
            date={campaign.date}
            status={campaign.status}
            slug={"slug" in campaign ? (campaign as { slug?: string }).slug : undefined}
          />
        ))}
      </motion.div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <p className="font-tajawal text-muted text-center py-12">
          لا توجد حملات في هذه الفئة حالياً
        </p>
      )}
    </div>
  );
}
