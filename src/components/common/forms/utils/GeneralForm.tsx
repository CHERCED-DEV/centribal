import React, { useState } from 'react'
import { FormValues, GeneralFormsDataProps, handleAddToPurchase, totalOrder, totalPrice, totalTaxes } from './general-forms.utils'
import { GenericInput } from './GenericInput'
import { useForm } from 'react-hook-form';
import { ProductsConfig } from '@/pages/api/products/db/products.utils';
import { OrdersConfig } from '@/pages/api/orders/db/order.utils';
import { UseActionData } from '@/utils/providers/requests/helpers';

const GeneralForm: React.FC<GeneralFormsDataProps> = ({ data_forms, method, products }) => {
    const { register, handleSubmit, watch } = useForm<FormValues>();
    const [purchase, setPurchase] = useState<ProductsConfig[]>([]);

    const onSubmit = async (data: any) => {
        const petitionType = method;
        try {
            if (petitionType === 'PUT') {
                const uri: string = "/api/products";
                await UseActionData(uri, petitionType, data);
            } else {
                if (data as ProductsConfig) {
                    const uri: string = "/api/products";
                    await UseActionData(uri, petitionType, data);
                } else if (data as OrdersConfig) {
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
                    const uri: string = "/api/orders";
                    await UseActionData(uri, petitionType, newOrder);
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {
                data_forms && (
                    <section className="form__section">
                        <h3 className="form__section__title">{data_forms.form_title}</h3>
                        <form className="form__section__form" onSubmit={handleSubmit(onSubmit)}>
                            {
                                data_forms.fields && (
                                    <>
                                        {data_forms.fields.map((item) => (
                                            <GenericInput key={item.value} field={item} register={register} type={item.type} />
                                        ))}
                                    </>
                                )
                            }
                            {
                                products ? (
                                    <>
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
                                            <button className="user-form__button" type="button" onClick={() => handleAddToPurchase(watch,products,setPurchase)}>
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
                                            {totalOrder(purchase) > 0 && (
                                                <div className="user-form__totals">
                                                    <input className="user-form__input" type="number" readOnly {...register("totalPrice")} value={totalPrice(purchase)} />
                                                    <input className="user-form__input" type="number" readOnly {...register("totalTaxes")} value={totalTaxes(purchase)} />
                                                    <input className="user-form__input" type="number" readOnly {...register("totalOrder")} value={totalOrder(purchase)} />
                                                </div>
                                            )}
                                        </div>
                                    </>
                                ) : (null)
                            }
                            <button className="form__section--submit" type="submit">{data_forms.submit}</button>
                        </form>
                    </section>
                )
            }
        </>
    )
}

export default GeneralForm;