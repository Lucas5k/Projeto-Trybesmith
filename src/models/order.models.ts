import { Pool } from 'mysql2/promise';
import Order from '../interfaces/orders.interface';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const SQL = `SELECT Ord.id, Ord.userId, JSON_ARRAYAGG(Pro.id) AS productsIds 
    FROM Trybesmith.Products AS Pro
    INNER JOIN Trybesmith.Orders AS Ord 
    ON Ord.id = Pro.orderId GROUP BY Ord.id ORDER BY Ord.userId;`;
    const [result] = await this.connection.execute(SQL);

    return result as Order[];
  }
}

export default OrderModel;
