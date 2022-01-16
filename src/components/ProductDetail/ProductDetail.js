import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
const ProductDetail = () => {
  const { productKey } = useParams();
  const product = fakeData.find((pd) => pd.key === productKey);
  const { name, img, price, seller } = product;
  console.log(product);

  return (
    <div>
      <h1>Your product details</h1>
      {/* <img src={img} alt="" />
      <h1>product: {name}</h1>
      <h4>price: {price}</h4>
      <h5>seller: {seller}</h5> */}
      <Product showAddToCart={false} product={product}></Product>
    </div>
  );
};

export default ProductDetail;
