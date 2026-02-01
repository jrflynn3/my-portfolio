import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../constants";
import IconBar from "./IconBar";

export const Footer = () => {
  const Link = ({ name, link }: { name: string; link: string }) => (
    <a
      className="text-[1.1em] text-primary tracking-[2px] hover:underline hover:font-bold"
      href={link}
    >
      {name}
    </a>
  );

  return (
    <div className="flex items-center flex-col md:flex-row w-full bg-tertiary p-5 md:justify-between text-primary">
      <div className="flex md:hidden">
        <IconBar hoverColor="text-quaternary" />
      </div>

      <div className="text-[1.1em] tracking-[2px]">© 2026 John Flynn</div>
      <div className="hidden md:flex gap-x-4">
        <Link name="Let's connect" link={EMAIL} />
        ·
        <Link name="LinkedIn" link={LINKEDIN_URL} />
        ·
        <Link name="GitHub" link={GITHUB_URL} />
      </div>
    </div>
  );
};
