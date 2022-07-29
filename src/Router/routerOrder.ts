import { Router } from 'express';
import OrderController from '../controllers/order.controllers';

const routerOrder = Router();

const orderController = new OrderController();

routerOrder.get('/', orderController.getAll);

export default routerOrder;