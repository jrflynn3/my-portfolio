import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router";

type LayoutProps = {
  className?: string;
};

export const Layout = ({ className = "" }: LayoutProps) => {
  return (
    <div className={className}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
