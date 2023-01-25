"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const StoreContollers_js_1 = require("../../controllers/StoreControllers/StoreContollers.js");
const storeMiddleware_js_1 = require("../../middleware/storeMiddleware/storeMiddleware.js");
const storeRoute = (0, express_1.Router)();
storeRoute.post('/signup', storeMiddleware_js_1.signUpMiddleware, StoreContollers_js_1.signUpStore);
storeRoute.get('/login', StoreContollers_js_1.loginStore);
exports.default = storeRoute;
//# sourceMappingURL=storeRoutes.js.map