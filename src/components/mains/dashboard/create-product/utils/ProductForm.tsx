import React, { memo } from 'react'
import { InputForm } from '../../utils/create-order/util/InputForm';
import { useForm } from 'react-hook-form';
import { CreateProductDataProps } from './create-product.interface';
import { ProductsConfig } from '@/pages/api/products/db/products.utils';
import swal from 'sweetalert';

type FormValues = { [key: string]: unknown };

const ProductForm: React.FC<CreateProductDataProps> = ({ create_products }) => {
    const { register, handleSubmit } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {

        const newProduct: ProductsConfig = {
            reference: data.reference as string,
            name: data.name as string,
            description: data.description as string,
            price: parseInt(data.price as string),
            taxes: parseInt(data.taxes as string),
        };

        postProdut(newProduct);
    }

    const postProdut = async (product: ProductsConfig) => {
        try {
            const data = await fetch("/api/products", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product)
            });
            swal({
                title: "Sent!",
                text: "Thank your product its send.",
                icon: "success",
            });
        } catch (error) {
            console.error(error);
            swal({
                title: "Error",
                text: "There was an error sending your product. Please try again later.",
                icon: "error",
            });
        }
    }

    return (
        <section className="user-form">
            <h3 className="user-form__title">{create_products.form_title}</h3>
            <form className="user-form__form" onSubmit={handleSubmit(onSubmit)}>
                {create_products.fields.map((item) => (
                    <InputForm key={item.value} field={item} register={register} />
                ))}
                <button className="user-form__totals-submit" type="submit">{create_products.submit}</button>
            </form>
        </section>
    )
}

export default memo(ProductForm);