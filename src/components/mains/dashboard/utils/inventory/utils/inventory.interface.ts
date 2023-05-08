import { ProductsConfig } from "@/pages/api/products/db/products.utils";

export interface UiInventoryConfig {
    th: {
        reference: string;
        name: string;
        description: string;
        price: string;
        taxes: string;
    }
}
export interface InventoryDataProps {
    ui_inventory: UiInventoryConfig;
    products: ProductsConfig[]
}