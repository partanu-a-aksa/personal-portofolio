"use client";
import Image from "next/image";
import Link from "next/link";

export default function RSIntanHusada() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#1d1e1e] via-[#313235] to-[#a6a6a9] text-white px-8 py-20">
      <div className="w-full max-w-5xl">
        <Image
          src="/Images/eventura-hero.png"
          alt="Eventura Landing Page"
          width={1200}
          height={600}
          className="rounded-2xl shadow-lg object-cover mb-10"
        />
      </div>

      <div className="max-w-3xl space-y-4 text-center mb-10">
        <h1 className="text-4xl font-bold">
          Event Organizer Website: EVENTURA
        </h1>
        <p className="text-gray-300 text-sm">
          <strong>Technologies:</strong> Next.js, TailwindCSS, Supabase
        </p>
        <p className="text-gray-200 leading-relaxed">
          A modern, user-friendly event organizer website with seamless role
          switching feature.
        </p>
      </div>

      <div className="max-w-3xl space-y-6 text-left mb-12">
        <section>
          <h2 className="text-xl font-semibold mb-1">Situation</h2>
          <p className="text-gray-200 leading-relaxed">
            Event Organizer Website as Mini Project assignment from Purwadhika
            Digital.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-1">Task</h2>
          <p className="text-gray-200 leading-relaxed">
            I was responsible for developing the landing page UI and content
            integration, ensuring responsive design and a consistent brand
            image. The backend provided using express and node.js, the database
            is in Supabase.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-1">Action</h2>
          <p className="text-gray-200 leading-relaxed">
            Using Next.js and TailwindCSS, I built a performance-optimized
            layout with structured service sections, dynamic content through
            Supabase, and accessible design standards.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-1">Result</h2>
          <p className="text-gray-200 leading-relaxed">
            The project become my backbone in understanding Fullstack
            Development. While bug may still present in this project, overall it
            has good acceptance from Purwadhika Lecturers.
          </p>
        </section>
      </div>

      <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="bg-white/10 border border-gray-500/30 p-6 rounded-xl backdrop-blur-md shadow-md hover:scale-105 transition-all">
          <p className="font-semibold text-[#D3E97A]">dr. Lebron James</p>
          <p className="text-sm text-gray-300">Head of Hospital</p>
          <p className="text-gray-200 text-sm mt-2 leading-relaxed">
            “The landing page beautifully presents our services. Patients find
            it very easy to navigate.”
          </p>
        </div>

        <div className="bg-white/10 border border-gray-500/30 p-6 rounded-xl backdrop-blur-md shadow-md hover:scale-105 transition-all">
          <p className="font-semibold text-[#D3E97A]">Luka Doncic</p>
          <p className="text-sm text-gray-300">Marketing Manager</p>
          <p className="text-gray-200 text-sm mt-2 leading-relaxed">
            “Clean, modern, and responsive design. Really helped us reach more
            user online.”
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
