import { Router } from 'express';
import ProductController from '../controllers/product.controllers';

const routerProduct = Router();

const productController = new ProductController();

routerProduct.get('/', productController.getAll);
routerProduct.post('/', productController.create);
export default routerProduct;
