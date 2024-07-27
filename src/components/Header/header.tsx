import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import { useState } from "react";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <header className="sticky inset-0 flex items-center justify-center bg-custom_White py-6 md:static lg:py-4">
      <div className="flex w-full max-w-xs items-center justify-between md:max-w-3xl xl:max-w-6xl">
        <Link
          to="/"
          className="font-Poppins text-3xl font-bold drop-shadow-2xl md:text-5xl"
        >
          Raphael
        </Link>

        <button className="md:hidden" onClick={toggleMenu}>
          <IoMenuSharp className="size-6" />
        </button>

        <nav className={`navbar ${openMenu ? "active" : ""}`}>
          <ul className="mt-32 flex flex-col items-center space-x-0 space-y-4 md:mt-0 md:flex-row md:space-x-4 md:space-y-0">
            <li className="absolute right-0 top-0 md:hidden">
              <button className="p-4" onClick={toggleMenu}>
                <IoCloseSharp className="size-10" />
              </button>
            </li>
            <li>
              <button aria-label="botão ir para Linkedin">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://linkedin.com/in/raphaeleliass"
                >
                  <label className="flex w-48 flex-row justify-between space-x-2 transition-all hover:text-blue-600 md:w-auto">
                    <FaLinkedin className="size-8 transition-all md:size-8 md:hover:translate-y-1" />
                    <p className="text-2xl font-semibold md:hidden">Linkedin</p>
                  </label>
                </a>
              </button>
            </li>

            <li>
              <button aria-label="botão ir para Github">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/raphaeleliass"
                >
                  <label className="flex w-48 flex-row justify-between space-x-2 transition-all hover:text-blue-600 md:w-auto">
                    <FaGithub className="size-8 transition-all md:size-8 md:hover:translate-y-1" />
                    <p className="text-2xl font-semibold md:hidden">Github</p>
                  </label>
                </a>
              </button>
            </li>

            <li>
              <button aria-label="botão ir para Instagram">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/raphaeleliass"
                >
                  <label className="flex w-48 flex-row justify-between space-x-2 transition-all hover:text-blue-600 md:w-auto">
                    <FaInstagram className="size-8 transition-all md:size-8 md:hover:translate-y-1" />
                    <p className="text-2xl font-semibold md:hidden">
                      Instagram
                    </p>
                  </label>
                </a>
              </button>
            </li>

            <li>
              <button aria-label="botão ir para Whatsapp">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/5528999763920"
                >
                  <label className="flex w-48 flex-row justify-between space-x-2 transition-all hover:text-blue-600 md:w-auto">
                    <FaWhatsapp className="size-8 transition-all md:size-8 md:hover:translate-y-1" />
                    <p className="text-2xl font-semibold md:hidden">Whatsapp</p>
                  </label>
                </a>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {openMenu && (
        <div
          className="fixed inset-0 z-40 min-h-screen bg-black opacity-75 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
}

export default Header;
