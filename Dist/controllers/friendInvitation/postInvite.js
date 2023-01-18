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
exports.postInvite = void 0;
// import { updateFriendsPendingInvitations } from '../../socketHandlers/updates/friends';
const friendDao = __importStar(require("../../dao/friend"));
const friends_1 = require("../../socketHandlers/updates/friends");
const postInvite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { targetMailAddress } = req.body;
        const { userId, mail } = req.user;
        // userId == Inviter
        if (mail.toLowerCase() === targetMailAddress.toLowerCase()) {
            return res.status(409).send('Sorry. You cannot become friend with yourself');
        }
        // todo find User tosenduser
        const targetUser = yield friendDao.findTarget(targetMailAddress);
        console.log('targetuser', targetUser);
        if (targetUser === undefined) {
            // console.log('dfadsf');
            return res
                .status(404)
                .send(`Friend of ${targetMailAddress} has not been found. Please check mail address.`);
        }
        // // check if invitation has been already sent
        // const invitationAlreadyReceived = await FriendInvitation.findOne({
        //     senderId: userId,
        //     receiverId: targetUser._id,
        // });
        const invitationAlreadySend = yield friendDao.checkInviteAlready(userId, targetUser);
        if (invitationAlreadySend === 'pending') {
            return res.status(409).send('Invitation has been already sent');
        }
        const usersAlreadyFriends = yield friendDao.checkFriend(userId, targetUser);
        if (usersAlreadyFriends === 'accept') {
            return res.status(409).send('Friend already added. Please check friends list');
        }
        const newInvitation = yield friendDao.Invite(targetUser, userId);
        // console.log('newInvitatiaon', newInvitation);
        // // send pending invitations update to specific user
        (0, friends_1.updateFriendsPendingInvitations)(targetUser);
        return res.status(201).send('Invitation has been sent');
    }
    catch (error) {
        // console.log();
        return res.send(200);
    }
});
exports.postInvite = postInvite;
//# sourceMappingURL=postInvite.js.map