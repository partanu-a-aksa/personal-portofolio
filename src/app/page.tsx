"use client";

import { Navbar } from "@/component/navbar";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import SlidingWords from "@/component/slidingwords";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <section className="relative w-full h-screen">
        <Image
          src="/Images/heropage2.png"
          alt="hero"
          fill
          priority
          className="absolute inset-0 -z-10 object-cover object-center md:object-right"
        />

        <header className="px-6 py-4">
          <Navbar />
        </header>

        <div className="flex flex-col items-start justify-center h-full px-6 md:px-16 lg:px-24 gap-6 max-w-xl">
          <h1 className="text-white font-bold text-3xl md:text-5xl leading-tight drop-shadow-md">
            Partanu Ardi Aksa
          </h1>
          <div>
            <SlidingWords />
          </div>
        </div>
      </section>
      <section
        id="about-me"
        className="flex flex-col w-full gap-20 px-6 md:px-16 lg:px-24 py-20 bg-amber-100 text-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <p className="text-2xl md:text-4xl font-semibold leading-snug">
            A lifelong learner & never-ending curiosity, I create functional and
            visually aesthetic digital experiences.
          </p>
          <p className="text-lg leading-relaxed">
            A Bandung based developer passionate about building accessible and
            user friendly websites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <p className="text-lg leading-relaxed">
            Currently, Im exploring NextJs, Backend and a bit of Designing.
            While I am not programming, I did family business, managing staffs
            and playing videogames. Learning more to improve skill.
          </p>
          <p className="text-2xl md:text-4xl font-semibold">
            Some of my projects:
          </p>
        </div>

        <div className="flex flex-col items-center gap-10">
          <Image
            src="/Images/eventura-hero.png"
            alt="Project 1"
            width={400}
            height={250}
            className="w-full max-w-[400px] rounded-2xl shadow-md"
          />
          <Image
            src="/Images/labdiatestweb.png"
            alt="Project 2"
            width={400}
            height={250}
            className="w-full max-w-[400px] rounded-2xl shadow-md"
          />
          <Link
            href="/portofolio"
            className="bg-black/70 backdrop-blur-md text-white rounded-3xl px-6 py-3 text-lg font-medium hover:bg-black hover:shadow-lg transition"
          >
            Explore More
          </Link>
        </div>
      </section>
    </div>
  );
}
