import { Application, Request, Response } from "express";
import Order from "./db/order.model";
import { OrdersConfig, productHasAllKeys } from "./db/order.utils";
import { dbConnect } from "@/utils/db/mongoose";

const jsonServer = require("json-server");
const cors = require("cors");
dbConnect();

const ordersApi: Application = jsonServer.create();

ordersApi.get("/api/orders", async (req: Request, res: Response) => {
    const orders: OrdersConfig | OrdersConfig[] = await Order.find();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(orders);
});

ordersApi.post("/api/orders", async (req: Request, res: Response) => {
    try {
        const incomingReq = req.body;
        const newOrder = new Order(incomingReq);
        if (productHasAllKeys(incomingReq)) {
            await newOrder.save();
            res
                .status(200)
                .json({ success: "The order was saved successfully in the database" });
        } else {
            throw new Error("Order does not meet requirements");
        }
    } catch (error: any) {
        console.error(error);
        res
            .status(500)
            .json({
                error: "An error occurred while saving the order",
                errorMessage: error.message,
            });
    }
});

ordersApi.put("/api/orders", async (req: Request, res: Response) => {
    try {
        const orderId = req.body._id;
        const incomingReq = req.body;
        const {
            client,
            orderNumber,
            order,
            delivered,
            paid,
            orderValue,
            orderValueWithShipping,
        } = incomingReq;

        const orderToUpdate = await Order.findById(orderId);

        if (client) {
            orderToUpdate.client = client;
        }
        if (orderNumber) {
            orderToUpdate.orderNumber = orderNumber;
        }
        if (order) {
            orderToUpdate.order = order;
        }
        if (delivered) {
            orderToUpdate.delivered = delivered;
        }
        if (paid) {
            orderToUpdate.paid = paid;
        }
        if (orderValue) {
            orderToUpdate.orderValue = orderValue;
        }
        if (orderValueWithShipping) {
            orderToUpdate.orderValueWithShipping = orderValueWithShipping;
        }
        if (productHasAllKeys(incomingReq)) {
            await orderToUpdate.save();
            res.status(200).json({ success: "The order was updated successfully" });
        } else {
            throw new Error("Order does not meet requirements");
        }        
    } catch (error: any) {
        console.error(error);
        res
            .status(500)
            .json({
                error: "An error occurred while saving the order",
                errorMessage: error.message,
            });
    }
});

ordersApi.delete("/api/orders", async (req: Request, res: Response) => {
    try {
        const id = req.body._id;
        await Order.deleteOne({ _id: id });
        res.status(200).json({ success: "The order was deleted successfully" });
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ error: "An error occurred while deleting the order" });
    }
});

ordersApi.use(cors({ origin: process.env.VERCEL_URL_CORS }));

export default ordersApi;
