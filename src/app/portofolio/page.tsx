"use client";
import { Navbar } from "@/component/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center w-full bg-gradient-to-br from-[#1d1e1e] via-[#373738] to-[#a6a6a9] text-white px-6 py-20 gap-10">
      <h1 className="text-[48px] font-[1000]">
        Featured{" "}
        <span className="text-[48px] font-[1000] text-slate-600 hover:[text-shadow:0_0_5px_#fef3c7,0_0_10px_#fef3c7,0_0_20px_#fef3c7] transition-all">
          Projects
        </span>
      </h1>

      <div className="flex flex-col gap-10 items-center w-full max-w-5xl">
        {/* RS Intan Husada nyomot */}
        <Link
          href="/portofolio/rs-intan-husada"
          className="flex flex-col lg:flex-row items-center gap-6 bg-white/5 backdrop-blur-md border border-gray-500/30 hover:border-gray-400 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 w-full"
        >
          <Image
            src="/Images/rsintanhusada.png"
            alt="RS Intan Husada"
            width={400}
            height={250}
            className="rounded-lg object-cover"
          />
          <div className="flex flex-col gap-3 w-full">
            <h2 className="text-xl font-semibold">
              Landing Page for RS Intan Husada
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed line-clamp-4">
              A responsive and professional landing page for a local hospital,
              built to highlight key medical services and facilities clearly.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="bg-[#D3E97A] text-black px-4 py-2 rounded-lg font-medium">
                View Details
              </span>
            </div>
          </div>
        </Link>

        {/* Lab Diatest */}
        <Link
          href="/portofolio/lab-diatest"
          className="flex flex-col lg:flex-row items-center gap-6 bg-white/5 backdrop-blur-md border border-gray-500/30 hover:border-gray-400 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 w-full"
        >
          <Image
            src="/Images/labdiatestweb.png"
            alt="Lab Diatest"
            width={400}
            height={250}
            className="rounded-lg object-cover"
          />
          <div className="flex flex-col gap-3 w-full">
            <h2 className="text-xl font-semibold">
              Landing Page for Lab Diatest
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed line-clamp-4">
              A clean and clear landing page for a clinical laboratory, designed
              for accessibility, speed, and client trust.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="bg-[#D3E97A] text-black px-4 py-2 rounded-lg font-medium">
                View Details
              </span>
            </div>
          </div>
        </Link>

        {/* Template cuy */}
        <Link
          href="/contact-me"
          className="flex flex-col lg:flex-row items-center gap-6 bg-white/5 backdrop-blur-md border border-gray-500/30 hover:border-gray-400 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 w-full"
        >
          <Image
            src="/Images/klinikmitra.png"
            alt="Lab Diatest"
            width={400}
            height={250}
            className="rounded-lg object-cover"
          />
          <div className="flex flex-col gap-3 w-full">
            <h2 className="text-xl font-semibold">
              Simple Web for small clinic
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed line-clamp-4">
              A clean and clear landing page template for a local clinic.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="bg-[#D3E97A] text-black px-4 py-2 rounded-lg font-medium">
                Ask me for this template
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div className="mt-6">
        <Navbar />
      </div>
    </div>
  );
}
