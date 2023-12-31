import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);



  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
      setTheme('light');
    }
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">  EMS React And Springboot App</a>
      <button className="navbar-toggler" type="button" onClick={toggle}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={isOpen ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'} id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
        </ul>
        <button onClick={toggleTheme}>Toggle Theme</button>
     <p>Current theme: {theme}</p>
      </div>
    </nav>
  );
};

export default Navbar;
