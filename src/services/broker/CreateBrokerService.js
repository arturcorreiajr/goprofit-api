"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.CreateBrokerService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const util = __importStar(require("../../util"));
class CreateBrokerService {
    execute({ name, color }) {
        return __awaiter(this, void 0, void 0, function* () {
            name = name.toUpperCase();
            // verificar se ele enviou um email
            if (!name) {
                throw new Error("Name incorrect");
            }
            //Verificar se esse email já está cadastrado na plataforma
            const brokerAlreadyExists = yield prisma_1.default.broker.findFirst({
                where: {
                    name: name
                }
            });
            if (brokerAlreadyExists) {
                console.log(util.getTimeStamp() + ' [ WARNING ] - [ GOP-008 ] Broker "' + name + '" already exists!');
                throw new Error("[ GOP-008 ] - Broker already exists!");
            }
            const broker = yield prisma_1.default.broker.create({
                data: {
                    name: name,
                    color: color
                },
                select: {
                    id: true,
                    name: true,
                    color: true
                }
            });
            console.log(util.getTimeStamp() + ' [ INFO ] - Broker "' + broker.name + '","' + broker.color + '" has been added!');
            return broker;
        });
    }
}
exports.CreateBrokerService = CreateBrokerService;
