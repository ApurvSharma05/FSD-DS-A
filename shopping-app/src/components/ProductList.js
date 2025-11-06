import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Wireless Headphones", price: 1500, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Smart Watch", price: 2500, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Bluetooth Speaker", price: 1200, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Laptop Stand", price: 800, image: "https://via.placeholder.com/150" },
];

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
