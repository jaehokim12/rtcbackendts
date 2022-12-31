import * as database from '../database';
import * as friendQuery from '../query/friendQuery';
import { RowDataPacket } from 'mysql2';

export const friendUpdateDao = async (userId: string) => {
    let [result, _] = (await database.promisePool.query(`${friendQuery.friendUpdate}`, [
        userId,
        'accept',
    ])) as RowDataPacket[];

    if (result !== undefined) {
        return result[0];
    } else {
        return null;
    }
};
