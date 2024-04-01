import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

import "./MainNavigation.scss";
// import genericLogo from "../assets/generic_logo.png";

// Not sure why I cant do it this way
import images from "../assets/index";

const MainNavigation = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header container">
      {/* <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div> */}

      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={images.genericLogo} alt="logo" />
          </Link>
          {/* <img src={genericLogo} alt="logo" /> */}
          {/* <NavLink to="/">Faraz Chand</NavLink> */}
        </div>

        {/* Desktop Nav */}
        <div className="desktop-nav">
          <ul className="navbar-list">
            {["Posts", "About", "Contact"].map((item) => (
              <li className="navbar-item" key={`link-${item}`}>
                <div />

                <NavLink
                  to={`/${item}`}
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Nav */}
        <div className="mobile-menu">
          {!toggle && <HiMenuAlt4 onClick={() => setToggle(true)} />}

          {toggle && (
            <motion.div
              className="nav--motion-div"
              whileInView={{ x: [100, 0] }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {["Posts", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <NavLink to={`/${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
      <button className="nav-button">Book Now</button>
    </header>
  );
};

export default MainNavigation;
