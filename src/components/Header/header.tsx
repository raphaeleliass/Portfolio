import { Link } from "react-router-dom";
import Title from "@/components/ui/title";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="mx-auto flex w-full max-w-xs flex-row items-center justify-between py-4 md:max-w-3xl md:py-8 lg:max-w-6xl">
      <Link to={"/"}>
        <Title>Raphael</Title>
      </Link>

      <button className="p-4 pr-0 md:hidden" onClick={toggleMenu}>
        <HamburgerMenuIcon className="size-6" />
      </button>

      <nav className={`menu-bar ${menuOpen ? "active" : ""}`}>
        <ul
          className="flex flex-col items-center gap-6 pt-20 md:flex-row md:gap-1 md:pt-0"
          onClick={toggleMenu}
        >
          <li className="absolute right-0 top-0 md:hidden">
            <button className="p-4" onClick={toggleMenu}>
              <IoMdClose className="size-8" />
            </button>
          </li>
          <li>Projetos</li>
          <li>Sobre</li>
          <li>Skills</li>
          <li className="md:hidden">
            <Button>
              <Link to={"/links"}>Contato</Link>
            </Button>
          </li>
        </ul>
      </nav>

      <Button className="hidden md:block">
        <Link to={"/links"}>Contato</Link>
      </Button>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-55"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}

export default Header;
