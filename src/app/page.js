//components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";

//data
import { services } from "./data";

export default function () {
  return (
    <>
      <Header />
      <Hero />
      <section className="py-24">
        <div id="direction" className="content-container">
          <h1 className="mb-20 text-center text-blue text-3xl lg:text-[60px] font-extrabold lg:text-left">
            Our services
          </h1>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-8">
            {services.map((service) => {
              return (
                <Service
                  key={service.id}
                  img={service.img}
                  context={service.context}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
