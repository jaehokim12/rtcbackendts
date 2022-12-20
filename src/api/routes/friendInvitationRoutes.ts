import express, { Request, Response } from 'express';
const router = express.Router();
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const auth = require('../middleware/auth');
import * as friendInvitationControllers from '../../controllers/friendInvitation/friendInvitationControllers';

const postFriendInvitationSchema = Joi.object({
    targetMailAddress: Joi.string().email(),
});

const inviteDecisionSchema = Joi.object({
    id: Joi.string().required(),
});

router.post(
    '/invite',
    auth,
    validator.body(postFriendInvitationSchema),
    friendInvitationControllers.controllers.postInvite,
);

router.post('/accept', auth, validator.body(inviteDecisionSchema), friendInvitationControllers.controllers.postAccept);

router.post('/reject', auth, validator.body(inviteDecisionSchema), friendInvitationControllers.controllers.postReject);

module.exports = router;
