import React, {useEffect, useState} from 'react'
import '../styles/stockStyle.css'
import HeaderComponent from '../components/HeaderComponent'
import NavBarComponent from '../components/NavBarComponent'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import LoaderComponent from '../components/LoaderComponent';

const URIStock = 'http://localhost:8000/stocks/';
const URIProducts = 'http://localhost:8000/products/';

function Stock() {

    const [stock, setStock] = useState([]);
    const [products, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      getStock();
      getProduct();

      const loadingTime = setTimeout(() => {
        setIsLoading(false);
      }, 200);
      return () => clearTimeout(loadingTime);
    }, []);

    const noifyDeactivate = () => toast.success('Producto desactivado con exito');
    const notifyActivate = () => toast.success('Producto activado con exito');
    
    const getStock = async () => {
        const res = await axios.get(URIStock);
        setStock(res.data);
      }
      
      const getProduct = async () => {
        const res = await axios.get(URIProducts);
        setProduct(res.data);
    }

    const renderActiveProducts = (products) => {
      return (stock.map(item => {
        if (item.isActive == true) { return(
            <tr key={item.id}>
              <td>{products.find(product => product.id === item.id).title}</td>
              <td>{item.quantity}</td>
              <td>
              <div className='buttons-stock'>
              <button className='detailButton' onClick={() => handleIncrease(item)}>
                <img src='/src/assets/img/mas.png' alt="moreButton"/>
              </button>
              <button onClick={() => handleDecrease(item)}>
                <img src='/src/assets/img/menos.png' alt="moreButton"/>
              </button>
              </div>
              </td>
              <td>
              <div className='buttons-stock'>
              <button className='detailButton' onClick={() => deactivateProduct(item)}>
                <img src='/src/assets/img/activar.png' alt="moreButton"/>
              </button>
              </div>
              </td>
            </tr>
          )
        }
      }))
    }

    const renderInactiveProducts = (products) => {
      return (stock.map(item => {
        if (item.isActive == false) { return(
            <tr key={item.id}>
              <td>{products.find(product => product.id === item.id).title}</td>
              <td>{item.quantity}</td>
              <td>
              <div className='buttons-stock'>
              <button className='detailButton' onClick={() => activateProduct(item)}>
                <img src='/src/assets/img/desactivar.png' alt="moreButton"/>
              </button>
              </div>
              </td>
            </tr>
          )
        }
      }))
    }

    const handleIncrease = async (item) => {
        const updatedItems = stock.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
        setStock(updatedItems);

        if(item.quantity < 200){
          await axios.put(`${URIStock}${item.id}`, {
            quantity: item.quantity + 1
          })
        }
      };
    
      const handleDecrease = async (item) => {
        const updatedItems = stock.map((i) =>
          i.id === item.id && i.quantity > 0
          ? { ...i, quantity: i.quantity - 1 } : i
        );
        setStock(updatedItems);

        if(item.quantity > 0){
          await axios.put(`${URIStock}${item.id}`, {
            quantity: item.quantity - 1
          })
        }
      };

      const deactivateProduct = async (item) => {
        const updatedItems = stock.map((i) =>
          i.id === item.id
          ? { ...i, isActive: false } : i
        );
        setStock(updatedItems);
        await axios.put(`${URIStock}${item.id}`, {
          isActive: false
        })
        noifyDeactivate();
      };

      const activateProduct = async (item) => {
        const updatedItems = stock.map((i) =>
          i.id === item.id
          ? { ...i, isActive: true } : i
        );
        setStock(updatedItems);
        await axios.put(`${URIStock}${item.id}`, {
          isActive: true
        })
        notifyActivate();
      };
      
      
  return (
    <div>
      {isLoading ? (<LoaderComponent/>)
      : (
        <div>
          <HeaderComponent />
          <NavBarComponent /> 

            {/*Tabla*/}
            <div className='table-stock-container'>
            <h1>Inventario</h1>
            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Control de Inventario</th>
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
                  <th>activar</th>
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