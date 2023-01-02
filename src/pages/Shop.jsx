import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import "../styles/shop.css";

import products from "../assets/data/products";
import ProductList from "../components/UI/ProductList"

import error from "../assets/404-gif.gif";






const Shop = () => {
  const [productsData, setProductData] = useState(products);

  const handleFilter = (e) => {//filtro para plantas interior
    const filterValue = e.target.value;
    if (filterValue === "interior") {
      const filteredProducts = products.filter(
        (item) => item.category === "interior"
      );
      setProductData(filteredProducts);
    }
    if (filterValue === "exterior") {  //filtro para plantas exterior
      const filteredProducts = products.filter(
        (item) => item.category === "exterior"
      );
      setProductData(filteredProducts);
    }
    
  };

  const handleSearch = e =>{
    const searchTerm = e.target.value 

    const searchedProducts = products.filter(item => item.name.toLocaleLowerCase().includes(searchTerm.toLowerCase()))

    setProductData(searchedProducts)
 
  }
  return (
    <Helmet title="Productos">
      <CommonSection title="Productos" />

      <section >
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Categorias</option>
                  <option value="interior">Interior</option>
                  <option value="exterior">Exterior</option>
                </select>
              </div>
            </Col>
            
            <Col lg="6" md="12">
              <div className="search__box">
                <input type="text" placeholder="Buscar"  onChange={handleSearch}/>
                <span>
                  <i class="ri-search-2-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row >
            {
              productsData.length === 0?<Container className="error_container"> <img src={error} alt="" className="error" /> <h2 >¡UPS! No pudimos encontrar el producto</h2></Container>
              : <ProductList data={productsData}/>
              
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
