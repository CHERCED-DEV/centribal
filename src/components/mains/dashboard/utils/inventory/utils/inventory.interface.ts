import { ProductsConfig } from "@/pages/api/products/db/products.utils";

export const deleteProduct = async (_id: string) => {
    try {
        const deleteProductResponse = await fetch("/api/products", {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ _id }),
        });

        if (deleteProductResponse.ok) {
            const deleteProductData = await deleteProductResponse.json();
            console.log(deleteProductData.success); // Mensaje de éxito
        } else {
            const errorData = await deleteProductResponse.json();
            console.error(errorData.error); // Mensaje de error
        }
    } catch (error) {
        console.error("An error occurred while deleting the product:", error);
    }
};

export interface UiInventoryConfig {
    th: {
        reference: string;
        name: string;
        description: string;
        price: string;
        taxes: string;
        edit: string;
        delete: string;
    };
}
export interface InventoryDataProps {
    ui_inventory: UiInventoryConfig;
    products: ProductsConfig[];
}
