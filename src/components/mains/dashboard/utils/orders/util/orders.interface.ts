export interface UIOrdersConfig {
    client: string;
    num_order: string;
    name_article: {
        title: string;
        art: string;
    }
    delivered: string;
    paid: string;
    order_value: string;
    order_value_shipping: string;
}

export interface UIOrdersDataProps {
    ui_orders: UIOrdersConfig;
}