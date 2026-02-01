import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../../constants";
import { ExternalLink, IconBar } from "../common";

export const Footer = () => {
  const linkStyles =
    "text-[1.1em] text-primary tracking-[2px] hover:underline hover:font-bold";

  return (
    <div className="flex items-center flex-col md:flex-row w-full bg-tertiary p-5 md:justify-between text-primary">
      <div className="flex md:hidden">
        <IconBar hoverColor="text-quaternary" />
      </div>

      <div className="text-[1.1em] tracking-[2px]">© 2026 John Flynn</div>
      <div className="hidden md:flex gap-x-4">
        <ExternalLink href={EMAIL} className={linkStyles}>
          Let's connect
        </ExternalLink>
        ·
        <ExternalLink href={LINKEDIN_URL} className={linkStyles}>
          LinkedIn
        </ExternalLink>
        ·
        <ExternalLink href={GITHUB_URL} className={linkStyles}>
          GitHub
        </ExternalLink>
      </div>
    </div>
  );
};
