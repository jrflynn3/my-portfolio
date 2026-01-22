import { Footer } from "./Footer";
import { Header } from "./Header";

type ProjectCardProps = {
  // imageUrl: string;
  highlights: string[];
  name: string;
  description: string;
};

const ProjectCard = ({ highlights, name, description }: ProjectCardProps) => {
  return (
    <div className="h-[500px] w-full flex flex-col sm:flex-row bg-white rounded-md min-w-[320px] overflow-hidden p-3">
      <img
        src="src/Assets/Other/real-estate.png"
        className="h-full w-64 object-fill shrink-0"
        alt={`${name} preview`}
      />
      <div className="flex flex-col flex-1 p-3">
        <h1 className="font-bold text-xl">{name}</h1>
        <div className="text-lg ">{description}</div>
        <ul className="pt-5">
          <li>React Native</li>
          <li>Google Authentication</li>
          <li>Appwrite Backend</li>
        </ul>
      </div>
    </div>
  );
};

export const Portfolio = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-primary">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] pt-10 px-4 gap-5">
          <ProjectCard
            name={"Real Estate"}
            description="A cross-platform React Native app demonstrating property search and recommendations, built as a proof of concept with Appwrite and Google authentication."
            highlights={["temp"]}
          />
          <ProjectCard
            name={"Project Name"}
            description=""
            highlights={["temp"]}
          />
          <ProjectCard
            name={"Project Name"}
            description=""
            highlights={["temp"]}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
