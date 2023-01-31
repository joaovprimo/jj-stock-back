import { Router } from "express";
import { getProducts, getProductsById, getProductsByName, createProduct, deleteProduct } from "../../controllers/productControllers/productController.js";
import { productMiddleware } from "../../middleware/productMiddleware/productMiddleware.js";
const productsRoute = Router();

productsRoute.get('/:stock',getProducts);
productsRoute.get('/:id', getProductsById);
productsRoute.get('/find', getProductsByName);
productsRoute.post('/', productMiddleware, createProduct);
productsRoute.delete('/:id', deleteProduct);

export default productsRoute;