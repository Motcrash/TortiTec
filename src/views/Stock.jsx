import React, {useEffect, useState} from 'react'
import '../styles/stockStyle.css'
import HeaderComponent from '../components/HeaderComponent'
import NavBarComponent from '../components/NavBarComponent'
import axios from 'axios';

const URIStock = 'http://localhost:8000/stocks/';
const URIProducts = 'http://localhost:8000/products/';

function Stock() {

    const [stock, setStock] = useState([]);
    const [products, setProduct] = useState([]);

    useEffect(() => {
      getStock();
      getProduct();
    }, []);
    
    const getStock = async () => {
        const res = await axios.get(URIStock);
        setStock(res.data);
    }

    const getProduct = async () => {
        const res = await axios.get(URIProducts);
        setProduct(res.data);
    }

    const renderProduct = (products) => {
      if(products[0] != undefined){
        return (stock.map(item => (
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
          </tr>
        )))
      }
    }

    const handleIncrease = (item) => {
        const updatedItems = stock.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
        setStock(updatedItems);

        if(item.quantity < 200){
          axios.put(`${URIStock}${item.id}`, {
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
          axios.put(`${URIStock}${item.id}`, {
            quantity: item.quantity - 1
          })
        }
      };
      
      
  return (
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
          </tr>
        </thead>
        <tbody>
          {renderProduct(products)}
        </tbody>
      </table>
    </div>
    </div>
       
  )
}

export default Stock