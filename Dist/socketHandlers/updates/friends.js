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
exports.updateFriends = exports.updateFriendsPendingInvitations = void 0;
const friendDao = __importStar(require("../../dao/friend"));
const updateFriendsPendingInvitations = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // todo 초대목록 list
        // if ( userId,)
        // const result = await friendLastStateDao(userId);
        // console.log('result state', result);
        // 불필요 수정
        console.log('userId:::::::::::', userId);
        const pendingInvitations = (yield friendDao.friendInviteListDao(userId));
        // 현재 보낸사람 반환 해줌 userId = 초대받은사람
        // pendingInvitations => sender list []
        console.log('user invited lists :::: ', pendingInvitations);
        // find all active connections of specific userId
        // const receiverList = getActiveConnections(userId);
        // 초대받은 사람의 socket에서 연결 갯수
        if (pendingInvitations !== undefined) {
            console.log('pendingInvitations !== undefined');
            // const io = getSocketServerInstance();
            console.log('userid:::', userId);
            console.log('pendingInvitations:::', pendingInvitations.sender);
            // receiverList.forEach((receiverSocketId: any) => {
            // io.to(userId).emit('friends-invitations', {
            //     pendingInvitations: pendingInvitations
            //         ? [{ id: 1, username: pendingInvitations.sender, mail: null }]
            //         : [],
            // });
        }
    }
    catch (err) {
        //초대받은사람 배열 -> 친구들 한테 friends-invitations 이벤트를 보내서
        // pendingInvitations 상태값인지 아닌지를 보내줌
        //
        console.log(err);
    }
});
exports.updateFriendsPendingInvitations = updateFriendsPendingInvitations;
const updateFriends = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    // socket io 호출 시 (클라이언트 연결 될때 실행)
    // 친구목록 업데이트
    // console.log('userid with updateFriends', userId);
    try {
        // console.log('userid with updateFriends', userId);
        // find active connections of specific id (online users)
        // userId = ClientId
        // const receiverList = getActiveConnections(userId);
        //receiverList = 분류 되지않은 all socket user
        // console.log('receiverList', receiverList);
        // if (receiverList.length > 0) {
        // socket 중에서 친구 id 에게만 친구리스트 전달
        const user = yield friendDao.friendList(userId);
        // 수정 해야함
        // user =  only userid's friendUser(array)
        // console.log('useruseruseruser', user);
        // if (user) {
        //     const friend = user.sender as any;
        //     console.log('friends as receiver', friend);
        //     const io = getSocketServerInstance();
        //     const val = getActiveConnections(userId);
        //     io.to(val).emit('friends-list', { friends: friend });
        // }
    }
    catch (err) {
        console.log(err);
    }
});
exports.updateFriends = updateFriends;
//# sourceMappingURL=friends.js.map