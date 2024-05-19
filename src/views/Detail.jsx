import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import '../styles/detailStyle.css'
import HeaderComponent from '../components/HeaderComponent'
import NavBarComponent from '../components/NavBarComponent'
import ButtonComponent from '../components/ButtonComponent'

function Detail() {
  // Temporal hasta tener la DataBase, fecha random
  const [products, setProducts] = useState([
    {idVenta: 25, idProducto: 2, fecha: '17-05-2021', name: 'Chiles rellenos', quantity: 2, subtotal: 60},
    {idVenta: 25, idProducto: 5, fecha: '17-05-2021', name: 'Requesón', quantity: 1, subtotal: 25},
    {idVenta: 25, idProducto: 5, fecha: '17-05-2021', name: '1Kg de tortillas', quantity: 1, subtotal: 25},
  ]);

  const [sale, setSale] = useState({idVenta: 25, products: 5, total: 110},);


  return (
    <div>
    <HeaderComponent />
    <NavBarComponent />

    {/*Tabla de Detalle*/}
    <div className='table-detail-container'>
    <h1>Ventas</h1>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
      {products.map(product => (
          <tr key={product.idProducto}>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.subtotal}</td>
          </tr>
        ))}

      </tbody>
    </table>
  </div>

  <div className="total-detail">Total: ${sale.total}</div>
  <div><ButtonComponent 
      text='Ingresar'
      bgColor='#0077cc'
      txtColor='#fff'
      borderRadius={15}
      height={35}
      width={100}
      margin={40}
      
  /></div>
    </div>
  )
}


export default Detail
