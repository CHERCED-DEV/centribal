import { CmsStaticConfig } from "./utils.interface";

export const CMS: CmsStaticConfig = {
    dashboard: {
        aside: {
            title: "DashBoard",
            options: ["Orders", "Inventory", "New order"],
        },
        portal: {
            img: {
                src: "",
                alt: "",
                width: 0,
                height: 0,
            },
            title: "Manage your business",
            welcome: {
                img: {
                    src: "",
                    alt: "",
                    width: 0,
                    height: 0,
                },
                label: "Happy",
            },
            components: {
                orders: {
                    client: "Client",
                    num_order: "Order Number",
                    name_article: {
                        title: "Article Name",
                        art: "Article",
                    },
                    delivered: "Delivered",
                    paid: "Paid",
                    order_value: "Order Value",
                    order_value_shipping: "Order Value (with Shipping)",
                },
                inventory: {
                    th: {
                        reference: 'Reference',
                        name: 'Name',
                        description: 'Description',
                        price: 'Price',
                        taxes: 'Taxes'
                    }
                },
                create_order: {
                    title: "Create Order",
                    form_title: "Order Form",
                    form_client: {
                        name: "Name",
                        email: "Email",
                        phone: "Phone",
                        product: "Product",
                        orderValue: "Order Value",
                        orderValueWithShipping: "Order Value with Shipping"
                    },
                    fields: {
                        name: {
                            value: "Name",
                            required: true
                        },
                        email: {
                            value: "Email",
                            required: true
                        },
                        phone: {
                            value: "Phone",
                            required: true
                        },
                        product: {
                            required: true
                        },
                        orderValue: {
                            value: "Order Value",
                            required: true
                        },
                        orderValueWithShipping: {
                            value: "Order Value with Shipping",
                            required: true
                        }
                    },
                    submit: "Submit",
                }
            },
        },
    },
};
