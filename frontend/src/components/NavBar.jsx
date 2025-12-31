import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5">
      <h1 className="font-display text-2xl">Mens Fashion</h1>
      <nav className="flex items-center space-x-6">
        <NavLink
          to="/"
          className="relative group font-paragraph text-black"
        >
          Home
          <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black group-hover:w-full transition-all duration-500"></span>
        </NavLink>

        <NavLink
          to="/collection"
          className="relative group font-paragraph text-black"
        >
          Collection
          <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black group-hover:w-full transition-all duration-500"></span>
        </NavLink>

        <NavLink
          to="/about"
          className="relative group font-paragraph text-black"
        >
          About
          <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black group-hover:w-full transition-all duration-500"></span>
        </NavLink>

        <NavLink
          to="/contact"
          className="relative group font-paragraph text-black"
        >
          Contact
          <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black group-hover:w-full transition-all duration-500"></span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
