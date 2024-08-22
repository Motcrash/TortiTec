import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import HeaderComponent from '../components/HeaderComponent'
import NavBarComponent from '../components/NavBarComponent'
import LoaderComponent from '../components/LoaderComponent';
import '../styles/stockStyle.css'
import { DataContext } from '../context/DataContext';

function Stock() {;

    const {products, setProducts, productsLoading, URIProducts} = useContext(DataContext);

    const noifyDeactivate = () => toast.success('Producto desactivado con exito', { id: 'deactivate', duration: 1000});
    const notifyActivate = () => toast.success('Producto activado con exito', { id: 'activate', duration: 1000});
    const notifyDeleted = () => toast.success('Producto eliminado con exito', { id: 'deleted', duration: 1000});

    const handleIncrease = async (product) => {
      const updatedProducts = products.map((prod) =>
        prod.id === product.id ? { ...prod, stock: prod.stock + 1 } : prod
      );
      setProducts(updatedProducts);
      await axios.put(`${URIProducts}/${product.id}`, {
        stock: product.stock + 1
      })
    };
  
    const handleDecrease = async (product) => {
      const updatedProducts = products.map((prod) =>
        prod.id === product.id ? { ...prod, stock: prod.stock - 1 } : prod
      );
      setProducts(updatedProducts);
      await axios.put(`${URIProducts}/${product.id}`, {
        stock: product.stock - 1
      })
    };

    const deactivateProduct = async (product) => {
      const updatedProducts = products.map((prod) =>
        prod.id === product.id
        ? { ...prod, isActive: false } : prod
      );
      setProducts(updatedProducts);
      await axios.put(`${URIProducts}/${product.id}`, {
        isActive: false
      })
      noifyDeactivate();
    };

    const activateProduct = async (product) => {
      const updatedProducts = products.map((prod) =>
        prod.id === product.id
        ? { ...prod, isActive: true } : prod
      );
      setProducts(updatedProducts);
      await axios.put(`${URIProducts}/${product.id}`, {
        isActive: true
      })
      notifyActivate();
    };

    const deleteProduct = async (id) => {
      const updatedProducts = products.filter(product => product.id !== id);
      setProducts(updatedProducts);
      axios.delete(`${URIProducts}/${id}`);
      notifyDeleted();
    };

    const renderActiveProducts = () => {
      return (products.map(product => {
        if (product.isActive == true) { return(
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.stock}</td>

              <td>
                <div className='buttons-stock'>
                  <button className='detailButton' onClick={() => handleIncrease(product)}>
                    <img src='/src/assets/img/mas.png' alt="moreButton" draggable="false"/>
                  </button>
                  <button className='detailButton' onClick={() => handleDecrease(product)}>
                    <img src='/src/assets/img/menos.png' alt="lessButton" draggable="false"/>
                  </button>
                </div>
              </td>

              <td>
                <div className='buttons-stock'>
                  <Link to={`/edit_product/${product.id}`} state={{ id: product.id }} draggable="false">
                    <button className='detailButton'> <img src='/src/assets/img/editar.png' alt="editButton" draggable="false"/> </button>
                  </Link>
                </div>
              </td>

              <td>
                <div className='buttons-stock'>
                  <button className='detailButton' onClick={() => deactivateProduct(product)}>
                    <img src='/src/assets/img/activar.png' alt="deactivateButton" draggable="false"/>
                  </button>
                </div>
              </td>
            </tr>
          )
        }
      }))
    }

    const renderInactiveProducts = () => {
      return (products.map(product => {
        if (product.isActive == false) { return(
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.stock}</td>
              
              <td>
                <div className='buttons-stock'>
                  <button className='detailButton' onClick={() => deleteProduct(product.id)}>
                    <img src='/src/assets/img/borrar.png' alt="deleteButton" draggable="false"/>
                  </button>
                </div>
              </td>

              <td>
                <div className='buttons-stock'>
                  <button className='detailButton' onClick={() => activateProduct(product)}>
                    <img src='/src/assets/img/desactivar.png' alt="moreButton" draggable="false"/>
                  </button>
                </div>
              </td>
              
            </tr>
          )
        }
      }))
    } 
      
  return (
    <div>
      {productsLoading ? (<LoaderComponent/>)
      : (
        <div>
          <HeaderComponent />
          <NavBarComponent /> 

          <h1 className='header1-stock'>Inventario</h1>
          <Link to={`/add_product`} draggable="false"> <button className='addProductButton'>Añadir producto</button> </Link>

          <div className='table-stock-container'>
            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Control de Inventario</th>
                  <th>Editar producto</th>
                  <th>Descontinuar</th>
                </tr>
              </thead>
              <tbody>
                {renderActiveProducts(products)}
              </tbody>
            </table>

            <h2>Productos descontinuados</h2>
            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Eliminar</th>
                  <th>Activar</th>
                </tr>
              </thead>
              <tbody>
                {renderInactiveProducts(products)}
              </tbody>
            </table>
          </div>
          <Toaster />
        </div>
      )}
    </div>
       
  )
}

export default Stock