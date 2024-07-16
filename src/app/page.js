//components
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolios from "./components/Portfolios";
import Services from "./components/Services";
import Team from "./components/Team";

export default function () {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Team />
      <Clients />
      <Portfolios />
      <Contact />
      <Footer />
    </>
  );
}
