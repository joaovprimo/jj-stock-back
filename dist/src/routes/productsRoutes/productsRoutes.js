import { Router } from "express";
import { getProducts, getProductsById, getProductsByNumberRef, createProduct, deleteProduct } from "../../controllers/productControllers/productController.js";
import { productMiddleware } from "../../middleware/productMiddleware/productMiddleware.js";
const productsRoute = Router();
productsRoute.get('/:stock', getProducts);
productsRoute.get('/:id', getProductsById);
productsRoute.get('/:stock/findone', getProductsByNumberRef);
productsRoute.post('/:stockId', productMiddleware, createProduct);
productsRoute.delete('/:id', deleteProduct);
export default productsRoute;
//# sourceMappingURL=productsRoutes.js.map