import React, { lazy, memo } from 'react'
import { CreateProductDataProps } from './utils/create-product.interface';

const ProductForm = lazy(()=>import('./utils/ProductForm'));

const CreateProduct = ({ create_products }: CreateProductDataProps) => {
    return (
        <div className="create-product">
            <h2 className="create-product__title">{create_products.title}</h2>
            <div className="create-product__content">
                {
                    create_products && (<ProductForm create_products={create_products} />)
                }
            </div>
        </div>
    )
}

export default memo(CreateProduct);