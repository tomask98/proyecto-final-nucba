import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/helmet/helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/banner.png";
import "../styles/home.css"
const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero__subtitle"> Productos en Tendencia {year}</p>
                <h2>Tenemos la mejor selección de plantas de la Argentina</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                  laborum corporis ut perferendis provident aliquid fugit earum
                  eveniet temporibus modi?
                </p>
                <motion.button whileHover={{scale:1.12}} className="Buy__btn"> <Link to='/shop'>Comprar Ahora</Link></motion.button>
              </div>
            </Col>

            <Col lg='6' md='6'> 
            <div className="hero__img" >
              <img src={heroImg} alt="" /></div></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
