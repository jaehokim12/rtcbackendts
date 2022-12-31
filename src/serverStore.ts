const connectedUsers = new Map();

let io: any = null;

export const setSocketServerInstance = (ioInstance: any) => {
    io = ioInstance;
};

export const getSocketServerInstance = () => {
    return io;
};

export const addNewConnectedUser = ({ socketId, userId }: any) => {
    // socketId => socketio에서
    // userId => token 에서 userId
    // connectedUsers map 에 socketId : {userId} 로 저장
    connectedUsers.set(socketId, { userId });
};

export const removeConnetedUser = (socketId: any) => {
    if (connectedUsers.has(socketId)) {
        connectedUsers.delete(socketId);
    }
};

export const getActiveConnections = (userId: any) => {
    // targetuserid
    // 초대받은 사람 들어오면 처리
    // connectedUsers = > 전체
    const activeConnections: any = [];

    connectedUsers.forEach(function (value, key) {
        //  connected member all socket 중 userId 가
        // connectedUser = Map
        // Map.key = socketId Map.value = {userId}
        if (value.userId === userId) {
            // value.userId()
            activeConnections.push(key);
            // value.userId 에 해당하는 key => activeConnections[socketId]
        }
    });

    return activeConnections;
};

export const getOnlineUsers = () => {
    const onlineUsers: any = [];

    connectedUsers.forEach((value, key) => {
        onlineUsers.push({ socketId: key, userId: value.userId });
    });

    return onlineUsers;
};
