// Projects.jsx
import ProjectCards from "./ProjectCards";
import SunnySidePage from "/sunnyside.webp";
import FyloPage from "/fylo.webp";
import NewsPage from "/news.webp";
import CrowdfundPage from "/crowdfund.webp";
import BarbershopPage from "/barbershop.webp";
import EcoSolutions from "/ecosolutions.webp";
import BtnPrimary from "../Buttons/BtnPrimary";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section
      id="projects"
      className="m-auto flex w-full max-w-xs flex-col gap-24 pt-32 md:max-w-3xl md:py-20 lg:max-w-6xl"
    >
      <div className="flex items-center  md:justify-between">
        <h2 className="text-center text-4xl font-bold md:text-left md:text-5xl ">
          Projetos
        </h2>
        <Link to="/links">
          <BtnPrimary text="Entre em Contato" />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-y-14 md:grid-cols-2 md:gap-x-2 lg:grid-cols-4">
        <ProjectCards
          imgCard={BarbershopPage}
          titleCard="Barbershop Landing Page"
          technologies={["React", "Tailwind", "Javascript"]}
          hrefWebsite="https://raphaelelias-barbershop.vercel.app"
          hrefRepository="https://github.com/raphaeleliass/barbershop-react"
        />
        <ProjectCards
          imgCard={EcoSolutions}
          titleCard="EcoSolutions Landing Page"
          technologies={["React", "Tailwind", "Javascript"]}
          hrefWebsite="https://raphaelelias-ecosolutions.vercel.app"
          hrefRepository="https://github.com/raphaeleliass/ecosolutions"
        />
        <ProjectCards
          imgCard={CrowdfundPage}
          titleCard="Crowdfund Landing Page"
          technologies={["HTML", "CSS", "Javascript"]}
          hrefWebsite="https://raphaelelias-crowdfund.vercel.app"
          hrefRepository="https://github.com/raphaeleliass/crowdfunding-product"
        />
        <ProjectCards
          imgCard={SunnySidePage}
          titleCard="Sunnyside Landing Page"
          technologies={["React", "Tailwind"]}
          hrefWebsite="https://raphaelelias-sunnyside.vercel.app"
          hrefRepository="https://github.com/raphaeleliass/Sunnyside-React"
        />
        <ProjectCards
          imgCard={FyloPage}
          titleCard="Fylo Landing Page"
          technologies={["React", "Tailwind"]}
          hrefWebsite="https://raphaelelias-fylo.vercel.app"
          hrefRepository="https://github.com/raphaeleliass/Fylo-React"
        />
        <ProjectCards
          imgCard={NewsPage}
          titleCard="News Home Page"
          technologies={["HTML", "CSS", "Javascript"]}
          hrefWebsite="https://raphaelelias-news.vercel.app"
          hrefRepository="https://github.com/raphaeleliass/news-homepage"
        />
      </div>
    </section>
  );
}

export default Projects;
