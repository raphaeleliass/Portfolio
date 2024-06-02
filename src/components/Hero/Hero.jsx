function Hero() {
  return (
    <section className="mx-auto mt-32 flex w-full max-w-xs flex-col-reverse gap-y-12 md:mt-16 md:max-w-3xl md:flex-row lg:max-w-6xl">
      <div className="z-10 flex  flex-col gap-4 md:w-1/2">
        <h1 className="text-center text-4xl drop-shadow-xl md:text-nowrap md:text-left md:text-5xl lg:text-7xl">
          Muito prazer, <br /> Eu sou <strong>Raphael</strong>
        </h1>
        <div className="">
          <p className=" text-balance text-neutral-500 md:pr-16">
            Desenvolvedor front-end e estudante do curso de Análise e
            Desenvolvimento de Sistemas, tenho o compromisso de não apenas
            criar, mas também aprimorar aplicativos e páginas web acessíveis,
            garantindo que cada interação seja uma experiência única para
            usuários.
          </p>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          className="h-full w-full rounded-3xl shadow-xl"
          src="https://avatars.githubusercontent.com/u/91913011?v=4"
          alt="Raphael's photo"
        />
      </div>
    </section>
  );
}

export default Hero;
