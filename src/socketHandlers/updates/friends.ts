import { getSocketServerInstance, getActiveConnections } from '../../serverStore';
import { friendInviteListDao } from '../../dao/friendInviteListDao';
import { friendUpdateDao } from '../../dao/friendUpdateDao';
import { friendLastStateDao } from '../../dao/friendLastStateDao';
export const updateFriendsPendingInvitations = async (userId: any) => {
    try {
        // todo 초대목록 list
        // if ( userId,)
        // const result = await friendLastStateDao(userId);
        // console.log('result state', result);

        const pendingInvitations = await friendInviteListDao(userId);
        // pendingInvitations => sender list []

        console.log('user invited lists :::: ', pendingInvitations);
        // find all active connections of specific userId
        // const receiverList = getActiveConnections(userId);
        // 초대받은 사람의 socket에서 연결 갯수
        if (pendingInvitations !== undefined) {
            console.log('pendingInvitations !== undefined');
            const io = getSocketServerInstance();
            console.log('userid', userId);
            // receiverList.forEach((receiverSocketId: any) => {

            io.to(userId).emit('friends-invitations', {
                pendingInvitations: pendingInvitations
                    ? [{ id: 1, username: pendingInvitations.sender, mail: null }]
                    : [],
            });
        }
    } catch (err) {
        //초대받은사람 배열 -> 친구들 한테 friends-invitations 이벤트를 보내서
        // pendingInvitations 상태값인지 아닌지를 보내줌
        //
        console.log(err);
    }
};

export const updateFriends = async (userId: any) => {
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
        const user = await friendUpdateDao(userId);

        // 수정 해야함
        // user =  only userid's friendUser(array)
        // console.log('useruseruseruser', user);
        if (user) {
            const friend = user.sender as any;
            console.log('friends as receiver', friend);
            const io = getSocketServerInstance();
            const val = getActiveConnections(userId);
            io.to(val).emit('friends-list', { friends: friend });
        }
    } catch (err) {
        console.log(err);
    }
};
