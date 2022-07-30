import { StatusCodes } from 'http-status-codes';
import connection from '../models/connection';
import User from '../interfaces/user.interface';
import jwtCreate from './jwtServices';
import UserModel from '../models/user.models';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  isValidDateUsernameAndClasse = (data: User) => {
    const { username, classe } = data;
    const usernameString = typeof username !== 'string';

    if (!username) return { code: StatusCodes.BAD_REQUEST, message: '"username" is required' };

    if (usernameString) return { code: 422, message: '"username" must be a string' };

    if (username.length <= 2) {
      const error = { code: StatusCodes.UNPROCESSABLE_ENTITY, 
        message: '"username" length must be at least 3 characters long' };
      return error;
    }

    if (!classe) return { code: StatusCodes.BAD_REQUEST, message: '"classe" is required' };
  };

  isValidDateClasseAndLevel = (data: User) => {
    const { classe, level } = data;
    const classString = typeof classe !== 'string';
    const messages = '"level" must be greater than or equal to 1';

    if (level <= 0) return { code: 422, message: messages };

    if (!level) return { code: StatusCodes.BAD_REQUEST, message: '"level" is required' };

    if (classString) return { code: 422, message: '"classe" must be a string' };

    if (classe.length <= 2) {
      const error = { code: StatusCodes.UNPROCESSABLE_ENTITY, 
        message: '"classe" length must be at least 3 characters long' };
      return error;
    }
  };

  isValidDateLevelAndPass = (data: User) => {
    const { level, password } = data;
    const passString = typeof password !== 'string';
    const levelNumber = typeof level !== 'number';

    if (levelNumber) return { code: 422, message: '"level" must be a number' };

    if (!password) return { code: StatusCodes.BAD_REQUEST, message: '"password" is required' };

    if (passString) return { code: 422, message: '"password" must be a string' };

    if (password.length <= 8) {
      return { code: 422, message: '"password" length must be at least 8 characters long' };
    }
  };

  public create(user: User): string {
    const result = this.model.create(user);

    const token = jwtCreate(String(result));

    return token;
  }
}

export default UserService;