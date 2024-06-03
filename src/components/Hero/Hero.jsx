import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import BtnPrimary from "../Buttons/BtnPrimary";
import BtnSecondary from "../Buttons/BtnSecondary";

function Hero() {
  return (
    <section className="mx-auto mt-32 flex w-full max-w-xs flex-col-reverse gap-y-12 md:mt-16 md:max-w-3xl md:flex-row lg:max-w-6xl">
      <div className="z-10 flex flex-col gap-6 pt-10 md:w-1/2 md:gap-12">
        <h1 className="text-center text-4xl drop-shadow-xl md:text-nowrap md:text-left md:text-5xl lg:text-7xl">
          Muito prazer, <br /> Eu sou <strong>Raphael</strong>
        </h1>
        <div className="flex flex-col items-center gap-6 md:items-start md:gap-8">
          <p className=" text-center text-sm text-neutral-400 md:pr-16 md:text-left">
            Desenvolvedor front-end e estudante do curso de Análise e
            Desenvolvimento de Sistemas, tenho o compromisso de não apenas
            criar, mas também aprimorar aplicativos e páginas web acessíveis,
            garantindo que cada interação seja uma experiência única.
          </p>
          <div className="flex flex-row gap-4">
            <BtnPrimary text="Baixar CV" href="./RaphaelElias-Curriculo.pdf">
              <FaDownload />
            </BtnPrimary>
            <BtnSecondary
              href="https://linkedin.com/in/raphaeleliass"
              text="Linkedin"
            >
              <FaExternalLinkAlt className="size-3" />
            </BtnSecondary>
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-[250px] w-[250px] items-center justify-center rounded-full bg-gradient-to-t from-white via-neutral-100 to-neutral-300 shadow-xl md:h-[400px] md:w-[400px] lg:h-[400px] lg:w-[400px] dark:bg-gradient-to-t dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950 ">
        <div className="absolute rounded-full border border-gray-200 p-[130px] md:p-[210px] lg:p-[210px] dark:border-neutral-800"></div>
        <img
          className="w-[400px] translate-y-6 rounded-full drop-shadow-xl md:translate-y-12"
          src="/raphael-elias.webp"
          alt="Raphael's photo"
        />
      </div>
    </section>
  );
}

export default Hero;
