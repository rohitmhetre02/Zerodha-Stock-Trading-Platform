import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-white">
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="/assets/logo.svg" alt="Logo" style={{ width: "120px" }} />
        </Link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

       <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {[
              { path: "/about", label: "About" },
              { path: "/products", label: "Products" },
              { path: "/pricing", label: "Pricing" },
              { path: "/support", label: "Support" },
              { path: "/signup", label: "Signup" },
              { path: "/login", label: "Login" },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link active" to={item.path}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
