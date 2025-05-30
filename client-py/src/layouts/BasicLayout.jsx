import { Link, Outlet } from "react-router";
import Footer from "./Footer";

function BasicLayouts() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header
        style={{ backgroundColor: "#2B124C" }}
        className="px-6 py-8 flex justify-between items-center"
      >
        <div className="flex items-center gap-2">
          <Link to={"/home"}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/055/299/327/non_2x/white-paw-print-on-white-background-on-transparent-background-png.png"
              alt="Logo"
              className="w-12 h-12"
            />
          </Link>
          <h1 className="text-white text-xl font-bold">The Pet Nest</h1>
        </div>
        <div className="mt-3 sm:mt-0 flex gap-3">
          <Link
            to={"/login"}
            className="bg-white border-2 text-black px-4 py-2 rounded cursor-pointer"
          >
            sign-in
          </Link>
          <Link
            to={"/sign-up"}
            className="bg-white border-2 text-black px-4 py-2 rounded cursor-pointer"
          >
            sign-up
          </Link>
          <Link
            to={"/about"}
            className="bg-white border-2 text-black px-4 py-2 rounded cursor-pointer"
          >
            About
          </Link>
          <Link
            to={"/developer"}
            className="bg-white border-2 text-black px-4 py-2 rounded cursor-pointer"
          >
            Developer
          </Link>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default BasicLayouts;