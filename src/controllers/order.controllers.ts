import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrderService from '../services/order.services';

class OrderController {
  service: OrderService;

  constructor(service: OrderService = new OrderService()) {
    this.service = service;
  }

  public getAll = async (_req: Request, res: Response) => {
    const result = await this.service.getAll();

    return res.status(StatusCodes.OK).json(result);
  };
}

export default OrderController;
