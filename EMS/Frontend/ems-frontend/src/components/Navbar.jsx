// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);



//   const [theme, setTheme] = useState('light');
//   const toggleTheme = () => {
//     if (theme === 'light') {
      
//       document.documentElement.setAttribute('data-bs-theme', 'dark');
//       setTheme('dark');
//     } else {
//       document.documentElement.setAttribute('data-bs-theme', 'light');
//       setTheme('light');
//     }
//   };


//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">  EMS React And Springboot App</a>
//       <button className="navbar-toggler" type="button" onClick={toggle}>
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className={isOpen ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'} id="navbarNav">
//         <ul className="navbar-nav ml-auto">
//           <li className="nav-item active">
//             <a className="nav-link" href="#">Home</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">About</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Contact Us</a>
//           </li>
//         </ul>
//         <button  className="btn btn-outline-primary ms-auto btn-pill " onClick={toggleTheme}>Toggle Theme</button>
//         <h6 style={{ margin: '0.5em' }}>{theme}</h6>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'

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
   <nav className="navbar navbar-expand-lg bg-body">
     <a className="navbar-brand" href="#">EMS React And Springboot App</a>
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
       <button className="btn btn-outline-primary ms-auto btn-pill" onClick={toggleTheme}>Toggle Theme</button>
       {/* <h6 style={{ margin: '0.5em' }}>{theme}</h6> */}

       {theme === 'light' ? <img src={moon} alt="moon" /> : <img src={sun} alt="sun" />}
     </div>
   </nav>
 );
};

export default Navbar;
