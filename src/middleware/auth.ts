import jwt from 'jsonwebtoken';
import * as express from 'express';

export const verifyToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    let token = req.body.token || req.query.token || req.headers['authorization'];

    if (!token) {
        return res.status(403).send('A token is required for authentication');
    }
    try {
        token = token.replace(/^Bearer\s+/, '');
        const decoded = jwt.verify(token, `${process.env.TOKEN_KEY}`);
        const decode = jwt.decode(token);
        req.user = decode;
    } catch (err) {
        return res.status(401).send('Invalid Token');
    }

    return next();
};
