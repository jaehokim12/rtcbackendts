// const FriendInvitation = require("../../models/friendInvitation");
const friendsUpdates = require('../../socketHandlers/updates/friends');
import { Request, Response } from 'express';
export const postReject = async (req: Request, res: Response) => {
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
    } catch (err) {
        // console.log(err);
        return res.status(500).send('Something went wrong please try again');
    }
};

module.exports = postReject;
