"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoute = (0, express_1.Router)();
userRoute.get('/auth', (req, res) => {
    res.send("oi");
});
exports.default = userRoute;
//# sourceMappingURL=userRoutes.js.map