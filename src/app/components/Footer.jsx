import Image from "next/image";
import Link from "next/link";

export default function () {
  const date = new Date().getFullYear();

  return (
    <footer className="bg-bgWhite pt-12">
      <div className="content-container">
        <Image className="mx-auto" src="/udevs-logo.svg" width={106} height={35} alt="udevs logo" />
        <div className="mt-11 mb-8 flex flex-col items-start justify-between lg:flex-row lg:items-start">
          <div className="flex flex-col">
            <h3 className="mb-4 text-xl lg:text-lg text-black font-bold">About us</h3>
            <Link className="inline-block text-blue text-lg leading-8 hover:underline" href="#direction">Direction</Link>

            <Link className="inline-block text-blue text-lg leading-8 hover:underline" href="#command">Command</Link>

            <Link className="inline-block text-blue text-lg leading-8 hover:underline" href="#">Tools</Link>
    
            <Link className="inline-block text-blue text-lg leading-8 hover:underline" href="#clients">Clients</Link>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-4 text-xl lg:text-lg text-black font-bold">Services</h3>
            <Link className="inline-block text-blue text-lg leading-8 hover:underline" href="#">Development of mobile applications</Link>

            <Link className="inline-block text-blue text-lg leading-8 hover:underline" href="#">Development and implementation ERP systems</Link>

            <Link className="inline-block text-blue text-lg leading-8 hover:underline" href="#">User interface, User experience design</Link>

            <Link className="inline-block text-blue text-lg leading-8 hover:underline" href="#">IT consulting</Link>

            <Link className="inline-block text-blue text-lg leading-8 hover:underline" href="#">Optimization IT consulting infrastructure</Link>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-4 text-xl lg:text-lg text-black font-bold">Portfolio</h3>
            <Link className="inline-block text-blue text-lg leading-8 hover:underline" href="#Delever">Delever</Link>

            <Link className="inline-block text-blue text-lg leading-8 hover:underline" href="#Smsuz.uz">Sms.uz</Link>

            <Link className="inline-block text-blue text-lg leading-8 hover:underline" href="#Goodzone">Goodzone</Link>

            <Link className="inline-block text-blue text-lg leading-8 hover:underline" href="#IMAN">Iman</Link>
          </div>
        </div>
        <div className="lg:border-t lg:border-blue lg:flex flex-col items-center justify-between py-6 lg:flex-row">
          <p className="text-blue text-center mb-5 lg:mb-0">© {date} Udevs. All rights reserved</p>

          <div className="flex items-center justify-center space-x-4 lg:justify-between">
            <Link className="outline-none" href="#">
              <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.634766" width="38" height="38" rx="19" fill="#1B5BF7" fillOpacity="0.1" />
                <path d="M14.8 9.63477H23.2C26.4 9.63477 29 12.2348 29 15.4348V23.8348C29 25.373 28.3889 26.8483 27.3012 27.936C26.2135 29.0237 24.7383 29.6348 23.2 29.6348H14.8C11.6 29.6348 9 27.0348 9 23.8348V15.4348C9 13.8965 9.61107 12.4213 10.6988 11.3335C11.7865 10.2458 13.2617 9.63477 14.8 9.63477ZM14.6 11.6348C13.6452 11.6348 12.7295 12.0141 12.0544 12.6892C11.3793 13.3643 11 14.28 11 15.2348V24.0348C11 26.0248 12.61 27.6348 14.6 27.6348H23.4C24.3548 27.6348 25.2705 27.2555 25.9456 26.5804C26.6207 25.9052 27 24.9895 27 24.0348V15.2348C27 13.2448 25.39 11.6348 23.4 11.6348H14.6ZM24.25 13.1348C24.5815 13.1348 24.8995 13.2665 25.1339 13.5009C25.3683 13.7353 25.5 14.0532 25.5 14.3848C25.5 14.7163 25.3683 15.0342 25.1339 15.2686C24.8995 15.5031 24.5815 15.6348 24.25 15.6348C23.9185 15.6348 23.6005 15.5031 23.3661 15.2686C23.1317 15.0342 23 14.7163 23 14.3848C23 14.0532 23.1317 13.7353 23.3661 13.5009C23.6005 13.2665 23.9185 13.1348 24.25 13.1348ZM19 14.6348C20.3261 14.6348 21.5979 15.1615 22.5355 16.0992C23.4732 17.0369 24 18.3087 24 19.6348C24 20.9608 23.4732 22.2326 22.5355 23.1703C21.5979 24.108 20.3261 24.6348 19 24.6348C17.6739 24.6348 16.4021 24.108 15.4645 23.1703C14.5268 22.2326 14 20.9608 14 19.6348C14 18.3087 14.5268 17.0369 15.4645 16.0992C16.4021 15.1615 17.6739 14.6348 19 14.6348ZM19 16.6348C18.2044 16.6348 17.4413 16.9508 16.8787 17.5134C16.3161 18.0761 16 18.8391 16 19.6348C16 20.4304 16.3161 21.1935 16.8787 21.7561C17.4413 22.3187 18.2044 22.6348 19 22.6348C19.7956 22.6348 20.5587 22.3187 21.1213 21.7561C21.6839 21.1935 22 20.4304 22 19.6348C22 18.8391 21.6839 18.0761 21.1213 17.5134C20.5587 16.9508 19.7956 16.6348 19 16.6348Z" fill="#1B5BF7" />
              </svg>
            </Link>
            <Link className="outline-none" href="#">
              <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.634766" width="38" height="38" rx="19" fill="#1B5BF7" fillOpacity="0.1" />
                <path d="M29.46 13.6348C28.69 13.9848 27.86 14.2148 27 14.3248C27.88 13.7948 28.56 12.9548 28.88 11.9448C28.05 12.4448 27.13 12.7948 26.16 12.9948C25.37 12.1348 24.26 11.6348 23 11.6348C20.65 11.6348 18.73 13.5548 18.73 15.9248C18.73 16.2648 18.77 16.5948 18.84 16.9048C15.28 16.7248 12.11 15.0148 10 12.4248C9.63001 13.0548 9.42001 13.7948 9.42001 14.5748C9.42001 16.0648 10.17 17.3848 11.33 18.1348C10.62 18.1348 9.96001 17.9348 9.38001 17.6348V17.6648C9.38001 19.7448 10.86 21.4848 12.82 21.8748C12.1907 22.047 11.5301 22.0709 10.89 21.9448C11.1616 22.7972 11.6935 23.5432 12.411 24.0777C13.1285 24.6122 13.9955 24.9085 14.89 24.9248C13.3736 26.1252 11.494 26.7741 9.56001 26.7648C9.22001 26.7648 8.88001 26.7448 8.54001 26.7048C10.44 27.9248 12.7 28.6348 15.12 28.6348C23 28.6348 27.33 22.0948 27.33 16.4248C27.33 16.2348 27.33 16.0548 27.32 15.8648C28.16 15.2648 28.88 14.5048 29.46 13.6348Z" fill="#1B5BF7" />
              </svg>

            </Link>
            <Link className="outline-none" href="#">
              <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.634766" width="38" height="38" rx="19" fill="#1B5BF7" fillOpacity="0.1" />
                <path d="M17 22.6348L22.19 19.6348L17 16.6348V22.6348ZM28.56 14.8048C28.69 15.2748 28.78 15.9048 28.84 16.7048C28.91 17.5048 28.94 18.1948 28.94 18.7948L29 19.6348C29 21.8248 28.84 23.4348 28.56 24.4648C28.31 25.3648 27.73 25.9448 26.83 26.1948C26.36 26.3248 25.5 26.4148 24.18 26.4748C22.88 26.5448 21.69 26.5748 20.59 26.5748L19 26.6348C14.81 26.6348 12.2 26.4748 11.17 26.1948C10.27 25.9448 9.69 25.3648 9.44 24.4648C9.31 23.9948 9.22 23.3648 9.16 22.5648C9.09 21.7648 9.06 21.0748 9.06 20.4748L9 19.6348C9 17.4448 9.16 15.8348 9.44 14.8048C9.69 13.9048 10.27 13.3248 11.17 13.0748C11.64 12.9448 12.5 12.8548 13.82 12.7948C15.12 12.7248 16.31 12.6948 17.41 12.6948L19 12.6348C23.19 12.6348 25.8 12.7948 26.83 13.0748C27.73 13.3248 28.31 13.9048 28.56 14.8048Z" fill="#1B5BF7" />
              </svg>

            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}