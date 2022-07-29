import connection from '../models/connection';
import Order from '../interfaces/orders.interface';
import OrderModel from '../models/order.models';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.model.getAll();

    return result;
  }
}

export default OrderService;
