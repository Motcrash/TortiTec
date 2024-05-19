import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import '../styles/salesStyle.css'
import HeaderComponent from '../components/HeaderComponent'
import NavBarComponent from '../components/NavBarComponent'

import axios from 'axios';
const URISales = 'http://localhost:8000/sells/';

function Sales() {

  const [sales, setSales] = useState([]);

  useEffect(() => {
    getSales();
  }, []);

  const getSales = async () => {
    const res = await axios.get(URISales);
    setSales(res.data);
  }

  return (
    <div >
    <HeaderComponent />
    <NavBarComponent />  

    <div className='table-sales-container'>
    <h1>Ventas</h1>
    <table>
      <thead>
        <tr>
          <th>Id Venta</th>
          <th>Fecha De Venta</th>
          <th>Detalles</th>
        </tr>
      </thead>
      <tbody>
      {sales.map(sale => (
          <tr key={sale.id}>
            <td>{sale.id}</td>
            <td>{Date(sale.sellDate)}</td>
            <td>
            <div> <Link to={`/detail/${sale.id}`} state={{ id: sale.id }}> <button>Detalle de Venta</button> </Link></div>
            </td>
          </tr>
        ))}

      </tbody>
    </table>
  </div>
    
  </div>
)
}

export default Sales