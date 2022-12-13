import * as database from '../database';
import { Request, Response } from 'express';
import { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as registerDao from '../dao/registerDao';
interface UserInfo {
    username: string;
    mail: string;
    password: string;
}

export const registerService = async (req: Request, res: Response) => {
    try {
        console.log('req', req);
        const { username, mail, password } = req.body as UserInfo;
        let userExist = await registerDao.registerDao({ mail });
        if (userExist) {
            console.log('userExist', userExist);
            return res.status(200).send('already email exist');
        }
        const encryptedPassword = await hash(password, 10);
        let result = await registerDao.registerDaoinsert({ username, mail, encryptedPassword });
        console.log('result', result);
        const token = jwt.sign(
            {
                userId: username,

                mail,
            },

            `adfb!23`,

            {
                expiresIn: '24h',
            },
        );
        return res.send({
            mail: mail,
            token: token,
            username: username,
        });
    } catch {
        return res.status(500).send('Something went wrong. Please try again');
    }
};
