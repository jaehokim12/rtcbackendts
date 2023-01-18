"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const auth_1 = __importDefault(require("../middleware/auth"));
const postInvite_1 = require("../controllers/friendInvitation/postInvite");
const postAccept_1 = require("../controllers/friendInvitation/postAccept");
// const postFriendInvitationSchema = Joi.object({
//     targetMailAddress: Joi.string().email(),
// });
// const inviteDecisionSchema = Joi.object({
// });
router.post('/invite', auth_1.default, postInvite_1.postInvite);
router.post('/accept', auth_1.default, postAccept_1.postAccept);
// router.post('/reject', auth, friendInvitationControllers.postReject);
exports.default = router;
//# sourceMappingURL=friendInvitationRoutes.js.map