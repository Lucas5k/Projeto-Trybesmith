import connection from '../models/connection';
import Product from '../interfaces/product.interface';
import ProductModel from '../models/product.models';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create(product: Product): Promise<Product> {
    return this.model.create(product);
  }
}

export default ProductService;
