import * as database from '../database';
import * as friendQuery from '../query/friendQuery';
import { RowDataPacket } from 'mysql2';

export const friendStateDao = async (userId: string, targetUser: string) => {
    // userId == sender
    // targetUser =receiver
    let [result, _] = (await database.promisePool.query(`${friendQuery.findReceiverState}`, [
        userId,
        targetUser,
    ])) as RowDataPacket[];
    // console.log('invite result', result);
    if (result !== undefined) {
        return result[0];
    } else {
        return null;
    }
};
