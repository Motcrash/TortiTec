import React, {useState, useEffect} from 'react'
import ProductList from '../components/ProductListComponent'

function SalesTableComponent() {
   /* const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0); */

    useEffect(() => {
      
      }, []); 
      
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
            <tr key='5'>
              <td>1</td>
              <td>Un kilogramo de tortillas de maíz</td>
              <td>0</td>
              <td>25.00</td>
              <td>0</td>
            </tr>
         
        </tbody>
      </table>
      <div className="total">Total: sexo</div>
    </div>
  );
};

export default SalesTableComponent;