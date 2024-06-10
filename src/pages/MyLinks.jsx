import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";

function MyLinks() {
  return (
    <section className="flex min-h-screen w-screen items-center justify-center bg-gray-100 dark:bg-neutral-800">
      <div className="dark:bg-gradient m-4 flex w-full flex-col gap-12 rounded-3xl border border-neutral-200 bg-gradient-to-t from-white via-neutral-50 to-neutral-100 p-8 py-12 text-black shadow-2xl md:w-[500px] md:gap-12 md:p-12 lg:w-[500px] lg:gap-12 lg:p-12 dark:border-none dark:from-neutral-950 dark:to-neutral-900 dark:text-white">
        <div className="flex flex-row items-center gap-4">
          <img
            src="https://avatars.githubusercontent.com/u/91913011?v=4"
            alt="Raphael's profile picture"
            className="size-20 rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-neutral-600 dark:text-neutral-300">
              Raphael Elias
            </h1>
            <h2 className="font-Inter text-sm text-neutral-400 dark:text-neutral-100">
              Front-End Developer
            </h2>
          </div>
        </div>

        <div className="flex w-full flex-col">
          <div className="">
            <ul className="flex flex-col gap-6">
              <li className="items-center rounded-full border border-neutral-300 px-6 py-1 transition-all hover:bg-neutral-800 hover:text-white dark:border-neutral-700">
                <Link to="/" className="flex flex-row items-center gap-2 py-2">
                  <MdWork className="size-6" />
                  <p className="text-xl">Portfólio</p>
                </Link>
              </li>
              <li className="items-center rounded-full border border-neutral-300 px-6 py-1 transition-all hover:bg-neutral-800 hover:text-white dark:border-neutral-700">
                <a
                  href="https://linkedin.com/in/raphaeleliass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center gap-2 py-2"
                >
                  <FaLinkedin className="size-6" />
                  <p className="text-xl">Linkedin</p>
                </a>
              </li>
              <li className="items-center rounded-full border border-neutral-300 px-6 py-1 transition-all hover:bg-neutral-800 hover:text-white dark:border-neutral-700">
                <a
                  href="https://github.com/raphaeleliass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center gap-2 py-2"
                >
                  <FaGithub className="size-6" />
                  <p className="text-xl">Github</p>
                </a>
              </li>
              <li className="items-center rounded-full border border-neutral-300 px-6 py-1 transition-all hover:bg-neutral-800 hover:text-white dark:border-neutral-700">
                <a
                  href="https://instagram.com/raphaeleliass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center gap-2 py-2"
                >
                  <FaInstagram className="size-6" />
                  <p className="text-xl">Instagram</p>
                </a>
              </li>
              <li className="items-center rounded-full border border-neutral-300 px-6 py-1 transition-all hover:bg-neutral-800 hover:text-white dark:border-neutral-700">
                <a
                  target="_blank"
                  href="https://wa.me/5528999763920?text=Ol%C3%A1,%20v%C3%AD%20seu%20portf%C3%B3lio.%20Podemos%20conversar?"
                  className="flex flex-row items-center gap-2 py-2"
                >
                  <FaWhatsapp className="size-6" />
                  <p className="text-xl">Whatsapp</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyLinks;
