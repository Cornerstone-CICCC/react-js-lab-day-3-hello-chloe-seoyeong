import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BlogContextProvider } from "../contexts/blog/BlogContextProvider";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="full-w flex flex-col min-h-screen justify-between -m-8">
      <BlogContextProvider>
        <Header firstname={"Chloe"} />
        <main className="px-10">
          <div>
            <Toaster />
          </div>
          <Outlet />
        </main>
        <Footer />
      </BlogContextProvider>
    </div>
  );
};

export default Layout;
