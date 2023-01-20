import { Request, Response } from 'express';
import { updateFriends } from '../../socketHandlers/updates/friends';
import * as friendDao from '../../dao/friend';
export const postAccept = async (req: Request, res: Response) => {
    try {
        const { username } = req.body;

        const senderId = req.user.userId; // 초대 받은 사람 수락 하는사람
        const receiverId = username; // 초대 한 사람 && 수락 받는 사람
        // 수락할 아이디
        // const invitation = await friendCheckUserDao(username);
        // 초대 리스트에서 나한테 온초대를 알아야함
        // console.log('invitation', invitation);
        // if (!invitation) {
        //     return res.status(401).send('Error occured. Please try again');
        // }
        // const { senderId, receiverId } = invitation;
        // add friends to both users
        const acceptSender = await friendDao.Accept(senderId, receiverId);
        const acceptReceiver = await friendDao.Accept(receiverId, senderId);
        // delete invite
        const addFriendSender = await friendDao.addFriend(senderId, receiverId);
        const addFriendReceiver = await friendDao.addFriend(receiverId, senderId);
        await friendDao.deleteInvite(receiverId, senderId);
        updateFriends(senderId);
        updateFriends(receiverId);
        return res.status(200).send('Friend successfuly added');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Something went wrong. Please try again');
    }
};
