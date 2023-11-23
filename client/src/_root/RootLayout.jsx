import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const RootLayout = () => {
  return (
    <section>
      <Navbar />

      <Outlet />

      <Footer />
    </section>
  );
};

export default RootLayout;
