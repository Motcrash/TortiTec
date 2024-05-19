import React, {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../styles/detailStyle.css'
import HeaderComponent from '../components/HeaderComponent'
import NavBarComponent from '../components/NavBarComponent'
import ButtonComponent from '../components/ButtonComponent'

import axios from 'axios';
const URISales = 'http://localhost:8000/sells/';
const URIProducts = 'http://localhost:8000/products/';

function Detail() {
  
  let { state } = useLocation();
  const {id} = state;
  const [sale, setSale] = useState([]);
  const [products, setProduct] = useState([]);
  const {details} = sale;

  // details.map(detail => {
  //   console.log("id: "+detail.id+" and quantity: "+detail.quantity);
  // })
  
  useEffect(() => {
    getSale();
    getProduct();
  }, []);

  const renderDetails = (details) => {
    if (details) {
      const filteredDetails = details.filter(detail => detail.quantity > 0)
      return (filteredDetails.map(detail => (
        <tr key={detail.id}> 
          <td>{getProductName(detail.id)}</td>
          <td>{detail.quantity}</td>
         <td>{0}</td>
        </tr>
      )))
    } 
  }
  
  const getProductName = (id) => {
    return products.find(product => product.id === id).title;
  }
  
  const getSale = async () => {
    const res = await axios.get(`${URISales}${id}`);
    setSale(res.data);
  }
  const getProduct = async () => {
    const res = await axios.get(`${URIProducts}`);
    setProduct(res.data);
  }

  return (
    <div>
    <HeaderComponent />
    <NavBarComponent />

    {/*Tabla de Detalle*/}
    <div className='table-detail-container'>
    <h1>Venta #{id}</h1>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
      {renderDetails(details)}

      </tbody>
    </table>
  </div>

  <div className="total-detail">Total: ${0}</div>
    </div>
  )
}


export default Detail
