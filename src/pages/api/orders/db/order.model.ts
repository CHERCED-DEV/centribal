import { Schema, models, model } from "mongoose";


const productSchema = new Schema(
    {
        _id: {
            type: String,
            required: false,
            default: 0,
        },
        reference: {
            type: String,
            required: [true, "Reference is required"],
            unique: false,
            trim: true,
            maxlength: [60, "Reference must be less than 60 characters"],
        },
        name: {
            type: String,
            required: [true, "Name is required"],
            unique: false,
            trim: true,
            maxlength: [60, "Name must be less than 60 characters"],
        },
        description: {
            type: String,
            required: [true, "Description is required"],
            unique: false,
            trim: true,
            maxlength: [400, "Description must be less than 400 characters"],
        },
        price: {
            type: Number,
            required: [true, "Price is required"],
        },
        taxes: {
            type: Number,
            required: [true, "Taxes is required"],
        },
        createdAt: {
            type: Date,
            required: false,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            required: false,
            default: Date.now,
        },

    }
);

const orderShema = new Schema(
    {
        client: {
            type: {
                name: {
                    type: String,
                    required: [true, "Client name is required"],
                    trim: true,
                    maxlength: [60, "Client name must be less than 60 characters"],
                },
                email: {
                    type: String,
                    required: [true, "Client email is required"],
                    trim: true,
                    maxlength: [100, "Client email must be less than 100 characters"],
                },
                phone: {
                    type: String,
                    required: [true, "Client phone is required"],
                    trim: true,
                    maxlength: [20, "Client phone must be less than 20 characters"],
                },
            },
            required: [true, "Client information is required"],
            unique: false,
        },
        orderNumber: {
            type: String,
            unique: false,
            required: [true, "Order number is required"],
        },
        order: [{
            type: productSchema,
            unique: false,
            required: [true, "Order must have at least one product"],
        }],
        delivered: {
            type: Boolean,
            unique: false,
            default: false,
        },
        paid: {
            type: Boolean,
            unique: false,
            default: false,
        },
        orderValue: {
            type: Number,
            unique: false,
            required: [true, "Order value is required"],
        },
        orderValueWithShipping: {
            type: Number,
            unique: false,
            required: [true, "Order value with shipping is required"],
        }
    },
    {
        timestamps: true, versionKey: false
    }
)

export default models.Order || model("Order", orderShema);