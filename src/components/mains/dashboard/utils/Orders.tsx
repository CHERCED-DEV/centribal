import React from 'react';

export const Orders = () => {
  const orders = [
    {
      client: 'Cliente 1',
      orderNumber: '001',
      delivered: true,
      paid: false,
      orderValue: 50,
      orderValueWithShipping: 60
    },
    {
      client: 'Cliente 2',
      orderNumber: '002',
      delivered: false,
      paid: true,
      orderValue: 75,
      orderValueWithShipping: 85
    },
    {
      client: 'Cliente 3',
      orderNumber: '003',
      delivered: true,
      paid: true,
      orderValue: 100,
      orderValueWithShipping: 110
    }
  ];

  return (
    <>
      <h2 className="orders-heading">Órdenes de Pedidos</h2>
      {orders.map((order, index) => (
        <React.Fragment key={index}>
          <p className="orders-client">Cliente: {order.client}</p>
          <p className="orders-orderNumber">Número de Orden: {order.orderNumber}</p>
          <p className="orders-delivered">Entregado: {order.delivered ? 'Sí' : 'No'}</p>
          <p className="orders-paid">Pagado: {order.paid ? 'Sí' : 'No'}</p>
          <p className="orders-orderValue">Valor de la Orden (sin envío): ${order.orderValue}</p>
          <p className="orders-orderValueWithShipping">Valor de la Orden (con envío): ${order.orderValueWithShipping}</p>
          {index !== orders.length - 1 && <hr className="orders-separator" />}
        </React.Fragment>
      ))}
    </>
  );
};
