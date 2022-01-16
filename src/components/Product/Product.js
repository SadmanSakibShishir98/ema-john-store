import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { name, img, seller, price, stock, key } = props.product;

  return (
    <div className="product">
      <div>
        <Link to={"/product/" + key}>
          <img src={img} alt="" />
        </Link>
      </div>
      <div>
        <h4 className="product-name">
          <Link to={"/product/" + key}>{name}</Link>
        </h4>
        <p>
          <small>by: {seller}</small>
        </p>
        <p>Price: {price}</p>
        <p>
          <small>only {stock} left in stock - order soon</small>
        </p>
        {props.showAddToCart && (
          <button
            onClick={() => props.handleAddToCart(props.product)}
            className="btn-regular"
          >
            <FontAwesomeIcon icon={faShoppingCart} /> add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
