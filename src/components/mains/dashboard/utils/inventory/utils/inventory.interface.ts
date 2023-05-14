import { ProductsConfig } from "@/pages/api/products/db/products.utils";
import { NextRouter } from "next/router";
import swal from "sweetalert";

export const deleteProduct = async (_id: string, router:NextRouter) => {
    try {
        const deleteProductResponse = await fetch("/api/products", {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ _id }),
        });
        if (deleteProductResponse.ok) {
            const deleteProductData = await deleteProductResponse.json();
            swal({
                title: "Sent!",
                text: "Thank you for your request!",
                icon: "success",
            });
            console.log(deleteProductData.success); // Mensaje de éxito
            setTimeout(() => {
                router.push(router.asPath); 
            }, 1500);
        } else {
            swal({
                title: "Error",
                text: "There was an error sending your request. Please try again later.",
                icon: "error",
            });
            throw new Error("Hubo un error al obtener los datos");
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
