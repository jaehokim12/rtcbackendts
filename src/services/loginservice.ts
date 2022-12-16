import { Request, Response } from 'express';
import * as database from '../database';
import * as bcrypt from 'bcryptjs';
import { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { loginDao } from '../dao/loginDao';
interface UserInfo {
    mail: string;
    password: string;
    token?: string;
}
interface dbUserData {
    dusername: string;
    dmail: string;
    dpassword: string;
}
export const loginService = async (req: Request, res: Response) => {
    console.log('reqbody', req.body);
    try {
        const { mail, password } = req.body;
        let userData: dbUserData = await loginDao(mail);
        console.log('userdata', userData);
        const { dusername, dmail, dpassword } = userData;

        // res.send();

        const comparepasswd = await bcrypt.compare(password, userData.dpassword);
        console.log('comparepasswd', comparepasswd);
        if (userData && comparepasswd) {
            console.log('userdatauserdata', userData);
            const token = jwt.sign(
                {
                    userId: dusername,
                    mail,
                },

                `adfb!23`,

                {
                    expiresIn: '24h',
                },
            );

            return res.status(200).send({
                data: {
                    mail: userData.dmail,
                    token: token,
                    username: userData.dusername,
                },
            });
        }

        return res.status(400).send('Invalid credentials. Please try again');
    } catch {
        return res.status(500).send('Something went wrong. Please try again');
    }
};
