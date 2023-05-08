import React, { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { ClientFlieldsConfig, CreateOrderDataProps } from "./create-order.interface";

const OrderForm: React.FC<CreateOrderDataProps> = ({ client, products }) => {
    const { register, handleSubmit } = useForm<ClientFlieldsConfig>();


    const onSubmit = (data: any) => {
        console.log("Formulario enviado:", data);
    };

    return (
        <section className="user-form">
            <h3 className="user-form__title">{client.form_title}</h3>
            <form className="user-form__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="user-form__field">
                    <label className="user-form__label">{client.form_client.name}</label>
                    <input
                        className="user-form__input"
                        type="text"
                        required={client.fields.name.required}
                        placeholder={client.fields.name.value}
                        {...register("name")}
                    />
                </div>
                <div className="user-form__field">
                    <label className="user-form__label">{client.form_client.email}</label>
                    <input
                        className="user-form__input"
                        type="text"
                        required={client.fields.email.required}
                        placeholder={client.fields.email.value}
                        {...register("email")}
                    />
                </div>
                <div className="user-form__field">
                    <label className="user-form__label">{client.form_client.phone}</label>
                    <input
                        className="user-form__input"
                        type="text"
                        required={client.fields.phone.required}
                        placeholder={client.fields.phone.value}
                        {...register("phone")}
                    />
                </div>
                <div className="user-form__field">
                    <label className="user-form__label">{client.form_client.product}</label>
                    <select className="user-form__input" {...register("product")}>
                        {products.map((product) => (
                            <option key={product._id} value={product.reference}>
                                {product.name} - ${product.price}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="user-form__field">
                    <label className="user-form__label">{client.form_client.orderValue}</label>
                    <input
                        className="user-form__input"
                        type="text"
                        required={client.fields.orderValue.required}
                        placeholder={client.fields.orderValue.value}
                        {...register("orderValue")}
                    />
                </div>
                <div className="user-form__field">
                    <label className="user-form__label">{client.form_client.orderValueWithShipping}</label>
                    <input
                        className="user-form__input"
                        type="text"
                        required={client.fields.orderValueWithShipping.required}
                        placeholder={client.fields.orderValueWithShipping.value}
                        {...register("orderValueWithShipping")}
                    />
                </div>
                <button type="submit">{client.submit}</button>
            </form>
        </section>
    );
};

export default memo(OrderForm);

