import { ProductsConfig } from "@/pages/api/products/db/products.utils";
import { UseFormReturn, UseFormWatch } from "react-hook-form";

export interface FormsDataProps {
    forms:FromsConfig;
    products?: ProductsConfig[];
}
export interface FromsConfig {
    title: string;
    general_form: EditProductConfig | CreateProductConfig | CreateOrderConfig;
    method: string;
}
//forms logic
export interface ClientFlieldsConfig {
    value: string;
    required: boolean;
    type: any;
}
export interface CustomInputForm {
    field: ClientFlieldsConfig;
    register: UseFormReturn<any>["register"];
    type: any;
    defaultValue?: string;
}
export interface GeneralFormsDataProps {
    data_forms: {
        form_title?: string;
        fields?: ClientFlieldsConfig[];
        product?: {
            title?: string;
            resume?: string;
        };
        addmore?: string;
        submit?: string;
    };
    products?: ProductsConfig[];
    method: string;
}
export type FormValues = { [key: string]: any };

//create order
export interface CreateOrderConfig {
    form_title: string;
    fields: ClientFlieldsConfig[];
    product: {
        title: string;
        resume: string;
    };
    addmore: string;
    submit: string;
}
// create product:
export interface CreateProductConfig
    extends Omit<CreateOrderConfig, "product" | "addmore"> { }

// edit product:
export interface EditProductConfig
    extends Omit<CreateOrderConfig, "product" | "addmore"> { }

// create order UITLS:



export const totalPrice = (purchase: ProductsConfig[]): number => {
    const total = purchase.reduce(
        (accumulator, item) => accumulator + item.price,
        0
    );
    return total;
};
export const totalTaxes = (purchase: ProductsConfig[]): number => {
    const total = purchase.reduce(
        (accumulator, item) => accumulator + item.taxes,
        0
    );
    return total;
};
export const totalOrder = (purchase: ProductsConfig[]): number => {
    const priceTotal = totalPrice(purchase);
    const taxesTotal = totalTaxes(purchase);
    const total = priceTotal + taxesTotal;
    return total;
};
