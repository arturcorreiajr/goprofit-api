import { Router } from 'express';
import multer from 'multer';

import { isAuthenticated } from './middlewares/isAuthenticated'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailuserController } from './controllers/user/DetailUserController'
import { GetDetailuserController } from './controllers/user/GetDetailUserController'
import { ListUserController } from './controllers/user/ListUserController'
import { UpdateUserController } from './controllers/user/UpdateUserController'

import { CreateBrokerController } from './controllers/broker/CreateBrokerController'
import { ListBrokerController } from './controllers/broker/ListBrokerController'
import { DetailBrokerController } from './controllers/broker/DetailBrokerController'
import { UpdateBrokerController } from './controllers/broker/UpdateBrokerController'

import { CreateType1Controller } from './controllers/type1/CreateType1Controller'
import { ListType1Controller } from './controllers/type1/ListType1Controller'
import { DetailType1Controller } from './controllers/type1/DetailType1Controller'
import { UpdateType1Controller } from './controllers/type1/UpdateType1Controller'

import { CreateType2Controller } from './controllers/type2/CreateType2Controller'
import { ListType2Controller } from './controllers/type2/ListType2Controller'
import { DetailType2Controller } from './controllers/type2/DetailType2Controller'
import { UpdateType2Controller } from './controllers/type2/UpdateType2Controller'


import uploadConfig from './config/multer'
 
const router = Router();

const upload = multer(uploadConfig.upload("./src/var/public/user/avatar"));

// //-- ROTAS USER --
router.post('/users', new CreateUserController().handle)
router.get('/users', isAuthenticated, new ListUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated,  new DetailuserController().handle )
router.post('/user', isAuthenticated,  new GetDetailuserController().handle )
router.post('/profile', isAuthenticated, upload.single('file'), new UpdateUserController().handle )

//-- ROTAS broker
router.post('/brokers', isAuthenticated, new CreateBrokerController().handle )
router.get('/brokers', isAuthenticated, new ListBrokerController().handle )
router.post('/broker', isAuthenticated, new DetailBrokerController().handle )
router.post('/broker/update', isAuthenticated, new UpdateBrokerController().handle )

//-- ROTAS type1
router.post('/type1s', isAuthenticated, new CreateType1Controller().handle )
router.get('/type1s', isAuthenticated, new ListType1Controller().handle )
router.post('/type1', isAuthenticated, new DetailType1Controller().handle )
router.post('/type1/update', isAuthenticated, new UpdateType1Controller().handle )

//-- ROTAS type2
router.post('/type2s', isAuthenticated, new CreateType2Controller().handle )
router.get('/type2s', isAuthenticated, new ListType2Controller().handle )
router.post('/type2', isAuthenticated, new DetailType2Controller().handle )
router.post('/type2/update', isAuthenticated, new UpdateType2Controller().handle )




export { router }; 