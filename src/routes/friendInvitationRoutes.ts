import express, { Request, Response } from 'express';
export const friendinvitationrouter = express.Router();

import { verifyToken } from '../middleware/auth';
import { postInvite } from '../controllers/friendInvitation/postInvite';
import { postAccept } from '../controllers/friendInvitation/postAccept';
// const postFriendInvitationSchema = Joi.object({
//     targetMailAddress: Joi.string().email(),
// });

// const inviteDecisionSchema = Joi.object({

// });

friendinvitationrouter.post('/invite', verifyToken, postInvite);

friendinvitationrouter.post('/accept', verifyToken, postAccept);

// router.post('/reject', auth, friendInvitationControllers.postReject);
