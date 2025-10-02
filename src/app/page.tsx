"use client";

import { Navbar } from "@/component/navbar";
import Image from "next/image";
import React from "react";
import SlidingWords from "@/component/slidingwords";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/Images/heropage.png"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover -z-10 fill"
        fill
      />
      <div className=" z-10 flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center">
          <span className="text-white font-bold text-[44px] leading-[100%] tracking-[15px] font-josefin-sans text-shadow-sm">
            Partanu Ardi Aksa
          </span>

          <SlidingWords />

          <div>
            <Navbar />
          </div>
        </div>
      </div>

      <div
        id="about-me"
        className="flex flex-col h-auto w-full gap-20 px-5 bg-amber-100 "
      >
        <div className="justify-between flex flex-row items-center gap-x-44">
          <p className="w-1/2 h-auto text-5xl">
            A lifelong learner & never-ending curiosity, I create functional and
            visually aesthetic digital experiences.
          </p>
          <p className="w-1/2 ">
            A Bandung based developer passionate about building accessible and
            user friendly websites.
          </p>
        </div>
        <div className="justify-between flex flex-row items-center gap-x-44">
          <p className="w-1/2 ">
            Currently, I’m exploring NextJs, Backend and a bit of Designing.
            While I am not programming, I did family business, managing staffs
            and playing Videogames. Learning more to improve skill.
          </p>
          <p className="w-1/2 h-auto text-5xl">Some of my projects:</p>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div>
            <img
              className="h-auto w-[400px] rounded-4xl"
              src="/Images/rsintanhusada.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto w-[400px]"
              src="/Images/learnlogic.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col justify-items-center items-center pb-2.5 ">
          <a
            href="/portofolio"
            className="bg-black text-white rounded-3xl p-2 "
          >
            Explore More
          </a>
        </div>
      </div>
    </div>
  );
}
