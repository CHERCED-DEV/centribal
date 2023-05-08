import { ProductsConfig } from "@/pages/api/products/db/products.utils";

export interface ClientFlieldsConfig {
    name: {
        value: string;
        required: boolean;
    };
    email: {
        value: string;
        required: boolean;
    };
    phone: {
        value: string;
        required: boolean;
    };
    product: {
        required: boolean;
    };
    orderValue: {
        value: string;
        required: boolean;
    };
    orderValueWithShipping: {
        value: string;
        required: boolean;
    };
}

export interface CreateOrderConfig {
    title: string;
    form_title: string;
    form_client: {
        name: string;
        email: string;
        phone: string;
        product: string;
        orderValue: string;
        orderValueWithShipping: string;
    }
    addmore: string;
    fields: ClientFlieldsConfig;
    submit: string;
}

export interface PurchaseConfig {
    
}
export interface CreateOrderContainerDataProps {
    create_order: CreateOrderConfig;
    products: ProductsConfig[];
}

export interface CreateOrderDataProps {
    client: CreateOrderConfig;
    products: ProductsConfig[];
}
