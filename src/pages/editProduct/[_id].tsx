import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react'
import { getProductById, EditProductDataProps } from './utils/edit-product.uils';


export default function EditProductById({ product }: EditProductDataProps) {
    return (
        <div>{product.name}</div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const { query } = context;
    const { _id } = query;
    if (typeof _id !== 'string' || _id.trim() === '') {
        return {
            notFound: true
        };
    }
    const product = await getProductById(_id);
    return {
        props: {
            product
        }
    };
};