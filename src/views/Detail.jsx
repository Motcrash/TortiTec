import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { DataContext } from '../context/DataContext';
import '../styles/detailStyle.css';
import HeaderComponent from '../components/HeaderComponent';
import NavBarComponent from '../components/NavBarComponent';
import LoaderComponent from '../components/LoaderComponent';
import moment from 'moment';

const notifyError = () => toast.error("Ocurrió un error al cargar los datos", { id: "dataError", duration: 1000 });

function Detail() {
  const { sells, sellLoading } = useContext(DataContext);
  const [sell, setSell] = useState({ details: [] });

  let { state } = useLocation();
  const { id } = state;

  const getSell = () => {
    try {
      const uniqueSell = sells.find(sell => sell.id === id);
      if (uniqueSell) {
        setSell(uniqueSell);
      } else {
        notifyError();
      }
    } catch (error) {
      notifyError();
    }
  }

  useEffect(() => {
    if (!sellLoading) {
      getSell();
    }
  }, [sellLoading, sells]);

  const renderDetails = () => {
    return sell.details.map(detail => (
      <tr key={detail.title}>
        <td>{detail.title}</td>
        <td>{detail.quantity}</td>
        <td>${detail.price}</td>
        <td>${detail.price * detail.quantity}</td>
      </tr>
    ));
  }

  return (
    <>
      {sellLoading ? (
        <LoaderComponent />
      ) : (
        <div>
          <HeaderComponent />
          <NavBarComponent />

          {/* Tabla de Detalle */}
          <div className='table-detail-container'>
            <h1>Venta #{id}</h1>
            <h2>Fecha: {moment(sell.sellDate).format('DD-MM-YYYY HH:mm:ss')}</h2>
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {sell.details.length > 0 ? renderDetails() : <tr><td colSpan="4">No hay detalles disponibles</td></tr>}
              </tbody>
            </table>
          </div>

          <div className="total-detail">Total: ${sell.total || 0}</div>
        </div>
      )}
    </>
  );
}

export default Detail;
