// import { NextFunction, Request, Response } from 'express';
// import User from '../interfaces/user.interface';
// import UserService from './user.services';

// class ValidationMiddle {
//   service: UserService;

//   constructor(service: UserService = new UserService()) {
//     this.service = service;
//   }

//   public Valid = async (req: Request, res: Response, next: NextFunction) => {
//     const user: User = req.body;
    
//     const isValidUsername = await this.service.isValidDateName(user);
//     const isValidClasse = await this.service.isValidDateAmount(user);
//     const isValidLevel = await this.service.isValidDateLevel(user);
//     const isValidPass = await this.service.isValidDatePassword(user);
  
//     if (isValidUsername?.message) {
//       return res.status(isValidUsername.code).json({ message: isValidUsername.message });
//     }
  
//     if (isValidClasse?.message) {
//       return res.status(isValidClasse.code).json({ message: isValidClasse.message });
//     }
  
//     if (isValidLevel?.message) {
//       return res.status(isValidLevel.code).json({ message: isValidLevel.message });
//     }
  
//     if (isValidPass?.message) {
//       return res.status(isValidPass.code).json({ message: isValidPass.message });
//     }
//     next();
//   };
// }

// export default ValidationMiddle;
