import React from 'react';

export const CreateOrder = () => {
  return (
    <div className="create-order">
      <h2 className="create-order__title">Create Order</h2>
      <div className="create-order__content">
        <UserForm />
      </div>
    </div>
  );
};

const UserForm = () => {
  return (
    <div className="user-form">
      <h3 className="user-form__title">User Form</h3>
      <form className="user-form__form">
        {/* Aquí van los campos del formulario */}
      </form>
    </div>
  );
};
