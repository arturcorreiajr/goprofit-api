"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const GetDetailUserController_1 = require("./controllers/user/GetDetailUserController");
const ListUserController_1 = require("./controllers/user/ListUserController");
const UpdateUserController_1 = require("./controllers/user/UpdateUserController");
const CreateBrokerController_1 = require("./controllers/broker/CreateBrokerController");
const ListBrokerController_1 = require("./controllers/broker/ListBrokerController");
const DetailBrokerController_1 = require("./controllers/broker/DetailBrokerController");
const UpdateBrokerController_1 = require("./controllers/broker/UpdateBrokerController");
const CreateType1Controller_1 = require("./controllers/type1/CreateType1Controller");
const ListType1Controller_1 = require("./controllers/type1/ListType1Controller");
const DetailType1Controller_1 = require("./controllers/type1/DetailType1Controller");
const UpdateType1Controller_1 = require("./controllers/type1/UpdateType1Controller");
const CreateType2Controller_1 = require("./controllers/type2/CreateType2Controller");
const ListType2Controller_1 = require("./controllers/type2/ListType2Controller");
const DetailType2Controller_1 = require("./controllers/type2/DetailType2Controller");
const UpdateType2Controller_1 = require("./controllers/type2/UpdateType2Controller");
const multer_2 = __importDefault(require("./config/multer"));
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./src/var/public/user/avatar"));
// //-- ROTAS USER --
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.get('/users', isAuthenticated_1.isAuthenticated, new ListUserController_1.ListUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/me', isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailuserController().handle);
router.post('/user', isAuthenticated_1.isAuthenticated, new GetDetailUserController_1.GetDetailuserController().handle);
router.post('/profile', isAuthenticated_1.isAuthenticated, upload.single('file'), new UpdateUserController_1.UpdateUserController().handle);
//-- ROTAS broker
router.post('/brokers', isAuthenticated_1.isAuthenticated, new CreateBrokerController_1.CreateBrokerController().handle);
router.get('/brokers', isAuthenticated_1.isAuthenticated, new ListBrokerController_1.ListBrokerController().handle);
router.post('/broker', isAuthenticated_1.isAuthenticated, new DetailBrokerController_1.DetailBrokerController().handle);
router.post('/broker/update', isAuthenticated_1.isAuthenticated, new UpdateBrokerController_1.UpdateBrokerController().handle);
//-- ROTAS type1
router.post('/type1s', isAuthenticated_1.isAuthenticated, new CreateType1Controller_1.CreateType1Controller().handle);
router.get('/type1s', isAuthenticated_1.isAuthenticated, new ListType1Controller_1.ListType1Controller().handle);
router.post('/type1', isAuthenticated_1.isAuthenticated, new DetailType1Controller_1.DetailType1Controller().handle);
router.post('/type1/update', isAuthenticated_1.isAuthenticated, new UpdateType1Controller_1.UpdateType1Controller().handle);
//-- ROTAS type2
router.post('/type2s', isAuthenticated_1.isAuthenticated, new CreateType2Controller_1.CreateType2Controller().handle);
router.get('/type2s', isAuthenticated_1.isAuthenticated, new ListType2Controller_1.ListType2Controller().handle);
router.post('/type2', isAuthenticated_1.isAuthenticated, new DetailType2Controller_1.DetailType2Controller().handle);
router.post('/type2/update', isAuthenticated_1.isAuthenticated, new UpdateType2Controller_1.UpdateType2Controller().handle);
