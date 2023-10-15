import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("nav-menu");

  const navToggle = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-menu-active")
      : setActive("nav-menu");
      setIsOpen(!isOpen);
  };
const closeMenu =()=>{
  setActive('nav-menu');
  setIsOpen(false);
  
}
  
  return (
    <>
      <nav className="nav">
        <Link onClick={closeMenu} to="/" className="nav-title">
          Data & Information
        </Link>
        <ul className={active}>
          <li onClick={closeMenu}>
            <NavLink to="/form" className="nav-items">
              Form
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/users" className="nav-items">
              Users List{" "}
            </NavLink>
          </li>
        </ul>
        <button onClick={navToggle}  className="hamburger">
          {isOpen ? <FaTimes /> : <FaBars />} {/* Use icons */}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
