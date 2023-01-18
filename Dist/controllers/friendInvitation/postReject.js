"use strict";
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
exports.postReject = void 0;
// const FriendInvitation = require("../../models/friendInvitation");
const friendsUpdates = require('../../socketHandlers/updates/friends');
const postReject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const { userId } = req.body.user;
        // remove that invitation from friend invitations collection
        // const invitationExists = await FriendInvitation.exists({ _id: id });
        // if (invitationExists) {
        //     await FriendInvitation.findByIdAndDelete(id);
        // }
        // // update pending invitations
        // friendsUpdates.updateFriendsPendingInvitations(userId);
        // return res.status(200).send('Invitation succesfully rejected');
    }
    catch (err) {
        // console.log(err);
        return res.status(500).send('Something went wrong please try again');
    }
});
exports.postReject = postReject;
module.exports = exports.postReject;
//# sourceMappingURL=postReject.js.map