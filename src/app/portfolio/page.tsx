import { ExternalLink, GhostButton } from "@/Components/common";
import Image, { StaticImageData } from "next/image";
import { GITHUB_URL } from "@/constants";
import { projects } from "@/Data/projects";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio | John Flynn",
  description: "Some recent projects I've been working on",
};

type ProjectCardProps = {
  features: string[];
  name: string;
  description: string;
  link: string;
  src: StaticImageData;
  slug: string;
};

const Chip = ({ text }: { text: string }) => {
  return (
    <div className="border border-gray-300 inline rounded-full px-2 font-thin text-sm sm:text-base whitespace-nowrap shrink-0">
      {text}
    </div>
  );
};

const ProjectCard = ({
  features,
  name,
  description,
  src,
  slug,
}: ProjectCardProps) => {
  return (
    <Link href={`/portfolio/${slug}`}>
      <div className="flex flex-col min-w-[320px] max-w-[550px] max-h-[700px] items-center justify-center bg-white rounded-t-3xl rounded-b-md overflow-hidden shadow-lg/20 hover:shadow-xl/40 transition-all delay-100">
        <div className="h-[300px] sm:h-[500px] w-full flex justify-center items-start">
          <Image
            src={src}
            alt={`${name} preview`}
            loading="lazy"
            sizes="(min-width: 640px) 550px, 100vw"
          />
        </div>
        <div className="flex flex-col w-full min-h-[170px] bg-[#f2f5f5] px-5 py-3">
          <h1 className="font-bold text-lg md:text-2xl">{name}</h1>
          <div className="flex flex-1 text-md md:text-base">{description}</div>
          <div className="flex flex-wrap overflow-hidden max-h-14 gap-x-3 gap-y-1">
            {features.map((feature) => {
              return <Chip key={feature} text={feature} />;
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function Portfolio() {
  return (
    <>
      <div className="min-h-screen bg-primary flex flex-col px-5 md:px-10">
        <div className="pt-12 pb-8 font-thin leading-relaxed max-w-3xl text-slate-950">
          A selection of apps I’ve built, focusing on clean UI, maintainable
          architecture, and real-world use cases.
        </div>
        <div className="mx-auto lg:mx-0 grid flex-col sm:grid-cols-[repeat(auto-fit,minmax(440px,1fr))] pt-6 pb-10 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>

        <div className="py-8 self-center">
          <ExternalLink
            href={GITHUB_URL}
            className="flex flex-1 font-medium text-md text-secondary"
          >
            <GhostButton text="View more projects on GitHub" />
          </ExternalLink>
        </div>
      </div>
    </>
  );
}
