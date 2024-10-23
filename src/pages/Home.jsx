import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Projects />
    </MainLayout>
  );
};

export default Home;
