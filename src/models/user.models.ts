import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<User> {
    const { username, classe, level, password } = user;

    const SQL = `INSERT INTO Trybesmith.Users 
    (username, classe, level, password) VALUES (?, ?, ?, ?)`;

    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(SQL, [username, classe, level, password]);

    return { id: insertId, ...user };
  }
}

export default UserModel;
