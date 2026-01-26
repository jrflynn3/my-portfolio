import { Footer } from "./Footer";
import { Header } from "./Header";
import profilePic from "../Assets/Images/profilepic.jpeg";

export const About = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center pt-10 min-h-screen bg-primary">
        <div className="flex flex-col md:flex-row items-center max-w-[650px] px-4 md:px-0">
          <div>
            <img
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
        <hr className="w-full max-w-[400px] my-6 md:my-10 border-t border-secondary" />
        <div className="font-thin pt-5 text-sm md:text-base">Find me here</div>
        <div className="flex items-center justify-center gap-6 md:gap-10 py-5">
          <a href="https://www.linkedin.com/in/john-flynn-890412154/">
            <svg
              className="h-10 w-10 transition delay-100 hover:text-secondary"
              viewBox="0 0 93.06 93.06"
              fill="currentColor"
            >
              <path d="M11.185.08C5.004.08.001 5.092 0 11.259c0 6.173 5.003 11.184 11.186 11.184 6.166 0 11.176-5.011 11.176-11.184C22.362 5.091 17.351.08 11.185.08M1.538 30.926h19.287V92.98H1.538zM69.925 29.383c-9.382 0-15.673 5.144-18.248 10.022h-.258v-8.479H32.92v62.053h19.27V62.281c0-8.093 1.541-15.932 11.575-15.932 9.89 0 10.022 9.256 10.022 16.451v30.178H93.06V58.942c0-16.707-3.605-29.559-23.135-29.559" />
            </svg>
          </a>
          <a href="https://github.com/jrflynn3">
            <svg
              className="h-10 w-10 transition delay-100 hover:text-secondary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.074 2.994c.059-1.03.305-1.478 1.01-1.838.76-.387 1.957-.207 3.366.507.607.307.669.313 1.733.177 1.413-.181 3.233-.18 4.538.002.987.138 1.052.13 1.66-.177 2-1.013 3.58-.947 4.151.174.286.56.339 2.01.117 3.208-.122.664-.11.747.186 1.182 2.08 3.065.581 8.033-2.982 9.887a6 6 0 0 1-.69.3c-.575.22-.75.287-.538 1.298.102.486.224 1.695.272 2.686.087 1.792.086 1.805-.228 2.17-.428.498-1.045.506-1.462.02-.273-.317-.3-.466-.3-1.689 0-1.806-.197-3.006-.665-4.035-.557-1.224-.144-1.681 1.128-1.955 1.768-.38 3.15-1.471 3.92-3.096.731-1.545.841-3.68-.482-4.978-.376-.447-.402-.853-.134-2.074.1-.456.185-1.045.188-1.309.003-.416-.035-.479-.29-.479-.162 0-.78.236-1.373.523l-.947.459a.5.5 0 0 1-.277.047 30.3 30.3 0 0 0-7.114 0 .5.5 0 0 1-.279-.046l-.946-.46c-.593-.287-1.211-.523-1.373-.523-.374 0-.38.276-.039 1.916.209 1.001.349 1.224-.253 2.025-.902 1.2-1.127 2.69-.643 4.256.609 1.973 2.101 3.305 4.2 3.75 1.265.268 1.595.618 1.112 2.069-.38 1.14-.62 1.435-1.173 1.435-.743 0-1.209-.644-.953-1.318.113-.297.08-.329-.617-.582-2.126-.776-3.752-2.513-4.495-4.804-.575-1.77-.322-4.075.6-5.467.314-.475.318-.515.172-1.423a10.3 10.3 0 0 1-.1-1.838M3.332 15.945a1 1 0 0 0-1.664 1.11c.226.34.497.618.726.848l.124.123c.193.19.363.36.533.56.378.443.754 1.04.968 2.11.096.477.438.734.628.846.206.121.431.193.616.24.379.095.839.145 1.275.174.479.032.998.042 1.462.045a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1h-.304c-.587.002-1.352.004-2.026-.04a7 7 0 0 1-.788-.09c-.301-1.184-.788-1.972-1.308-2.582-.23-.27-.468-.506-.662-.698l-.103-.103c-.224-.223-.37-.382-.477-.543" />
            </svg>
          </a>
          <a href="mailto:hello@john-flynn.co">
            <svg
              className="h-10 w-10 transition delay-100 hover:text-secondary"
              viewBox="0 -2.5 20 20"
              fill="currentColor"
            >
              <title>email [#1572]</title>
              <path
                fillRule="evenodd"
                d="M10 12.474 0 3.649V15h20V3.649zm.001-2.662L0 .981V0h20v.981z"
              />
            </svg>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};
