import type { MetadataRoute } from "next";
import { campaigns } from "@/lib/campaigns";
import { programs } from "@/lib/programs";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://muanathsalem.org";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,                              lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/about`,                   lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/campaigns`,               lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/training`,                lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/resources`,               lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/resources/legal`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/resources/psychological`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/resources/digital`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/news`,                    lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}/contact`,                 lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
  ];

  const campaignRoutes: MetadataRoute.Sitemap = campaigns.map((c) => ({
    url: `${base}/campaigns/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: c.status === "active" ? 0.85 : 0.7,
  }));

  const trainingRoutes: MetadataRoute.Sitemap = programs.map((p) => ({
    url: `${base}/training/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p.statusAvailable ? 0.8 : 0.65,
  }));

  return [...staticRoutes, ...campaignRoutes, ...trainingRoutes];
}
