import React, { memo, useEffect, useState } from 'react'
import { FormValues, GeneralFormsDataProps, calcOrderValue, generateRandomBoolean, getUniqueReferences, handleAddToPurchase, randomNumOrder, totalOrder, totalPrice, totalTaxes, validateAsNumber } from './general-forms.utils'
import { GenericInput } from './GenericInput'
import { useForm } from 'react-hook-form';
import { ProductsConfig } from '@/pages/api/products/db/products.utils';
import { OrdersConfig } from '@/pages/api/orders/db/order.utils';
import { UseActionData, GetData } from '@/utils/providers/requests/helpers';
import { useRouter } from 'next/router';

const GeneralForm: React.FC<GeneralFormsDataProps> = ({ data_forms, method, product }) => {
    // State and form handling logic
    const { register, handleSubmit, watch } = useForm<FormValues>();
    const [purchase, setPurchase] = useState<ProductsConfig[]>([]);
    const [reference, setReference] = useState<ProductsConfig[]>([])
    const [productsByName, setProductsByName] = useState<ProductsConfig[]>([])
    const router = useRouter()

    const products = GetData<ProductsConfig[]>("/api/products", "products");

    useEffect(() => {
        let mount = true;
        if (products !== undefined && products !== null) {
            const uniqueReferences = getUniqueReferences<ProductsConfig>(products, "reference")
            const uniqueProducts = getUniqueReferences<ProductsConfig>(products, "name")
            setReference(uniqueReferences)
            setProductsByName(uniqueProducts)
        }
        return () => {
            mount = false;
        }
    }, [products])


    const onSubmit = async (data: FormValues) => {
        const petitionType = method;
        try {
            if (petitionType === 'PUT' && product) {
                const { _id, reference, name, description, price, taxes } = product
                const updatedFields: Partial<ProductsConfig> = {
                    _id: _id
                };
                const castPrice: number = validateAsNumber(data.price);
                const castTaxes: number = validateAsNumber(data.taxes);
                if (data.reference !== undefined && data.reference !== reference) {
                    if (data.reference !== null && typeof data.reference === "string") {
                        updatedFields.reference = data.reference;
                    }
                } else {
                    updatedFields.reference = reference;
                }

                if (data.name !== undefined && data.name !== name) {
                    if (data.name !== null && typeof data.name === "string") {
                        updatedFields.name = data.name;
                    }
                } else {
                    updatedFields.name = name;
                }

                if (data.description !== undefined && data.description !== description) {
                    if (data.description !== null && typeof data.description === "string") {
                        updatedFields.description = data.description;
                    }
                } else {
                    updatedFields.description = description;
                }

                if (castPrice !== undefined && castPrice !== price) {
                    if (castPrice !== null && typeof castPrice === "number") {
                        updatedFields.price = castPrice;
                    }
                } else {
                    updatedFields.price = price;
                }

                if (castTaxes !== undefined && castTaxes !== taxes) {
                    if (castTaxes !== null && typeof castTaxes === "number") {
                        updatedFields.taxes = castTaxes;
                    }
                } else {
                    updatedFields.taxes = taxes;
                }
                const uri: string = "/api/products";
                const res = await UseActionData(uri, petitionType, updatedFields);
                if(res === true){
                    router.push("/editProduct")
                }
            } else {
                if ('description' in data) {
                    const newProduct: ProductsConfig = {
                        reference: data.reference as string,
                        name: data.name as string,
                        description: data.description as string,
                        price: validateAsNumber(data.price),
                        taxes: validateAsNumber(data.taxes)
                    }
                    const uri: string = "/api/products";
                    await UseActionData(uri, petitionType, newProduct);
                } else if ('orderValue' in data) {
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
                        orderValue: validateAsNumber(data.orderValue),
                        orderValueWithShipping: calcOrderValue(data.orderValue),
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
                data_forms && method !== "PUT" ? (
                    <section className="form__section">
                        <h3 className="form__section__title">{data_forms.form_title}</h3>
                        <form className="form__section__form" onSubmit={handleSubmit(onSubmit)}>
                            {
                                data_forms.fields && (
                                    data_forms.fields.map((input) => (
                                        input.value === "reference" ? <div key={input.value} className="user-form__field">
                                            <select className="user-form__input" {...register("reference")}>
                                                {reference &&
                                                    reference.map((product) => (
                                                        <option key={product._id} value={product.reference}>
                                                            {product.reference}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div>
                                            :
                                            <GenericInput key={input.value} field={input} register={register} type={input.type} />
                                    ))
                                )
                            }
                            {
                                'product' in data_forms && products ? (
                                    <>
                                        <div className="user-form__field">
                                            <label className="user-form__label">{data_forms.product?.title}</label>
                                            <select className="user-form__input" {...register("product")}>
                                                {productsByName &&
                                                    productsByName.map((product) => (
                                                        <option key={product._id} value={product._id}>
                                                            {product.name} - ${product.price}
                                                        </option>
                                                    ))}
                                            </select>
                                            <button className="user-form__button" type="button" onClick={() => handleAddToPurchase(watch, products, setPurchase)}>
                                                {data_forms.addmore}
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
                                                    <input className="user-form__input" type="number" readOnly {...register("orderValue")} value={totalOrder(purchase)} />
                                                </div>
                                            )}
                                        </div>
                                    </>
                                ) : (null)
                            }
                            <button className="form__section--submit" type="submit">{data_forms.submit}</button>
                        </form>
                    </section>
                ) : (
                    <>
                        {
                            product && (
                                <section className="form__section">
                                    <h3 className="form__section__title">{data_forms.form_title}</h3>
                                    <form className="form__section__form" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="user-form__field">
                                            <select className="user-form__input" {...register("reference")} defaultValue={product.reference}>
                                                {reference &&
                                                    reference.map((product) => (
                                                        <option key={product._id} value={product.reference}>
                                                            {product.reference}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div>
                                        <div className="user-form__field">
                                            <input
                                                className="user-form__input"
                                                type="text"
                                                required={true}
                                                {...register("name")}
                                                defaultValue={product.name}
                                            />
                                        </div>
                                        <div className="user-form__field">
                                            <input
                                                className="user-form__input"
                                                type="text"
                                                required={true}
                                                {...register("description")}
                                                defaultValue={product.description}
                                            />
                                        </div>
                                        <div className="user-form__field">
                                            <input
                                                className="user-form__input"
                                                type="number"
                                                required={true}
                                                {...register("price")}
                                                defaultValue={product.price}
                                            />
                                        </div>
                                        <div className="user-form__field">
                                            <input
                                                className="user-form__input"
                                                type="number"
                                                required={true}
                                                {...register("taxes")}
                                                defaultValue={product.taxes}
                                            />
                                        </div>
                                        <button className="form__section--submit" type="submit">{data_forms.submit}</button>
                                    </form>
                                </section>
                            )
                        }
                    </>
                )
            }
        </>
    )
}

export default memo(GeneralForm);