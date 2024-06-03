import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/MyProjects/Projects";
import Skills from "./components/MySkills/Skills";

function Home() {
  return (
    <section className="flex flex-col">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </section>
  );
}

export default Home;
