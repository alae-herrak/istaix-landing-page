import { useState } from "react";
import Logo from "../assets/logo.svg";
import OpenMenu from "../assets/open-menu.png";
import CloseMenu from "../assets/close-menu.png";

const Navbar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  return (
    <header className="sticky top-0 bg-cyan-950 p-4">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo" />
          <span className="text-xl font-semibold">ISTAIX</span>
        </div>
        <button className="md:hidden">
          <img
            src={openNav ? CloseMenu : OpenMenu}
            alt="navigation menu toggle"
            className="w-6"
            onClick={() => setOpenNav(!openNav)}
          />
        </button>
        <div className={`${!openNav && "hidden"} w-full md:block md:w-auto`}>
          <nav className="my-4 flex flex-col items-center gap-6 transition-all md:my-0 md:flex-row">
            <a href="" className=" hover:text-gray-200">
              Home
            </a>
            <a href="" className=" hover:text-gray-200">
              Products
            </a>
            <a href="" className=" hover:text-gray-200">
              Jobs
            </a>
            <a href="" className=" hover:text-gray-200">
              Pricing
            </a>
            <a href="" className=" hover:text-gray-200">
              About
            </a>
          </nav>
        </div>
        <a
          href=""
          className={`${
            !openNav && "hidden"
          } mx-auto rounded-md bg-slate-400 px-6 py-2 font-semibold hover:bg-slate-500 md:mx-0 md:block`}
        >
          Get started
        </a>
      </div>
    </header>
  );
};

export default Navbar;
