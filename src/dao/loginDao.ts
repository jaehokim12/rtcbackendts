import * as database from '../database';
import * as loginQuery from '../query/loginQuery';
type paramType = string;
export const loginDao = async (mail: paramType) => {
    let [result]: any = await database.promisePool.query(`${loginQuery.findUsers}`, [mail]);
    return result[0];
};
