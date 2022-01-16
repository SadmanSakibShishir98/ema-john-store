import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import gif from "../../images/giphy.gif";

import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setCart([]);
    setOrderPlaced(true);
    processOrder();
    alert("Order Placed!");
  };

  const removeProduct = (productKey) => {
    console.log("remove button clicked");
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    console.log(productKeys);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    console.log(cartProducts);
    setCart(cartProducts);
  }, []);

  let orderComplete;
  if (orderPlaced) {
    orderComplete = (
      <img
        style={{
          width: "100%",
          height: "90%",
          marginTop: "5px",
          marginRight: "15px",
        }}
        src={gif}
        alt=""
      ></img>
    );
  }

  return (
    <div className="twin-container">
      <div className="product-container">
        {cart.map((pd) => (
          <ReviewItem
            products={pd}
            removeProduct={removeProduct}
            key={pd.key}
          ></ReviewItem>
        ))}
        {orderComplete}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="btn-regular">
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
