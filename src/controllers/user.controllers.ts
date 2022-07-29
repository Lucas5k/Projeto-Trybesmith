import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/user.services';

class UserController {
  service: UserService;

  constructor(service: UserService = new UserService()) {
    this.service = service;
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const result = await this.service.create(user);

    return res.status(StatusCodes.CREATED).json({ token: result });
  };
}

export default UserController;
