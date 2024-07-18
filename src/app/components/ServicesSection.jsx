import Image from "next/image";

import Service from "./Service";

export default function ({ service }) {
  return (
    <section id={service.title} className="py-20 wrapper even:bg-bgWhite">

      <div className="content-container">

        <h2 className="text-[32px] mb-5 font-extrabold leading-10 max-w-64 text-blue lg:text-[64px] lg:leading-[64px] lg:mb-11 lg:max-w-3xl">{service.title}</h2>

        <div className="flex items-center md:py-8 space-y-20 justify-between flex-col md:space-y-0 wrapper-item">

          <div className="-order-1 pt-28 space-y-7 max-w-lg md:mr-10 md:order-none md:pt-0">
            <p className="text-base leading-7 font-medium lg:text-2xl lg:leading-10">{service.text}</p>

            <div className="grid grid-cols-3 gap-2 mb-2">
              {
                service.tools.map((tool) => {
                  return <Service img={tool.img} context={tool.context} key={tool.id} stylesForContext={"text-base leading-5 md:text-lg md:leading-7 font-semibold text-black"} stylesForWrapper={"p-2 bg-secondry rounded-lg space-y-3 md:p-3"} />
                })
              }
            </div>

            <div>
              {
                service.technologies && <h3 className="font-extrabold leading-10 text-[32px] text-slate mb-6">Technologies</h3>
              }
              <div className="flex items-center space-x-5">
                {
                  service.technologies && service.technologies.map((tech) => {
                    return <div className="p-2">
                      <Image className="mb-3" key={tech.id} src={tech.img} width={50} height={50} alt={tech.name} />
                      <span className="text-lg font-semibold leading-7 lg:text-xl">{tech.name}</span>
                    </div>
                  })
                }
              </div>
            </div>

          </div>

          <div className="relative flex items-center justify-center -order-2 md:order-none">
            {
              service.img2 && <Image key={service.img2} className="absolute rounded-3xl" width={470} height={700} src={service.img2} alt="bg" />
            }
            <Image className="relative" src={service.img1} width={500} height={427} alt="work" />
          </div>

        </div>

      </div>

    </section>
  )
}