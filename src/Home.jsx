import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/MySkills/Skills";

function Home() {
  return (
    <section className="flex flex-col">
      <Header />
      <Hero />
      <Skills />
    </section>
  );
}

export default Home;
