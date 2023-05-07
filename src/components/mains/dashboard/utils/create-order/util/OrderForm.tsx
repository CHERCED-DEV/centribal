import React from "react";
import { useForm } from "react-hook-form";

const OrderForm = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        // Aquí puedes enviar los datos del formulario al servidor o realizar otras acciones
        console.log("Formulario enviado:", data);
    };

    return (
        <div className="user-form">
            <h3 className="user-form__title">User Form</h3>
            <form className="user-form__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="user-form__field">
                    <label className="user-form__label">Client Name:</label>
                    <input
                        className="user-form__input"
                        type="text"
                        name="client.name"
                        ref={register({
                            required: "Client name is required",
                            maxLength: {
                                value: 60,
                                message: "Client name must be less than 60 characters",
                            },
                        })}
                    />
                    {errors.client?.name && (
                        <span className="user-form__error">{errors.client.name.message}</span>
                    )}
                </div>
                <div className="user-form__field">
                    <label className="user-form__label">Client Email:</label>
                    <input
                        className="user-form__input"
                        type="email"
                        name="client.email"
                        ref={register({
                            required: "Client email is required",
                            maxLength: {
                                value: 100,
                                message: "Client email must be less than 100 characters",
                            },
                        })}
                    />
                    {errors.client?.email && (
                        <span className="user-form__error">{errors.client.email.message}</span>
                    )}
                </div>
                <div className="user-form__field">
                    <label className="user-form__label">Client Phone:</label>
                    <input
                        className="user-form__input"
                        type="text"
                        name="client.phone"
                        ref={register({
                            required: "Client phone is required",
                            maxLength: {
                                value: 20,
                                message: "Client phone must be less than 20 characters",
                            },
                        })}
                    />
                    {errors.client?.phone && (
                        <span className="user-form__error">{errors.client.phone.message}</span>
                    )}
                </div>
                <div className="user-form__field">
                    <label className="user-form__label">Order Number:</label>
                    <input
                        className="user-form__input"
                        type="text"
                        name="orderNumber"
                        ref={register({ required: "Order number is required" })}
                    />
                    {errors.orderNumber && (
                        <span className="user-form__error">{errors.orderNumber.message}</span>
                    )}
                </div>
                <div className="user-form__field">
                    <label className="user-form__label">Products:</label>
                    {/* Add logic for products */}
                </div>
                <div className="user-form__field">
                    <label className="user-form__label">Order Value:</label>
                    <input
                        className="user-form__input"
                        type="number"
                        name="orderValue"
                        ref={register({ required: "Order value is required" })}
                    />
                    {errors.orderValue && (
                        <span className="user-form__error">{errors.orderValue.message}</span>
                    )}
                </div>
                <div className="user-form__field">
                    <label className="user-form__label">Order Value with Shipping:</label>
                    <input
                        className="user-form__input"
                        type="number"
                        name="orderValueWithShipping"
                        ref={register({ required: "Order value with shipping is required" })}
                    />
                    {errors.orderValueWithShipping && (
                        <span className="user-form__error">{errors.orderValueWithShipping.message}</span>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default OrderForm;
