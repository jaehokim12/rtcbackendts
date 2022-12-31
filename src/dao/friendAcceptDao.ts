import * as database from '../database';
import * as friendQuery from '../query/friendQuery';
import { RowDataPacket } from 'mysql2';

export const friendAcceptDao = async (userId: string, targetUser: string) => {
    let [result, _] = (await database.promisePool.query(`${friendQuery.insertFriend}`, [
        userId,
        targetUser,
        'accept',
    ])) as RowDataPacket[];

    if (result !== undefined) {
        return result[0];
    } else {
        return null;
    }
};