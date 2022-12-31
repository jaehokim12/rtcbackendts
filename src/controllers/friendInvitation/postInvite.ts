// import { updateFriendsPendingInvitations } from '../../socketHandlers/updates/friends';
import { friendDao } from '../../dao/friendDao';
import { friendInviteListDao } from '../../dao/friendInviteListDao';
import { friendStateDao } from '../../dao/friendStateDao';
import { friendInviteDao } from '../../dao/friendInviteDao';
import { Request, Response } from 'express';
import { friendCheckDao } from '../../dao/friendCheckDao';
export const postInvite = async (req: Request, res: Response) => {
    try {
        const { targetMailAddress } = req.body;
        const { userId, mail } = req.user;

        if (mail.toLowerCase() === targetMailAddress.toLowerCase()) {
            return res.status(409).send('Sorry. You cannot become friend with yourself');
        }
        // todo find User tosenduser
        const targetUser = await friendDao(targetMailAddress);

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

        const invitationAlreadyReceived = await friendStateDao(userId, targetUser);

        if (invitationAlreadyReceived !== undefined || invitationAlreadyReceived === 'pending') {
            return res.status(409).send('Invitation has been already sent');
        }

        const usersAlreadyFriends = await friendCheckDao(userId, targetUser);

        if (usersAlreadyFriends !== undefined && usersAlreadyFriends === 'accept') {
            return res.status(409).send('Friend already added. Please check friends list');
        }

        const newInvitation = await friendInviteDao(targetUser, userId);
        // console.log('newInvitatiaon', newInvitation);
        // // send pending invitations update to specific user
        // updateFriendsPendingInvitations(targetUser);

        return res.status(201).send('Invitation has been sent');
    } catch (error) {
        // console.log();
        return res.send(200);
    }
};
