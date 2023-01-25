"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testeMid = void 0;
function testeMid(req, res, next) {
    let { name, email, password, storesId } = req.body;
    console.log(name);
}
exports.testeMid = testeMid;
//# sourceMappingURL=midtesting.js.map