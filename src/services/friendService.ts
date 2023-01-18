import { Request, Response } from 'express';
import * as database from '../database';

export const friendService = async (req: Request, res: Response) => {
    try {
        const { mail, password } = req.body;

        res.status(200);

        // return res.status(400).send('Invalid credentials. Please try again');
    } catch {
        return res.status(500).send('Something went wrong. Please try again');
    }
};
