import type { MetadataRoute } from "next";
import { projects } from "@/Data/projects";

const SITE_URL = "https://www.john-flynn.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/portfolio", "/contact"].map(
    (route) => ({
      url: `${SITE_URL}${route}`,
      lastModfied: new Date(),
    }),
  );
  const portfolioRoutes = projects.map((project) => ({
    url: `${SITE_URL}/portfolio/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...portfolioRoutes];
}
