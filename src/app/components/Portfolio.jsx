import Image from "next/image";

export default function ({ portfolio }) {
  return (
    <section id={portfolio.projectName} className="py-20 wrapper">
      <div className="content-container md:flex flex-col items-center justify-between wrapper-item">
        <Image src={portfolio.screen} width={500} height={407} alt={portfolio.projectName + " img"} />
        <div className="space-y-6 block">
          <div className="space-y-4 mb-4 md:space-y-7 md:mb-8">
            <Image className="odd:md:mr-10 even:md:ml-10" src={portfolio.projectLogo} width={252} height={50} alt={portfolio.projectName + " img"} />
            <div className={`py-1 px-4 rounded-[100px] bg-br-${portfolio.projectColor} bg-opacity-20 flex items-center justify-center space-x-1 max-w-40`}>
              <Image src={portfolio.projectUniqueImg} width={25} height={25} alt="icon" />
              <span className={`leading-7 font-medium text-br-${portfolio.projectColor}`}>{portfolio.projectUniqueName}</span>
            </div>
          </div>
          <p className="text-base leading-7 font-semibold text-slate max-w-xl lg:text-xl lg:leading-10">{portfolio.projectContext}</p>
          <h3 className="text-2xl font-bold">What we did?</h3>
          <div className="grid grid-cols-3 gap-2 md:gap-y-4 md:gap-x-7 md:grid-cols-2 lg:grid-cols-3">
            {
              portfolio.tools.map((tool) => {
                return <div key={tool.id} className="bg-bgWhite rounded-md space-y-3 p-2 md:p-4">
                  <Image src={tool.img} width={56} height={56} alt={tool.text} />
                  <p className="text-sm leading-5 font-semibold text-black md:text-lg md:leading-7">{tool.text}</p>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}