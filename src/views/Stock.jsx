import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent'
import NavBarComponent from '../components/NavBarComponent'

function Stock() {

// Temporal hasta tener la DataBase, fecha random
  const [products, setProducts] = useState([
    { id: 1, fecha: '17-05-2021', detalle: 'ye' },
    { id: 2, fecha: '17-05-2021', detalle: 'ye' },
    // { id: 3, name: 'Paquete de frijoles', image: '/src/assets/img/frijoles.jpg', price: 25.00, quantity: 0},
    // { id: 4, name: '0.5Kg de chicharrón', image: '/src/assets/img/chicharron.jpg', price: 130.00, quantity: 0},
  ]);



  return (
    <div>
      <HeaderComponent />
      <NavBarComponent />  

    {/* Tabla */}
      <div className='table-container'>
          <h1>Tabla</h1>
      <table>
        <thead>
          <tr>
            <th>Id Venta</th>
            <th>Fecha De Venta</th>
            <th> 
              <div> <Link to='/main'> <button>Detalles</button> </Link></div>
            </th>
          </tr>
        </thead>
        <tbody>
        {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.fecha}</td>
              <td>{product.detalle}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
      
    </div>
  )
}

export default Stock