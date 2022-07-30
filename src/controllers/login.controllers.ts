import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import LoginService from '../services/login.services';

class LoginController {
  public service: LoginService;

  constructor(service: LoginService = new LoginService()) {
    this.service = service;
  }

  public Validated = async (req: Request, res: Response) => {
    const login = req.body;
    const isValid = await this.service.ValidatedDataBase(login);

    if (isValid?.message) {
      return res.status(isValid.code).json({ message: isValid.message });
    }
    const result = await this.service.returnToken(login);

    return res.status(StatusCodes.OK).json({ token: result });
  };
}

export default LoginController;
