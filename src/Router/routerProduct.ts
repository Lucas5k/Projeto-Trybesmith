import { Router } from 'express';
import ProductController from '../controllers/product.controllers';

const router = Router();

const productController = new ProductController();

router.get('/', productController.getAll);
router.post('/', productController.create);

export default router;
