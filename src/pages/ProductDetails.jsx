import React ,{useEffect}from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import products from "../assets/data/products"
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/CommonSection"

import { motion } from 'framer-motion'
import "../styles/Product_details.css"
import ProductList from "../components/UI/ProductList";
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/Slices/cartSlice'
import { toast } from 'react-toastify'





const ProductDetails = () => {

  const {id} = useParams()
  const product = products.find(item => item.id === id)

  const {imgUrl, name, price, shortDescr,category}= product
  const reletedProducts = products.filter(item => item.category === category)
  const dispatch = useDispatch();

  const addToCart = () =>{
    dispatch(cartActions.addItem({
      id,
      image:imgUrl,
      name,
      price,
    }))
    toast.success('Producto agragado al carrito')
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[product])
  

  return (
    <Helmet title={name}>
      <CommonSection title={name}/>
        <section className='pt-3'>
          <Container>
            <Row>
              <Col lg="3" >
                <motion.img whileHover={{scale:1.1}} src={imgUrl} alt=""  className='img'/>
              </Col>
              <Col lg="6">
                <div className="product__details">
                  <h2>{name}</h2>
                  <span className='product__price'>${price}</span>
                  <p className='mt-3'>{shortDescr}</p>


                  <motion.button whileTap={{scale:1.1}} className="Buy__btn" onClick={addToCart}>Añadir al carrito</motion.button>
                </div>
              </Col>
              <Col lg='12' className='mt-5'>
                <h2 className="releted_title"> Te puede llegar a gustar</h2>
              </Col>
               <ProductList data={reletedProducts}/>
            </Row>
          </Container>
        </section>
      



    </Helmet>
  )
}

export default ProductDetails
