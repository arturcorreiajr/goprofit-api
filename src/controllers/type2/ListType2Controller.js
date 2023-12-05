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
exports.ListType2Controller = void 0;
const ListType2Service_1 = require("../../services/type2/ListType2Service");
class ListType2Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listType2Service = new ListType2Service_1.ListType2Service();
            const type2 = yield listType2Service.execute();
            return res.json(type2);
        });
    }
}
exports.ListType2Controller = ListType2Controller;
