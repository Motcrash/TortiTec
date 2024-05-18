import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import '../styles/stockStyle.css'
import HeaderComponent from '../components/HeaderComponent'
import NavBarComponent from '../components/NavBarComponent'

function Stock() {
    const [products, setProducts] = useState([
        { id: 1, name: '1Kg de tortillas', image: '/src/assets/img/tortillas.jpg', price: 25.00, quantity: 0},
        { id: 2, name: '0.5Kg de tortillas', image: '/src/assets/img/tortillas-2.jpg', price: 15.00, quantity: 0},
        { id: 3, name: 'Paquete de frijoles', image: '/src/assets/img/frijoles.jpg', price: 25.00, quantity: 0},
        { id: 4, name: '0.5Kg de chicharrón', image: '/src/assets/img/chicharron.jpg', price: 130.00, quantity: 0},
        { id: 5, name: '250gr de chicharrón', image: '/src/assets/img/chicharron-2.jpg', price: 80.00, quantity: 0},
        { id: 6, name: 'Conito de cajeta', image: '/src/assets/img/cajeta.jpg', price: 20.00, quantity: 0},
        { id: 8, name: 'Chiles rellenos', image: '/src/assets/img/chiles.jpg', price: 30.00, quantity: 0},
        { id: 9, name: 'Requesón', image: '/src/assets/img/requeson.jpg', price: 25.00, quantity: 0},
        { id: 10, name: 'Chile colorado', image: '/src/assets/img/chileColorado.jpg', price: 28.00, quantity: 0}, 
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
    <div>
    <HeaderComponent />
    <NavBarComponent /> 

        {/*Tabla*/}
        <div className='table-stock-container'>
          <h1>Inventario</h1>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Subtotal</th>
            <th>Cantidad</th>
            <th>Control de Inventario</th>
          </tr>
        </thead>
        <tbody>
        {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{'$'+product.price+".00"}</td>
              <td>{product.quantity}</td>
              <td>
              <div className='buttons-stock'>
              <button onClick={() => handleIncrease(product)}>+</button>
              <button onClick={() => handleDecrease(product)}>-</button>
              </div>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
    </div>
       
  )
}

export default Stock