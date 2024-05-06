import Buttons from "../Buttons/Buttons";
import DownloadIcon from "/download.svg";

function Hero() {
  return (
    <div
      id="hero"
      className="lg:pb-34 m-auto mt-36 max-w-2xl pb-20 md:max-w-3xl lg:mt-40 lg:max-w-5xl"
    >
      <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-0">
        <section className="flex flex-col items-center gap-12 text-center md:w-[600px] md:items-start md:text-start lg:w-[700px] lg:gap-16 ">
          <div className="z-10 font-medium md:absolute">
            <h2 className="text-3xl md:text-5xl lg:text-6xl">Muito prazer!</h2>
            <h2 className="text-3xl md:text-5xl lg:text-6xl">
              Eu sou&nbsp;
              <span className=" border-spacing-0  border-b-4 border-customGreen ">
                Raphael Elias
              </span>
              .
            </h2>
          </div>
          <p className="px-10 text-start  text-sm text-customGrey md:mt-44 md:w-[400px] md:px-0 lg:w-[350px] lg:font-medium">
            Desenvolvedor front-end e estudante do curso de Análise e
            Desenvolvimento de Sistemas, tenho o compromisso de não apenas
            criar, mas também aprimorar aplicativos e páginas web acessíveis,
            garantindo que cada interação seja uma experiência única para
            usuários.
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:gap-6">
            <Buttons
              title="BAIXAR CV"
              img={DownloadIcon}
              imgClass="size-3"
              href="/RaphaelElias-Curriculo.pdf"
              target="_blank"
            />
            <Buttons title="CONTATO" href="#contato" />
          </div>
        </section>
        <section className="flex justify-center md:relative md:-mt-40 lg:-mr-6 ">
          <div className="h-[350px] w-[200px] bg-customDarkGrey bg-hero bg-cover bg-center md:h-[700px] md:w-[400px] lg:h-[650px] lg:w-[500px]"></div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
