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
    <div className="flex w-full bg-tertiary p-5 justify-between text-primary">
      <div className="text-[1.1em] tracking-[2px]">© 2026 John Flynn</div>
      <div className="flex gap-x-4">
        <Link name="Let's connect" link="mailto:hello@john-flynn.co" />
        ·
        <Link
          name="LinkedIn"
          link="https://www.linkedin.com/in/john-flynn-890412154/"
        />
        ·
        <Link name="GitHub" link="https://github.com/jrflynn3" />
      </div>
    </div>
  );
};
