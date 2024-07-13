//components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";

export default function () {
  return (
    <>
      <Header />
      <Hero />
      <Services/>
      <Team/>
      {/* <div className="fixed w-14 h-14 right-6 bottom-6 rounded-3xl opacity-100 bg-blue">
        <button></button>
      </div> */}
      <Footer />
    </>
  );
}
