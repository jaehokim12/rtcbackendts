import * as database from '../database';
import * as friendQuery from '../query/friendQuery';
import { RowDataPacket } from 'mysql2';
type paramType = string;
export const friendDao = async (mail: paramType) => {
    let [result, _] = (await database.promisePool.query(`${friendQuery.findTargetUser}`, [mail])) as RowDataPacket[];
    // console.log('find exist target mail', result[0]);
    if (result !== undefined) {
        return result[0].username;
    } else {
        return null;
    }
};
