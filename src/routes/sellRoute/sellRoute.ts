import { Router } from "express";
import { postSell, getSell } from "../../controllers/sellControllers/sellControllers.js";
import { sellMiddleware } from "../../middleware/sellMiddleware/sellMiddleware.js";

const sellRoute = Router();

sellRoute.post("/:stockId", sellMiddleware , postSell);
sellRoute.get('/', getSell)

export default sellRoute;