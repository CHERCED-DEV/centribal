import React, { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { ClientFlieldsConfig, CreateOrderDataProps } from "./create-order.interface";
import { ProductsConfig } from "@/pages/api/products/db/products.utils";

const OrderForm: React.FC<CreateOrderDataProps> = ({ client, products }) => {
    const { register, handleSubmit, watch } = useForm<ClientFlieldsConfig>();
    const [purchase, setPurchase] = useState<ProductsConfig[]>();

    const handleAddToPurchase = () => {
        // Get the selected product from the form data
        const selectedProduct = watch('product');
      
        // Find the product in the products array based on its reference
        const productToAdd = products.find((product) => product.reference === selectedProduct);
      
        // Add the product to the purchase array
        setPurchase((prevPurchase) => [...prevPurchase, productToAdd]);
      };

    const onSubmit = (data: ClientFlieldsConfig) => {
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
                    <button className="user-form__button" onClick={} >{client.addmore}</button>
                </div>
                <div className="user-form__sell-resume">
                            {
                                purchase?.map((item)=>(
                                    <span key={item._id}>{item.name}: {item.price}</span>
                                ))
                            }
                </div>
                <button type="submit">{client.submit}</button>
            </form>
        </section>
    );
};

export default memo(OrderForm);

