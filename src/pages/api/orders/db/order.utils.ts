import { ProductsConfig } from "../../products/db/products.utils";

export interface OrdersConfig {
    _id?: string;
    client: {
        name: string;
        email: string;
        phone: string;
    };
    orderNumber: string;
    order: ProductsConfig[];
    delivered: boolean;
    paid: boolean;
    orderValue: number;
    orderValueWithShipping: number;
    createdAt?: Date;
	updatedAt?: Date;
}

export function productHasAllKeys(product: any): product is OrdersConfig {
    const requiredKeys: (keyof OrdersConfig)[] = [
        'client',
        'orderNumber',
        'order',
        'delivered',
        'paid',
        'orderValue',
        'orderValueWithShipping'
    ];
  
    return requiredKeys.every(key => key in product);
  }