import React from 'react';
import OrderForm from './util/OrderForm';

export const CreateOrder = () => {
  return (
    <div className="create-order">
      <h2 className="create-order__title">Create Order</h2>
      <div className="create-order__content">
        <OrderForm />
      </div>
    </div>
  );
};


