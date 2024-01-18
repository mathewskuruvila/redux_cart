import React from "react";
import products from "../../api/products.json";
import BeforeCart from "./CartButton/BeforeCart";
import AfterCart from "./CartButton/AfterCart";
import "./ProductList.css"

const ProductList = () => {
    return (
        <section className="container">
            {products?.map((product, key) => (
                <div className="product-container" key={key}>
                    <img src={product?.image} alt="dd" />
                    <h3>{product?.title}</h3>
                    <BeforeCart />
                    <AfterCart />
                </div>
            ))}
        </section>
    );
};

export default ProductList;
