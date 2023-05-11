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
                    src: "/assets/imgs/omni.svg",
                    alt: "manage your bussines",
                    width: 128,
                    height: 128,
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
                        taxes: 'Taxes',
                        edit: 'Edit',
                        delete: 'Delete'
                    }
                },
                create_order: {
                    title: "Create Order",
                    form_title: "Order Form",             
                    fields:[
                        {
                            value: "Name",
                            required: true
                        },
                        {
                            value: "Email",
                            required: true
                        },
                        {
                            value: "Phone",
                            required: true
                        },
                    ],
                    product: {
                        title: "Products",
                        resume: "Order Resume"
                    },
                    addmore: "Add",
                    submit: "Submit",
                }
            },
        },
    },
};
