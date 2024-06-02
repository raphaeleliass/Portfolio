import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function Home() {
  return (
    <section className="flex flex-col">
      <Header />
      <Hero />
    </section>
  );
}

export default Home;
