"use client"
import Image from "next/image";
import Link from "next/link";
import { ReactTyped } from "react-typed";

export default function () {
  return (
    <section className="py-28 mt-20">
      <div className="content-container flex items-center justify-between flex-col lg:flex-row">
        <div className="space-y-5 mb-11 flex flex-col items-center lg:items-start lg:mb-0 lg:mr-10">
          <Image className="mb-6 w-32 lg:w-auto" src="/udevs-hero-logo.png" width={267} height={69} alt="udevs logo" />
          <h1 className="text-2xl lg:text-[40px] text-[#464359] font-extrabold leading-[50px]">IT-Outsourcing Company</h1>
          <p className="text-blue text-2xl leading-8 font-bold lg:font-extrabold lg:text-[40px] lg:leading-[54px]">
            <ReactTyped strings={["Development of mobile applications", "Development and implementation ERP systems", "User interface, User experience design"]} typeSpeed={100} backSpeed={100} loop />
          </p>
          <Link className="w-64 text-center rounded-md bg-blue text-white text-xl px-4 py-3 hover:scale-110 transition-transform duration-300 hidden lg:inline-block" href="#contact">Contact</Link>
        </div>
        <Image src="/hero-img.png" width={547} height={415} alt="hero img" />
      </div>
    </section>
  )
}