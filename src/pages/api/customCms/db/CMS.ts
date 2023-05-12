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
                        title: "Summary:",
                        art: "Article",
                    },
                    delivered: "Delivered",
                    paid: "Paid",
                    order_value: "Order Value",
                    order_value_shipping: "Order Value (with Shipping)",
                },
                inventory: {
                    th: {
                        reference: "Reference",
                        name: "Name",
                        description: "Description",
                        price: "Price",
                        taxes: "Taxes",
                        edit: "Edit",
                        delete: "Delete",
                    },
                },
                create_order: {
                    title: "Create Order",
                    general_form: {
                        form_title: "Order Form",
                        fields: [
                            {
                                value: "Name",
                                required: true,
                                type:"text"
                            },
                            {
                                value: "Email",
                                required: true,
                                type:"text"
                            },
                            {
                                value: "Phone",
                                required: true,
                                type:"number"
                            },
                        ],
                        product: {
                            title: "Products",
                            resume: "Order Resume",
                        },
                        addmore: "Add",
                        submit: "Submit",
                    },
                    method: 'POST'                   
                },
            },
        },
    },
    create_products: {
        title: "Create Product",
        general_form: {
            form_title: "Products Form",
            fields: [
                {
                    value: "reference",
                    required: true,
                    type:"text"
                },
                {
                    value: "name",
                    required: true,
                    type:"text"
                },
                {
                    value: "description",
                    required: true,
                    type:"text"
                },
                {
                    value: "price",
                    required: true,
                    type:"number"
                },
                {
                    value: "taxes",
                    required: true,
                    type:"number"
                },
            ],
            submit: "Send"
        },
        method: 'POST'
    },
};
