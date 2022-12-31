import * as database from '../database';
import * as friendQuery from '../query/friendQuery';
import { RowDataPacket } from 'mysql2';

export const friendCheckUserDao = async (userId: string) => {
    let [result, _] = (await database.promisePool.query(`${friendQuery.findReceiverState}`, [
        userId,
    ])) as RowDataPacket[];

    if (result !== undefined) {
        return result[0];
    } else {
        return null;
    }
};
