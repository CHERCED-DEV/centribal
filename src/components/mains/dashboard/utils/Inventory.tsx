import React, { useState, useEffect } from 'react';

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    fetchInventory(); // Llama a la función para obtener los datos del inventario
  }, []);

  const fetchInventory = () => {
    // Realiza una solicitud fetch a tu endpoint de la API para obtener los datos del inventario
    // Puedes reemplazar la URL con tu endpoint correspondiente
    fetch('https://tu-api.com/inventory')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  };

  const sortInventory = (key) => {
    if (sortKey === key) {
      // Si ya se está ordenando por la misma clave, cambia el orden
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Si se está ordenando por una nueva clave, establece la clave y el orden ascendente
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedProducts = [...products].sort((a, b) => {
    // Ordena los productos en función de la clave y el orden seleccionados
    if (sortOrder === 'desc') {
      return b[sortKey].localeCompare(a[sortKey]);
    } else {
      return a[sortKey].localeCompare(b[sortKey]);
    }
  });

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => sortInventory('reference')}>
            Reference {sortKey === 'reference' && sortOrder === 'asc' ? '▲' : '▼'}
          </th>
          <th onClick={() => sortInventory('name')}>
            Name {sortKey === 'name' && sortOrder === 'asc' ? '▲' : '▼'}
          </th>
          <th onClick={() => sortInventory('description')}>
            Description {sortKey === 'description' && sortOrder === 'asc' ? '▲' : '▼'}
          </th>
          <th onClick={() => sortInventory('price')}>
            Price {sortKey === 'price' && sortOrder === 'asc' ? '▲' : '▼'}
          </th>
          <th onClick={() => sortInventory('taxes')}>
            Taxes {sortKey === 'taxes' && sortOrder === 'asc' ? '▲' : '▼'}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedProducts.map((product) => (
          <tr key={product.reference}>
            <td>{product.reference}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.taxes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Inventory;
