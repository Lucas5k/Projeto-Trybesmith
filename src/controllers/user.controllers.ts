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
    const isValidNameAndClass = await this.service.isValidDateUsernameAndClasse(user);
    const isValidClassAndLev = await this.service.isValidDateClasseAndLevel(user);
    const isValidLevAndPass = await this.service.isValidDateLevelAndPass(user);

    if (isValidNameAndClass?.message) {
      return res.status(isValidNameAndClass.code).json({ message: isValidNameAndClass.message });
    }

    if (isValidClassAndLev?.message) {
      return res.status(isValidClassAndLev.code).json({ message: isValidClassAndLev.message });
    }

    if (isValidLevAndPass?.message) {
      return res.status(isValidLevAndPass.code).json({ message: isValidLevAndPass.message });
    }

    const result = await this.service.create(user);

    return res.status(StatusCodes.CREATED).json({ token: result });
  };
}

export default UserController;
