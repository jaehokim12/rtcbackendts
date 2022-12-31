import * as database from '../database';
import * as friendQuery from '../query/friendQuery';
import { RowDataPacket } from 'mysql2';

export const friendLastStateDao = async (userId: string) => {
    let [result, _] = (await database.promisePool.query(`${friendQuery.findLastState}`, [userId])) as RowDataPacket[];
    if (result.length > 0) {
        console.log('!undefined::::', result[0].state);
        return result[0].state;
    }
};
