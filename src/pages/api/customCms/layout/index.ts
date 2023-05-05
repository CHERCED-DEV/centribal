// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Application, Request, Response } from "express";
import { layout } from "./db/layout";

const jsonServer = require("json-server");

const cors = require("cors");
const layoutApi: Application = jsonServer.create();

layoutApi.get("/api/customCms/layout", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(layout);
});

layoutApi.use(cors({ origin: process.env.VERCEL_URL_CORS }));

export default layoutApi;