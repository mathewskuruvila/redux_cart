import React from "react";
import "./CartButtons.css";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../../redux/cart";
const BeforeCart = ({addToCart}) => {

    const disptach = useDispatch();
    return (
        <div className="before-cart">
            <button className="add-cart-button" onClick={()=>disptach(addtoCart)}>Add to cart</button>
        </div>
    );
};

export default BeforeCart;
