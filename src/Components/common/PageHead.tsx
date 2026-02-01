import { Helmet } from "react-helmet-async";

type PageHeadProps = {
  title: string;
  description: string;
};

export const PageHead = ({ title, description }: PageHeadProps) => (
  <Helmet>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
  </Helmet>
);
