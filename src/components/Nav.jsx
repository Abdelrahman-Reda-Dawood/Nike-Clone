import { hamburger } from "../assets/icons"
import { headerLogo } from "../assets/images"
import { navLinks } from "../constants"

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
          ></img>
        </a>
        {/* Nav Links */}
        <ul className=" flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="hover:text-coral-red font-montserrat leading-normal text-lg text-slate-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Hamburger menu */}
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt={hamburger}
            width={25}
            height={25}
          ></img>
        </div>
      </nav>
    </header>
  )
}

export default Nav
