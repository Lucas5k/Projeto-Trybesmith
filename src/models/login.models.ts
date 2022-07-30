import { Pool } from 'mysql2/promise';
import Login from '../interfaces/login.interface';

class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async validatedUser(data: Login): Promise<Login[] | null> {
    const { username } = data;

    const SQL = 'SELECT * FROM Trybesmith.Users WHERE username = ?';

    const [result] = await this.connection.execute(SQL, [username]);
  
    return result as Login[];
  }

  public async validatedPass(data: Login): Promise<Login[]> {
    const { password } = data;

    const SQL = 'SELECT * FROM Trybesmith.Users WHERE password = ?';

    const [result] = await this.connection.execute(SQL, [password]);

    return result as Login[];
  }
}

export default LoginModel;
