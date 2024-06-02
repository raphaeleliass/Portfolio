import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";

function AllLinks() {
  return (
    <section className="flex min-h-screen w-screen items-center justify-center">
      <div className="m-4 flex w-full flex-col gap-12 rounded-3xl p-8 py-12 md:w-[500px] md:gap-12 md:p-12 lg:w-[500px] lg:gap-12 lg:p-12">
        <div className="flex flex-row items-center gap-4">
          <img
            src="https://avatars.githubusercontent.com/u/91913011?v=4"
            alt="Raphael's profile picture"
            className="size-20 rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Raphael Elias</h1>
            <h2 className="font-Inter text-sm">
              Front-End Developer
            </h2>
          </div>
        </div>

        <div className="flex w-full flex-col">
          <div className="">
            <ul className="flex flex-col gap-6">
              <li className="items-center rounded-full border border-neutral-700 px-6 py-1 transition-all hover hover:font-bold hover">
                <Link
                  ink
                  to="/"
                  className="flex flex-row items-center gap-2 py-2"
                >
                  <MdWork className="size-6" />
                  <p className="text-xl">Portfólio</p>
                </Link>
              </li>
              <li className="items-center rounded-full border border-neutral-700 px-6 py-1 transition-all hover hover:font-bold hover">
                <a
                  href="https://linkedin.com/in/raphaeleliass"
                  target="_blank"
                  className="flex flex-row items-center gap-2 py-2 "
                >
                  <FaLinkedin className="size-6" />
                  <p className="text-xl">Linkedin</p>
                </a>
              </li>
              <li className="items-center rounded-full border border-neutral-700 px-6 py-1 transition-all hover hover:font-bold hover">
                <a
                  href="https://github.com/raphaeleliass"
                  target="_blank"
                  className="flex flex-row items-center gap-2 py-2 "
                >
                  <FaGithub className="size-6" />
                  <p className="text-xl">Github</p>
                </a>
              </li>
              <li className="items-center rounded-full border border-neutral-700 px-6 py-1 transition-all hover hover:font-bold hover">
                <a
                  href="https://instagram.com/raphaeleliass"
                  target="_blank"
                  className="flex flex-row items-center gap-2 py-2 "
                >
                  <FaInstagram className="size-6" />
                  <p className="text-xl">Instagram</p>
                </a>
              </li>
              <li className="items-center rounded-full border border-neutral-700 px-6 py-1 transition-all hover hover:font-bold hover">
                <a href="#" className="flex flex-row items-center gap-2 py-2 ">
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

export default AllLinks;
