import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";

import error from "../assets/404-gif.gif";
import { motion } from "framer-motion";
import { cartActions } from "../redux/Slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount =useSelector(state => state.cart.totalAmount)

  return (
    <Helmet title="Carrito">
      <CommonSection title="Carrito" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <Container className="error_container">
                  {" "}
                  <img src={error} alt="" className="error " />{" "}
                  <h2 className="fs-4 text-center">
                    No se encontraron productos
                  </h2>{" "}
                </Container>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Producto</th>
                      <th>Cantidad</th>
                      <th >Borrar</th>
                    </tr>
                  </thead>

                  <tbody>
                    
                   {  
                   cartItems.map((item,index)=>(
                    <Tr item={item} key={index}/>
                    ))

                   }
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">Subtotal </h6>
                <span className="fs-4 fw-bold">${totalAmount}</span>
              </div>
              <p className="fs-6 mt-2">Precio sin impuestos y envio</p>
              <div>
                <button className="Buy__btn w-100"><Link to='/Shop' > Continuar  comprando</Link></button>

                <button className="Buy__btn w-100"><Link to='/Checkout' > Comprar</Link></button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};


const Tr = ({item}) => { 


  const dispatch = useDispatch()

  const deleteProduct =() =>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return  <tr >
  <td>
   
    <img src={item.imgUrl} alt="" />
  </td>
  <td> {item.nombre}</td>
  <td>${item.price}</td>
  <td>{item.quantity}</td>
  <td>
    <motion.i  whileTap={{scale :1.2}}  onClick={deleteProduct} class="ri-delete-bin-line"></motion.i>
  </td>
</tr>
}

export default Cart;
