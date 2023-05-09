import React, { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { CreateOrderDataProps } from "./create-order.interface";
import { ProductsConfig } from "@/pages/api/products/db/products.utils";
import { InputForm } from "./InputForm";

type FormValues = { [key: string]: string };

const OrderForm: React.FC<CreateOrderDataProps> = ({ client, products }) => {
    const { register, handleSubmit, watch } = useForm<FormValues>();
    const [purchase, setPurchase] = useState<ProductsConfig[]>([]);

    const onSubmit = (data: FormValues) => {
        console.log("Formulario enviado:", data);
    };

    const handleAddToPurchase = () => {
        const selectedProduct = watch('product');
        const productToAdd = products.find((product) => product._id === selectedProduct);
        if (productToAdd) {
            setPurchase((prevPurchase) => [...prevPurchase, productToAdd]);
        }
    };

    const totalPrice = () => {
        const total = purchase.reduce((accumulator, item) => accumulator + item.price, 0);
        return total;
    };
    const totalTaxes = () => {
        const total = purchase.reduce((accumulator, item) => accumulator + item.taxes, 0);
        return total;
    }
    const totalOrder = () => {
        const total = totalPrice() + totalTaxes();
        return total
    }


    return (
        <section className="user-form">
            <h3 className="user-form__title">{client.form_title}</h3>
            <form className="user-form__form" onSubmit={handleSubmit(onSubmit)}>
                {
                    client.fields.map((item) => (
                        <InputForm key={item.value} field={item} register={register} />
                    ))
                }
                <div className="user-form__field">
                    <label className="user-form__label">{client.product.title}</label>
                    <select className="user-form__input" {...register("product")}>
                        {products && products.map((product) => (
                            <option key={product._id} value={product._id}>
                                {product.name} - ${product.price}
                            </option>
                        ))}
                    </select>
                    <button className="user-form__button" onClick={handleAddToPurchase}  >{client.addmore}</button>
                </div>
                <div className="user-form__sell-resume">
                    <ul>
                        {
                            purchase?.map((item) => (
                                <li key={item._id}>
                                    <span >{item.name}: {item.price}</span>
                                </li>
                            ))
                        }
                    </ul>
                    {purchase.map((item, index) => (
                        <input
                            key={item._id}
                            type="hidden"
                            value={JSON.stringify(item)}
                            {...register(`purchase[${index}]`)}
                        />
                    ))}
                    <div>
                        <input type="text" readOnly {...register("totalPrice")} value={totalPrice()} />
                        <input type="text" readOnly {...register("totalTaxes")} value={totalTaxes()} />
                        <input type="text" readOnly {...register("totalOrder")} value={totalOrder()} />
                    </div>
                </div>
                <button type="submit">{client.submit}</button>
            </form>
        </section>
    );
};

export default memo(OrderForm);

