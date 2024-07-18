import Image from "next/image";

export default function () {
  return (
    <section id="contact" className="py-20">

      <div className="content-container">

        <h2 className="mb-20 text-blue text-3xl lg:text-[60px] font-extrabold text-left">
          Contact us
        </h2>

        <div className="mt-20 flex justify-between flex-col lg:flex-row lg:pt-10 lg:pb-20 lg:px-24 rounded-lg lg:form-shadow lg:space-x-10">

          <form className="space-y-5 flex flex-col w-full mb-7 lg:mb-0">
            <h3 className="text-xl leading-7 font-bold">Leave us a message</h3>

            <div className="relative w-full min-h-12 lg:w-96">
              <input
                className="peer p-3 border-2 rounded-md w-full h-full outline-none focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent border-blue-gray-200 focus:border-gray-900"
                placeholder=" " required type="text" /><label
                  className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 peer-focus:text-xs peer-focus:leading-tight peer-valid:text-xs">Name</label>
            </div>

            <div className="relative w-full min-h-12 lg:w-96">
              <input
                className="peer p-3 border-2 rounded-md w-full h-full outline-none focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent border-blue-gray-200 focus:border-gray-900"
                placeholder=" " required type="text" /><label
                  className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 peer-focus:text-xs peer-focus:leading-tight peer-valid:text-xs">Your email</label>
            </div>

            <div className="relative w-full lg:w-96">
              <textarea
                className="peer border-2 h-full min-h-[100px] w-full resize-none rounded-md border-blue-gray-200 bg-transparent p-3 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "></textarea>
              <label
                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-xs peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 text-gray-500">
                Briefly describe your project
              </label>
            </div>

            <button className="w-64 mx-auto text-center rounded-md bg-blue text-white text-xl px-4 py-2 hover:scale-110 transition-transform duration-300 inline-block lg:ml-0">Send</button>

          </form>

          <div className="space-y-6">

            <ul className="space-y-6 lg:mb-5">

              <li className="flex items-center space-x-2">
                <Image src="/phone-icon.svg" width={24} height={24} alt="icon" />
                <a className="text-base leading-5" href="https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor" target="_blank">Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес</a>
              </li>
              <li className="flex items-center space-x-2">
                <Image src="/location-icon.svg" width={24} height={24} alt="icon" />
                <a className="text-base leading-5" href="tel:+998 33 66 00 999" target="_blank">+998 33 66 00 999</a>
              </li>
              <li className="flex items-center space-x-2">
                <Image src="/mail-icon.svg" width={24} height={24} alt="icon" />
                <a className="text-base leading-5" href="mailto:azizbek.b@udevs.io" target="_blank">azizbek.b@udevs.io</a>
              </li>
              <li className="flex items-center space-x-2">
                <Image src="/telegram.svg" width={24} height={24} alt="icon" />
                <a className="text-base leading-5 text-blue font-bold" href="https://t.me/azizbekbakhodirov" target="_blank">t.me/azizbekbakhodirov</a>
              </li>

            </ul>

            <div className="items-center space-x-3 hidden lg:flex">
              <a href="#">
                <Image src="/contact-twitter.svg" width={20} height={20} alt="icon" />
              </a>
              <a href="#">
                <Image src="/contact-instagram.svg" width={20} height={20} alt="icon" />
              </a>
              <a href="#">
                <Image src="/facebook.svg" width={20} height={20} alt="icon" />
              </a>
              <a href="#">
                <Image src="/contact-twitter.svg" width={20} height={20} alt="icon" />
              </a>
            </div>

            <div className="hidden relative overflow-hidden lg:block"><a href="https://yandex.com/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps" style={{ color: "white", fontSize: 12, position: "absolute", top: 0 }}>Ташкент</a><a href="https://yandex.com/maps/10335/tashkent/?from=mapframe&ll=69.302599%2C41.334695&source=mapframe&um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&utm_medium=mapframe&utm_source=maps&z=16.32"
              style={{ color: "white", fontSize: 12, position: "absolute", top: 12 }}>Яндекс Карты — транспорт, навигация, поиск мест</a><iframe src="https://yandex.com/map-widget/v1/?from=mapframe&ll=69.302599%2C41.334695&source=mapframe&um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&utm_source=mapframe&z=16.32" width="400" height="200" frameBorder="1" allowFullScreen={true} style={{ position: "relative" }}></iframe>
            </div>

          </div>

        </div>

      </div>

    </section >
  )
}