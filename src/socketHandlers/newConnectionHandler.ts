import * as serverStore from '../serverStore';
import { updateFriends, updateFriendsPendingInvitations } from './updates/friends';
export const newConnectionHandler = async (socket: any, io: any) => {
    const userDetails = socket.user;
    console.log('socket.user,', socket.user);
    console.log('userDetails.userId', userDetails.userId);
    serverStore.addNewConnectedUser({
        socketId: socket.id,
        userId: userDetails.userId,
    });

    updateFriendsPendingInvitations(userDetails.userId);
    updateFriends(userDetails.userId);
    // addNewConnectedUser : 파라미터 전달하여 Map 함수 호출하여 생성후 set 메소드에 인자값 넣어 저장
};
