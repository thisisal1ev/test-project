"use client"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function () {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className="border-b-2 py-4 fixed w-full top-0 z-10 bg-white">

      <div className="content-container flex items-center justify-between">

        <Link href="/">
          <Image width={96} height={32} src="/udevs-logo.svg" alt="udevs logo" />
        </Link>

        <nav className="hidden items-center justify-between space-x-8 lg:flex">

          <Link className="font-bold inline-block leading-5 py-2 border-b-2 border-transparent hover:border-b-2 hover:border-blue" href="#direction">Direction</Link>

          <Link className="font-bold inline-block leading-5 py-2 border-b-2 border-transparent hover:border-b-2 hover:border-blue" href="#command">Command</Link>

          <Dropdown>
            <DropdownTrigger>
              <Button
                className="font-bold inline-flex rounded-none outline-none leading-5 py-2 px-0 border-b-2 border-transparent hover:border-b-2 hover:border-blue"
                variant="light"
              >
                Services

                <svg className="ml-2" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_2994)">
                    <g clipPath="url(#clip1_1_2994)">
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
              </Button>


            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">

              <DropdownItem key="new">
                <Link className="flex items-center space-x-3" href="#Development of mobile applications">
                  <Image src="/mobile-link.svg" width={48} height={48} alt="icon" />
                  <span>Development of mobile applications</span>
                </Link>
              </DropdownItem>

              <DropdownItem key="copy">
                <Link className="flex items-center space-x-3" href="#ERP systems">
                  <Image src="/development-link.svg" width={48} height={48} alt="icon" />
                  <span>Development of mobile applications</span>
                </Link>
              </DropdownItem>

              <DropdownItem key="edit">
                <Link className="flex items-center space-x-3" href="#UI / UX design">
                  <Image src="/ui-link.svg" width={48} height={48} alt="icon" />
                  <span>User interface, User experience design</span>
                </Link>
              </DropdownItem>

              <DropdownItem key="delete">
                <Link className="flex items-center space-x-3" href="#IT consulting">
                  <Image src="/consulting-link.svg" width={48} height={48} alt="icon" />
                  <span>IT consulting</span>
                </Link>
              </DropdownItem>

              <DropdownItem key="delete">
                <Link className="flex items-center space-x-3"
                  href="#Optimization Infrastructure">
                  <Image src="/optimization-link.svg" width={48} height={48} alt="icon" />
                  <span>Optimization IT consulting Infrastructure</span>
                </Link>
              </DropdownItem>

            </DropdownMenu>
          </Dropdown>

          <Link className="font-bold inline-block leading-5 py-2 border-b-2 border-transparent hover:border-b-2 hover:border-blue" href="#">Tools</Link>

          <Link className="font-bold inline-block leading-5 py-2 border-b-2 border-transparent hover:border-b-2 hover:border-blue" href="#clients">Clients</Link>

          <Dropdown>
            <DropdownTrigger>
              <Button
                className="font-bold inline-flex rounded-none outline-none leading-5 py-2 px-0 border-b-2 border-transparent hover:border-b-2 hover:border-blue"
                variant="light"
              >
                Portfolio

                <svg className="ml-2" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_2994)">
                    <g clipPath="url(#clip1_1_2994)">
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
              </Button>


            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">

              <DropdownItem key="new">
                <Link className="flex items-center space-x-3" href="#Delever">
                  <Image src="/delever-link.svg" width={48} height={48} alt="icon" />
                  <span>Delever</span>
                </Link>
              </DropdownItem>

              <DropdownItem key="copy">
                <Link className="flex items-center space-x-3" href="#Smsuz.uz">
                  <Image src="/sms-link.svg" width={48} height={48} alt="icon" />
                  <span>Sms.uz</span>
                </Link>
              </DropdownItem>

              <DropdownItem key="edit">
                <Link className="flex items-center space-x-3" href="#Goodzone">
                  <Image src="/goodzone-link.svg" width={48} height={48} alt="icon" />
                  <span>Goodzone</span>
                </Link>
              </DropdownItem>

              <DropdownItem key="delete">
                <Link className="flex items-center space-x-3" href="#IMAN">
                  <Image src="/iman-link.svg" width={48} height={48} alt="icon" />
                  <span>Iman</span>
                </Link>
              </DropdownItem>

            </DropdownMenu>
          </Dropdown>

          <Dropdown>
            <DropdownTrigger>
              <Button
                className="font-bold inline-flex rounded-none outline-none leading-5 py-2 px-0 border-b-2 border-transparent hover:border-b-2 hover:border-blue"
                variant="light"
              >
                Language

                <svg className="ml-2" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_2994)">
                    <g clipPath="url(#clip1_1_2994)">
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
              </Button>


            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">

              <DropdownItem key="new">
                <button className="flex items-center space-x-3">
                  <Image src="/lang-rus.svg" width={28} height={28} alt="icon" />
                  <span>Rus</span>
                </button>
              </DropdownItem>

              <DropdownItem key="copy">
                <button className="flex items-center space-x-3">
                  <Image src="/lang-eng.svg" width={28} height={28} alt="icon" />
                  <span>Eng</span>
                </button>
              </DropdownItem>

            </DropdownMenu>
          </Dropdown>

          <Link className="text-white bg-blue font-bold inline-block outline-none rounded-md py-3 px-4 w-28 text-center leading-5 hover:scale-110 duration-300 transition-transform" href="#contact">Contact</Link>

        </nav>

        <button onClick={() => setOpenMenu(prev => !prev)} className="lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1B5BF7" stroke="#1B5BF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
        </button>

        {
          openMenu && <div className={`fixed flex flex-col z-50 w-full h-screen right-0 top-0 bg-bgWhite ${openMenu && "-translate-x-0 transform transition-all duration-300 ease-in-out"}`}>

            <div className="content-container flex items-center justify-between py-4">
              <Image width={96} height={32} src="/udevs-logo.svg" alt="udevs logo" />

              <button onClick={() => setOpenMenu(prev => !prev)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1B5BF7" stroke="#1B5BF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>

            <div className="content-container grow flex items-center justify-center flex-col">
              <Link onClick={() => setOpenMenu(prev => !prev)} className="text-3xl text-center font-extrabold leading-[54px] mx-4" href="#Development of mobile applications">Services</Link>
              <Link onClick={() => setOpenMenu(prev => !prev)} className="text-3xl text-center font-extrabold leading-[54px] mx-4" href="#clients">Clients</Link>
              <Link onClick={() => setOpenMenu(prev => !prev)} className="text-3xl text-center font-extrabold leading-[54px] mx-4" href="#command">Command</Link>
            </div>

            <div className="content-container flex flex-col">
              <Link onClick={() => setOpenMenu(prev => !prev)} href="#contact" className="py-3 px-4 text-xl leading-7 font-semibold bg-blue text-white text-center rounded-md">Contact</Link>

              <div className="flex items-center justify-center space-x-6 my-10">
                <a className="bg-blue p-1 rounded-full" href="#" target="_blank">
                  <svg fill="#fff" width={27} height={27} className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                </a>

                <a className="bg-blue p-1 rounded-full" href="#" target="_blank">
                  <svg fill="#fff" width={27} height={27} className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path></svg>
                </a>

                <a className="bg-blue p-1 rounded-full" href="https://www.youtube.com/@thisisal1ev" target="_blank">
                  <svg fill="#fff" width={27} height={27} className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path></svg>
                </a>
              </div>
            </div>


          </div>
        }

      </div>
    </header>
  )
}