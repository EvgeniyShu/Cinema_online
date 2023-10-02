import { Outlet } from "react-router-dom";
import { Header } from "./ui/header/header";
import { Footer } from "./ui/footer/footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
