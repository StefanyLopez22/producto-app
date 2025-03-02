import React, { useState } from "react";

// Componente para mostrar un producto individual
const Product = ({ name, price }) => {
return (
  <div className="product">
    <h3>{name}</h3>
    <p>Precio: ${price}</p>
  </div>
);
};

// Componente principal para mostrar la lista de productos
const ProductList = () => {
  const [products] = useState([
    { id: 1, name: "Producto A", price: 10.99 },
    { id: 2, name: "Producto B", price: 20.99 },
    { id: 3, name: "Producto C", price: 30.99 },
    { id: 4, name: "Producto D", price: 40.99 },
  ]);

  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
      {products.map((product) => (
        <Product key={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
};

export default ProductList;
