import React from 'react';
import Product from './ProductComponent';


const ProductList = ({ products, onIncrease, onDecrease }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product
          key={index}
          product={product}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      ))}
    </div>
  );
};

export default ProductList;
