import React, {useState, useEffect} from 'react'

function SalesTableComponent() {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    /*useEffect(() => {
        // Aquí puedes hacer una solicitud a tu base de datos para obtener los datos de compra
        // Por ejemplo, usando axios:
        axios.get('URL_DE_TU_API')
          .then(response => {
            setItems(response.data.items);
            setTotal(response.data.total);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []); // Se ejecutará solo una vez al montar el componente
      */
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
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.codigo}</td>
              <td>{item.descripcion}</td>
              <td>{item.cantidad}</td>
              <td>{item.precio_unitario}</td>
              <td>{item.subtotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">Total: {total}</div>
    </div>
  );
};

export default SalesTableComponent;