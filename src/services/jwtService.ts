import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (USER: string) => {
  const token = jwt.sign({ USER }, String(process.env.JWT_SECRET));

  return token;
};

export default generateToken;
