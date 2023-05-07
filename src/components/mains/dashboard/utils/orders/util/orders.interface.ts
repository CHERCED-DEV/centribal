export interface OrdersConfig {
    client: string;
    num_order: number;
    name_article: {
        title: string;
        art: string;
    }
    delivered: string;
    paid: string;
    order_value: string;
    order_value_shipping: string;
}

export interface OrdersDataProps {
    order: OrdersConfig;
}