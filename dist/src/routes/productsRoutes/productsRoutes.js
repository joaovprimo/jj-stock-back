import { Router } from "express";
import { getProducts } from "../../controllers/productControllers/productController.js";
const productsRoute = Router();
productsRoute.get('/', getProducts);
export default productsRoute;
//# sourceMappingURL=productsRoutes.js.map