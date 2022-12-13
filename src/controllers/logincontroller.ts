import { Request, Response, NextFunction } from 'express';
import { loginService } from '../services/loginservice';
export const loginController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await loginService(req, res);
    } catch (error) {
        console.log('err', error);
        res.errored;
    }
    next();
};
