import { StatusCodes } from 'http-status-codes';
import connection from '../models/connection';
import Login from '../interfaces/login.interface';
import LoginModel from '../models/login.models';
import jwtCreate from './jwtServices';

class LoginService {
  public model: LoginModel;

  constructor(model = new LoginModel(connection)) {
    this.model = model;
  }

  ValidatedDataBase = async (data: Login) => {
    const { username, password } = data;
    if (!username) {
      return { code: StatusCodes.BAD_REQUEST, message: '"username" is required' };
    }

    if (!password) {
      return { code: StatusCodes.BAD_REQUEST, message: '"password" is required' };
    }
    const isValidUser = await this.model.validatedUser(data);
    const isValidPass = await this.model.validatedPass(data);
    
    if (!isValidUser?.length || !isValidPass?.length) {
      return { code: StatusCodes.UNAUTHORIZED, message: 'Username or password invalid' };
    }
  };

  public async returnToken(datas: Login): Promise<string> {
    const data = await this.model.validatedUser(datas);
    const token = jwtCreate(String(data));

    return token;
  } 
}

export default LoginService;