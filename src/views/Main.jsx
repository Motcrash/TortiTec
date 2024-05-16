import React, {useState} from 'react'
import '../styles/headerStyle.css'
import '../styles/mainStyle.css'
import HeaderComponent from '../components/HeaderComponent'
import NavBarComponent from '../components/NavBarComponent'
import ProductList from '../components/ProductListComponent'
import SalesTableComponent from '../components/SalesTableComponent'


export default function Main() {
  const [products, setProducts] = useState([
    { id: 1, name: '1Kg de tortillas', image: '/src/assets/img/tortillas.jpg', price: "$25.00", quantity: 0 },
    { id: 1, name: '0.5Kg de tortillas', image: '/src/assets/img/tortillas.jpg', price: "$15.00", quantity: 0 },
    { id: 3, name: 'Paquete de frijoles', image: '/src/assets/img/tortillas.jpg', price: "$25.00", quantity: 0 },
    { id: 4, name: '0.5Kg de chicharrón', image: '/src/assets/img/tortillas.jpg', price: "$130.00", quantity: 0 },
    { id: 5, name: '250gr de chicharrón', image: '/src/assets/img/tortillas.jpg', price: "$80.00", quantity: 0 },
    { id: 6, name: 'Conito de cajeta', image: '/src/assets/img/tortillas.jpg', price: "$20.00", quantity: 0 },
    { id: 8, name: 'Chiles rellenos', image: '/src/assets/img/tortillas.jpg', price: "$30.00", quantity: 0 },
    { id: 9, name: 'Requesón', image: '/src/assets/img/tortillas.jpg', price: "$25.00", quantity: 0 },
    { id: 10, name: 'Chile colorado', image: '/src/assets/img/tortillas.jpg', price: "$28.00", quantity: 0 }, 
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
    <HeaderComponent />
  
    <div className='main-content'>
      <div className='product-container'>
      <h1>Lista de Productos</h1>
      <div className='flex-product-container'>
      <ProductList
        products={products}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      </div>
    </div>
    {/*Tabla*/}
    <div className='table-container'>
    <SalesTableComponent />
    </div>
    </div>
    </>
    
  )
}
