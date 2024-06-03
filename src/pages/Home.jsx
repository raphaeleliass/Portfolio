import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import MySkills from "../components/MySkills/Skills";
import MyProjects from "../components/MyProjects/Projects";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <MySkills />
      <MyProjects />
      <Contact />
    </div>
  );
}

export default Home;
