import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-4">

      <div className="ml-auto p-4">
        <Link to="/contact">
          <button className="btn btn-success">Agregar nuevo contacto</button>
        </Link>
      </div>
    </nav>
  );
};
