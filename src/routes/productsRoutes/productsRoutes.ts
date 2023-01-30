import { Router } from "express";
import { getProducts, getProductsById, getProductsByName } from "../../controllers/productControllers/productController.js";

const productsRoute = Router();

productsRoute.get('/',getProducts);
productsRoute.get('/:id', getProductsById);
productsRoute.get('/name', getProductsByName);

export default productsRoute;