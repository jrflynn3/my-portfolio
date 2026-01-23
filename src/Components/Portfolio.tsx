import { Footer } from "./Footer";
import { Header } from "./Header";

type ProjectCardProps = {
  features: string[];
  name: string;
  description: string;
  link: string;
  src: string;
};

const Chip = ({ text }: { text: string }) => {
  return (
    <div className="border border-gray-300 inline rounded-full px-2 font-thin text-sm sm:text-base">
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
    <div className="flex flex-col items-center bg-white rounded-t-3xl overflow-hidden shadow-lg/30">
      <div className="flex">
        <img
          src={src}
          className="h-120 w-120 object-cover object-top overflow-hidden shrink-0 shadow-md/30"
          alt={`${name} preview`}
        />
      </div>
      <div className="flex flex-col w-full min-h-[150px] bg-[#e8e8e8] px-5 py-3">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl">{name}</h1>
          <a className="flex justify-center items-center pb-2" href={link}>
            <div className="hover:underline">github</div>
            <img
              src="src/Assets/Icons/link-out-svgrepo-com.svg"
              className="h-4 w-auto pl-1"
            />
          </a>
        </div>
        <div className="flex flex-1">{description}</div>
        <div className="flex gap-2">
          {features.map((feature) => {
            return <Chip text={feature} />;
          })}
        </div>
      </div>
    </div>
  );
};

export const Portfolio = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-primary">
        {/* <div className="text-2xl text-center">what I've been working on</div> */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(420px,1fr))] pt-10 px-15 gap-15">
          <ProjectCard
            name={"Real Estate"}
            description="Minimal real estate discovery app built with React Native"
            features={["RN", "Google Auth", "Appwrite", "Tailwind CSS"]}
            link="https://github.com/jrflynn3/real-estate"
            src="src/Assets/Other/real-estate-app.png"
          />
          <ProjectCard
            name={"Movie DB Search"}
            description="Search trending movies from the Movie Database"
            features={["RN", "3rd Party API", "Appwrite", "Tailwind CSS"]}
            link=""
            src="src/Assets/Other/movie-app.png"
          />
          <ProjectCard
            name={"Project Name"}
            description=""
            features={["temp"]}
            link=""
            src=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
