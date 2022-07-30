import { StatusCodes } from 'http-status-codes';
import connection from '../models/connection';
import Product from '../interfaces/product.interface';
import ProductModel from '../models/product.models';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  isValidDateName = (data: Product) => {
    const { name } = data;

    if (!name) return { code: StatusCodes.BAD_REQUEST, message: '"name" is required' };

    if (typeof name !== 'string') {
      return { code: StatusCodes.UNPROCESSABLE_ENTITY, message: '"name" must be a string' };
    }

    if (name.length < 2) {
      const error = { code: StatusCodes.UNPROCESSABLE_ENTITY, 
        message: '"name" length must be at least 3 characters long' };
      return error;
    }
  };

  isValidDateAmount = (data: Product) => {
    const { amount } = data;

    if (!amount) return { code: StatusCodes.BAD_REQUEST, message: '"amount" is required' };

    if (typeof amount !== 'string') {
      return { code: StatusCodes.UNPROCESSABLE_ENTITY, message: '"amount" must be a string' };
    }

    if (amount.length < 2) {
      const error = { code: StatusCodes.UNPROCESSABLE_ENTITY, 
        message: '"amount" length must be at least 3 characters long' };
      return error;
    }
  };

  public create(product: Product): Promise<Product> {
    return this.model.create(product);
  }

  public async getAll(): Promise<Product[]> {
    const result = await this.model.getAll();

    return result as Product[];
  }
}

export default ProductService;
