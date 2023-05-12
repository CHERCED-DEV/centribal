import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react'
import { getProductById, EditProductDataProps } from './utils/edit-product.uils';
import { InputForm } from '@/components/mains/dashboard/utils/create-order/util/InputForm';


export default function EditProductById({ product }: EditProductDataProps) {
    return (
        <h1>añañaii</h1>
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