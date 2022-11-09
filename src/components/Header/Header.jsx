import React from 'react'
import { NavLink } from 'react-router-dom'

import "./header.css"
import logo from "../../assets/Logo.png"
import usericon from "../../assets/user-icon.png"

import { Container, Row } from 'react-bootstrap'
const Header = () => {
  return (
    <header className="header">
        <Container>
            <Row>
                {/* div wreapper */}
                <div className="nav__wrapper">
                    <div className="logo">
                        {<img src={logo} alt="logo"  /> }
                        <div>
                            <h1>+Plantas</h1>


                        </div>


                        {/* items */}
                        <div className="navigation">
                            <ul className="menu">
                                <li className="nav__item">
                                    <NavLink to='Home'>Home</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to='Shop'>Productos</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to='Cart'>carrito</NavLink>
                                </li>
                               
                            </ul>
                        </div>
                        {/* fin items */}

                        {/* iconos Favorito, carrito y usuario */}
                        <div className="nav__icons">

                            <span className='fav__icon'><i class="ri-heart-3-line"></i></span>
                            <span className='cart__icon'><i class="ri-shopping-cart-2-line"></i></span>

                            <span > <img src={usericon} alt="icono usuario" /></span>


                        </div>

                        <div className="mobile__menu">
                            <span ><i class="ri-menu-line"></i></span> 
                            {/* aca lo deje min 18:58 */}
                        </div>
                    </div>
                </div> {/* fin div wreapper */}

            </Row>
        </Container>
    </header>
  )
}

export default Header