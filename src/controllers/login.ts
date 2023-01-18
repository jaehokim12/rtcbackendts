import { Request, Response, NextFunction } from 'express';
// import { loginService } from '../services/login';
import * as loginService from '../services/login';
export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await loginService.login(req, res);
    } catch (error) {
        // console.log('err', error);
        res.errored;
    }
    next();
};
