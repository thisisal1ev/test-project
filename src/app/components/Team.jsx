"use client"
import Image from "next/image";
import CountUp from 'react-countup';

export default function () {
  return (
    <section id="command" className="py-20">
      <div className="content-container flex flex-col items-start justify-between lg:items-center lg:flex-row">
        <div className="mr-0 contents lg:block lg:mr-10 space-y-6">
          <h2 className="mb-20 -order-2 text-blue text-3xl lg:text-[60px] font-extrabold lg:order-none">Team</h2>
          <p className="text-slate text-base leading-7 font-medium lg:leading-10 lg:text-xl">For each project, we form a team that includes a project manager, business analyst, UI / UX designer, DevOps, QA engineer, backend and front-end developers.</p>
          <p className="text-blue text-[80px] leading-[70px] font-bold lg:text-[120px] lg:leading-[96px]">
            <CountUp start={0} end={100} duration={3} />
            +
          </p>
          <p className="text-slate text-2xl font-extrabold leading-[72px] lg:text-[40px]">Dedicated team</p>
        </div>
        <Image className="-order-1 m-8 w-72 h-64 lg:m-0 lg:order-none lg:w-auto lg:h-auto" src="/team-section-img.png" width={468} height={392} alt="img" />
      </div>
    </section>
  )
}