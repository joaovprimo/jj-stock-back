import { Router } from "express";
import { getProducts, getProductsById, getProductsByName, createProduct } from "../../controllers/productControllers/productController.js";
import { productMiddleware } from "../../middleware/productMiddleware/productMiddleware.js";
const productsRoute = Router();
productsRoute.get('/', getProducts);
productsRoute.get('/:id', getProductsById);
productsRoute.get('/name', getProductsByName);
productsRoute.post('/', productMiddleware, createProduct);
export default productsRoute;
//# sourceMappingURL=productsRoutes.js.map