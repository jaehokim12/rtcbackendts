import { NextFunction, Request, Response } from 'express';
// import { registerService } from '../services/register';
import * as registerService from '../services/register';

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await registerService.register(req, res);
    } catch (error) {
        res.status(500).json({ error: error });
    }
    next();
};
