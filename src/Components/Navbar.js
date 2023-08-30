import React, { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { CiMenuFries } from "react-icons/ci";
import logo from "../Images/Logo.png";
import "../Styles/NavBar.css";

const Navbar = ({
  links = [
    { text: "About", url: "/" },
    { text: "Our Services", url: "#services" },
    { text: "Our Process", url: "#testimonials" },
    { text: "Portfolio", url: "#demo" },
    { text: "Contact Us", url: "#demo" },
  ],
}) => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // change nav color on scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  // close menu on click
  const closeMenu = () => setClick(false);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <LiaTimesSolid size={30} style={{ color: "#ffffff" }} />
          ) : (
            <CiMenuFries size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {links.map((link, index) => (
            <li className="nav-item" key={index}>
              <a href={link.url} onClick={closeMenu}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
