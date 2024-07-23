import { Outlet } from "react-router-dom";
import { Footer } from "../footer/component";
import { Header } from "../header/component";

export const Layout = () => {
  return (
    <div>
      <div id="modal" style={{ position: "relative", zIndex: "2" }}></div>
      <div style={{ zIndex: "1" }}>
        <Header />

        <Outlet />

        <Footer />
      </div>
    </div>
  );
};
