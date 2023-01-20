import * as serverStore from '../serverStore';
import { updateFriends, updateFriendsPendingInvitations } from './updates/friends';
export const newConnectionHandler = async (socket: any, io: any) => {
    const userDetail = socket.user;

    serverStore.addNewConnectedUser({
        socketId: socket.id,
        userId: userDetail.userId,
    });

    await updateFriendsPendingInvitations(userDetail.userId);
    await updateFriends(userDetail.userId);
    // addNewConnectedUser : 파라미터 전달하여 Map 함수 호출하여 생성후 set 메소드에 인자값 넣어 저장
};
