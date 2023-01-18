// import { updateFriendsPendingInvitations } from '../../socketHandlers/updates/friends';
import * as friendDao from '../../dao/friend';
import { Request, Response } from 'express';
import { updateFriendsPendingInvitations } from '../../socketHandlers/updates/friends';
export const postInvite = async (req: Request, res: Response) => {
    try {
        const { targetMailAddress } = req.body;
        const { userId, mail } = req.user;
        // userId == Inviter
        if (mail.toLowerCase() === targetMailAddress.toLowerCase()) {
            return res.status(409).send('Sorry. You cannot become friend with yourself');
        }
        // todo find User tosenduser
        const targetUser = await friendDao.findTarget(targetMailAddress);
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

        const invitationAlreadySend = await friendDao.checkInviteAlready(userId, targetUser);

        if (invitationAlreadySend === 'pending') {
            return res.status(409).send('Invitation has been already sent');
        }

        const usersAlreadyFriends = await friendDao.checkFriend(userId, targetUser);

        if (usersAlreadyFriends === 'accept') {
            return res.status(409).send('Friend already added. Please check friends list');
        }

        const newInvitation = await friendDao.Invite(targetUser, userId);
        // console.log('newInvitatiaon', newInvitation);
        // // send pending invitations update to specific user
        updateFriendsPendingInvitations(targetUser);

        return res.status(201).send('Invitation has been sent');
    } catch (error) {
        // console.log();
        return res.send(200);
    }
};
