import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import '../styles/detailStyle.css'
import HeaderComponent from '../components/HeaderComponent'
import NavBarComponent from '../components/NavBarComponent'

import axios from 'axios';
import LoaderComponent from '../components/LoaderComponent';
const URISales = 'http://localhost:8000/sells/';
const URIProducts = 'http://localhost:8000/products/';

function Detail() {
  
  let { state } = useLocation();
  const {id} = state;
  const [loading, setLoading] = useState(true);
  const [sale, setSale] = useState([]);
  const [products, setProduct] = useState([]);
  const {details} = sale;
  
  useEffect(() => {
    setTimeout(() => {
      getProduct();
      getSale();
      setLoading(false)
    }, 3000);
  }, []);

  const renderDetails = (details) => {
    if (details) {
      const filteredDetails = details.filter(detail => detail.quantity > 0)
      return (filteredDetails.map(detail => (
        <tr key={detail.id}> 
          <td>{getProductName(detail.id)}</td>
          <td>{detail.quantity}</td>
          <td>{getPrice(detail.id)}</td>
         <td>{getSubtotal(detail.id, detail.quantity)}</td>
        </tr>
      )))
    } 
  }
  
  const getProductName =  (id) => {
      return products.find(product => product.id === id).title;
  }
  const getPrice = (id) => {
    return products.find(product => product.id === id).price;
  }
  const getSubtotal = (id, quantity) => {
    return (products.find(product => product.id === id).price)* quantity;
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
      {loading ? (<LoaderComponent/>)
      : (
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
                <th>precio</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
            {renderDetails(details)}

            </tbody>
          </table>
        </div>

        <div className="total-detail">Total: ${sale.total}</div>
        </div>  
      )  
    
    }
    </div>
  )
}


export default Detail
