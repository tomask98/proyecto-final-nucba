import React from 'react'
import { Col, Container, Form, FormGroup, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/checkout.css'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

const Checkout = () => {

  const totalqty= useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);




  return <Helmet title='Checkout'>

    <CommonSection title='Checkout'/>
    <section>
    <Container>
      <Row>
        <Col lg='8'>
          <h6 className='mb-4 fw-bold'>Informacion del comprador</h6>
          <Form className='ticket__form'>
            <FormGroup className='form__group'>
              <input type="text" placeholder='Ingrese su nombre'/>
            </FormGroup>
            <FormGroup className='form__group'>
              <input type="email" placeholder='Ingrese su email'/>
            </FormGroup>
            <FormGroup className='form__group'>
              <input type="number" placeholder='Ingrese su telefono'/>
            </FormGroup>
            <FormGroup className='form__group'>
              <input type="text" placeholder='Direccion'/>
            </FormGroup>
            <FormGroup className='form__group'>
              <input type="text" placeholder='Ciudad'/>
            </FormGroup>
            <FormGroup className='form__group'>
              <input type="text" placeholder='Codigo postal'/>
            </FormGroup>
           
          </Form>
        </Col>
        <Col lg='4'>
          <div className='checkout__cart'>
            <h6>Cantidad de productos:  <span>{totalqty}</span></h6>
            <h6>subtotal: <span>${totalAmount}</span></h6>
            <h6><span>Costo de envio: <br/> Envio gratuito</span> $0</h6>
            
            <h4>Total: <span>${totalAmount}</span></h4>
          <motion.button  whileTap={{scale:0.9}} className="Buy__btn auth__btn w-100">Comprar</motion.button>
          </div>
        </Col>
      </Row>
    </Container>

    </section>
  </Helmet>
}

export default Checkout