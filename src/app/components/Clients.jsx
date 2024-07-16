import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function () {
  return (
    <section id="clients" className="py-7">
      <div className="content-container">
        <h2 className="mb-20 text-blue text-3xl lg:text-[60px] font-extrabold text-left">Our clients</h2>
      </div>

      <div className="space-y-10">
        <Marquee speed={20}>
          <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-6 xl:space-x-10  py-2">
            <Image className="card-shadow rounded-3xl hover:scale-110 duration-300 transition-transform" src="/hamkorbank.svg" width={200} height={100} alt="client" />
            <Image className="card-shadow rounded-3xl hover:scale-110 duration-300 transition-transform" src="/hoshimov.svg" width={200} height={100} alt="client" />
            <Image className="card-shadow rounded-3xl hover:scale-110 duration-300 transition-transform" src="/iman.svg" width={200} height={100} alt="client" />
            <Image className="card-shadow rounded-3xl hover:scale-110 duration-300 transition-transform" src="/akfamedline.svg" width={200} height={100} alt="client" />
            <Image className="card-shadow rounded-3xl hover:scale-110 duration-300 transition-transform" src="/space.svg" width={200} height={100} alt="client" />
            <Image className="card-shadow rounded-3xl hover:scale-110 duration-300 transition-transform" src="/delever-client.svg" width={200} height={100} alt="client" />
            <Image className="card-shadow rounded-3xl hover:scale-110 duration-300 transition-transform" src="/fonon.svg" width={200} height={100} alt="client" />
          </div>
        </Marquee>
        <Marquee speed={20} direction="right">
          <div className="flex items-center space-x-10  py-2">
            <Image className="card-shadow rounded-3xl hover:scale-110 duration-300 transition-transform" src="/burger.svg" width={200} height={100} alt="client" />
            <Image className="card-shadow rounded-3xl hover:scale-110 duration-300 transition-transform" src="/maxtrack.svg" width={200} height={100} alt="client" />
            <Image className="card-shadow rounded-3xl hover:scale-110 duration-300 transition-transform" src="/sms.uz.svg" width={200} height={100} alt="client" />
            <Image className="card-shadow rounded-3xl hover:scale-110 duration-300 transition-transform" src="/goodzone-client.svg" width={200} height={100} alt="client" />
            <Image className="card-shadow rounded-3xl hover:scale-110 duration-300 transition-transform" src="/rbota.svg" width={200} height={100} alt="client" />
            <Image className="card-shadow rounded-3xl hover:scale-110 duration-300 transition-transform" src="/workly.svg" width={200} height={100} alt="client" />
            <Image className="card-shadow rounded-3xl hover:scale-110 duration-300 transition-transform" src="/taxi.svg" width={200} height={100} alt="client" />
          </div>
        </Marquee>
      </div>
    </section>
  )
}