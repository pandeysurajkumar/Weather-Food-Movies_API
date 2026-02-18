import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark p-3 text-center text-2 gap-1">
      <Link to="/" className="text-black m-2">Home</Link>
      <Link to="/about" className="text-black m-2">About</Link>
      <Link to="/contact" className="text-black m-2">Contact</Link>
      <Link to="/weather" className="text-black m-2">Weather</Link>
      <Link to="/movies" className="text-black m-2">Movies</Link>
      <Link to="/recipes" className="text-black m-2">Recipes</Link>
    </nav>
  );
}

export default Navbar;
