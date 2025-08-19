'use client';

import Link from 'next/link';
import {useState, useEffect} from 'react';
// Make sure to define the styles in your CSS

const Navbar = () => {

  const navItems = [
   {label: 'Home', href: '#'},
   {label: 'Tours', href: '#tours'},
   {label: 'About Us', href: '#stories'},
   {label: 'Gallery', href: '#gallery'},
   {label: 'Contact', href: '#contact'},
  ];
  const [isOpen, setIsOpen] = useState(false);
 const colors = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee'];

 useEffect(() => {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((item, index) => {
   item.style.backgroundColor = colors[index % colors.length];
  });
 }, []);

 return (
  <div className={`${isOpen ? 'change' : ''}`}>
   {/* Open Icon */}
   <div
    className="open-navbar-icon navbar-icon center"
    onClick={() => setIsOpen(true)}
   >
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
   </div>

   {/* Navbar */}
   <div className="navbar-wrapper">
    <nav className="navbar">
     {/* Close Icon */}
     <div
      className="close-navbar-icon navbar-icon center"
      onClick={() => setIsOpen(false)}
     >
      <div className="line line-1"></div>
      <div className="line line-2"></div>
     </div>

     {/* Links */}
     <div className="nav-list ">
      {navItems.map((item, index) => (
       <Link key={index} href={item.href} className="nav-link center">
        {item.label}
       </Link>
      ))}
     </div>
    </nav>
   </div>
  </div>
 );
};

export default Navbar;
