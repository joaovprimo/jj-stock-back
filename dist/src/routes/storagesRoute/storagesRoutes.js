import { Router } from "express";
import { getInfoFromStorage } from "../../controllers/storageControllers/storageControllers.js";
const storageRoute = Router();
storageRoute.get("/:stockId", getInfoFromStorage);
export default storageRoute;
//# sourceMappingURL=storagesRoutes.js.map