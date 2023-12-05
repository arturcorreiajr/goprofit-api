"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailType1Controller = void 0;
const DetailType1Service_1 = require("../../services/type1/DetailType1Service");
class DetailType1Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.body.id;
            const detailType1Service = new DetailType1Service_1.DetailType1Service();
            const response = yield detailType1Service.execute(id);
            return res.json(response);
        });
    }
}
exports.DetailType1Controller = DetailType1Controller;
