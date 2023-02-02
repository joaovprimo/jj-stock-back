import { Router } from "express";
import { postSell } from "../../controllers/sellControllers/sellControllers.js";
import { sellMiddleware } from "../../middleware/sellMiddleware/sellMiddleware.js";

const sellRoute = Router();

sellRoute.post("/:stockId", sellMiddleware , postSell);

export default sellRoute;