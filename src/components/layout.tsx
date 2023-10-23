import { Outlet } from "react-router-dom";
import { Header } from "./ui/header/header";
import { Footer } from "./ui/footer/footer";
import { motion } from "framer-motion";

const Layout = () => {
  return (
    <motion.div>
      <Header />
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 2.5,
          x: 100,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <Outlet />
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default Layout;
