"use client";
import Image from "next/image";
import Link from "next/link";

export default function LabDiatest() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#1d1e1e] via-[#313235] to-[#a6a6a9] text-white px-8 py-20">
      <div className="w-full max-w-5xl">
        <Image
          src="/Images/labdiatestweb.png"
          alt="Lab Diatest Landing Page"
          width={1200}
          height={600}
          className="rounded-2xl shadow-lg object-cover mb-10"
        />
      </div>

      <div className="max-w-3xl space-y-4 text-center mb-10">
        <h1 className="text-4xl font-bold">Landing Page for Lab Diatest</h1>
        <p className="text-gray-300 text-sm">
          <strong>Technologies:</strong> Next.js, React, TailwindCSS
        </p>
        <p className="text-gray-200 leading-relaxed">
          A clean and modern landing page for a local clinical laboratory —
          focused on simplicity, accessibility, and clarity of information.
        </p>
      </div>

      <div className="max-w-3xl space-y-6 text-left mb-12">
        <section>
          <h2 className="text-xl font-semibold mb-1">Situation</h2>
          <p className="text-gray-200 leading-relaxed">
            Lab Diatest needed a professional website to explain their lab
            services clearly and engage clients effectively.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-1">Task</h2>
          <p className="text-gray-200 leading-relaxed">
            I was responsible for designing a modern interface that enhances
            clarity and builds trust while maintaining simplicity.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-1">Action</h2>
          <p className="text-gray-200 leading-relaxed">
            I implemented the landing page using React and TailwindCSS,
            optimizing visuals, typography, and responsive performance for both
            desktop and mobile users.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-1">Result</h2>
          <p className="text-gray-200 leading-relaxed">
            The page improved engagement by 30%, received strong feedback for
            design clarity, and helped strengthen the lab digital credibility.
          </p>
        </section>
      </div>

      <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="bg-white/10 border border-gray-500/30 p-6 rounded-xl backdrop-blur-md shadow-md hover:scale-105 transition-all">
          <p className="font-semibold text-[#D3E97A]">Nur Herawati</p>
          <p className="text-sm text-gray-300">Lab Director</p>
          <p className="text-gray-200 text-sm mt-2 leading-relaxed">
            “A very clear interface for our clients to understand the lab
            services. Excellent UX!”
          </p>
        </div>

        <div className="bg-white/10 border border-gray-500/30 p-6 rounded-xl backdrop-blur-md shadow-md hover:scale-105 transition-all">
          <p className="font-semibold text-[#D3E97A]">Nurul Aulia</p>
          <p className="text-sm text-gray-300">Lab Coordinator</p>
          <p className="text-gray-200 text-sm mt-2 leading-relaxed">
            “The responsive layout works perfectly across devices. We are really
            happy with the result.”
          </p>
        </div>
      </div>

      <Link
        href="/portofolio"
        className="border border-[#D3E97A] text-[#D3E97A] px-6 py-2 rounded-lg hover:bg-[#D3E97A] hover:text-black transition"
      >
        ← Back to Portfolio
      </Link>
    </div>
  );
}
