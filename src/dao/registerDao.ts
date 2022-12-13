import * as database from '../database';
import * as registerQuery from '../query/registerQuery';
import { RowDataPacket } from 'mysql2';
interface UserInfo {
    mail: string;
}

interface UserInfos {
    mail: string;
    username: string;
    encryptedPassword: string;
}
export const registerDao = async ({ mail }: UserInfo) => {
    let [result, _] = (await database.promisePool.query(`${registerQuery.findUser}`, [mail])) as RowDataPacket[];
    if (result !== undefined) {
        return result[0];
    } else {
        return null;
    }
};

export const registerDaoinsert = async ({ username, mail, encryptedPassword }: UserInfos) => {
    let result = await database.promisePool.query(`${registerQuery.insertUser}`, [username, mail, encryptedPassword]);
    console.log('result', result);
    return result;
};
