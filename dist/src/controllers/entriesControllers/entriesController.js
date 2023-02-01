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
import serviceEntryFunctions from "../../services/entryServices/entryServices.js";
function postEntry(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, quantity, fiscalNote, receiveDate, provider, size } = res.locals.entries;
        const { stockId } = req.params;
        const stock = Number(stockId);
        let quant = Number(quantity);
        try {
            const entry = yield serviceEntryFunctions.entryPostService(name, quant, fiscalNote, receiveDate, provider, size, stock);
            return res.status(httpStatus.OK).send(entry);
        }
        catch (error) {
            if (error.name === "NotFoundError") {
                return res.sendStatus(httpStatus.NOT_FOUND);
            }
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }
    });
}
export { postEntry };
//# sourceMappingURL=entriesController.js.map