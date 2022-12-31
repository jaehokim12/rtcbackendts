import * as database from '../database';
import * as friendQuery from '../query/friendQuery';
import { RowDataPacket } from 'mysql2';

export const friendInviteListDao = async (userId: string) => {
    // console.log('userid with invite user', userId, 'pending');
    let [result, _] = (await database.promisePool.query(`${friendQuery.findInviteList}`, [userId, 'pending'])) as any;
    console.log('result', result);
    if (result !== undefined) {
        return result[0];
    } else {
        return null;
    }
};
