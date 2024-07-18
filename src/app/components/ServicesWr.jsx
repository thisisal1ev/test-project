import { service } from "../data";
import ServicesSection from "./ServicesSection";

export default function () {
  return (
    <>
      {
        service.map((service) => {
          return <ServicesSection key={service.id} service={service} />
        })
      }
    </>
  )
}