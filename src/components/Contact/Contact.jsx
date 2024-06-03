import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <footer id="contact" className="mt-32 bg-neutral-900">
      <div className="mx-auto flex w-full max-w-xs flex-col items-center justify-center gap-y-12 py-20 md:max-w-3xl md:flex-row md:px-32 lg:max-w-6xl">
        <div className="flex flex-col gap-4 md:h-[200px] md:w-1/2">
          <h2 className="text-center text-4xl md:text-left">Contato</h2>
          <p className="text-center text-xs text-neutral-400 md:pr-12 md:text-left lg:pr-32">
            Eu adoraria ouvir sobre seus projetos e como eu poderia ajudar
            neles. Para isso, entre em contato para discutirmos suas ideias e eu
            responderei o mais breve possível!
          </p>
        </div>
        <div className="flex flex-col justify-center gap-6 text-center md:h-[200px] md:items-center md:justify-start">
          <h2 className="hidden text-4xl md:flex">Minhas Redes</h2>
          <div className="flex flex-row items-center justify-center gap-2 md:w-1/2">
            <a
              href="https://instagram.com/raphaeleliass"
              target="_blank"
              className="p-px transition-all hover:text-green-400"
            >
              <FaInstagram className="size-8 md:size-6" />
            </a>
            <a
              href="https://wa.me/5528999763920?text=Olá,%20vi%20seu%20portfólio,%20podemos%20conversar?"
              target="_blank"
              className="p-px transition-all hover:text-green-400"
            >
              <FaWhatsapp className="size-8 md:size-6" />
            </a>
            <a
              href="https://github.com/raphaeleliass"
              target="_blank"
              className="p-px transition-all hover:text-green-400"
            >
              <FaGithub className="size-8 md:size-6" />
            </a>
            <a
              href="https://linkedin.com/in/raphaeleliass"
              target="_blank"
              className="p-px transition-all hover:text-green-400"
            >
              <FaLinkedin className="size-8 md:size-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="pb-4 text-center text-xs font-light capitalize text-neutral-500">
        <p>
          &copy; criado e desenvolvido por{" "}
          <strong>
            <a
              href="https://linkedin.com/in/raphaeleliass"
              target="_blank"
              className="font-bold text-neutral-500"
            >
              Raphael Elias
            </a>
          </strong>
        </p>
      </div>
    </footer>
  );
}

export default Contact;
