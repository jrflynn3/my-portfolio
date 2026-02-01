import React from "react";

type ExternalLinkProps = {
  href: string;
  children?: React.ReactNode;
  className?: string;
};

const ExternalLink = ({ href, children, className }: ExternalLinkProps) => {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
