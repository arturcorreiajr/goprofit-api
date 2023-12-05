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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateType2Service = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UpdateType2Service {
    execute({ id, id_type1, name }) {
        return __awaiter(this, void 0, void 0, function* () {
            name = name.toUpperCase();
            // verificar se ele enviou um email
            if (!name) {
                throw new Error("Name incorrect");
            }
            const type2 = yield prisma_1.default.type2.update({
                where: {
                    id: id
                },
                data: {
                    id: id,
                    id_type1: id_type1,
                    name: name,
                }
            });
            return type2;
        });
    }
}
exports.UpdateType2Service = UpdateType2Service;
