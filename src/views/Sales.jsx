import React, {useEffect, useState} from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';
import '../styles/salesStyle.css'
import HeaderComponent from '../components/HeaderComponent'
import NavBarComponent from '../components/NavBarComponent'
import toast, { Toaster } from 'react-hot-toast';

import axios from 'axios';
const URISales = 'http://localhost:8000/sells/';

function Sales() {

  const [sales, setSales] = useState([]);

  // Toast
  const noifyDeleteSale = () => toast.error('Venta eliminada exitosamente!');

  const deleteSale = async (id) => {
    await axios.delete(`${URISales}${id}`)
    // noifyDeleteSale();
  }

  useEffect(() => {
    getSales();
  }, [deleteSale()]);

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
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
      {sales.map(sale => (
          <tr key={sale.id}>
            <td>{sale.id}</td>
            <td>{moment(sale.sellDate).format('DD-MM-YYYY HH:mm:ss')}</td>
            <td>
            <div> <Link to={`/detail/${sale.id}`} state={{ id: sale.id }}> <button className='detailButton'>Detalle de Venta</button> </Link></div>
            </td>
            <td>
              <button className='deleteButton' onClick={() => deleteSale(sale.id)}>  
                <img src='/src/assets/img/borrar.png' alt="deleteButton"/>
              </button>
            </td>
            
          </tr>
        ))}

      </tbody>
    </table>
  </div>
    {/* <Toaster /> */}
  </div>
)
}

export default Sales