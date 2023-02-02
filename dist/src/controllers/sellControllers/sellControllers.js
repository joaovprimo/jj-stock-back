var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import httpStatus from "http-status";
import serviceSellFunctions from "../../services/sellServices/sellServices.js";
function postSell(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, quantity, value, sellDate, size } = res.locals.sell;
        const { stockId } = req.params;
        const stock = Number(stockId);
        let quant = Number(quantity);
        console.log(name, quant, stock);
        try {
            const sell = yield serviceSellFunctions.sellPostService(name, quant, value, sellDate, size, stock);
            return res.status(httpStatus.OK).send(sell);
        }
        catch (error) {
            if (error.name === "NotFoundError") {
                return res.sendStatus(httpStatus.NOT_FOUND);
            }
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }
    });
}
export { postSell };
//# sourceMappingURL=sellControllers.js.map