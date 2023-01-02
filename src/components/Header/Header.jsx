import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./header.css";

import { motion } from "framer-motion";

import logo from "../../assets/Logo.png";
import usericon from "../../assets/user-icon.png";

import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { Link } from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

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
    display: "Carrito",
  },
];
const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  
  
  const menuRef = useRef(null);
  const profileActionRef = useRef(null);
  
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const stickyHeaderFun = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };


const logout = () =>{
  signOut(auth).then(()=>{
    toast.success('Sesion cerrada')
    navigate('/home')
  }).catch(err=>{
    toast.error(err.message)
  })
}


  useEffect(() => {
    stickyHeaderFun();

    return () => window.removeEventListener("scroll", stickyHeaderFun);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const toggleProfileAction = () =>  profileActionRef.current.classList.toggle("show__profileActions");

  const navigateTOcart = () => {
    navigate("/cart");
  };

  return (
    <header className="header" ref={headerRef}>
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
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
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
              <span className="cart__icon" onClick={navigateTOcart}>
                <i class="ri-shopping-cart-2-line"></i>
                <span className="badges">{totalQuantity}</span>
              </span>

              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.3 }}
                  src={currentUser ? currentUser.photoURL : usericon}
                  alt="icono usuario"
                  
                  onClick={toggleProfileAction}
                />

                <div
                  className="profile__actions"
                  ref={profileActionRef}
                  onClick={toggleProfileAction}
                  
                >
                  {currentUser ? (
                    <span onClick={logout}>Cerrar sesión</span>
                  ) : (
                    <div className="actions d-flex align-items-center justify-content-center flex-column ">
                      <Link to="/Login">Iniciar sesión</Link>
                      <Link to="/Singup" >Registrate</Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="mobile__menu">
                <motion.span whileTap={{ scale: 1.3 }} onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </motion.span>
              </div>
            </div>
          </div>
          {/* fin div wreapper */}
        </Row>
      </Container>
    </header>
  );
};

export default Header;
