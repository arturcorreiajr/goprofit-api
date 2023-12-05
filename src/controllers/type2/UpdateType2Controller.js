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
exports.UpdateType2Controller = void 0;
const UpdateType2Service_1 = require("../../services/type2/UpdateType2Service");
class UpdateType2Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, id_type1, name } = req.body;
            const updateType2Service = new UpdateType2Service_1.UpdateType2Service();
            const type2 = yield updateType2Service.execute({
                id,
                id_type1,
                name
            });
            return res.json(type2);
        });
    }
}
exports.UpdateType2Controller = UpdateType2Controller;
