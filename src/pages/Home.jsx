import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/helmet/helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/banner.png";
import "../styles/home.css";

import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import trening from "../assets/data/trending";

import Clock from "../components/UI/Clock";

import TimerImg from "../assets/plantas-indor/Potus-interior.png";

const Home = () => {
  const [data, setData] = useState(trening);

  useEffect(() => {
    const filterTrendProducts = trening.filter(
      (item) => item.category === "trend"
    );

    setData(filterTrendProducts); //filtoTendencias
  }, []);

  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        {" "}
        {/* seccion hero* */}
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
                <motion.button
                  whileHover={{ scale: 1.12 }}
                  className="Buy__btn"
                >
                  {" "}
                  <Link to="/shop">Comprar Ahora</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      {/* servicios */}
      <section className="trending__products">
        {" "}
        {/* seccion tendencia */}
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Productos en Tendencia</h2>
            </Col>
            <ProductList data={data} />
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="Clock__top-content">
                <h4 className="text-white fs-6 mb-2">OFERTA DEL MES</h4>
                <h3 className="text-white fs-5 mb-2">potus variegado</h3>
              </div>
              <Clock />

              <motion.button whileTap={{ scale: 1.12 }} className="Buy__btn store__btn ">
                <Link to="/shop"> Ver en la tienda</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" className="text-end">
              <img src={TimerImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
