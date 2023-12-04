import { LayoutFooter, LayoutHeader } from "@/widgets";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout: FC = () => {
  return (
    <div className="h-screen overflow-x-hidden">
      <LayoutHeader />
      <Outlet />

      <LayoutFooter />
    </div>
  );
};

export default Layout;
