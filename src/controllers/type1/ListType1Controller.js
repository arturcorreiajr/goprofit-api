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
exports.ListType1Controller = void 0;
const ListType1Service_1 = require("../../services/type1/ListType1Service");
class ListType1Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listType1Service = new ListType1Service_1.ListType1Service();
            const type1 = yield listType1Service.execute();
            return res.json(type1);
        });
    }
}
exports.ListType1Controller = ListType1Controller;
