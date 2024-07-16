import Image from "next/image";

export default function () {
  return (
    <section id="contact" className="py-20">
      <div className="content-container">
        <h2 className="mb-20 text-blue text-3xl lg:text-[60px] font-extrabold text-left">
          Contact us
        </h2>
        <div className="mt-20 flex justify-between flex-col lg:flex-row lg:pt-10 lg:pb-20 lg:px-24 rounded-lg lg:form-shadow">

          <form className="space-y-5 flex flex-col w-full mb-7 lg:mb-0">
            <h3 className="text-xl leading-7 font-bold">Leave us a message</h3>
            <input className="py-4 px-3 border-2 outline-none rounded-md lg:max-w-96 focus:border-slate" type="text" placeholder="Name" required />
            <input className="py-4 px-3 border-2 outline-none rounded-md lg:max-w-96 focus:border-slate" type="email" placeholder="Your email" required />
            <textarea rows={3} className="resize-none py-4 px-3 border-2 outline-none rounded-md lg:max-w-96 focus:border-slate" placeholder="Briefly describe your project"></textarea>
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