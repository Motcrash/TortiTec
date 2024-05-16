import React, {useState} from 'react'
import '../styles/headerStyle.css'
import '../styles/mainStyle.css'
import HeaderComponent from '../components/HeaderComponent'
import ProductList from '../components/ProductListComponent'


export default function Main() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Producto 1', image: '/src/assets/img/tortillas.jpg', quantity: 0 },
    { id: 2, name: 'Producto 2', image: '/src/assets/img/tortillas.jpg', quantity: 0 },
    // Agrega más productos según sea necesario
  ]);

  const handleIncrease = (product) => {
    const updatedProducts = products.map((p) =>
      p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
    );
    setProducts(updatedProducts);
  };

  const handleDecrease = (product) => {
    const updatedProducts = products.map((p) =>
      p.id === product.id && p.quantity > 0
        ? { ...p, quantity: p.quantity - 1 }
        : p
    );
    setProducts(updatedProducts);
  };

  return (
    <>
    <HeaderComponent/>
    <div className='main-content'>
      <div className='product-container'>
      <h1>Lista de Productos</h1>
      <ProductList
        products={products}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </div>
    <div className='table-container'>
    <h1>Tabla</h1>
    </div>
    </div>
    </>
    
  )
}
