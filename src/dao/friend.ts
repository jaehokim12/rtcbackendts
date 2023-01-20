import * as database from '../database';
import * as friendQuery from '../query/friendQuery';
import { RowDataPacket } from 'mysql2';

export const Accept = async (userId: string, targetUser: string) => {
    let [result] = (await database.promisePool.query(`${friendQuery.accept}`, [userId, targetUser, 'accept'])) as any;

    if (result !== undefined) {
        return result[0];
    } else {
        return null;
    }
};
// export const friendCheckDao = async (userId: string, targetUser: string) => {
//     let [result] = (await database.promisePool.query(`${friendQuery.findReceiverState}`, [
//         userId,
//         targetUser,
//     ])) as RowDataPacket[];

//     if (result !== undefined) {
//         return result[0];
//     } else {
//         return null;
//     }
// };

// export const friendCheckUserDao = async (userId: string) => {
//     let [result] = (await database.promisePool.query(`${friendQuery.findReceiverState}`, [userId])) as RowDataPacket[];

//     if (result !== undefined) {
//         return result[0];
//     } else {
//         return null;
//     }
// };
type paramType = string;
export const findTarget = async (mail: paramType) => {
    let [result]: any = await database.promisePool.query(`${friendQuery.findTargetUser}`, [mail]);
    // console.log('find exist target mail', result[0]);
    if (result !== undefined) {
        return result[0].username;
    } else {
        return null;
    }
};
export const Invite = async (receiver: string, sender: string) => {
    let [result]: any = await database.promisePool.query(`${friendQuery.insertInvite}`, [receiver, sender, `pending`]);

    if (result !== undefined) {
        console.log('result as final insert invite', result);
        return result[0];
    } else {
        return null;
    }
};
// 불필요
export const friendInviteListDao = async (userId: string) => {
    // console.log('userid with invite user', userId, 'pending');
    let [result]: any = await database.promisePool.query(`${friendQuery.InviteList}`, [userId, 'pending']);
    console.log('invite list result', result);
    if (result !== undefined) {
        return result[0];
    } else {
        return null;
    }
};

// export const friendLastStateDao = async (userId: string) => {
//     let [result]: any = await database.promisePool.query(`${friendQuery.findLastState}`, [userId]);
//     if (result.length > 0) {
//         console.log('!undefined::::', result[0].state);
//         return result[0].state;
//     }
// };
export const checkInviteAlready = async (userId: string, targetUser: string) => {
    // userId == sender
    // targetUser =receiver
    let [result]: any = await database.promisePool.query(`${friendQuery.findReceiverState}`, [userId, targetUser]);
    // console.log('invite result', result);
    if (result !== undefined) {
        return result[0];
    } else {
        return null;
    }
};
// checkFriend
export const friendUpdateDao = async (userId: string) => {
    let [result]: any = await database.promisePool.query(`${friendQuery.friendUpdate}`, [userId, 'accept']);

    if (result !== undefined) {
        return result[0];
    } else {
        return null;
    }
};
// export const invitedeleteDao = async (userId: string, targetUser: string) => {
//     let [result]: any = await database.promisePool.query(`${friendQuery.deleteInvite}`, [
//         userId,
//         targetUser,
//         'pending',
//     ]);
//     if (result !== undefined) {
//         return result[0];
//     } else {
//         return null;
//     }
// };
export const addFriend = async (userId: string, targetUser: string) => {
    let [result] = (await database.promisePool.query(`${friendQuery.addFriend}`, [
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
export const checkFriend = async (userId: string, targetUser: string) => {
    let [result]: any = await database.promisePool.query(`${friendQuery.checkFriend}`, [userId, targetUser]);
    if (result !== undefined) {
        return result[0];
    } else {
        return null;
    }
};

export const friendList = async (userId: string) => {
    let [result]: any = await database.promisePool.query(`${friendQuery.friendList}`, [userId]);
    if (result !== undefined) {
        return result;
    } else {
        return null;
    }
};
export const deleteInvite = async (senderId: string, receiverId: string) => {
    let [result]: any = await database.promisePool.query(`${friendQuery.deleteInvite}`, [senderId, receiverId]);
    if (result !== undefined) {
        return result[0];
    } else {
        return null;
    }
};
