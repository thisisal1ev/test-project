import Image from "next/image";

export default function () {
  return (
    <section className="py-20">

      <div className="content-container">

        <h2 className="mb-20 text-blue text-3xl leading-10 lg:text-[60px] font-extrabold">How we work!</h2>

        <div className="space-y-4 flex flex-col md:space-x-4 md:items-center md:flex-row">

          <div className="flex flex-row md:flex-col md:items-center md:text-center md:justify-center">
            <Image className="mr-7 md:mr-0" src="/contact.svg" width={50} height={50} alt="icon" />
            <div>
              <h3 className="text-lg font-bold leading-7">Сontact</h3>
              <span className="text-base leading-[26px]">Send us your project request or project idea.</span>
            </div>
          </div>

          <div className="flex flex-row md:flex-col md:items-center md:text-center md:justify-center">
            <Image className="mr-7 md:mr-0" src="/analystic.svg" width={50} height={50} alt="icon" />
            <div>
              <h3 className="text-lg font-bold leading-7">Analysis</h3>
              <span className="text-base leading-[26px]">We will contact you to clarify your project requirements.</span>
            </div>
          </div>

          <div className="flex flex-row md:flex-col md:items-center md:text-center md:justify-center">
            <Image className="mr-7 md:mr-0" src="/offer.svg" width={50} height={50} alt="icon" />
            <div>
              <h3 className="text-lg font-bold leading-7">Offer</h3>
              <span className="text-base leading-[26px]">We will provide you with our free, non-binding application.</span>
            </div>
          </div>

          <div className="flex flex-row md:flex-col md:items-center md:text-center md:justify-center">
            <Image className="mr-7 md:mr-0" src="/team-icon.svg" width={50} height={50} alt="icon" />
            <div>
              <h3 className="text-lg font-bold leading-7">Team</h3>
              <span className="text-base leading-[26px]">We provide a team for your requirements.</span>
            </div>
          </div>

          <div className="flex flex-row md:flex-col md:items-center md:text-center md:justify-center">
            <Image className="mr-7 md:mr-0" src="/start.svg" width={50} height={50} alt="icon" />
            <div>
              <h3 className="text-lg font-bold leading-7">Start</h3>
              <span className="text-base leading-[26px]">You will get to know the team and we'll get started.</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}