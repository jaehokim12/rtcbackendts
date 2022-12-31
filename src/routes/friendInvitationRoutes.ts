import express, { Request, Response } from 'express';
const router = express.Router();

import auth from '../middleware/auth';
import friendInvitationControllers from '../controllers/friendInvitation';
import { postInvite } from '../controllers/friendInvitation/postInvite';
import { postAccept } from '../controllers/friendInvitation/postAccept';
// const postFriendInvitationSchema = Joi.object({
//     targetMailAddress: Joi.string().email(),
// });

// const inviteDecisionSchema = Joi.object({

// });

router.post('/invite', auth, postInvite);

router.post('/accept', auth, postAccept);

// router.post('/reject', auth, friendInvitationControllers.postReject);

export default router;
