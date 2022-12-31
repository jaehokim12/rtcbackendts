import { Request, Response } from 'express';
import { friendAcceptDao } from '../../dao/friendAcceptDao';
import { friendCheckUserDao } from '../../dao/friendCheckUserDao';
import { invitedeleteDao } from '../../dao/invitedeleteDao';
export const postAccept = async (req: Request, res: Response) => {
    try {
        console.log('req.body post accepet ::::', req.body);
        const { username } = req.body;

        const senderId = req.user.userId; // 초대 받은 사람 수락 요청 하는사람
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
        const acceptSender = await friendAcceptDao(senderId, receiverId);
        const acceptReceiver = await friendAcceptDao(receiverId, senderId);

        const deleteInviteSender = await invitedeleteDao(senderId, receiverId);
        const deleteInviteReceiver = await invitedeleteDao(receiverId, senderId);
        return res.status(200).send('Friend successfuly added');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Something went wrong. Please try again');
    }
};
