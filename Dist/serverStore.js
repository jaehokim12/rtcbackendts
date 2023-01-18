"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOnlineUsers = exports.getActiveConnections = exports.removeConnectedUser = exports.addNewConnectedUser = exports.getSocketServerInstance = exports.setSocketServerInstance = void 0;
const connectedUsers = new Map();
let io = null;
const setSocketServerInstance = (ioInstance) => {
    io = ioInstance;
};
exports.setSocketServerInstance = setSocketServerInstance;
const getSocketServerInstance = () => {
    return io;
};
exports.getSocketServerInstance = getSocketServerInstance;
const addNewConnectedUser = ({ socketId, userId }) => {
    connectedUsers.set(socketId, { userId });
    // socketId => socketio에서
    // userId => token 에서 userId
    // connectedUsers map 에 socketId : {userId} 로 저장
};
exports.addNewConnectedUser = addNewConnectedUser;
const removeConnectedUser = (socketId) => {
    console.log('removeConneted user', socketId);
    if (connectedUsers.has(socketId)) {
        connectedUsers.delete(socketId);
    }
};
exports.removeConnectedUser = removeConnectedUser;
const getActiveConnections = (userId) => {
    // targetuserid
    // 초대받은 사람 들어오면 처리
    // connectedUsers = > 전체
    const activeConnections = [];
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
exports.getActiveConnections = getActiveConnections;
const getOnlineUsers = () => {
    const onlineUsers = [];
    connectedUsers.forEach((value, key) => {
        onlineUsers.push({ socketId: key, userId: value.userId });
    });
    return onlineUsers;
};
exports.getOnlineUsers = getOnlineUsers;
//# sourceMappingURL=serverStore.js.map