import React from "react";
import { NavLink } from "react-router-dom";

import "./header.css";


import { motion } from "framer-motion";

import logo from "../../assets/Logo.png";
import usericon from "../../assets/user-icon.png";

import { Container, Row } from "reactstrap";

const nav__link = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Productos",
  },
  {
    path: "cart",
    display: "carrito",
  },
];
const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          {/* div wreapper */}
          <div className="nav__wrapper">
            <div className="logo">
              {<img src={logo} alt="logo" />}
              <div>
                <h1>+Plantas</h1>
              </div>
            </div>

            {/* items */}
            <div className="navigation">
              <ul className="menu">
                {nav__link.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* fin items */}

            {/* iconos Favorito, carrito y usuario */}
            <div className="nav__icons">
              <span className="fav__icon">
                <i class="ri-heart-3-line"></i>
                <span className="badges">1</span>
              </span>
              <span className="cart__icon">
                <i class="ri-shopping-cart-2-line"></i>
                <span className="badges">1</span>
              </span>

              <span>
                {" "}
                <motion.img whileTap={{scale:1.2}} src={usericon} alt="icono usuario" />
              </span>
            </div>

            <div className="mobile__menu">
              <span>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>{" "}
          {/* fin div wreapper */}
        </Row>
      </Container>
    </header>
  );
};

export default Header;
