import React from 'react';


const Product = ({ product, onIncrease, onDecrease }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>Cantidad: {product.quantity}</p>
      <p>Stock: {product.stock}</p>
      <button onClick={() => onIncrease(product)}>Aumentar</button>
      <button onClick={() => onDecrease(product)}>Quitar</button>
    </div>
  );
};

export default Product;
