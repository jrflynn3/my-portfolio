import type { MetadataRoute } from "next";
import { projects } from "@/Data/projects";
import { env } from "@/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/portfolio", "/contact"].map(
    (route) => ({
      url: `${env.NEXT_PUBLIC_SITE_URL}${route}`,
      lastModified: new Date(),
    }),
  );
  const portfolioRoutes = projects.map((project) => ({
    url: `${env.NEXT_PUBLIC_SITE_URL}/portfolio/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...portfolioRoutes];
}
