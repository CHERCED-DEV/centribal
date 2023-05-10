import { ProductsConfig } from "@/pages/api/products/db/products.utils";

export interface EditProductDataProps {
    product: ProductsConfig
}

export const getProductById = async (id: string) => {
    try {
        const res = await fetch(`${process.env.VERCEL_URL_CORS}/api/products`);
        const data = await res.json();
        const project = data.find((unit: ProductsConfig) => unit._id === id);
        return project;
    } catch (error: any) {
        return { errorMessage: error.message };
    }
};
