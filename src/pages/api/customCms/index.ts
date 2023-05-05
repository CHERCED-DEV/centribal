// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Application, Request, Response } from "express";
import { CMS } from "./db/CMS";

const jsonServer = require("json-server");

const cors = require("cors");
const customCmsApi: Application = jsonServer.create();

customCmsApi.get("/api/customCms", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(CMS);
});

customCmsApi.use(cors({ origin: process.env.VERCEL_URL_CORS }));

export default customCmsApi;
