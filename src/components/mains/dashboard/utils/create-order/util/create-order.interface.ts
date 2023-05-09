import { ProductsConfig } from "@/pages/api/products/db/products.utils";
import { UseFormReturn } from "react-hook-form";

export interface ClientFlieldsConfig {
    value: string;
    required: boolean;
}

export interface CreateOrderConfig {
    title: string;
    form_title: string;
    fields: ClientFlieldsConfig[];
    product: {
        title: string,
        resume: string,
    }
    addmore: string;
    submit: string;
}

export interface CustomInputForm {
    field: ClientFlieldsConfig;
    register: UseFormReturn<any>['register'];
}

export interface PurchaseConfig { }
export interface CreateOrderContainerDataProps {
    create_order: CreateOrderConfig;
    products: ProductsConfig[];
}

export interface CreateOrderDataProps {
    client: CreateOrderConfig;
    products: ProductsConfig[];
}
