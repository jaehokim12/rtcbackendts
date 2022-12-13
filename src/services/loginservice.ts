import { Request, Response } from 'express';
import * as database from '../database';
import * as bcrypt from 'bcryptjs';
import { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { loginDao } from '../dao/loginDao';
interface UserInfo {
    mail: string;
    passwords: string;
    token?: string;
}
interface dbUserData {
    Username: string;
    Email: string;
    Passwd: string;
}
export const loginService = async (req: Request, res: Response) => {
    try {
        const { mail, passwords } = req.body as UserInfo;
        let userData: dbUserData = await loginDao(mail);
        const { Username, Email, Passwd } = userData;
        console.log('userData', Email);
        console.log('userData', Passwd);
        console.log('userData', Username);
        // res.send();

        const comparepasswd = await bcrypt.compare(passwords, userData.Passwd);
        console.log('comparepasswd', comparepasswd);
        if (userData && comparepasswd) {
            console.log('userdatauserdata', userData);
            const token = jwt.sign(
                {
                    userId: Username,
                    mail,
                },

                `adfb!23`,

                {
                    expiresIn: '24h',
                },
            );

            return res.status(200).send({
                data: {
                    mail: userData.Email,
                    token: token,
                    username: userData.Username,
                },
            });
        }

        return res.status(400).send('Invalid credentials. Please try again');
    } catch {
        return res.status(500).send('Something went wrong. Please try again');
    }
};
