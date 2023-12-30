import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">  EMS</a>
      <button className="navbar-toggler" type="button" onClick={toggle}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={isOpen ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'} id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;