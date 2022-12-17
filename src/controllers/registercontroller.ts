import { NextFunction, Request, Response } from 'express';
import { registerService } from '../services/registerservice';

export const registerController = async (req: Request, res: Response, next: NextFunction) => {
    console.log('req register', req);
    try {
        await registerService(req, res);
    } catch (error) {
        res.status(500).json({ error: error });
    }
    next();
};
