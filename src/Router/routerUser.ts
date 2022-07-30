import { Router } from 'express';
import UserController from '../controllers/user.controllers';
// import ValidationMiddle from '../services/middleValid';

const routerUser = Router();

const userController = new UserController();

routerUser.post('/', userController.create);

export default routerUser;
