import profilePic from "@/Assets/Images/profilepic.jpeg";
import { IconBar } from "@/Components/common";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | John Flynn",
  description: "Learn more about me",
};

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center pt-10 min-h-screen bg-primary">
        <div className="flex flex-col md:flex-row items-center max-w-[650px] px-4 md:px-0">
          <div>
            <Image
              src={profilePic}
              className="h-32 w-32 sm:h-40 sm:w-40 md:h-[250px] md:w-[250px] object-cover object-top rounded-full"
              alt="professional headshot"
            />
          </div>
          <div className="flex flex-col justify-center md:pl-3 mt-4 md:mt-0 text-center md:text-left">
            <div className="font-extrabold text-4xl">John Flynn</div>
            <div className="text-lg">Lead Software Developer</div>
            <div className="font-thin">React · React Native</div>
          </div>
        </div>

        <div className="max-w-[650px] text-base sm:text-lg md:text-xl font-extralight px-4 sm:px-6 md:px-0 py-6 sm:py-8 md:py-10">
          <p className="pb-5">
            I’m a lead software developer focused on building user-friendly,
            maintainable applications with React and React Native. I care deeply
            about clean architecture, long-term maintainability, and clear
            communication within teams.
          </p>
          <p className="pb-5">
            I enjoy mentoring other developers and working closely with product
            and engineering partners to ship reliable, well-designed software.
            I’m always willing to step in where needed to help unblock my team
            and keep projects moving forward.
          </p>
          <p>
            When I’m not coding, I’m spending time with my wife and three kids,
            following college football, playing ultimate frisbee, or getting
            lost in a good science fiction story. I'm always open to connecting
            and networking.
          </p>
        </div>
        <div className="hidden md:flex flex-col w-full items-center">
          <hr className="w-full max-w-[400px] my-6 md:my-10 border-t border-secondary" />
          <div className="font-thin pt-5 text-sm md:text-base">
            Find me here
          </div>
          <IconBar hoverColor={"text-secondary"} />
        </div>
      </div>
    </>
  );
}
