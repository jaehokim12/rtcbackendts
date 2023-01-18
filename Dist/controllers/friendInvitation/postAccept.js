"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.postAccept = void 0;
const friendDao = __importStar(require("../../dao/friend"));
const postAccept = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const acceptSender = yield friendDao.Accept(senderId, receiverId);
        const acceptReceiver = yield friendDao.Accept(receiverId, senderId);
        const addFriendSender = yield friendDao.Accept(senderId, receiverId);
        const addFriendReceiver = yield friendDao.Accept(receiverId, senderId);
        return res.status(200).send('Friend successfuly added');
    }
    catch (err) {
        console.log(err);
        return res.status(500).send('Something went wrong. Please try again');
    }
});
exports.postAccept = postAccept;
//# sourceMappingURL=postAccept.js.map