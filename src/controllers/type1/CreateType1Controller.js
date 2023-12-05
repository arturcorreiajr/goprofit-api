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
exports.CreateType1Controller = void 0;
const CreateType1Service_1 = require("../../services/type1/CreateType1Service");
class CreateType1Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.body;
            const createType1Service = new CreateType1Service_1.CreateType1Service();
            const type1 = yield createType1Service.execute({
                name,
            });
            return res.json(type1);
        });
    }
}
exports.CreateType1Controller = CreateType1Controller;
