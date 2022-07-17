import React, { useState, useEffect } from 'react';
import axios from 'axios';

 function Component3() {
    const [products, setProducts] = useState([]);
useEffect(() => {
  fetchProducts();
}, []);
const fetchProducts = () => {
  axios
    .get('https://shoppingapiacme.herokuapp.com/shopping')
    .then((res) => {
      console.log(res);
      setProducts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
return (
    <div>
      <h1 style={{textAlign: "center"}}>Featured Products</h1>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "2em" }}>
        {products.map((product) => (
          <div style={{textAlign: "center", padding: "10px", width: "300px", borderRadius: "5px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
            <img style={{ height: "100px", width: "auto"}} src={product.image} alt='' />
            <h3>{product.brand}</h3>
            <p>{product.item}</p>
          </div>
        ))}
      </div>
    </div>
);
}
export default Component3;