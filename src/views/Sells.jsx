import React, { useContext } from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';
import '../styles/sellsStyle.css'
import HeaderComponent from '../components/HeaderComponent'
import NavBarComponent from '../components/NavBarComponent'
import toast, { Toaster } from 'react-hot-toast';

import axios from 'axios';
import LoaderComponent from '../components/LoaderComponent';
import { SellsContext } from '../context/SellsContext';

function Sells() {

  const {sells, setSells, isLoading, URISells} = useContext( SellsContext );

  // Toast
  const notifyDeleteSell = () => toast.success('Venta eliminada exitosamente!', { id: 'deleteToast', duration: 1000});
  const notifySellError = () => toast.success('Error al eliminar la venta', { id: 'sellError', duration: 1000});

  const deleteSell = async (id) => {
    try {
      await axios.delete(`${URISells}${id}`)
      const updatedSells = sells.filter(sell => sell.id !== id);
      setSells(updatedSells);
      notifyDeleteSell();
    } catch (error) {
      notifySellError();
    }
  }


  return (
    <div>
      {(isLoading) ? <LoaderComponent/>
      : (
          <div >
            <HeaderComponent />
            <NavBarComponent />  

            <div className='table-sells-container'>
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
              {sells.map(sale => (
                  <tr key={sale.id}>
                    <td>{sale.id}</td>
                    <td>{moment(sale.sellDate).format('DD-MM-YYYY HH:mm:ss')}</td>
                    <td>
                    <div> <Link to={`/detail/${sale.id}`} state={{ id: sale.id }}> <button className='detailButton'>Detalle de Venta</button> </Link></div>
                    </td>
                    <td>
                      <button className='deleteButton' onClick={() => deleteSell(sale.id)}>  
                        <img src='/src/assets/img/borrar.png' alt="deleteButton"/>
                      </button>
                    </td>
                    
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
          <Toaster /> 
          </div>
      )
    }
    </div>
)
}

export default Sells