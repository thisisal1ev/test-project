import Image from "next/image";
import Link from "next/link";

export default function () {
  return (
    <header className="border-b-2 py-4 fixed w-full top-0 z-10 bg-white">
      <div className="content-container flex items-center justify-between">
        <Link href="/">
          <Image width={96} height={32} src="/udevs-logo.svg" alt="udevs logo" />
        </Link>

        <nav className="hidden items-center justify-between space-x-8 lg:flex">

          <Link className="font-bold inline-block leading-5 py-2 border-b-2 border-transparent hover:border-b-2 hover:border-blue" href="#direction">Direction</Link>

          <Link className="font-bold inline-block leading-5 py-2 border-b-2 border-transparent hover:border-b-2 hover:border-blue" href="#command">Command</Link>

          <Link className="font-bold inline-flex items-center leading-5 py-2 border-b-2 border-transparent hover:border-b-2 hover:border-blue" href="#">
            <span className="mr-1">Services</span>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_2994)">
                <g clip-path="url(#clip1_1_2994)">
                  <path d="M9.37732 4.64645C9.58885 4.45118 9.93182 4.45118 10.1433 4.64645C10.3549 4.84171 10.3549 5.15829 10.1433 5.35355L6.89335 8.35355C6.68829 8.54284 6.3581 8.54947 6.14432 8.36858L2.89432 5.61858C2.67379 5.43198 2.6589 5.1157 2.86104 4.91214C3.06319 4.70858 3.40583 4.69483 3.62635 4.88142L6.49404 7.30793L9.37732 4.64645Z" fill="black" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_2994">
                  <rect width="13" height="12" fill="white" transform="translate(0.0100098 0.5)" />
                </clipPath>
                <clipPath id="clip1_1_2994">
                  <rect width="13" height="12" fill="white" transform="translate(0.0100098 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </Link>

          <Link className="font-bold inline-block leading-5 py-2 border-b-2 border-transparent hover:border-b-2 hover:border-blue" href="#">Tools</Link>

          <Link className="font-bold inline-block leading-5 py-2 border-b-2 border-transparent hover:border-b-2 hover:border-blue" href="#">Clients</Link>

          <Link className="font-bold inline-flex items-center leading-5 py-2 border-b-2 border-transparent hover:border-b-2 hover:border-blue" href="#">
            <span className="mr-1">Portfolio</span>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_2994)">
                <g clip-path="url(#clip1_1_2994)">
                  <path d="M9.37732 4.64645C9.58885 4.45118 9.93182 4.45118 10.1433 4.64645C10.3549 4.84171 10.3549 5.15829 10.1433 5.35355L6.89335 8.35355C6.68829 8.54284 6.3581 8.54947 6.14432 8.36858L2.89432 5.61858C2.67379 5.43198 2.6589 5.1157 2.86104 4.91214C3.06319 4.70858 3.40583 4.69483 3.62635 4.88142L6.49404 7.30793L9.37732 4.64645Z" fill="black" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_2994">
                  <rect width="13" height="12" fill="white" transform="translate(0.0100098 0.5)" />
                </clipPath>
                <clipPath id="clip1_1_2994">
                  <rect width="13" height="12" fill="white" transform="translate(0.0100098 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </Link>

          <Link className="font-bold inline-flex items-center leading-5 py-2 border-b-2 border-transparent hover:border-b-2 hover:border-blue" href="#">
            <span className="mr-1">Language</span>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_2994)">
                <g clip-path="url(#clip1_1_2994)">
                  <path d="M9.37732 4.64645C9.58885 4.45118 9.93182 4.45118 10.1433 4.64645C10.3549 4.84171 10.3549 5.15829 10.1433 5.35355L6.89335 8.35355C6.68829 8.54284 6.3581 8.54947 6.14432 8.36858L2.89432 5.61858C2.67379 5.43198 2.6589 5.1157 2.86104 4.91214C3.06319 4.70858 3.40583 4.69483 3.62635 4.88142L6.49404 7.30793L9.37732 4.64645Z" fill="black" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_2994">
                  <rect width="13" height="12" fill="white" transform="translate(0.0100098 0.5)" />
                </clipPath>
                <clipPath id="clip1_1_2994">
                  <rect width="13" height="12" fill="white" transform="translate(0.0100098 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </Link>

          <Link className="text-white bg-blue font-bold inline-block outline-none rounded-md py-3 px-4 w-28 text-center leading-5 hover:scale-110 duration-300 transition-transform" href="#">Contact</Link>

        </nav>

      </div>
    </header>
  )
}