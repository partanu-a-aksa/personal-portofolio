import { Navbar } from "@/component/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div
      id="services"
      className="flex-col flex min-h-screen justify-center items-center w-full bg-gradient-to-br from-[#1d1e1e] via-[#313235] to-[#a6a6a9] text-white px-4 "
    >
      <p className="font-extrabold text-7xl p-4 mb-2">
        Featured{" "}
        <span
          className="bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-400 transition-all duration-300 cursor-pointer
           hover:[text-shadow:0_0_5px_#fef3c7,0_0_10px_#fef3c7,0_0_20px_#fef3c7]"
        >
          Projects
        </span>
      </p>

      <div className="gap-6 md:justify-center md:items-center md:gap-6 grid grid-cols-1 grid-rows-2 md:w-2/3 lg:w-3/4 mb-6">
        <div className="flex flex-col lg:flex-row justify-center items-center rounded-2xl gap-4 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-400 text-white font-semibold shadow-md">
          <img src="/Images/rsintanhusada.png" alt="" className="w-[400px]" />
          <div>
            <h2 className="text-[24px]">Landing Page for local Hospital</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              sint, repudiandae similique accusamus doloribus veritatis
              eligendi! Ipsum sed beatae debitis expedita nobis, voluptatibus
              nemo blanditiis quaerat voluptas accusantium tempora distinctio?
            </p>
            <Link href="https://www.google.com/" className=" text-[#D3E97A]">
              Live Demo
            </Link>
            <div></div>
            <Link href="https://www.google.com/" className=" text-[#D3E97A]">
              See on Github ↗️
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center rounded-2xl gap-4 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-400 text-white font-semibold shadow-md">
          <img src="/Images/klinikmitra.png" alt="" className="w-[400px]" />
          <div>
            <h2 className="text-[24px]">Simple Web for local Small Clinic</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              sint, repudiandae similique accusamus doloribus veritatis
              eligendi! Ipsum sed beatae debitis expedita nobis, voluptatibus
              nemo blanditiis quaerat voluptas accusantium tempora distinctio?
            </p>

            <Link href="https://www.google.com/" className=" text-[#D3E97A]">
              See on Github ↗️
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center rounded-2xl gap-4 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-400 text-white font-semibold shadow-md">
          <img src="/Images/labdiatest.png" alt="" className="w-[400px]" />
          <div>
            <h2 className="text-[24px]">
              Simple Landing template for local Clinical Laboratory
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              sint, repudiandae similique accusamus doloribus veritatis
              eligendi! Ipsum sed beatae debitis expedita nobis, voluptatibus
              nemo blanditiis quaerat voluptas accusantium tempora distinctio?
            </p>

            <Link href="https://www.google.com/" className=" text-[#D3E97A]">
              See on Github ↗️
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
