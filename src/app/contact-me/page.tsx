import { Navbar } from "@/component/navbar";

export default function ContactForm() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1d1e1e] via-[#313235] to-[#a6a6a9] text-white px-4">
      <div className="items-center justify-center">
        <h1
          className="text-[48px] font-[1000] transition-all duration-300 cursor-pointer
           hover:[text-shadow:0_0_5px_#fef3c7,0_0_10px_#fef3c7,0_0_20px_#fef3c7]"
        >
          Get In Touch
        </h1>
        <p>reach out and create endless opportunities with me</p>
      </div>
      <br />
      <div className="bg-[#1d1b1b] bg-opacity-90 rounded-2xl p-8 md:p-12 w-full max-w-4xl mx-4 shadow-xl ring-1 ring-black/20">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Lets connect !</h1>
        <p className="text-sm md:text-base text-gray-300 mb-6">
          Align our interests:
        </p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="px-4 py-3 rounded-md bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-400 text-white font-semibold shadow-md"
            />
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              className="px-4 py-3 rounded-md bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-400 text-white font-semibold shadow-md"
            />
          </div>

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-400 text-white font-semibold shadow-md"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-md bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-400 text-white font-semibold shadow-md"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-3 rounded-md bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-400 text-white font-semibold shadow-md"
          />

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-400 text-white font-semibold shadow-md transition-all duration-300 cursor-pointer
           hover:[text-shadow:0_0_5px_#fef3c7,0_0_10px_#fef3c7,0_0_20px_#fef3c7]"
          >
            Send it to the moon
            <span
              className="inline-block w-4 h-4"
              aria-label="rocket"
              role="img"
            ></span>
          </button>
        </form>
      </div>

      <br />
      <div className="flex flex-row gap-2">
        <a href="https://github.com/partanu-a-aksa">
          <img src="/Images/linkedin.png" alt="" className="w-[60px]" />
        </a>
        <a href="https://www.linkedin.com/in/partanu-ardi-aksa-2b460b66/">
          <img src="/Images/githubicon.png" alt="" className="w-[60px]" />
        </a>
      </div>

      <br />
      <Navbar></Navbar>
    </section>
  );
}
