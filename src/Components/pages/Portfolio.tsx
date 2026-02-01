import GhostButton from "../common/GhostButton";
import movieImage from "../../Assets/Images/movie-app.png";
import realEstateImage from "../../Assets/Images/real-estate-app.png";
import fastFoodImage from "../../Assets/Images/fast-food.png";
import { GITHUB_URL } from "../../constants";

type ProjectCardProps = {
  features: string[];
  name: string;
  description: string;
  link: string;
  src: string;
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
  link,
  src,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col min-w-[320px] max-w-[550px] max-h-[700px] items-center justify-center bg-white rounded-t-3xl rounded-b-md overflow-hidden shadow-lg/20 hover:shadow-xl/40 transition-all delay-100">
      <div className="h-[300px] sm:h-[500px] w-full flex justify-center items-start">
        <img src={src} alt={`${name} preview`} />
      </div>
      <div className="flex flex-col w-full min-h-[170px] bg-[#f2f5f5] px-5 py-3">
        <h1 className="font-bold text-lg md:text-2xl">{name}</h1>
        <div className="flex flex-1 text-md md:text-base">{description}</div>
        <a className="flex items-center pt-2 pb-3" href={link}>
          <svg
            className="h-4 w-auto pr-1 text-quaternary"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13.5 10.5L21 3"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 3L21 3L21 8"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 14V19C21 20.1046 20.1046 21 19 21H12H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H10"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="text-md md:text-base hover:underline text-quaternary font-medium">
            View on GitHub
          </div>
        </a>
        <div className="flex flex-wrap overflow-hidden max-h-14 gap-x-3 gap-y-1">
          {features.map((feature) => {
            return <Chip key={feature} text={feature} />;
          })}
        </div>
      </div>
    </div>
  );
};

export const Portfolio = () => {
  return (
    <>
      <div className="min-h-screen bg-primary flex flex-col px-5 md:px-10">
        <div className="mx-auto pt-12 pb-8 font-thin leading-relaxed max-w-3xl text-slate-950">
          A selection of React Native apps I’ve built, focusing on clean UI,
          maintainable architecture, and real-world use cases.
        </div>
        <div className="grid flex-col sm:grid-cols-[repeat(auto-fit,minmax(440px,1fr))] pt-6 pb-10 gap-10">
          <ProjectCard
            name={"Real Estate"}
            description="Search for real estate in this minimal cross-platform app"
            features={["React Native", "Google Auth", "Appwrite", "Tailwind"]}
            link="https://github.com/jrflynn3/real-estate"
            src={realEstateImage}
          />
          <ProjectCard
            name={"Movie Discovery"}
            description="Discover new and trending movies from the Movie Database"
            features={["React Native", "3rd Party API", "Appwrite", "Tailwind"]}
            link="https://github.com/jrflynn3/movies"
            src={movieImage}
          />
          <ProjectCard
            name={"Food Ordering"}
            description="Order your favorite entrees in this simple food ordering app"
            features={["React Native", "Appwrite", "Tailwind"]}
            link="https://github.com/jrflynn3/fast-food"
            src={fastFoodImage}
          />
        </div>

        <div className="py-8 self-center">
          <a
            className="flex flex-1 font-medium text-md text-secondary"
            href={GITHUB_URL}
          >
            <GhostButton text="View more projects on GitHub" />
          </a>
        </div>
      </div>
    </>
  );
};
