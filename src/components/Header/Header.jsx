import { useState, useEffect } from "react";
import ListItems from "./ListItems";
import { BiMenu } from "react-icons/bi";
import { IoMdCloseCircle } from "react-icons/io";
import BtnScrollTop from "../Buttons/BtnScrollTop";
import BtnPrimary from "../Buttons/BtnPrimary";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementsByClassName("header")[0];
      if (header) {
        header.classList.toggle("active", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("overflow-y-hidden");
  };

  return (
    <header className="header">
      <div className="flex w-full max-w-xs items-center justify-between md:max-w-3xl md:flex-row lg:max-w-6xl">
        <a href="#" className="text-2xl font-black md:text-4xl">
          Raphael Elias
        </a>
        <button
          onClick={toggleMenu}
          className="p-2"
          aria-label="expansive menu button"
        >
          <BiMenu className="size-8 md:hidden" />
        </button>
        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
          <ul className="flex flex-col items-center gap-x-2 gap-y-12 font-Inter md:flex-row">
            <li className="absolute right-0 top-0">
              <button
                onClick={toggleMenu}
                className="p-6"
                aria-label="close menu button"
              >
                <IoMdCloseCircle className="size-10 md:hidden" />
              </button>
            </li>
            <li onClick={toggleMenu}>
              <ListItems href="#" text="Início" />
            </li>
            <li onClick={toggleMenu}>
              <ListItems href="#" text="Skills" />
            </li>
            <li onClick={toggleMenu}>
              <ListItems href="#" text="Projetos" />
            </li>
            <li onClick={toggleMenu}>
              <BtnPrimary href="#" text="Contato"></BtnPrimary>
            </li>
          </ul>
        </nav>
      </div>

      {menuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed left-0 top-0 z-40 min-h-screen w-screen bg-black bg-opacity-70 backdrop-blur md:hidden"
        ></div>
      )}

      <BtnScrollTop />
    </header>
  );
}

export default Header;
