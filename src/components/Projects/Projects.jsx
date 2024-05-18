import ProjectCards from "./ProjectCards";
import SunnySidePage from "/sunnyside.webp";
import FyloPage from "/fylo.webp";
import NewsPage from "/news.webp";
import CrowdfundPage from "/crowdfund.webp";
import Buttons from "../Buttons/Buttons";

function Projects() {
  return (
    <div className="m-auto flex max-w-xs flex-col gap-24 py-12 md:max-w-3xl md:py-20 lg:max-w-5xl">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold md:text-7xl">Projetos</h2>
        <Buttons title="Entrar em contato" href="#contato" />
      </div>
      <div className="grid grid-cols-1 gap-y-14 md:grid-cols-2 md:gap-x-2">
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
    </div>
  );
}

export default Projects;
