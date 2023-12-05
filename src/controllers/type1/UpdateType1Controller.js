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
exports.UpdateType1Controller = void 0;
const UpdateType1Service_1 = require("../../services/type1/UpdateType1Service");
class UpdateType1Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name } = req.body;
            const updateType1Service = new UpdateType1Service_1.UpdateType1Service();
            const type1 = yield updateType1Service.execute({
                id,
                name
            });
            return res.json(type1);
        });
    }
}
exports.UpdateType1Controller = UpdateType1Controller;
