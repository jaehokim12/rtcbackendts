import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    let token = req.body.token;
    let user = req.body.user;
    if (!token) {
        return res.status(403).send('A token is required for authentication');
    }
    try {
        token = token.replace(/^Bearer\s+/, '');

        const decoded = jwt.verify(token, `adfb!23`);
        const decode = jwt.decode(token);
        req.body.user = decode;
    } catch (err) {
        return res.status(401).send('Invalid Token');
    }

    return next();
};

export default verifyToken;
