import React, { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { CreateOrderDataProps } from "./create-order.interface";
import { ProductsConfig } from "@/pages/api/products/db/products.utils";
import { InputForm } from "./InputForm";
import { OrdersConfig } from "@/pages/api/orders/db/order.utils";
import swal from "sweetalert";

type FormValues = { [key: string]: unknown };

const OrderForm: React.FC<CreateOrderDataProps> = ({ client, products }) => {
    const { register, handleSubmit, watch } = useForm<FormValues>();
    const [purchase, setPurchase] = useState<ProductsConfig[]>([]);

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


    const onSubmit = (data: FormValues) => {
        const randomNumOrder = () => {
            const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
            const result = Array.from({ length: 10 }, () =>
                characters[Math.floor(Math.random() * characters.length)]
            ).join('');
            return result;
        };
        const generateRandomBoolean = () => Math.random() < 0.5;

        const newOrder: OrdersConfig = {
            client: {
                name: data.Name as string,
                email: data.Email as string,
                phone: data.Phone as string,
            },
            orderNumber: randomNumOrder(),
            order: purchase as ProductsConfig[],
            delivered: generateRandomBoolean(),
            paid: generateRandomBoolean(),
            orderValue: data.totalPrice as number,
            orderValueWithShipping: data.totalOrder as number,
        };

        postOrder(newOrder);
    };

    const postOrder = async (order: OrdersConfig) => {
        try {
            const post = await fetch("/api/orders", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(order)
            });
            swal({
                title: "Sent!",
                text: "Thank your order its send, we will get in touch with you soon.",
                icon: "success",
            });
        } catch (error) {
            console.error(error);
            swal({
                title: "Error",
                text: "There was an error sending your order. Please try again later.",
                icon: "error",
            });
        }
    }


    return (
        <section className="user-form">
            <h3 className="user-form__title">{client.form_title}</h3>
            <form className="user-form__form" onSubmit={handleSubmit(onSubmit)}>
                {client.fields.map((item) => (
                    <InputForm key={item.value} field={item} register={register} />
                ))}
                <div className="user-form__field">
                    <label className="user-form__label">{client.product.title}</label>
                    <select className="user-form__input" {...register("product")}>
                        {products &&
                            products.map((product) => (
                                <option key={product._id} value={product._id}>
                                    {product.name} - ${product.price}
                                </option>
                            ))}
                    </select>
                    <button className="user-form__button" type="button" onClick={handleAddToPurchase}>
                        {client.addmore}
                    </button>
                </div>
                <div className="user-form__sell-resume">
                    <ul className="user-form__list">
                        {purchase?.map((item, index) => (
                            <li className="user-form__item" key={`${item.name}${index}`}>
                                <span className="user-form__item-text">{item.name}: {item.price}</span>
                            </li>
                        ))}
                    </ul>
                    {totalOrder() > 0 && (
                        <div className="user-form__totals">
                            <input className="user-form__input" type="number" readOnly {...register("totalPrice")} value={totalPrice()} />
                            <input className="user-form__input" type="number" readOnly {...register("totalTaxes")} value={totalTaxes()} />
                            <input className="user-form__input" type="number"  readOnly {...register("totalOrder")} value={totalOrder()} />
                        </div>
                    )}
                </div>
                <button className="user-form__totals-submit" type="submit">{client.submit}</button>
            </form>
        </section>
    );
};

export default memo(OrderForm);

