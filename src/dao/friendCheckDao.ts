import * as database from '../database';
import * as friendQuery from '../query/friendQuery';
import { RowDataPacket } from 'mysql2';

export const friendCheckDao = async (userId: string, targetUser: string) => {
    let [result, _] = (await database.promisePool.query(`${friendQuery.findReceiverState}`, [
        userId,
        targetUser,
    ])) as RowDataPacket[];

    if (result !== undefined) {
        return result[0];
    } else {
        return null;
    }
};
