import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router";

type LayoutProps = {
  className?: string;
};

const Layout = ({ className = "" }: LayoutProps) => {
  return (
    <div className={className}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
