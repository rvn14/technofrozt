import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
  ];
}
