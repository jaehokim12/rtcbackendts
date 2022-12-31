import * as database from '../database';
import * as friendQuery from '../query/friendQuery';
import { RowDataPacket } from 'mysql2';

export const friendInviteDao = async (receiver: string, sender: string) => {
    let [result, _] = (await database.promisePool.query(`${friendQuery.insertInvite}`, [
        receiver,
        sender,
        `pending`,
    ])) as RowDataPacket[];

    if (result !== undefined) {
        console.log('result as final insert invite', result);
        return result[0];
    } else {
        return null;
    }
};
