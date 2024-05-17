import React, {useEffect, useState} from 'react'
import '../styles/headerStyle.css'
import '../styles/mainStyle.css'
import HeaderComponent from '../components/HeaderComponent'
import NavBarComponent from '../components/NavBarComponent'
import ProductList from '../components/ProductListComponent'
import SalesTableComponent from '../components/SalesTableComponent'


export default function Main() {
  
  useEffect(() => {
    SalesTableComponent
  }, [ProductList])

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

   // Calcular el total de la venta
   const total = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);

  return (
    <>
    <HeaderComponent />
    <NavBarComponent />
    <div className='main-content'>
      <div className='product-container'>
      <h1>Lista de Productos</h1>
      <div className='flex-product-container'>

        <div className="product-list" >
          {products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{'$'+product.price+".00"}</p>
                <p>Cantidad: {product.quantity}</p>
                <button onClick={() => handleIncrease(product)}>Aumentar</button>
                <button onClick={() => handleDecrease(product)}>Quitar</button>
              </div>
          ))}
        </div>
      </div>
    </div>

    {/*Tabla*/}
    <div className='table-container'>
          <h1>Tabla</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
        {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{'$'+product.price+".00"}</td>
              <td>{product.quantity}</td>
              <td>{'$'+(product.price * product.quantity)+".00"}</td>
            </tr>
          ))}

        </tbody>
      </table>
      <div className="total">Total: ${total.toFixed(2)}</div>
    </div>
    </div>
    </>
    
  )
}
