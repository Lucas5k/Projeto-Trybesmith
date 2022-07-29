import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/product.services';

class ProductController {
  public service: ProductService;

  constructor(service: ProductService = new ProductService()) {
    this.service = service;
  }

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const createProducts = await this.service.create(product);

    return res.status(StatusCodes.CREATED).json(createProducts);
  };
}

export default ProductController;
