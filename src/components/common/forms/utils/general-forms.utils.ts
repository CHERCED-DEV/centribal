import { ProductsConfig } from "@/pages/api/products/db/products.utils";
import { UseFormReturn, UseFormWatch } from "react-hook-form";

export interface FromsConfig {
    forms: {
        edit_product?: {
            title: string,
            general_form: EditProductDataProps; 
            method: string; 
        },
        create_products?:{
            title: string,
            general_form: CreateProductDataProps;
            method: string;  
        },
        create_order?: {
            title: string,
            general_form: CreateOrderDataProps;
            method: string;
        },        
    }
}
export interface EditProductForm {
    title: string;
    general_form: EditProductDataProps;
    method: string;
  }
  
  export interface CreateProductForm {
    title: string;
    general_form: CreateProductDataProps;
    method: string;
  }
  
  export interface CreateOrderForm {
    title: string;
    general_form: CreateOrderDataProps;
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
    register: UseFormReturn<any>['register'];
    type: any;
}
export interface GeneralFormsDataProps {
    data_forms: {
        form_title?: string;
        fields?: ClientFlieldsConfig[];
        product?: {
            title?: string,
            resume?: string,
        }
        addmore?: string;
        submit?: string;
    }
    products?: ProductsConfig[];
    method: string;
}
export type FormValues = { [key: string]: any };

//create order
export interface CreateOrderConfig {
    form_title: string;
    fields: ClientFlieldsConfig[];
    product: {
        title: string,
        resume: string,
    }
    addmore: string;
    submit: string;
}
export interface CreateOrderDataProps {
    create_order: CreateOrderConfig;
    products: ProductsConfig[];
}


// create product: 
export interface CreateProductConfig extends Omit<CreateOrderConfig, 'product' | 'addmore'> {}
export interface CreateProductDataProps {
    create_products: CreateProductConfig;
}

// edit product:
export interface EditProductConfig extends Omit<CreateOrderConfig, 'product' | 'addmore'> {}
export interface EditProductDataProps {
    edit_products: EditProductConfig;
}


// create order UITLS: 

export const handleAddToPurchase = (watch: UseFormWatch<any>, products: ProductsConfig[], setPurchase: React.Dispatch<React.SetStateAction<ProductsConfig[]>>) => {
    const selectedProduct = watch('product');
    const productToAdd = products?.find((product) => product._id === selectedProduct);
    if (productToAdd) {
        setPurchase((prevPurchase) => [...prevPurchase, productToAdd]);
    }
};

export const totalPrice = (purchase:ProductsConfig[]): number => {
    const total = purchase.reduce((accumulator, item) => accumulator + item.price, 0);
    return total;
};
export const totalTaxes = (purchase:ProductsConfig[]): number => {
    const total = purchase.reduce((accumulator, item) => accumulator + item.taxes, 0);
    return total;
}
export const totalOrder = (purchase: ProductsConfig[]): number => {
    const priceTotal = totalPrice(purchase);
    const taxesTotal = totalTaxes(purchase);
    const total = priceTotal + taxesTotal;
    return total;
};