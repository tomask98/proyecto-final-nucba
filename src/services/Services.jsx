import { motion } from 'framer-motion'
import React from 'react'
import { Container, Row,Col } from 'reactstrap'
import './services.css'



const Services = () => {
  return <section className="services">
    <Container className='servicesCont'>
        <Row className='d-flex  justify-content-between'>
            <Col lg='4' md='3'>
                <motion.div whileHover={{scale:1.05}} className="service__item">
                    <span > <i class="ri-truck-line"></i></span>
                    <div>
                        <h3>Envios sin cargo</h3>
                        <p>A cordoba y alrededores </p>
                    </div>
                </motion.div>
            </Col>
            <Col lg='4' md='3'>
                <motion.div whileHover={{scale:1.05}}  className="service__item2">
                    <span > <i class="ri-secure-payment-line"></i></span>
                    <div>
                        <h3>Pagos seguros</h3>
                        <p>Tus datos siempre protegidos </p>
                    </div>
                </motion.div>
            </Col>
            <Col lg='4' md='3'>
                 <a className='service__link' href="https://api.whatsapp.com/send?phone=">
                 <motion.div whileHover={{scale:1.05}} className="service__item3">
                    <span >  <i class="ri-whatsapp-line"></i> </span>
                    <div>
                        <h3>Consultanos por WHATSAPP</h3>
                        <p>Estamos para asesorarte</p>
                    </div>
                </motion.div>
                    </a>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Services