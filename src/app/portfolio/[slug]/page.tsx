import { projects } from "@/Data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ExternalLink } from "@/Components/common";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen bg-primary px-5 md:px-10 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold pb-2">{project.name}</h1>
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

        <div className="rounded-2xl overflow-hidden bg-white shadow-lg/20 mb-8 flex justify-center">
          <Image src={project.src} alt={`${project.name} preview`} />
        </div>

        <ExternalLink
          href={project.link}
          className="inline-block border border-secondary/35 hover:bg-secondary hover:text-white rounded-md py-2 px-4 transition-colors delay-100 text-sm md:text-base font-medium text-secondary"
        >
          View on GitHub →
        </ExternalLink>
      </div>
    </div>
  );
}
