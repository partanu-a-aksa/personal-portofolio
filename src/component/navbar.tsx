import { NavLink } from "./navlink";

export function Navbar() {
  return (
    <div className="flex gap-[20px] justify-items-center font-bold text-amber-100">
      <span
        className="transition-all duration-300 cursor-pointer
           hover:[text-shadow:0_0_5px_#fef3c7,0_0_10px_#fef3c7,0_0_20px_#fef3c7]"
      >
        <NavLink linkHref="/" linkContent="Home" />
      </span>
      <span
        className="transition-all duration-300 cursor-pointer
           hover:[text-shadow:0_0_5px_#fef3c7,0_0_10px_#fef3c7,0_0_20px_#fef3c7]"
      >
        <NavLink linkHref="/#about-me" linkContent="About Me" />
      </span>
      <span
        className="transition-all duration-300 cursor-pointer
           hover:[text-shadow:0_0_5px_#fef3c7,0_0_10px_#fef3c7,0_0_20px_#fef3c7]"
      >
        <NavLink linkHref="/portofolio" linkContent="My Portofolio" />
      </span>
      <span
        className="transition-all duration-300 cursor-pointer
           hover:[text-shadow:0_0_5px_#fef3c7,0_0_10px_#fef3c7,0_0_20px_#fef3c7]"
      >
        <NavLink linkHref="/core-skills" linkContent="Core Skills" />
      </span>
      <span
        className="transition-all duration-300 cursor-pointer
           hover:[text-shadow:0_0_5px_#fef3c7,0_0_10px_#fef3c7,0_0_20px_#fef3c7]"
      >
        <NavLink linkHref="/contact-me" linkContent="Contact Me" />
      </span>
    </div>
  );
}
