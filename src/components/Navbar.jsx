import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-dark bg-dark p-3 text-center text-2 gap-1 flex justify-center items-center font-bold">
      
      <Link to="/" className="text-black m-2">Home</Link>
      <Link to="/about" className="text-black m-2">About</Link>
      <Link to="/contact" className="text-black m-2">Contact</Link>

      
      <div className="relative m-2">
        <span
          onClick={() => setOpen(!open)}
          className="text-black cursor-pointer"
        >
          API
        </span>

        {open && (
          <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-50">
            <ul className="py-2 text-gray-700 text-left">

              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/weather" onClick={() => setOpen(false)}>Weather</Link>
              </li>

              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/recipes" onClick={() => setOpen(false)}>Recipes</Link>
              </li>

              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/movies" onClick={() => setOpen(false)}>Movies</Link>
              </li>

              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/sports" onClick={() => setOpen(false)}>Sports</Link>
              </li>


            </ul>
          </div>
        )}
      </div>

    </nav>
  );
}

export default Navbar;
