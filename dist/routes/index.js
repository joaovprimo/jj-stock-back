"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const storeRoutes_js_1 = __importDefault(require("./storeRoutes/storeRoutes.js"));
const Routes = (0, express_1.Router)();
Routes.use("/store", storeRoutes_js_1.default);
exports.default = Routes;
//# sourceMappingURL=index.js.map