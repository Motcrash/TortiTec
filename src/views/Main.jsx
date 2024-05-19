import React, {useEffect, useState} from 'react'
import '../styles/headerStyle.css'
import '../styles/mainStyle.css'
import HeaderComponent from '../components/HeaderComponent'
import NavBarComponent from '../components/NavBarComponent'
import ProductList from '../components/ProductListComponent'
import SalesTableComponent from '../components/SalesTableComponent'

import axios from 'axios';

const URIProducts = 'http://localhost:8000/products/';
const URISells = 'http://localhost:8000/sells/';
const URIStock = 'http://localhost:8000/stocks/';


export default function Main() {

  const [products, setProducts] = useState([]);

    useEffect(() => {
      getProducts();
    }, []);
    
    const getProducts = async () => {
        const res = await axios.get(URIProducts);
        setProducts(res.data);
    }

    const createSell = async () => {
      const details = products.map(product => ( {
        id: product.id,
        quantity: product.quantity
      }));

      const res = await axios.get(URIStock)
      const stock = res.data;

      details.map( detail => {
        let i = 0;
        if (detail.quantity > stock[i].quantity) {
          console.log('No hay suficientes productos en inventario');
        }else{
          if (detail.quantity == 0) {
            return
          }else{
            axios.put(`${URIStock}${detail.id}`, {
              quantity: (stock[i].quantity - detail.quantity)
            })
          }
        }
        i++;
        clean();
      })

      if (total != 0) {
        await axios.post(URISells, {
          total: total,
          details: details
        });
      }else return
    }
  
  useEffect(() => {
    SalesTableComponent
  }, [ProductList])

  const handleIncrease = (product) => {
    const updatedProducts = products.map((p) =>
      p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
    );
    setProducts(updatedProducts);
  };

  const handleDecrease = (product) => {
    const updatedProducts = products.map((p) =>
      p.id === product.id && p.quantity > 0
        ? { ...p, quantity: p.quantity - 1 }
        : p
    );
    setProducts(updatedProducts);
  };



  // Setear los cuantity a 0
  const clean = () => {
    const updatedProducts = products.map((p) => ({ ...p, quantity: 0 }));
    setProducts(updatedProducts);
  };

   // Calcular el total de la venta
   const total = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);

  return (
    <>
    <HeaderComponent />
    <NavBarComponent />
    <div className='main-content'>
      <div className='product-container'>
      <h1>Lista de Productos</h1>
      <div className='flex-product-container'>

        <div className="product-list" >
          {products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.img_source} alt={product.name} />
                <h3>{product.title}</h3>
                <p>{'$'+(product.price).toFixed(2)}</p>
                <p>Cantidad: {product.quantity}</p>
                <button onClick={() => handleIncrease(product)}>Aumentar</button>
                <button onClick={() => handleDecrease(product)}>Quitar</button>
              </div>
          ))}
        </div>
      </div>
    </div>

    {/*Tabla*/}
    <div className='table-container'>
          <h1>Tabla</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio Unitario</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
        {products.map(product => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{'$'+product.price+".00"}</td>
              <td>{product.quantity}</td>
              <td>{'$'+(product.price * product.quantity)+".00"}</td>
            </tr>
          ))}

        </tbody>
      </table>
      <div className="total">Total: ${total.toFixed(2)}</div>

      <div className='button-main'>
      <button onClick={createSell}>Resgitrar venta</button>
      <button onClick={clean}>Cancelar</button>
      </div>
    </div>
    </div>
    </>
    
  )
}
