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

    const isValidName = await this.service.isValidDateName(product);
    const isValidAmount = await this.service.isValidDateAmount(product);

    if (isValidName?.message) {
      return res.status(isValidName.code).json({ message: isValidName.message });
    }

    if (isValidAmount?.message) {
      return res.status(isValidAmount.code).json({ message: isValidAmount.message });
    }

    const createProducts = await this.service.create(product);

    return res.status(StatusCodes.CREATED).json(createProducts);
  };

  public getAll = async (_req: Request, res: Response) => {
    const result = await this.service.getAll();

    res.status(StatusCodes.OK).json(result);
  };
}

export default ProductController;
