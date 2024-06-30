import React, { useContext } from 'react'
import '../styles/headerStyle.css'
import '../styles/mainStyle.css'
import HeaderComponent from '../components/HeaderComponent'
import NavBarComponent from '../components/NavBarComponent'
import toast, { Toaster } from 'react-hot-toast';

import { ProductsContext } from '../context/ProductsContext.jsx';

import axios from 'axios';
import LoaderComponent from '../components/LoaderComponent'
import { SellsContext } from '../context/SellsContext.jsx'


export default function Main() {
  // Toast
  const noifySale = () => toast.success('Venta registrada exitosamente!', { id: 'sale', duration: 1000});
  const notifyOutOfStock = () => toast.error('No hay suficientes productos', { id: 'noProducts', duration: 1000});
  const notifyNull = () => toast.error('No hay productos agregados', { id: 'null', duration: 1000});
  const notifyClear = () => toast.success('Venta cancelada', { id: 'cancel', duration: 1000});
  const notifyError = () => toast.error('Ocurrió un error', { id: 'error', duration: 1000});
  
  const { products, setProducts, isLoading, getProducts, URIProducts } = useContext( ProductsContext );
  const { getSells, URISells } = useContext( SellsContext );


    const createSell = async () => {
      // La venta no tiene productos
      if (total <= 0) {
        notifyNull();
        return;
      }else{
        // Si el total es mayor a 0 crea un arreglo con los productos y su precio
        let details = products.map(product => ( {
          product_id: product.id,
          title: product.title,
          price: product.price,
          quantity: product.quantity
        }));

        // Elimina del detalle los productos que no se vendieron  (quantity = 0)
        details = details.filter(detail => detail.quantity > 0);

        details.map(async detail => {
          const stock = products.find(product => product.title === detail.title).stock;
            try {
              await axios.put(`${URIProducts}${detail.product_id}`, {
                stock: stock - detail.quantity
              });
              getProducts();
            } catch (error) {
              notifyError();
            };
        });

        try {
          await axios.post(URISells, {
            details: details,
            total: total,
            
          });
          getSells();
        } catch (error) {
          notifyError();
        }

        const updatedProducts2 = products.map((product) => ({ ...product, quantity: 0 }));
        setProducts(updatedProducts2);
        
        noifySale();
      }

    }
  

  const handleIncrease = (product) => {
    if (product.quantity >= product.stock) {
      notifyOutOfStock();
      return;
    }
    const updatedProducts = products.map((p) =>
      (p.id === product.id) ? { ...p, quantity: p.quantity + 1 } : p
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
    notifyClear();
  };

   // Calcular el total de la venta
   const total = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);

  return (
    <div>
      {isLoading ? <LoaderComponent/>
      : (
        <div>
          <HeaderComponent />
          <NavBarComponent />
          <div className='main-content'>
            <div className='product-container'>
            <h1>Lista de Productos</h1>
            <div className='flex-product-container'>
              <div className="product-list" >
                {products.map((product) => {
                  if (product.isActive) { return (
                    <div 
                      className={product.stock === 0  ? "product product-out-of-stock" : "product"}
                      key={product.id}
                    >
                      <img src={product.image} alt={product.name} draggable="false"/>
                      <h3>{product.title}</h3>
                      <p>{'$'+(product.price).toFixed(2)}</p>
                      <p>Cantidad: {product.quantity}</p>
                      <p>{product.stock === 0 ? "No hay existencia" : `Stock: ${product.stock}`}</p>
                      <button
                        onClick={() => handleIncrease(product)}
                        disabled={product.stock === 0  ? true : false}
                        >Aumentar
                      </button>
                      <button  onClick={() => handleDecrease(product)}>Quitar</button>
                    </div>
                  )
                  }
                })}
              </div>
            </div>
          </div>

          {/*Tabla*/}
          <div className='table-container'>
                <h1>Desglose de compra</h1>
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
              {products.map(product => {
                  if (product.quantity > 0 ){ return ( 
                    <tr key={product.id}>
                      <td>{product.title}</td>
                      <td>{'$'+(product.price).toFixed(2)}</td>
                      <td>{product.quantity}</td>
                      <td>{'$'+(product.price * product.quantity).toFixed(2)}</td>
                    </tr>
                  )}
                })}

              </tbody>
            </table>
            <div className="total">Total: ${total.toFixed(2)}</div>

            <div className='button-main'>
            <button onClick={createSell}>Resgitrar venta</button>
            <button onClick={clean}>Cancelar</button>
            </div>
          </div>
          <Toaster />
          </div>
        </div>
      )  
    }
    </div>
  )
}
