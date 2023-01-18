"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendList = exports.checkFriend = exports.addFriend = exports.friendUpdateDao = exports.checkInviteAlready = exports.friendInviteListDao = exports.Invite = exports.findTarget = exports.Accept = void 0;
const database = __importStar(require("../database"));
const friendQuery = __importStar(require("../query/friendQuery"));
const Accept = (userId, targetUser) => __awaiter(void 0, void 0, void 0, function* () {
    let [result] = (yield database.promisePool.query(`${friendQuery.accept}`, [
        userId,
        targetUser,
        'accept',
    ]));
    if (result !== undefined) {
        return result[0];
    }
    else {
        return null;
    }
});
exports.Accept = Accept;
const findTarget = (mail) => __awaiter(void 0, void 0, void 0, function* () {
    let [result] = yield database.promisePool.query(`${friendQuery.findTargetUser}`, [mail]);
    // console.log('find exist target mail', result[0]);
    if (result !== undefined) {
        return result[0].username;
    }
    else {
        return null;
    }
});
exports.findTarget = findTarget;
const Invite = (receiver, sender) => __awaiter(void 0, void 0, void 0, function* () {
    let [result] = yield database.promisePool.query(`${friendQuery.insertInvite}`, [receiver, sender, `pending`]);
    if (result !== undefined) {
        console.log('result as final insert invite', result);
        return result[0];
    }
    else {
        return null;
    }
});
exports.Invite = Invite;
// 불필요
const friendInviteListDao = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log('userid with invite user', userId, 'pending');
    let [result] = yield database.promisePool.query(`${friendQuery.InviteList}`, [userId, 'pending']);
    console.log('invite list result', result);
    if (result !== undefined) {
        return result[0];
    }
    else {
        return null;
    }
});
exports.friendInviteListDao = friendInviteListDao;
// export const friendLastStateDao = async (userId: string) => {
//     let [result]: any = await database.promisePool.query(`${friendQuery.findLastState}`, [userId]);
//     if (result.length > 0) {
//         console.log('!undefined::::', result[0].state);
//         return result[0].state;
//     }
// };
const checkInviteAlready = (userId, targetUser) => __awaiter(void 0, void 0, void 0, function* () {
    // userId == sender
    // targetUser =receiver
    let [result] = yield database.promisePool.query(`${friendQuery.findReceiverState}`, [userId, targetUser]);
    // console.log('invite result', result);
    if (result !== undefined) {
        return result[0];
    }
    else {
        return null;
    }
});
exports.checkInviteAlready = checkInviteAlready;
// checkFriend
const friendUpdateDao = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    let [result] = yield database.promisePool.query(`${friendQuery.friendUpdate}`, [userId, 'accept']);
    if (result !== undefined) {
        return result[0];
    }
    else {
        return null;
    }
});
exports.friendUpdateDao = friendUpdateDao;
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
const addFriend = (userId, targetUser) => __awaiter(void 0, void 0, void 0, function* () {
    let [result] = (yield database.promisePool.query(`${friendQuery.addFriend}`, [
        userId,
        targetUser,
        'accept',
    ]));
    if (result !== undefined) {
        return result[0];
    }
    else {
        return null;
    }
});
exports.addFriend = addFriend;
const checkFriend = (userId, targetUser) => __awaiter(void 0, void 0, void 0, function* () {
    let [result] = yield database.promisePool.query(`${friendQuery.checkFriend}`, [userId, targetUser]);
    if (result !== undefined) {
        return result[0];
    }
    else {
        return null;
    }
});
exports.checkFriend = checkFriend;
const friendList = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    let [result] = yield database.promisePool.query(`${friendQuery.friendList}`, [userId]);
    if (result !== undefined) {
        console.log('friend list dao result', result[0]);
        return result[0];
    }
    else {
        return null;
    }
});
exports.friendList = friendList;
//# sourceMappingURL=friend.js.map