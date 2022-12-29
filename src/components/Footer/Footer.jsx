import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <img src={logo} alt="" />
              <div>
                <h1>+Plantas</h1>
              </div>
            </div>
            <p className="footer__text  mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
              iure odit, ratione architecto ab minima voluptates debitis
              temporibus accusamus facilis?
            </p>
          </Col>
          <Col lg="5 text-black">
            <div className="footer_quick-links">
              <h4 className="quick__links-title">Contacto</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0 ">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <a href="https://goo.gl/maps/cygjs5gJdyvAXC218"><p>Deodoro Roca, Córdoba</p></a>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 ">
                  <span>
                  <i class="ri-phone-line"></i>
                  </span>
                   <a href="tel:+ 035900001"><p > 0351900001</p></a>
                </ListGroupItem>
               
              </ListGroup>
            </div>
          </Col>

          <Col lg="3">
          <div className="footer_quick-links">
              <h4 className="quick__links-title">Horario de atención</h4>
          <ListGroup>
          <ListGroupItem className="ps-0 border-0 ">
                  <span>
                  <i class="ri-time-line"></i>
                  </span>
                  
                  <p>
                    Lunes-Viernes :  08:00-20:00 hs
                  </p>
                  
                  <p>
                    Sabados :  08:00-15:00 hs
                  </p>
                  
                </ListGroupItem>
                </ListGroup>
                </div>
          </Col>
          <Col lg='12'>
            <p className="footer__Git">Made with ❤️ by  <a href="https://github.com/tomask98"> Tomas Köhler</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
