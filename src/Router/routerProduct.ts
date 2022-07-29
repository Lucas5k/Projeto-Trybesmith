import { Router } from 'express';
import ProductController from '../controllers/product.controllers';

const router = Router();

const productController = new ProductController();

router.post('/', productController.create);
router.get('/:id', productController.getAll);

export default router;
