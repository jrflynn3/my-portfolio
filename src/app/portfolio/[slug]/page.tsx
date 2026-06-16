import { projects } from "@/Data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ExternalLink, GhostButton } from "@/Components/common";
import type { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return { title: "Project Not Found | John Flynn" };
  }

  return {
    title: `${project.name} | John Flynn`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen bg-primary px-5 md:px-10 py-12">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/portfolio"
          className="inline-block text-secondary hover:underline pb-6 text-sm md:text-base font-thin"
        >
          ← Back to Portfolio
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_350px] gap-10 md:gap-12 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold pb-2">
              {project.name}
            </h1>
            <p className="text-lg md:text-xl font-thin pb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 pb-8">
              {project.features.map((feature) => (
                <span
                  key={feature}
                  className="border border-gray-400 rounded-full px-3 py-1 text-sm font-thin whitespace-nowrap"
                >
                  {feature}
                </span>
              ))}
            </div>
            <ExternalLink href={project.link}>
              <GhostButton text="View on GitHub" />
            </ExternalLink>
          </div>

          <div className="max-w-[350px] mx-auto md:mx-0">
            <div className="rounded-2xl overflow-hidden bg-white shadow-lg/20">
              <Image
                src={project.src}
                alt={`${project.name} preview`}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
