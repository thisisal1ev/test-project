//data
import { services } from "../data";

//component
import Service from "../components/Service";

export default function () {
  return (
    <section className="py-24">
      <div id="direction" className="content-container">
        <h2 className="mb-20 text-center text-blue text-3xl lg:text-[60px] font-extrabold lg:text-left">
          Our services
        </h2>

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
  )
}