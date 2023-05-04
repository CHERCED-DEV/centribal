import { Application, Request, Response } from "express";
import jsonServer from "json-server";
import Product from "./db/products.model";
import { ProductsConfig, productHasAllKeys } from "./db/products.utils";

const PORT = process.env.PORT;
const productsApi: Application = jsonServer.create();

productsApi.get("api/products", async (req: Request, res: Response) => {
    const products: ProductsConfig | ProductsConfig[] = await Product.find();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(products);
});

productsApi.post("api/products", async (req: Request, res: Response) => {
    try {
        const incommingReq = req.body;
        const newProduct = new Product(incommingReq);
        if (productHasAllKeys(incommingReq)) {
            await newProduct.save();
            res.status(200).json({ success: "the product was save, success on data base" });
        } else {
            throw new Error("Product does not meet requirements");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while saving the product" });
    }
});

productsApi.put("api/products", async (req: Request, res: Response) => {
    try {
        const productId = req.body._id;
        const incommingReq = req.body;
        const { reference, name, description, price, taxes } = incommingReq;

        const productToUpdate = await Product.findById(productId);


        if (reference) {
            productToUpdate.reference = reference;
        }
        if (name) {
            productToUpdate.name = name;
        }
        if (description) {
            productToUpdate.description = description;
        }
        if (price) {
            productToUpdate.price = price;
        }
        if (taxes) {
            productToUpdate.taxes = taxes;
        }

        await productToUpdate.save();

        res.status(200).json({ success: "the product was updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while updating the product" });
    }
});

productsApi.delete("api/products", async (req: Request, res: Response) => {
    try {
        const id = req.body._id;
        await Product.deleteOne({ _id: id });
        res.status(200).json({ success: "the product was deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while deleting the product" });
    }
})

productsApi.listen(PORT, () => {
    console.log("running on port" + PORT);
});
