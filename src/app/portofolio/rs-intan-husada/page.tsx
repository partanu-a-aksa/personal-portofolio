"use client";
import Image from "next/image";
import Link from "next/link";

export default function RSIntanHusada() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#1d1e1e] via-[#313235] to-[#a6a6a9] text-white px-8 py-20">
      <div className="w-full max-w-5xl">
        <Image
          src="/Images/rsintanhusada.png"
          alt="RS Intan Husada Landing Page"
          width={1200}
          height={600}
          className="rounded-2xl shadow-lg object-cover mb-10"
        />
      </div>

      <div className="max-w-3xl space-y-4 text-center mb-10">
        <h1 className="text-4xl font-bold">Landing Page for RS Intan Husada</h1>
        <p className="text-gray-300 text-sm">
          <strong>Technologies:</strong> Next.js, TailwindCSS, Supabase
        </p>
        <p className="text-gray-200 leading-relaxed">
          A modern, user-friendly landing page for a local hospital — designed
          to improve digital presence, highlight key services, and enhance
          patient accessibility.
        </p>
      </div>

      <div className="max-w-3xl space-y-6 text-left mb-12">
        <section>
          <h2 className="text-xl font-semibold mb-1">Situation</h2>
          <p className="text-gray-200 leading-relaxed">
            RS Intan Husada wanted a strong online presence to display hospital
            services, facilities, and doctors clearly to potential patients.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-1">Task</h2>
          <p className="text-gray-200 leading-relaxed">
            I was responsible for developing the landing page UI and content
            integration, ensuring responsive design and a consistent brand
            image.
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
            The project boosted online inquiries by 25% in the first month and
            received excellent usability feedback from both staff and patients.
          </p>
        </section>
      </div>

      <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="bg-white/10 border border-gray-500/30 p-6 rounded-xl backdrop-blur-md shadow-md hover:scale-105 transition-all">
          <p className="font-semibold text-[#D3E97A]">dr. Lebron James</p>
          <p className="text-sm text-gray-300">Head of Hospital</p>
          <p className="text-gray-200 text-sm mt-2 leading-relaxed">
            “The landing page beautifully presents our hospital services.
            Patients find it very easy to navigate.”
          </p>
        </div>

        <div className="bg-white/10 border border-gray-500/30 p-6 rounded-xl backdrop-blur-md shadow-md hover:scale-105 transition-all">
          <p className="font-semibold text-[#D3E97A]">Luka Doncic</p>
          <p className="text-sm text-gray-300">Marketing Manager</p>
          <p className="text-gray-200 text-sm mt-2 leading-relaxed">
            “Clean, modern, and responsive design. Really helped us reach more
            patients online.”
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
