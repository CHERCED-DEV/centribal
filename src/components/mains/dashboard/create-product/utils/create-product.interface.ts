import { CreateOrderConfig } from "../../utils/create-order/util/create-order.interface";

export interface CreateProductConfig extends Omit<CreateOrderConfig, 'product' | 'addmore'> {}

export interface CreateProductDataProps {
    create_products: CreateProductConfig;
}