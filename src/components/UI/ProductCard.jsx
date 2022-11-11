import { motion } from "framer-motion";
import React from "react";

import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/Slices/cartSlice";

function ProductCard({ item }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.imgUrl,
      })
    );
    alert('producto agregado al carrito')
  };

  return (
    <Col lg="3">
      <div className="product__item">
        <motion.div whileHover={{ scale: 1.1 }} className="product__img">
          <img src={item.imgUrl} alt="" />
        </motion.div>
        <div className="P-2 product__info">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.name}</Link>
          </h3>
          <span>En tendencia</span>
        </div>
        <div className="product__card-bottom d-flex alig-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 1.1 }} onClick={addToCart}>
            <i class="ri-add-line" />
          </motion.span>
        </div>
      </div>
    </Col>
  );
}

export default ProductCard;
