import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const SQL = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(SQL, [name, amount]);

    return { id: insertId, ...product };
  }

  public async getAll(): Promise<Product[]> {
    const [result] = await this.connection.execute('SELECT * FROM Trybesmith.Products');

    return result as Product[];
  }
}

export default ProductModel;
