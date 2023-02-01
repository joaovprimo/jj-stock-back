import { Router } from "express";
import { entriesMiddleware } from "../../middleware/entriesMiddleware/entriesMiddleware.js";
import { postEntry } from "../../controllers/entriesControllers/entriesController.js";
const entriesRoute = Router();
entriesRoute.post('/:stockId', entriesMiddleware, postEntry);
export default entriesRoute;
//# sourceMappingURL=entriesRoute.js.map