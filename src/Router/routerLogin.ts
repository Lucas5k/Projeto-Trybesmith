import { Router } from 'express';
import LoginController from '../controllers/login.controllers';

const routerLogin = Router();

const loginController = new LoginController();

routerLogin.post('/', loginController.Validated);

export default routerLogin;