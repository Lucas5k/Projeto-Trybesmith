import connection from '../models/connection';
import User from '../interfaces/user.interface';
import jwtCreate from './jwtServices';
import UserModel from '../models/user.models';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create(user: User): string {
    const result = this.model.create(user);

    const token = jwtCreate(String(result));

    return token;
  }
}

export default UserService;